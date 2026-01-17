import { ArrowRight, Play, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 pt-20">
      <div className="absolute inset-0 bg-[url('https://i.imgur.com/G90AZCX.jpeg')] bg-cover bg-center opacity-20"></div>

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <div className="inline-block px-6 py-2 bg-red-600/20 border border-red-600/40 rounded-lg">
            <span className="text-red-500 font-bold text-sm tracking-wider uppercase">16 Jahre Erfahrung</span>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-2xl flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-yellow-500" size={14} />
                ))}
              </div>
              <div className="text-xs font-bold text-zinc-800">4.8 von 5.0</div>
              <div className="text-xs text-zinc-600">1.200+ Bewertungen</div>
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 md:mb-6 tracking-tight uppercase leading-none px-4">
          Big Daddys<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600">
            Burgerhouse
          </span>
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-6 md:mb-8 uppercase tracking-wide px-4">
          Ungarische Spezialitäten
        </h2>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-6">
          Persönlichkeit, Qualität und Ehrlichkeit – seit 16 Jahren!<br/>
          <span className="text-red-500 font-semibold">Authentisch. Leidenschaftlich. Unvergesslich.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="tel:+436769492394" className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-5 rounded-lg font-bold text-lg uppercase tracking-wide transition-all transform hover:scale-105 shadow-2xl shadow-red-900/50 flex items-center justify-center gap-3 w-full sm:w-[320px]">
            Jetzt anrufen
            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-12 md:mt-20 grid grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-red-500 mb-1 md:mb-2">16</div>
            <div className="text-zinc-400 uppercase text-xs sm:text-sm tracking-wide">Jahre</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-red-600 mb-1 md:mb-2">100%</div>
            <div className="text-zinc-400 uppercase text-xs sm:text-sm tracking-wide">Qualität</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl md:text-5xl font-black text-red-500 mb-1 md:mb-2">♥</div>
            <div className="text-zinc-400 uppercase text-xs sm:text-sm tracking-wide">Leidenschaft</div>
          </div>
        </div>
      </div>
    </section>
  );
}
