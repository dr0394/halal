import { TrendingUp, Users, GraduationCap, Rocket, ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: <Users size={32} />,
    title: 'Kontaktaufnahme',
    description: 'Fülle unser Franchise-Formular aus oder kontaktiere uns direkt per WhatsApp'
  },
  {
    icon: <GraduationCap size={32} />,
    title: 'Kennenlernen',
    description: 'Persönliches Gespräch über Vision, Standort und gemeinsame Ziele'
  },
  {
    icon: <CheckCircle2 size={32} />,
    title: 'Vertragsbestätigung',
    description: 'Transparente Konditionen, faire Partner­schaft und rechtliche Absicherung'
  },
  {
    icon: <Rocket size={32} />,
    title: 'Eröffnung',
    description: 'Vollständige Unter­stützung bei Setup, Marketing und erfolg­reichem Start'
  }
];

const benefits = [
  'Bewährtes Geschäfts­modell mit starker Marke',
  'Umfassende Schulungen für dich und dein Team',
  'Marketing-Support und Social-Media-Kampagnen',
  'Exklusive Lieferanten­verträge und Einkaufs­konditionen',
  'Kontinuierliche Betreuung und Qualitäts­kontrolle',
  'Digitale Tools für effizientes Management'
];

export default function Franchise() {
  return (
    <section id="franchise" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(217,119,6,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-6 py-2 bg-amber-600/20 border border-amber-600/40 rounded-full">
            <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">Franchise Opportunity</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            Dein Weg ins <span className="text-amber-500">Business</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
            Werde Teil einer erfolgreichen Franchise-Familie und starte deine eigene Halal Currywurst-Bar
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
          <div className="space-y-6">
            <h3 className="text-4xl font-black text-white uppercase">
              Warum <span className="text-red-600">Franchise?</span>
            </h3>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Unsere Franchise-Philosophie basiert auf <span className="text-amber-500 font-semibold">Partnerschaft auf Augenhöhe</span>. Wir bieten dir nicht nur eine bewährte Marke, sondern ein komplettes Erfolgs­system: von der Standort­auswahl über Marketing bis hin zur Lieferkette.
            </p>
            <p className="text-lg text-zinc-300 leading-relaxed">
              Mit unserer modernen Currywurst-Bar setzt du auf einen <span className="text-red-600 font-semibold">wachsenden Markt</span>. Street Food boomt, Halal-Produkte werden immer gefragter – die perfekte Kombination für deinen Erfolg.
            </p>

            <div className="space-y-4 pt-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 hover:border-amber-600/30 transition-colors">
                  <CheckCircle2 className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-zinc-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-amber-600/20 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-amber-600 rounded-2xl p-4">
                <TrendingUp className="text-zinc-950" size={32} />
              </div>
              <div>
                <div className="text-white font-black text-2xl uppercase">Deine Vorteile</div>
                <div className="text-amber-500 text-sm">auf einen Blick</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-amber-500 mb-2">30k+</div>
                <div className="text-zinc-400 text-sm uppercase">Investition ab</div>
              </div>
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-red-600 mb-2">3-6</div>
                <div className="text-zinc-400 text-sm uppercase">Monate bis Start</div>
              </div>
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-amber-500 mb-2">100%</div>
                <div className="text-zinc-400 text-sm uppercase">Support</div>
              </div>
              <div className="bg-zinc-950/50 border border-zinc-800 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-red-600 mb-2">50+</div>
                <div className="text-zinc-400 text-sm uppercase">Partner</div>
              </div>
            </div>

            <a href="tel:+436769492394" className="w-full mt-8 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-lg font-bold text-lg uppercase tracking-wide transition-all transform hover:scale-105 shadow-xl shadow-red-900/50 flex items-center justify-center gap-3">
              Jetzt anrufen
              <ArrowRight />
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-black text-white text-center mb-8 md:mb-12 uppercase">
            Dein Weg zum <span className="text-amber-500">Erfolg</span>
          </h3>

          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-red-600 to-amber-600 hidden lg:block"></div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-zinc-900 border-2 border-amber-600/30 rounded-3xl p-6 md:p-8 text-center hover:border-amber-600 transition-all hover:-translate-y-2 group h-full">
                    <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-zinc-950 rounded-2xl w-14 h-14 md:w-16 md:h-16 flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>

                    <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white rounded-full w-7 h-7 md:w-8 md:h-8 flex items-center justify-center font-black text-xs md:text-sm border-3 md:border-4 border-zinc-950">
                      {index + 1}
                    </div>

                    <h4 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 uppercase tracking-wide">
                      {step.title}
                    </h4>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
