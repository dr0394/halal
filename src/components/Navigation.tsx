import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Über uns', id: 'about' },
    { name: 'Produkte', id: 'products' },
    { name: 'Franchise', id: 'franchise' },
    { name: 'Standorte', id: 'locations' },
    { name: 'News', id: 'news' },
    { name: 'Kontakt', id: 'contact' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-900 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 rounded-lg p-2 group-hover:scale-110 transition-transform">
              <div className="text-zinc-950 font-black text-xl">HC</div>
            </div>
            <div>
              <div className="text-white font-black text-xl uppercase leading-none">
                Halal
              </div>
              <div className="text-amber-500 font-black text-sm uppercase leading-none">
                Currywurst
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {isHome ? (
              <>
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="text-zinc-300 hover:text-amber-500 font-semibold uppercase text-sm tracking-wide transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </>
            ) : (
              <Link
                to="/"
                className="text-zinc-300 hover:text-amber-500 font-semibold uppercase text-sm tracking-wide transition-colors"
              >
                Startseite
              </Link>
            )}

            <div className="flex items-center gap-3 ml-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-zinc-950 px-6 py-3 rounded-lg font-bold uppercase text-sm tracking-wide transition-all transform hover:scale-105">
                Bestellen
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold uppercase text-sm tracking-wide transition-all transform hover:scale-105">
                Franchise
              </button>
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-zinc-900 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-t border-zinc-900">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {isHome ? (
              <>
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="block w-full text-left text-zinc-300 hover:text-amber-500 font-semibold uppercase text-sm tracking-wide py-3 transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </>
            ) : (
              <Link
                to="/"
                className="block text-zinc-300 hover:text-amber-500 font-semibold uppercase text-sm tracking-wide py-3 transition-colors"
              >
                Startseite
              </Link>
            )}

            <div className="space-y-3 pt-4 border-t border-zinc-900">
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-zinc-950 px-6 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all">
                Bestellen
              </button>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all">
                Franchise
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
