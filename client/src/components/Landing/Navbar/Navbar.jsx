import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-700"
        >
          SpendSense
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="#features" className="hover:text-blue-700 transition">
            Features
          </a>

          <a href="#how-it-works" className="hover:text-blue-700 transition">
            How it Works
          </a>

          <a href="#dashboard" className="hover:text-blue-700 transition">
            Dashboard
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="text-gray-700 hover:text-blue-700 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;