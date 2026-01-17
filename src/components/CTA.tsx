import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.15),transparent_70%)]"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-amber-600/20 border border-amber-600/40 rounded-lg px-6 py-3 mb-8">
            <Sparkles className="text-amber-500" size={20} />
            <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">
              Deine Chance jetzt ergreifen
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight leading-none">
            Bereit für den<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-red-600 to-amber-500">
              Würstchenhimmel?
            </span>
          </h2>

          <p className="text-2xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Ob du unsere einzigartige Halal Currywurst probieren oder selbst Teil unserer Erfolgsgeschichte werden möchtest – <span className="text-amber-500 font-bold">jetzt ist der perfekte Moment!</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-6 rounded-lg font-bold text-xl uppercase tracking-wide transition-all transform hover:scale-105 shadow-2xl shadow-red-900/50 flex items-center gap-3">
              Jetzt bestellen
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </button>

            <button className="group bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-zinc-950 px-12 py-6 rounded-lg font-bold text-xl uppercase tracking-wide transition-all transform hover:scale-105 shadow-2xl shadow-amber-900/50 flex items-center gap-3">
              Franchise starten
              <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <div className="text-5xl font-black text-amber-500 mb-3">50+</div>
              <div className="text-white font-bold uppercase tracking-wide mb-2">Standorte</div>
              <div className="text-zinc-400 text-sm">deutschlandweit</div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <div className="text-5xl font-black text-red-600 mb-3">10k+</div>
              <div className="text-white font-bold uppercase tracking-wide mb-2">Genießer</div>
              <div className="text-zinc-400 text-sm">täglich glücklich</div>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
              <div className="text-5xl font-black text-amber-500 mb-3">100%</div>
              <div className="text-white font-bold uppercase tracking-wide mb-2">Halal</div>
              <div className="text-zinc-400 text-sm">zertifiziert & geprüft</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
