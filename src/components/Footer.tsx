import { Instagram, Facebook, Youtube, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-black text-white mb-4 uppercase">
              Halal<br />
              <span className="text-amber-500">Currywurst</span>
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Die erste Halal Currywurst-Kette Deutschlands. 100% Halal, 100% Geschmack.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-zinc-900 border border-zinc-800 hover:border-amber-600 rounded-xl p-3 transition-colors"
              >
                <Instagram className="text-amber-500" size={20} />
              </a>
              <a
                href="#"
                className="bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-xl p-3 transition-colors"
              >
                <MessageCircle className="text-red-600" size={20} />
              </a>
              <a
                href="#"
                className="bg-zinc-900 border border-zinc-800 hover:border-amber-600 rounded-xl p-3 transition-colors"
              >
                <Facebook className="text-amber-500" size={20} />
              </a>
              <a
                href="#"
                className="bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-xl p-3 transition-colors"
              >
                <Youtube className="text-red-600" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg uppercase tracking-wide mb-6">Menü</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#products" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  Produkte
                </a>
              </li>
              <li>
                <a href="#locations" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  Standorte
                </a>
              </li>
              <li>
                <a href="#franchise" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  Franchise
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg uppercase tracking-wide mb-6">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/impressum" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  AGB
                </a>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-amber-500 transition-colors">
                  Cookie-Einstellungen
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg uppercase tracking-wide mb-6">Newsletter</h4>
            <p className="text-zinc-400 text-sm mb-4">
              Erhalte exklusive Angebote und News. <span className="text-amber-500 font-bold">10% Rabatt</span> auf deine erste Bestellung!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="deine@email.de"
                className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white text-sm focus:border-amber-600 focus:outline-none transition-colors placeholder:text-zinc-600"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-zinc-950 rounded-xl px-4 transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-500 text-sm">
              © 2025 Halal Currywurst. Alle Rechte vorbehalten.
            </div>
            <div className="text-zinc-500 text-sm">
              Made with <span className="text-red-600">❤</span> in Deutschland
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
