import { useEffect, useRef, useState, useCallback } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [entry, setEntry] = useState(null);
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  const defaultOptions = {
    threshold: 0,
    root: null,
    rootMargin: '0px',
    freezeOnceVisible: false,
    ...options,
  };

  const frozen = entry?.isIntersecting && defaultOptions.freezeOnceVisible;

  const updateEntry = useCallback(([entry]) => {
    setEntry(entry);
  }, []);

  useEffect(() => {
    if (frozen) return;

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(updateEntry, {
      threshold: defaultOptions.threshold,
      root: defaultOptions.root,
      rootMargin: defaultOptions.rootMargin,
    });

    const currentObserver = observer.current;

    if (node) {
      currentObserver.observe(node);
    }

    return () => {
      currentObserver.disconnect();
    };
  }, [
    node,
    defaultOptions.threshold,
    defaultOptions.root,
    defaultOptions.rootMargin,
    frozen,
    updateEntry,
  ]);

  return { ref: setNode, entry, isIntersecting: entry?.isIntersecting || false };
};

export default useIntersectionObserver;
