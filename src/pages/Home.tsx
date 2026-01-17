import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Franchise from '../components/Franchise';
import Locations from '../components/Locations';
import USP from '../components/USP';
import Testimonials from '../components/Testimonials';
import News from '../components/News';
import Social from '../components/Social';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Franchise />
      <Locations />
      <USP />
      <Testimonials />
      <News />
      <Social />
      <FAQ />
      <Contact />
      <CTA />
      <Footer />
    </div>
  );
}
