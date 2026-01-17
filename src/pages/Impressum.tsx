import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="container mx-auto px-6 py-24">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 mb-8 inline-block"
        >
          ← Zurück
        </Link>

        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Impressum
          </h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600">
              Impressum-Inhalte hier einfügen.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
