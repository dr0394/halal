import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
