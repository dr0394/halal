import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <div className="container mx-auto px-6 py-24 mt-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-colors mb-12 font-semibold"
        >
          <ArrowLeft size={20} />
          Zurück zur Startseite
        </Link>

        <div className="max-w-4xl mx-auto bg-zinc-900/50 border border-zinc-800 rounded-3xl p-12">
          <h1 className="text-5xl font-black text-white mb-8 uppercase">
            <span className="text-amber-500">Impressum</span>
          </h1>

          <div className="space-y-8 text-zinc-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">Angaben gemäß § 5 TMG</h2>
              <p>
                <strong className="text-amber-500">Halal Currywurst GmbH</strong><br />
                Currywurststraße 1<br />
                10115 Berlin<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">Kontakt</h2>
              <p>
                <strong>Telefon:</strong> +49 (0) 123 456 7890<br />
                <strong>E-Mail:</strong> info@halal-currywurst.de<br />
                <strong>Website:</strong> www.halal-currywurst.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">Vertreten durch</h2>
              <p>
                Geschäftsführer: Max Mustermann<br />
                Prokurist: Erika Musterfrau
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">Registereintrag</h2>
              <p>
                <strong>Handelsregister:</strong> HRB 123456<br />
                <strong>Registergericht:</strong> Amtsgericht Berlin-Charlottenburg<br />
                <strong>Umsatzsteuer-ID:</strong> DE123456789
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">Verantwortlich für den Inhalt</h2>
              <p>
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
                Max Mustermann<br />
                Currywurststraße 1<br />
                10115 Berlin
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">Haftungsausschluss</h2>

              <h3 className="text-xl font-bold text-amber-500 mt-6 mb-3">Haftung für Inhalte</h3>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>

              <h3 className="text-xl font-bold text-amber-500 mt-6 mb-3">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>

              <h3 className="text-xl font-bold text-amber-500 mt-6 mb-3">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-amber-500 hover:text-amber-400 transition-colors ml-2">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="mt-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
