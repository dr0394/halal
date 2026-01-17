import { Instagram, Facebook, Youtube, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-3xl font-black text-white mb-4 uppercase">
              Big Daddys<br />
              <span className="text-red-500">Burgerhouse</span>
            </h3>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Authentische ungarische Küche in Passau. Seit 16 Jahren mit Persönlichkeit, Qualität und Ehrlichkeit.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-xl p-3 transition-colors"
              >
                <Instagram className="text-red-500" size={20} />
              </a>
              <a
                href="#"
                className="bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-xl p-3 transition-colors"
              >
                <MessageCircle className="text-red-600" size={20} />
              </a>
              <a
                href="#"
                className="bg-zinc-900 border border-zinc-800 hover:border-red-600 rounded-xl p-3 transition-colors"
              >
                <Facebook className="text-red-500" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg uppercase tracking-wide mb-6">Menü</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-zinc-400 hover:text-red-500 transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#products" className="text-zinc-400 hover:text-red-500 transition-colors">
                  Speisekarte
                </a>
              </li>
              <li>
                <a href="#contact" className="text-zinc-400 hover:text-red-500 transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg uppercase tracking-wide mb-6">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/impressum" className="text-zinc-400 hover:text-red-500 transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-zinc-400 hover:text-red-500 transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <a href="#" className="text-zinc-400 hover:text-red-500 transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg uppercase tracking-wide mb-6">Kontakt</h4>
            <p className="text-zinc-400 text-sm mb-4">
              Big Daddys Burgerhouse<br />
              94032 Passau
            </p>
            <a href="mailto:zoltan.f@hotmail.de" className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 transition-colors text-sm font-semibold">
              <Mail size={18} />
              zoltan.f@hotmail.de
            </a>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-zinc-500 text-sm">
              © 2026 Big Daddys Burgerhouse. Alle Rechte vorbehalten.
            </div>
            <div className="text-zinc-500 text-sm">
              Seit 2009 in Passau
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
