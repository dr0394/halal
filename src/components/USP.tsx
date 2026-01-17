import { Award, Zap, ChefHat, TrendingUp, Shield, Sparkles } from 'lucide-react';

const benefits = [
  {
    icon: <Award size={40} />,
    title: 'Premium Qualität',
    description: 'Höchste Qualitätsstandards mit transparenter Herkunft und täglicher Frische'
  },
  {
    icon: <Zap size={40} />,
    title: 'Frisch & Schnell',
    description: 'Blitzschnelle Zubereitung, perfekt für Take-away und Lieferservice – ohne Kompromisse beim Geschmack'
  },
  {
    icon: <ChefHat size={40} />,
    title: 'Innovative Rezepte',
    description: 'Fusion aus Tradition und Trend – von klassisch bis experimentell, immer ein Geschmackserlebnis'
  },
  {
    icon: <TrendingUp size={40} />,
    title: 'Starke Marke',
    description: 'Professionelles Marketing, aktive Social-Media-Präsenz und einzigartiges Merchandising'
  },
  {
    icon: <Shield size={40} />,
    title: 'Geprüfte Sicherheit',
    description: 'Strenge Hygiene­standards, kontrollierte Lieferkette und transparente Produktions­prozesse'
  },
  {
    icon: <Sparkles size={40} />,
    title: 'Einzigartige Experience',
    description: 'Mehr als Fast Food – ein urbanes Lifestyle-Erlebnis mit authentischem Street-Food-Flair'
  }
];

export default function USP() {
  return (
    <section id="usp" className="py-24 bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            Warum <span className="text-amber-500">wir</span> anders sind
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Unsere Vorteile machen den Unterschied
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-amber-600/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/20"
            >
              <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-zinc-950 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:rotate-3">
                {benefit.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wide">
                {benefit.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {benefit.description}
              </p>

              <div className="mt-6 pt-6 border-t border-zinc-800 group-hover:border-amber-600/30 transition-colors">
                <div className="flex items-center gap-2 text-amber-500 font-semibold text-sm uppercase tracking-wider">
                  <div className="w-8 h-px bg-amber-500"></div>
                  Premium Standard
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border-2 border-amber-600/30 rounded-3xl p-12 max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="bg-red-600 text-white px-6 py-3 rounded-full font-black text-sm uppercase tracking-wider">
              Unser Versprechen
            </div>
          </div>

          <h3 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase leading-tight">
            <span className="text-amber-500">Qualität</span> hat bei uns oberste Priorität
          </h3>

          <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Jedes Gericht wird mit Leidenschaft zubereitet. Wir verwenden nur erstklassige Zutaten und bereiten alles frisch zu. Das schmeckst du in jedem Bissen!
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">Täglich frisch</span>
            </div>
            <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">Regional & Fair</span>
            </div>
            <div className="flex items-center gap-3 bg-zinc-900/50 border border-zinc-800 rounded-full px-6 py-3">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-white font-semibold">100% Authentisch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
