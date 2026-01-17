import { Flame, Award, ArrowRight, UtensilsCrossed } from 'lucide-react';
import goulashImage from '../assets/traditional-hungarian-meal-with-beef-chuck-steak-potatoes-paprika-goulash-soup-stew.jpg';

const products = [
  {
    name: 'Gulasch',
    description: 'Traditionelles ungarisches Gulasch mit zartem Rindfleisch, Paprika und Gewürzen',
    image: goulashImage,
    price: '12,90€',
    badges: ['Klassiker', 'Hausgemacht']
  },
  {
    name: 'Pörkölt',
    description: 'Herzhaftes Paprikaschgulasch nach original ungarischem Rezept',
    image: 'https://i.imgur.com/QPY3Ghc.jpeg',
    price: '13,50€',
    badges: ['Spezialität', 'Scharf'],
    icon: <Flame className="text-red-600" size={20} />
  },
  {
    name: 'Lángos',
    description: 'Frittierter Hefeteig mit Sauerrahm, Käse und Knoblauch',
    image: 'https://i.imgur.com/G90AZCX.jpeg',
    price: '8,90€',
    badges: ['Beliebt', 'Vegetarisch']
  },
  {
    name: 'Halászlé',
    description: 'Würzige Fischsuppe mit Karpfen und scharfem Paprika – ein ungarischer Klassiker',
    image: 'https://i.imgur.com/QPY3Ghc.jpeg',
    price: '14,50€',
    badges: ['Traditionell', 'Scharf'],
    icon: <Flame className="text-red-600" size={20} />
  }
];

export default function Products() {
  return (
    <section id="products" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 uppercase tracking-tight">
            Ungarische <span className="text-red-600">Spezialitäten</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto px-4">
            Authentische ungarische Küche mit Tradition und Leidenschaft
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-amber-600/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-900/20"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>

                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex flex-wrap gap-1.5 sm:gap-2 max-w-[calc(100%-6rem)]">
                  {product.badges.map((badge, i) => (
                    <span
                      key={i}
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold uppercase whitespace-nowrap ${
                        badge === 'Klassiker' || badge === 'Hausgemacht' || badge === 'Beliebt'
                          ? 'bg-red-600 text-white'
                          : badge === 'Scharf'
                          ? 'bg-orange-600 text-white'
                          : badge === 'Vegetarisch'
                          ? 'bg-green-600 text-white'
                          : badge === 'Spezialität' || badge === 'Traditionell'
                          ? 'bg-red-700 text-white'
                          : 'bg-zinc-700 text-white'
                      }`}
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {product.icon && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-zinc-950/80 backdrop-blur-sm rounded-full p-1.5 sm:p-2">
                    {product.icon}
                  </div>
                )}

                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4">
                  <div className="text-2xl sm:text-3xl font-black text-amber-500">{product.price}</div>
                </div>
              </div>

              <div className="p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-3 uppercase tracking-wide">
                  {product.name}
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-4 sm:mb-6">
                  {product.description}
                </p>
                <a href="mailto:zoltan.f@hotmail.de" className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wide transition-colors flex items-center justify-center gap-2">
                  Anfragen
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600/10 via-red-500/10 to-red-600/10 border border-red-600/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="bg-red-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex-shrink-0">
              <Award className="text-white" size={48} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4 uppercase">
                Unser Qualitätsversprechen
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-3 sm:mb-4">
                Jedes Gericht wird nach <span className="text-red-500 font-bold">traditionellen ungarischen Rezepten</span> zubereitet. Wir arbeiten ausschließlich mit frischen Zutaten und garantieren höchste Qualitätsstandards. Von der Auswahl der Produkte bis zur Zubereitung – alles mit Leidenschaft und Ehrlichkeit.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-red-500 font-semibold">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Traditionelle Rezepte
                </div>
                <div className="flex items-center gap-2 text-red-500 font-semibold">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Frische Zutaten
                </div>
                <div className="flex items-center gap-2 text-red-500 font-semibold">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  Mit Leidenschaft gekocht
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
