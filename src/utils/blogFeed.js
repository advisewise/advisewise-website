const RSS_URL = 'https://parthikannan.substack.com/feed';
const CORS_PROXIES = [
  'https://api.allorigins.win/get?url=',
  'https://corsproxy.io/?url=',
];
const CACHE_KEY = 'advisewise_blog_posts';
const CACHE_TS_KEY = 'advisewise_blog_posts_ts';
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes

const formatDate = (dateStr) => {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
};

const stripHtml = (html) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || '';
};

const extractImage = (item) => {
  const enclosure = item.querySelector('enclosure');
  if (enclosure && enclosure.getAttribute('url')) {
    return enclosure.getAttribute('url');
  }

  const mediaContent = item.getElementsByTagName('media:content')[0];
  if (mediaContent && mediaContent.getAttribute('url')) {
    return mediaContent.getAttribute('url');
  }

  const content =
    item.querySelector('content\\:encoded')?.textContent ||
    item.getElementsByTagName('content:encoded')[0]?.textContent ||
    item.querySelector('description')?.textContent ||
    '';

  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/);
  if (imgMatch) return imgMatch[1];

  return null;
};

const slugFromUrl = (url) => {
  try {
    const pathname = new URL(url).pathname;
    const segments = pathname.split('/').filter(Boolean);
    return segments[segments.length - 1] || '';
  } catch {
    return '';
  }
};

const parseRSSFeed = (xmlText) => {
  const parser = new DOMParser();
  const xml = parser.parseFromString(xmlText, 'text/xml');
  const items = xml.querySelectorAll('item');
  const posts = [];

  items.forEach((item) => {
    const title = item.querySelector('title')?.textContent || '';
    const link = item.querySelector('link')?.textContent || '';
    const pubDate = item.querySelector('pubDate')?.textContent || '';
    const description = item.querySelector('description')?.textContent || '';
    const image = extractImage(item);

    const contentEncoded =
      item.querySelector('content\\:encoded')?.textContent ||
      item.getElementsByTagName('content:encoded')[0]?.textContent ||
      '';

    const excerpt = stripHtml(description).substring(0, 250).trim();
    const slug = slugFromUrl(link);

    posts.push({
      title,
      link,
      pubDate,
      date: formatDate(pubDate),
      excerpt: excerpt ? excerpt + '...' : '',
      image,
      content: contentEncoded,
      slug,
    });
  });

  posts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

  return posts;
};

const fetchWithTimeout = (url, ms = 8000) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);
  return fetch(url, { signal: controller.signal }).finally(() =>
    clearTimeout(timeout)
  );
};

const fetchViaProxy = async (proxyBase) => {
  const url = `${proxyBase}${encodeURIComponent(RSS_URL)}`;

  const response = await fetchWithTimeout(url);
  if (!response.ok) throw new Error('Proxy responded with ' + response.status);

  const contentType = response.headers.get('content-type') || '';
  if (contentType.includes('json')) {
    const data = await response.json();
    if (!data.contents) throw new Error('No content in response');
    return data.contents;
  }
  return await response.text();
};

export const fetchPosts = async () => {
  const cached = sessionStorage.getItem(CACHE_KEY);
  const cachedTs = sessionStorage.getItem(CACHE_TS_KEY);
  const isExpired = !cachedTs || Date.now() - Number(cachedTs) > CACHE_TTL;

  if (cached && !isExpired) {
    try {
      return JSON.parse(cached);
    } catch {
      sessionStorage.removeItem(CACHE_KEY);
      sessionStorage.removeItem(CACHE_TS_KEY);
    }
  }

  let xmlText = null;
  for (const proxy of CORS_PROXIES) {
    try {
      xmlText = await fetchViaProxy(proxy);
      break;
    } catch (err) {
      console.warn(`Proxy failed (${proxy}):`, err.message);
    }
  }

  if (!xmlText) throw new Error('All proxies failed to fetch RSS feed');

  const posts = parseRSSFeed(xmlText);
  sessionStorage.setItem(CACHE_KEY, JSON.stringify(posts));
  sessionStorage.setItem(CACHE_TS_KEY, String(Date.now()));
  return posts;
};
