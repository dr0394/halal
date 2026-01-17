import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 uppercase tracking-tight">
            Lass uns <span className="text-red-600">sprechen</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 px-4">
            Bereit für den nächsten Schritt? Wir freuen uns auf dich!
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 sm:mb-8 uppercase">
              Kontakt<span className="text-amber-500">informationen</span>
            </h3>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-10">
              <div className="flex items-start gap-3 sm:gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                <div className="bg-amber-600 rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                  <Phone className="text-zinc-950" size={20} />
                </div>
                <div>
                  <div className="text-zinc-400 text-xs sm:text-sm uppercase tracking-wide mb-1">Telefon</div>
                  <div className="text-white font-bold text-sm sm:text-base md:text-lg">+49 (0) 123 456 7890</div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                <div className="bg-red-600 rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <div className="text-zinc-400 text-xs sm:text-sm uppercase tracking-wide mb-1">E-Mail</div>
                  <div className="text-white font-bold text-sm sm:text-base md:text-lg">info@halal-currywurst.de</div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                <div className="bg-amber-600 rounded-lg sm:rounded-xl p-2 sm:p-3 flex-shrink-0">
                  <MapPin className="text-zinc-950" size={20} />
                </div>
                <div>
                  <div className="text-zinc-400 text-xs sm:text-sm uppercase tracking-wide mb-1">Zentrale</div>
                  <div className="text-white font-bold text-sm sm:text-base md:text-lg">
                    Currywurststraße 1<br />
                    10115 Berlin
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-600/10 via-red-600/10 to-amber-600/10 border border-amber-600/30 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8">
              <h4 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-3 sm:mb-4 uppercase">
                WhatsApp <span className="text-amber-500">Express</span>
              </h4>
              <p className="text-sm sm:text-base text-zinc-300 mb-4 sm:mb-6">
                Schnelle Antwort gewünscht? Schreib uns direkt auf WhatsApp!
              </p>
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 sm:py-3.5 md:py-4 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wide transition-all transform hover:scale-105 flex items-center justify-center gap-2 sm:gap-3">
                <MessageCircle size={18} />
                WhatsApp öffnen
              </button>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8">
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-6 sm:mb-8 uppercase">
              Franchise-<span className="text-amber-500">Bewerbung</span>
            </h3>

            <form className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-zinc-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white focus:border-amber-600 focus:outline-none transition-colors"
                  placeholder="Dein vollständiger Name"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white focus:border-amber-600 focus:outline-none transition-colors"
                  placeholder="deine@email.de"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white focus:border-amber-600 focus:outline-none transition-colors"
                  placeholder="+49 123 456789"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">
                  Gewünschter Standort
                </label>
                <input
                  type="text"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white focus:border-amber-600 focus:outline-none transition-colors"
                  placeholder="Stadt oder Region"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2">
                  Nachricht
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white focus:border-amber-600 focus:outline-none transition-colors resize-none"
                  placeholder="Erzähl uns von deinen Plänen und warum du Franchise-Partner werden möchtest..."
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
