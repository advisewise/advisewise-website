import Hero from '../components/Hero';
import UniversitiesMarquee from '../components/UniversitiesMarquee';
import DiscoverSection from '../components/DiscoverSection';
import ExploreCareers from '../components/ExploreCareers';
import Gallery from '../components/Gallery';
import CountriesMarquee from '../components/CountriesMarquee';
import Services from '../components/Services';
import Contact from '../components/Contact';
import TravelDiaries from '../components/TravelDiaries';

const Home = () => {
  return (
    <>
      <Hero />
      <UniversitiesMarquee />
      <DiscoverSection />
      <ExploreCareers />
      <Gallery />
      <CountriesMarquee />
      <Services />
      <Contact />
      <TravelDiaries />
    </>
  );
};

export default Home;
