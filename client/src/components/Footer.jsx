// import React from "react";
// import { Link } from "react-router-dom";

// // Import your Instagram images (replace these with your actual image imports)
// import insta1 from "../assets/p1.jpg";
// import insta2 from "../assets/p1.jpg";
// import insta3 from "../assets/p1.jpg";
// import insta4 from "../assets/p1.jpg";
// import insta5 from "../assets/p1.jpg";
// import insta6 from "../assets/p1.jpg";

// const Footer = () => {
//   // Array of imported Instagram images
//   const instagramImages = [insta1, insta2, insta3, insta4, insta5, insta6];
  
//   // Navigation links with paths
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Courses", path: "/courses" },
//     { name: "Schedule", path: "/schedule" },
//     { name: "Blog", path: "/blog" },
//     { name: "Contact Us", path: "/contact" }
//   ];

//   return (
//     <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
//           {/* Brand Section - Column 1 */}
//           <div>
//             <h2 className="text-3xl font-bold mb-4">GYM FIT</h2>
//             <p className="text-gray-400 text-sm leading-relaxed pt-10">
//               Liquid and porta curata, lectus ligula interdum tortor, vitae tempor leo eros laboris ante. 
//               Integer sempre; metus in timidunt eutemoci.
//             </p>
//           </div>
          
//           {/* Links Section - Column 2 (using React Router DOM) */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">LINKS</h3>
//             <ul className="space-y-3">
//               {navLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link 
//                     to={link.path}
//                     className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
          
//           {/* Instagram Section - Column 3 (using imported images) */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">INSTAGRAM</h3>
//             <div className="grid grid-cols-3 gap-2">
//               {instagramImages.map((image, index) => (
//                 <div key={index} className="aspect-square rounded-md overflow-hidden">
//                   <img 
//                     src={image} 
//                     alt={`Instagram post ${index + 1}`}
//                     className="w-full h-full object-cover hover:opacity-80 transition-opacity"
//                     style={{ width: '80px', height: '80px' }}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Contact Section - Column 4 */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">CONTACT US</h3>
//             <div className="space-y-3 text-gray-400 text-sm">
//               <p className="flex items-start">
//                 <svg className="w-4 h-4 mr-3 mt-1 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                 </svg>
//                 123-1234-123
//               </p>
//               <p className="flex items-start">
//                 <svg className="w-4 h-4 mr-3 mt-1 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//                 Fitness@domain.com
//               </p>
//               <p className="flex items-start">
//                 <svg className="w-4 h-4 mr-3 mt-1 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//                 10115eme Monica boulevard Los Angeles
//               </p>
//             </div>
//           </div>
//         </div>
        
//         {/* Copyright Section */}
//         <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
//           <p>© 2025 GYM FIT. With All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import React from "react";
import { Link } from "react-router-dom";

// Import your Instagram images (replace these with your actual image imports)
import insta1 from "../assets/p1.jpg";
import insta2 from "../assets/p1.jpg";
import insta3 from "../assets/p1.jpg";
import insta4 from "../assets/p1.jpg";
import insta5 from "../assets/p1.jpg";
import insta6 from "../assets/p1.jpg";

const Footer = () => {
  // Array of imported Instagram images
  const instagramImages = [insta1, insta2, insta3, insta4, insta5, insta6];
  
  // Navigation links with paths
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Schedule", path: "/schedule" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6  text-center ">
          {/* Brand Section - Column 1 */}
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-3xl font-bold mb-4">GYM FIT</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Liquid and porta curata, lectus ligula interdum tortor, vitae tempor leo eros laboris ante. 
              Integer sempre; metus in timidunt eutemoci.
            </p>
          </div>
          
          {/* Links Section - Column 2 (using React Router DOM) */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">LINKS</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-gray-400 hover:text-amber-400 transition-colors duration-300 text-sm block py-1"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Instagram Section - Column 3 (using imported images) */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">INSTAGRAM</h3>
            <div className="grid grid-cols-3 gap-2 max-w-xs">
              {instagramImages.map((image, index) => (
                <div key={index} className="aspect-square rounded-md overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Instagram post ${index + 1}`}
                    className="w-full h-full object-cover hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Section - Column 4 */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-semibold mb-4 uppercase tracking-wider">CONTACT US</h3>
            <div className="space-y-4 text-gray-400 text-sm max-w-xs">
              <p className="flex items-center lg:items-start flex-col lg:flex-row text-center lg:text-left">
                <span className="flex items-center mb-1 lg:mb-0 lg:mr-2">
                  <svg className="w-4 h-4 mr-2 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  123-1234-123
                </span>
              </p>
              <p className="flex items-center lg:items-start flex-col lg:flex-row text-center lg:text-left">
                <span className="flex items-center mb-1 lg:mb-0 lg:mr-2">
                  <svg className="w-4 h-4 mr-2 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Fitness@domain.com
                </span>
              </p>
              <p className="flex items-center lg:items-start flex-col lg:flex-row text-center lg:text-left">
                <span className="flex items-center mb-1 lg:mb-0 lg:mr-2">
                  <svg className="w-4 h-4 mr-2 text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  10115eme Monica Blvd
                </span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2025 GYM FIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;