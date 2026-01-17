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
    { name: 'Speisekarte', id: 'products' },
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
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-lg p-2 group-hover:scale-110 transition-transform">
              <div className="text-white font-black text-xl">BD</div>
            </div>
            <div>
              <div className="text-white font-black text-xl uppercase leading-none">
                Big Daddys
              </div>
              <div className="text-red-500 font-black text-sm uppercase leading-none">
                Burgerhouse
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
              <a href="mailto:zoltan.f@hotmail.de" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold uppercase text-sm tracking-wide transition-all transform hover:scale-105">
                Kontakt
              </a>
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
              <a href="mailto:zoltan.f@hotmail.de" className="block w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-bold uppercase text-sm tracking-wide transition-all text-center">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
