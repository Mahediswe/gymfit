// // src/components/About.jsx
// import React from 'react';
// import p1 from '../assets/p1.jpg'
// const About = () => {
//   return (
//     <section className="max-w-7xl mx-auto pt-10 bg-gray-100">
//       <div className="">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">ABOUT GYMFIT</h2>
        
//         <div className="grid md:grid-cols-2 gap-8">
//           <div className="">
//             <img src={p1} alt="" className='h-72 w-76'/>
//           </div>
          
//           <div className="space-y-4">
//             <p className="text-gray-600 leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a commodo nibh. Sed laoreet
//               lacus eu interdum eiusmod. Fusce condimentum, tortor in fringilla sollicitudin, eros dui
//               blandit risus, sit amet dignissim arcu urna eget nibh. Vestibulum ultrices, libero nec
//               ultrices fermentum.
//             </p>
//           </div>
//         </div>
        
//         <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300">
//           READ MORE
//         </button>
//       </div>
//     </section>
//   );
// };

// export default About;


// src/components/About.jsx
import React from 'react';
import p1 from '../assets/p1.jpg'
const About = () => {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4 md:px-8 lg:px-16 bg-gray-100">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">ABOUT GYMFIT</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-600 leading-relaxed pt-20">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a commodo nibh. Sed laoreet
              lacus eu interdum eiusmod. Fusce condimentum, tortor in fringilla sollicitudin, eros dui
              blandit risus, sit amet dignissim arcu urna eget nibh. Vestibulum ultrices, libero nec
              ultrices fermentum.
            </p>
          </div>
          
          <div className="flex justify-center items-center ">
            <img 
              src={p1}
              alt="Gym workout" 
              className="rounded-lg shadow-lg w-full h-72 object-cover relative"
            />
          </div>
        </div>
        
        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-300">
          READ MORE
        </button>
      </div>
    </section>
  );
};

export default About;