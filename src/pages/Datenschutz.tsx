import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';

export default function Datenschutz() {
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
            <span className="text-amber-500">Datenschutz</span>erklärung
          </h1>

          <div className="space-y-8 text-zinc-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">1. Datenschutz auf einen Blick</h2>

              <h3 className="text-xl font-bold text-amber-500 mt-6 mb-3">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-bold text-amber-500 mt-6 mb-3">Datenerfassung auf dieser Website</h3>
              <p className="mb-4">
                <strong className="text-white">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="mb-4">
                <strong className="text-white">Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
              <p>
                <strong className="text-white">Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">2. Hosting</h2>
              <p>
                Wir hosten die Inhalte unserer Website bei folgenden Anbietern:
              </p>
              <p className="mt-4">
                Die von Ihnen auf dieser Website erfassten Daten werden auf Servern unseres Hosting-Providers gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">3. Allgemeine Hinweise und Pflichtinformationen</h2>

              <h3 className="text-xl font-bold text-amber-500 mt-6 mb-3">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-xl font-bold text-amber-500 mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                <strong className="text-white">Halal Currywurst GmbH</strong><br />
                Currywurststraße 1<br />
                10115 Berlin<br />
                Deutschland<br /><br />
                Telefon: +49 (0) 123 456 7890<br />
                E-Mail: datenschutz@halal-currywurst.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">4. Datenerfassung auf dieser Website</h2>

              <h3 className="text-xl font-bold text-amber-500 mt-6 mb-3">Cookies</h3>
              <p>
                Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
              </p>

              <h3 className="text-xl font-bold text-amber-500 mt-6 mb-3">Kontaktformular</h3>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>

              <h3 className="text-xl font-bold text-amber-500 mt-6 mb-3">Newsletter-Daten</h3>
              <p>
                Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben diese nicht an Dritte weiter.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">5. Ihre Rechte</h2>
              <p>
                Sie haben jederzeit das Recht:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                <li>Die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten zu verlangen</li>
                <li>Die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                <li>Die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                <li>Der Verarbeitung Ihrer personenbezogenen Daten zu widersprechen</li>
                <li>Die Datenübertragbarkeit zu verlangen</li>
              </ul>
              <p className="mt-4">
                Für die Ausübung dieser Rechte wenden Sie sich bitte an: <a href="mailto:datenschutz@halal-currywurst.de" className="text-amber-500 hover:text-amber-400 transition-colors">datenschutz@halal-currywurst.de</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">6. Franchise-Anfragen</h2>
              <p>
                Wenn Sie sich über unser Kontaktformular als Franchise-Partner bewerben, verarbeiten wir Ihre angegebenen personenbezogenen Daten (Name, E-Mail, Telefonnummer, Standortwunsch, Nachricht) zur Bearbeitung Ihrer Anfrage und für eventuelle Rückfragen.
              </p>
              <p className="mt-4">
                Diese Daten werden ausschließlich für den Zweck der Franchise-Anbahnung verwendet und nicht an Dritte weitergegeben. Nach Abschluss oder Abbruch des Bewerbungsprozesses werden Ihre Daten gemäß den gesetzlichen Aufbewahrungsfristen gelöscht, sofern Sie nicht in eine weitere Verwendung eingewilligt haben.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4 uppercase">7. Bestellungen</h2>
              <p>
                Bei Bestellungen über unsere Website oder über Drittanbieter-Plattformen werden die für die Bestellabwicklung notwendigen Daten (Name, Lieferadresse, E-Mail, Telefonnummer) erfasst und verarbeitet. Diese Daten werden nur für die Auftragsabwicklung verwendet und an unsere Lieferpartner weitergegeben, soweit dies für die Lieferung erforderlich ist.
              </p>
            </section>

            <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <p className="text-sm text-zinc-400">
                <strong className="text-white">Stand:</strong> Dezember 2024<br />
                Diese Datenschutzerklärung wurde zuletzt am 15.12.2024 aktualisiert.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
