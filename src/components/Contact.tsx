import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 uppercase tracking-tight">
            Kontaktieren Sie <span className="text-red-600">uns</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 px-4">
            Wir freuen uns auf Ihre Anfrage!
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 sm:mb-8 uppercase">
              Kontakt<span className="text-amber-500">informationen</span>
            </h3>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-10">
              <div className="flex items-start gap-3 sm:gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                <div className="bg-red-600 rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-zinc-400 text-xs sm:text-sm uppercase tracking-wide mb-1">E-Mail</div>
                  <a href="mailto:zoltan.f@hotmail.de" className="text-white font-bold text-sm sm:text-base md:text-lg hover:text-red-500 transition-colors">
                    zoltan.f@hotmail.de
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                <div className="bg-red-600 rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                  <MapPin className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-zinc-400 text-xs sm:text-sm uppercase tracking-wide mb-1">Standort</div>
                  <div className="text-white font-bold text-sm sm:text-base md:text-lg">
                    Big Daddys Burgerhouse<br />
                    94032 Passau
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600/10 via-red-500/10 to-red-600/10 border border-red-600/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8">
              <h4 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-3 sm:mb-4 uppercase">
                Öffnungszeiten
              </h4>
              <div className="space-y-2 text-sm sm:text-base text-zinc-300">
                <div className="flex justify-between">
                  <span>Montag - Freitag:</span>
                  <span className="text-white font-bold">11:00 - 22:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samstag - Sonntag:</span>
                  <span className="text-white font-bold">12:00 - 23:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 sm:mb-8 uppercase">
              Kontakt<span className="text-red-500">formular</span>
            </h3>

            <form className="space-y-4 sm:space-y-6" action="mailto:zoltan.f@hotmail.de" method="post" encType="text/plain">
              <div>
                <label className="block text-zinc-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="Ihr vollständiger Name"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="ihre@email.de"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white focus:border-red-600 focus:outline-none transition-colors"
                  placeholder="+49 123 456789"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">
                  Nachricht
                </label>
                <textarea
                  rows={5}
                  name="message"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white focus:border-red-600 focus:outline-none transition-colors resize-none"
                  placeholder="Ihre Nachricht an uns..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3.5 sm:py-4 md:py-5 rounded-lg font-bold text-sm sm:text-base md:text-lg uppercase tracking-wide transition-all transform hover:scale-105 shadow-xl shadow-red-900/50 flex items-center justify-center gap-2 sm:gap-3"
              >
                Absenden
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
