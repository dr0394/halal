import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Logo
          </Link>
        </div>
      </div>
    </nav>
  );
}
