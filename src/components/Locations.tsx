import { MapPin, Search, Navigation } from 'lucide-react';

const cities = [
  { name: 'Berlin', count: 12 },
  { name: 'Hamburg', count: 8 },
  { name: 'München', count: 9 },
  { name: 'Köln', count: 6 },
  { name: 'Frankfurt', count: 5 },
  { name: 'Stuttgart', count: 4 },
  { name: 'Düsseldorf', count: 3 },
  { name: 'Dortmund', count: 3 }
];

export default function Locations() {
  return (
    <section id="locations" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 uppercase tracking-tight">
            Finde uns in <span className="text-amber-500">deiner Nähe</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto px-4">
            Über 50 Standorte in ganz Deutschland – und es werden immer mehr
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div className="relative">
            <Search className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input
              type="text"
              placeholder="Stadt oder PLZ..."
              className="w-full bg-zinc-900 border-2 border-zinc-800 rounded-full py-4 sm:py-5 md:py-6 pl-12 sm:pl-16 pr-28 sm:pr-32 md:pr-6 text-white text-sm sm:text-base md:text-lg focus:border-amber-600 focus:outline-none transition-colors placeholder:text-zinc-500"
            />
            <button className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-lg font-bold text-xs sm:text-sm uppercase tracking-wide transition-all flex items-center gap-1.5 sm:gap-2">
              <Navigation size={16} />
              <span className="hidden sm:inline">Finden</span>
            </button>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto mb-8 sm:mb-12">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:border-amber-600/50 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-bold text-base sm:text-lg md:text-xl mb-1">{city.name}</div>
                  <div className="text-zinc-400 text-xs sm:text-sm">{city.count} Standorte</div>
                </div>
                <div className="bg-amber-600/10 border border-amber-600/30 rounded-full p-2 sm:p-3 group-hover:bg-amber-600 transition-colors">
                  <MapPin className="text-amber-500 group-hover:text-zinc-950 transition-colors" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600/10 via-amber-600/10 to-red-600/10 border border-red-600/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4 uppercase">
            Deine Stadt ist nicht dabei?
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
            Werde Franchise-Partner und bringe authentische ungarische Küche in deine Region!
          </p>
          <a href="tel:+436769492394" className="inline-block bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-zinc-950 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg uppercase tracking-wide transition-all transform hover:scale-105 shadow-xl shadow-amber-900/50">
            Jetzt anrufen
          </a>
        </div>
      </div>
    </section>
  );
}
