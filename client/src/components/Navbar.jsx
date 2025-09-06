// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto bg-gray-950 text-white px-6 py-4 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-yellow-400 hover:text-yellow-300 transition duration-200"
        >
          GymFit
        </Link>

        {/* Menu Items */}
        <ul className="flex space-x-8 text-lg">
          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/schedule"
              className="hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/login" className="p-2 bg-green-500 rounded hover:text-black hover:bg-yellow-500">LogIn</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
