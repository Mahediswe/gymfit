// // src/components/Navbar.jsx
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="max-w-7xl mx-auto bg-gray-950 text-white px-6 py-4 shadow-xl">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-3xl font-bold tracking-tight text-yellow-400 hover:text-yellow-300 transition duration-200"
//         >
//           GymFit
//         </Link>

//         {/* Menu Items */}
//         <ul className="flex space-x-8 text-lg">
//           <li>
//             <Link
//               to="/"
//               className="hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/about"
//               className="hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
//             >
//               About Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/courses"
//               className="hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
//             >
//               Courses
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/blog"
//               className="hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
//             >
//               Blog
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/schedule"
//               className="hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
//             >
//               Schedule
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contact"
//               className="hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link to="/login" className="p-2 bg-green-500 rounded hover:text-black hover:bg-yellow-500">LogIn</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <div>
     <nav className="bg-gray-950 text-white shadow-xl p-5 w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-yellow-400 hover:text-yellow-300 transition duration-200"
        >
          GymFit
        </Link>

        {/* Desktop Menu */}
       <div className="block">
         <ul className="flex space-x-8 text-lg font-semibold">
          <li>
            <Link
              to="/"
              className="text-white hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="text-white hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-white hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/schedule"
              className="text-white hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-yellow-400 transition duration-200 border-b-2 border-transparent hover:border-yellow-400 pb-1"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="p-2 bg-green-500 text-white rounded hover:text-black hover:bg-yellow-500"
            >
              LogIn
            </Link>
          </li>
        </ul>
       </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none ml-auto"
        >
          {/* simple three bars */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="lg:hidden flex flex-col space-y-4 px-6 py-4 text-lg bg-gray-950 border-t border-gray-800">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 py-2"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 py-2"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 py-2"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 py-2"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/schedule"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 py-2"
            >
              Schedule
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-yellow-400 py-2"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="p-2 bg-green-500 rounded hover:text-black hover:bg-yellow-500 inline-block"
            >
              LogIn
            </Link>
          </li>
        </ul>
      )}
    </nav>
   </div>
  );
};

export default Navbar;


