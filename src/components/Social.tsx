import { Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';

const instagramPosts = [
  'https://i.imgur.com/G90AZCX.jpeg',
  'https://i.imgur.com/QPY3Ghc.jpeg',
  'https://i.imgur.com/G90AZCX.jpeg',
  'https://i.imgur.com/QPY3Ghc.jpeg',
  'https://i.imgur.com/G90AZCX.jpeg',
  'https://i.imgur.com/QPY3Ghc.jpeg'
];

export default function Social() {
  return (
    <section id="social" className="py-24 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 uppercase tracking-tight">
            Folge dem <span className="text-red-600">Duft</span>
          </h2>
          <p className="text-xl text-zinc-400">
            Stay Spicy – werde Teil unserer Community!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto mt-6"></div>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          <a
            href="#"
            className="group bg-zinc-900 border-2 border-zinc-800 hover:border-amber-600 rounded-2xl p-6 transition-all hover:-translate-y-2"
          >
            <Instagram className="text-amber-500 group-hover:text-amber-400 transition-colors" size={40} />
          </a>
          <a
            href="#"
            className="group bg-zinc-900 border-2 border-zinc-800 hover:border-red-600 rounded-2xl p-6 transition-all hover:-translate-y-2"
          >
            <MessageCircle className="text-red-600 group-hover:text-red-500 transition-colors" size={40} />
          </a>
          <a
            href="#"
            className="group bg-zinc-900 border-2 border-zinc-800 hover:border-amber-600 rounded-2xl p-6 transition-all hover:-translate-y-2"
          >
            <Facebook className="text-amber-500 group-hover:text-amber-400 transition-colors" size={40} />
          </a>
          <a
            href="#"
            className="group bg-zinc-900 border-2 border-zinc-800 hover:border-red-600 rounded-2xl p-6 transition-all hover:-translate-y-2"
          >
            <Youtube className="text-red-600 group-hover:text-red-500 transition-colors" size={40} />
          </a>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-3xl font-black text-white text-center mb-8 uppercase">
            <span className="text-amber-500">#</span>BigDaddysPassau
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post, index) => (
              <div
                key={index}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={post}
                  alt={`Instagram Post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4">
                    <Instagram className="text-amber-500" size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border-2 border-amber-600/30 rounded-3xl p-12 max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-black text-white mb-4 uppercase">
            Zeig uns <span className="text-amber-500">deinen</span> Genussmoment!
          </h3>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
            Poste dein Foto mit <span className="text-red-600 font-bold">#BigDaddysPassau</span> und werde Teil unserer Genuss-Community. Die besten Bilder teilen wir auf unseren Kanälen!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-zinc-950 px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all transform hover:scale-105 flex items-center justify-center gap-3">
              <Instagram size={20} />
              @bigdaddyspassau folgen
            </button>
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all transform hover:scale-105 flex items-center justify-center gap-3">
              <MessageCircle size={20} />
              WhatsApp Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
