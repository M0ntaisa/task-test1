import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-700 to-blue-500 px-8 py-4 sticky top-0 z-50 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-white text-xl font-semibold no-underline">
          MyApp
        </Link>
        <ul className="flex gap-6 list-none m-0 p-0">
          <li className="navbar-item">
            <Link to="/" className="text-white font-medium no-underline transition-colors duration-300 hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/movies" className="text-white font-medium no-underline transition-colors duration-300 hover:text-yellow-400">
              Movies
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/tv-series" className="text-white font-medium no-underline transition-colors duration-300 hover:text-yellow-400">
              TV Series
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}