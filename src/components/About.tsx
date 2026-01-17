import { Award, Heart, Flame } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            Genuss & <span className="text-amber-500">Vielfalt</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
              Seit unserer Gründung haben wir es uns zur Mission gemacht, die traditionelle deutsche Currywurstkultur mit moderner Street-Food-Kreativität zu verbinden. Das Ergebnis? Eine einzigartige <span className="text-amber-500 font-semibold">Halal Currywurst</span>, die jeden Geschmack trifft.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
              Unsere Wurzeln liegen in der Leidenschaft für <span className="text-red-600 font-semibold">authentischen Geschmack</span> und höchste Qualität. Jede Wurst wird mit Sorgfalt ausgewählt, jede Sauce mit Liebe zubereitet. Dabei setzen wir konsequent auf 100% <span className="text-amber-500 font-semibold">Halal-zertifizierte Zutaten</span> – ohne Kompromisse.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
              Was uns besonders macht? Die perfekte Fusion aus Tradition und Innovation. Wir ehren das Original und wagen gleichzeitig neue, aufregende Geschmackskombinationen. Von klassisch bis experimentell – bei uns findet jeder seine Lieblingswurst.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8">
              <div className="text-center">
                <div className="bg-amber-600/10 border border-amber-600/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:bg-amber-600/20 transition-colors">
                  <Award className="text-amber-500 mx-auto mb-2 sm:mb-3" size={24} />
                  <div className="text-white font-bold text-xs sm:text-sm uppercase">Halal</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-red-600/10 border border-red-600/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:bg-red-600/20 transition-colors">
                  <Heart className="text-red-600 mx-auto mb-2 sm:mb-3" size={24} />
                  <div className="text-white font-bold text-xs sm:text-sm uppercase">Liebe</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-amber-600/10 border border-amber-600/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:bg-amber-600/20 transition-colors">
                  <Flame className="text-amber-500 mx-auto mb-2 sm:mb-3" size={24} />
                  <div className="text-white font-bold text-xs sm:text-sm uppercase">Frisch</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0 overflow-hidden">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-amber-600/20">
              <img
                src="https://i.imgur.com/QPY3Ghc.jpeg"
                alt="Team am Grill"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8">
                <div className="bg-zinc-950/80 backdrop-blur-sm border border-amber-600/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-amber-600 rounded-full p-2 sm:p-3">
                      <Award className="text-zinc-950" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-base sm:text-lg">100% Halal</div>
                      <div className="text-zinc-400 text-xs sm:text-sm">Zertifiziert & Geprüft</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 sm:-top-6 right-2 sm:right-4 bg-red-600 text-white rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center font-black text-base sm:text-lg md:text-xl shadow-2xl border-2 sm:border-4 border-zinc-950 rotate-12">
              <div className="text-center -rotate-12">
                <div className="text-xs sm:text-sm md:text-base">FRESH</div>
                <div className="text-xs">DAILY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
