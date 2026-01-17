import { Award, Heart, Flame } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            Unsere <span className="text-red-500">Geschichte</span>
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
              Seit 16 Jahren steht <span className="text-red-500 font-semibold">Big Daddys Burgerhouse</span> in Passau für authentische ungarische Küche und herzliche Gastfreundschaft. Was als kleiner Traum begann, ist heute eine feste Größe in der regionalen Gastronomieszene.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
              Unsere Werte sind einfach, aber unverrückbar: <span className="text-red-600 font-semibold">Persönlichkeit, Qualität und Ehrlichkeit</span>. Jedes Gericht wird mit echter Leidenschaft zubereitet, jeder Gast wird wie Familie behandelt. Diese Philosophie prägt unser Restaurant seit dem ersten Tag.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed">
              Was uns besonders macht? Die Verbindung von traditionellen ungarischen Rezepten mit der Liebe zum Detail. Ob klassische Spezialitäten oder moderne Interpretationen – bei uns erwartet Sie echter Geschmack und echte Gastfreundschaft.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 pt-4 sm:pt-6 md:pt-8">
              <div className="text-center">
                <div className="bg-red-600/10 border border-red-600/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:bg-red-600/20 transition-colors">
                  <Award className="text-red-500 mx-auto mb-2 sm:mb-3" size={24} />
                  <div className="text-white font-bold text-xs sm:text-sm uppercase text-center">Qualität</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-red-600/10 border border-red-600/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:bg-red-600/20 transition-colors">
                  <Heart className="text-red-600 mx-auto mb-2 sm:mb-3" size={24} />
                  <div className="text-white font-bold text-xs sm:text-sm uppercase text-center">Leidenschaft</div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-red-600/10 border border-red-600/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 hover:bg-red-600/20 transition-colors">
                  <Flame className="text-red-500 mx-auto mb-2 sm:mb-3" size={24} />
                  <div className="text-white font-bold text-xs sm:text-sm uppercase text-center">Frisch</div>
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
                <div className="bg-zinc-950/80 backdrop-blur-sm border border-red-600/30 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="bg-red-600 rounded-full p-2 sm:p-3">
                      <Award className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="text-white font-bold text-base sm:text-lg">16 Jahre Erfahrung</div>
                      <div className="text-zinc-400 text-xs sm:text-sm">Tradition & Qualität</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 sm:-top-6 right-2 sm:right-4 bg-red-600 text-white rounded-full w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center font-black text-base sm:text-lg md:text-xl shadow-2xl border-2 sm:border-4 border-zinc-950 rotate-12">
              <div className="text-center -rotate-12">
                <div className="text-xs sm:text-sm md:text-base">PASSAU</div>
                <div className="text-xs">SEIT 2009</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
