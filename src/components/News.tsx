import { Calendar, ArrowRight } from 'lucide-react';

const news = [
  {
    title: 'Sommer Special 2024',
    date: '15. Juni 2024',
    category: 'Aktion',
    image: 'https://i.imgur.com/G90AZCX.jpeg',
    description: 'Unsere neue BBQ-Mango-Currywurst bringt tropisches Flair auf deinen Teller!'
  },
  {
    title: 'Neue Standorte in München',
    date: '5. Juni 2024',
    category: 'Expansion',
    image: 'https://i.imgur.com/QPY3Ghc.jpeg',
    description: 'Gleich drei neue Franchise-Partner eröffnen ihre Currywurst-Bars in München.'
  },
  {
    title: 'Winterwurst ist zurück',
    date: '1. Dezember 2023',
    category: 'Saison',
    image: 'https://i.imgur.com/G90AZCX.jpeg',
    description: 'Die beliebte Winterwurst mit Glühwein-Sauce ist wieder da – nur für kurze Zeit!'
  },
  {
    title: 'Franchise Award 2023',
    date: '20. November 2023',
    category: 'Auszeichnung',
    image: 'https://i.imgur.com/QPY3Ghc.jpeg',
    description: 'Wir wurden zum "Besten Street-Food Franchise 2023" gekürt!'
  }
];

export default function News() {
  return (
    <section id="news" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            News & <span className="text-amber-500">Aktionen</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Bleib auf dem Laufenden – hier passiert immer was!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {news.map((item, index) => (
            <div
              key={index}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-3xl overflow-hidden hover:border-amber-600/50 transition-all hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent"></div>

                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-zinc-950 px-4 py-2 rounded-full text-xs font-bold uppercase">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-zinc-400 text-sm mb-2">
                    <Calendar size={16} />
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wide group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-amber-500 font-semibold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  Mehr erfahren
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-zinc-900 border border-zinc-800 hover:border-amber-600 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all">
            Alle News anzeigen
          </button>
        </div>
      </div>
    </section>
  );
}
