import { Plus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    category: 'Produkte',
    questions: [
      {
        q: 'Woher kommen eure Zutaten?',
        a: 'Wir arbeiten ausschließlich mit geprüften regionalen Lieferanten zusammen und achten auf höchste Qualitätsstandards. Alle Zutaten werden täglich frisch geliefert und verarbeitet.'
      },
      {
        q: 'Habt ihr auch vegetarische oder vegane Optionen?',
        a: 'Auf jeden Fall! Unsere Veggie Power mit Tofu-Wurst ist 100% pflanzlich und genauso lecker wie das Original. Auch unsere Saucen sind größtenteils vegan.'
      },
      {
        q: 'Welche Beilagen bietet ihr an?',
        a: 'Neben klassischen Pommes haben wir auch Süßkartoffel-Pommes, Baked Potatoes und verschiedene Salate im Angebot. Alle Beilagen können individuell kombiniert werden.'
      }
    ]
  },
  {
    category: 'Franchise',
    questions: [
      {
        q: 'Wie hoch ist die Investitionssumme für ein Franchise?',
        a: 'Die Einstiegsinvestition beginnt ab ca. 30.000€. Die genauen Kosten hängen vom Standort und der Größe ab. Wir besprechen alle Details in einem persönlichen Gespräch.'
      },
      {
        q: 'Welche Unterstützung bekomme ich als Franchise-Partner?',
        a: 'Du erhältst umfassende Schulungen, Marketing-Support, Hilfe bei der Standortwahl, Zugang zu unseren Lieferanten und kontinuierliche Betreuung durch unser Team.'
      },
      {
        q: 'Wie lange dauert es bis zur Eröffnung?',
        a: 'Von der Vertragsunterzeichnung bis zur Eröffnung dauert es in der Regel 3-6 Monate. Das hängt von Faktoren wie Standortsuche und Umbauarbeiten ab.'
      }
    ]
  },
  {
    category: 'Bestellung',
    questions: [
      {
        q: 'Bietet ihr auch Lieferung an?',
        a: 'Ja! An den meisten Standorten kannst du über gängige Lieferplattformen bestellen. Prüfe in unserer Standortsuche, welche Optionen an deinem Standort verfügbar sind.'
      },
      {
        q: 'Kann ich online vorbestellen?',
        a: 'Ja, über unsere Website oder App kannst du deine Bestellung aufgeben und zu deiner Wunschzeit abholen. So sparst du Wartezeit!'
      },
      {
        q: 'Gibt es Treueprogramme oder Rabatte?',
        a: 'Absolut! Mit unserer App sammelst du bei jeder Bestellung Punkte und erhältst exklusive Angebote. Newsletter-Abonnenten bekommen 10% auf die erste Bestellung.'
      }
    ]
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleQuestion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 uppercase tracking-tight">
            Häufige <span className="text-amber-500">Fragen</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 px-4">
            Alles, was du wissen musst – kurz und knackig
          </p>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto mt-4 sm:mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-xl sm:text-2xl font-black text-amber-500 mb-4 sm:mb-6 uppercase tracking-wide">
                {category.category}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {category.questions.map((item, questionIndex) => {
                  const uniqueIndex = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === uniqueIndex;

                  return (
                    <div
                      key={uniqueIndex}
                      className="bg-zinc-900/50 border border-zinc-800 rounded-xl sm:rounded-2xl overflow-hidden hover:border-amber-600/30 transition-colors"
                    >
                      <button
                        onClick={() => toggleQuestion(uniqueIndex)}
                        className="w-full flex items-center justify-between p-4 sm:p-5 md:p-6 text-left"
                      >
                        <span className="text-white font-bold text-sm sm:text-base md:text-lg pr-4 sm:pr-8">
                          {item.q}
                        </span>
                        <Plus
                          className={`text-amber-500 flex-shrink-0 transition-transform ${
                            isOpen ? 'rotate-45' : ''
                          }`}
                          size={20}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6 text-sm sm:text-base text-zinc-400 leading-relaxed">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
          <p className="text-sm sm:text-base text-zinc-400 mb-4 sm:mb-6 px-4">
            Deine Frage ist nicht dabei?
          </p>
          <button className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-zinc-950 px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg uppercase tracking-wide transition-all transform hover:scale-105">
            Kontaktiere uns
          </button>
        </div>
      </div>
    </section>
  );
}
