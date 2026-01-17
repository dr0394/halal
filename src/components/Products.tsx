import { Flame, Leaf, Award, ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Classic Currywurst',
    description: 'Die Original Halal Currywurst mit hausgemachter Curry-Sauce und goldenen Pommes',
    image: 'https://i.imgur.com/G90AZCX.jpeg',
    price: '7,90€',
    badges: ['Halal', 'Bestseller']
  },
  {
    name: 'Spicy Chili Wurst',
    description: 'Für die Mutigen: Feurige Chili-Sauce mit extra Jalapeños und scharfer Note',
    image: 'https://i.imgur.com/QPY3Ghc.jpeg',
    price: '8,50€',
    badges: ['Halal', 'Scharf'],
    icon: <Flame className="text-red-600" size={20} />
  },
  {
    name: 'BBQ Smokehouse',
    description: 'Rauchige BBQ-Sauce mit Röstzwiebeln und knackigen Bacon-Bits',
    image: 'https://i.imgur.com/G90AZCX.jpeg',
    price: '8,90€',
    badges: ['Halal', 'Smoky']
  },
  {
    name: 'Veggie Power',
    description: 'Knusprige Tofu-Wurst mit milder Curry-Sauce – 100% pflanzlich, 100% Geschmack',
    image: 'https://i.imgur.com/QPY3Ghc.jpeg',
    price: '7,50€',
    badges: ['Vegan', 'Veggie'],
    icon: <Leaf className="text-green-500" size={20} />
  }
];

export default function Products() {
  return (
    <section id="products" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 uppercase tracking-tight">
            Unsere <span className="text-red-600">Currywurst</span> Kreationen
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto px-4">
            Von klassisch bis innovativ – jede Wurst ein Geschmackserlebnis
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto mt-4 sm:mt-6"></div>
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

                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex gap-1.5 sm:gap-2">
                  {product.badges.map((badge, i) => (
                    <span
                      key={i}
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs font-bold uppercase ${
                        badge === 'Halal' || badge === 'Bestseller'
                          ? 'bg-amber-600 text-zinc-950'
                          : badge === 'Scharf'
                          ? 'bg-red-600 text-white'
                          : badge === 'Vegan' || badge === 'Veggie'
                          ? 'bg-green-600 text-white'
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
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2.5 sm:py-3 rounded-lg font-bold text-sm sm:text-base uppercase tracking-wide transition-colors flex items-center justify-center gap-2">
                  Jetzt bestellen
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-600/10 via-amber-500/10 to-amber-600/10 border border-amber-600/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
            <div className="bg-amber-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex-shrink-0">
              <Award className="text-zinc-950" size={48} />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4 uppercase">
                Unser Halal-Versprechen
              </h3>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-3 sm:mb-4">
                Jede unserer Würste ist <span className="text-amber-500 font-bold">100% Halal-zertifiziert</span>. Wir arbeiten ausschließlich mit geprüften Lieferanten zusammen und garantieren höchste Qualitätsstandards. Von der Auswahl des Fleisches bis zur Zubereitung – alles nach islamischen Speisevorschriften.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-amber-500 font-semibold">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  Zertifizierte Halal-Produktion
                </div>
                <div className="flex items-center gap-2 text-amber-500 font-semibold">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  Geprüfte Lieferkette
                </div>
                <div className="flex items-center gap-2 text-amber-500 font-semibold">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  Transparente Herkunft
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
