import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Kundin seit 2023',
    text: 'Die beste Currywurst der Stadt! Frisch, halal und unglaublich lecker. Die würzige Sauce ist einfach perfekt!',
    rating: 5,
    location: 'Berlin'
  },
  {
    name: 'Ahmed K.',
    role: 'Franchise-Partner',
    text: 'Als Franchise-Partner bin ich begeistert vom Support und dem durchdachten Konzept. Die Kunden lieben unsere Currywurst!',
    rating: 5,
    location: 'Hamburg'
  },
  {
    name: 'Lisa W.',
    role: 'Stammkundin',
    text: 'Endlich eine Currywurst, die meinen Standards entspricht. 100% Halal, toller Geschmack und super freundliches Team.',
    rating: 5,
    location: 'München'
  },
  {
    name: 'Mehmet Y.',
    role: 'Franchise-Partner',
    text: 'Die Entscheidung für das Franchise war goldrichtig. Starke Marke, tolles Marketing und echte Partnerschaft auf Augenhöhe.',
    rating: 5,
    location: 'Köln'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 uppercase tracking-tight">
            Was unsere <span className="text-red-600">Community</span> sagt
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 px-4">
            Echte Stimmen von echten Genießern
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 hover:border-amber-600/50 transition-all hover:-translate-y-2"
            >
              <div className="mb-4 sm:mb-6">
                <Quote className="text-amber-600 opacity-50" size={32} />
              </div>

              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-amber-500" size={16} />
                ))}
              </div>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-4 sm:mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="pt-4 sm:pt-6 border-t border-zinc-800">
                <div className="text-white font-bold text-base sm:text-lg">{testimonial.name}</div>
                <div className="text-amber-500 text-xs sm:text-sm font-semibold mb-1">{testimonial.role}</div>
                <div className="text-zinc-500 text-xs uppercase tracking-wider">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 md:mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-zinc-900/50 border border-amber-600/30 rounded-2xl sm:rounded-full px-6 sm:px-12 py-4 sm:py-6">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-amber-500 mb-1">4.8</div>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-amber-500" size={14} />
                ))}
              </div>
              <div className="text-zinc-400 text-xs sm:text-sm uppercase">Durchschnitt</div>
            </div>

            <div className="hidden sm:block w-px h-16 bg-zinc-800"></div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-red-600 mb-1">2.5k+</div>
              <div className="text-zinc-400 text-xs sm:text-sm uppercase">Bewertungen</div>
            </div>

            <div className="hidden sm:block w-px h-16 bg-zinc-800"></div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-black text-amber-500 mb-1">95%</div>
              <div className="text-zinc-400 text-xs sm:text-sm uppercase">Empfehlungen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
