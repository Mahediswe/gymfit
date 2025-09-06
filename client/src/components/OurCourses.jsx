// import React from "react";
// import p1 from "../assets/img1.jpg";
// import p2 from "../assets/img2.jpg";
// import p3 from "../assets/img3.jpg";
// import p4 from "../assets/img4.jpg";
// import p5 from "../assets/img5.jpg";
// import p6 from "../assets/img6.jpg";
// const OurCourses = () => {
//   const courses = [
//     { id: 1,
//        title: "Kettlebell",
//        img: p1 },
//     {
//       id: 2,
//       title: "Conjugate Methods",
//       img: p2
//     },
//     {
//       id: 3,
//       title: "Kettlebelli",
//       img: p3
//     },
//     {
//       id: 4,
//       title: "Weightlifting",
//       img: p4
//     },
//     {
//       id: 5,
//       title: "Advanced Gymnastic",
//       img: p5
//     },
//     {
//       id: 6,
//       title: "Striking",
//       img: p6
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50 py-16 px-4 max-w-7xl mx-auto">
//       <div className="">
//         {/* Header */}
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//           OUR COURSES
//         </h2>

//         {/* Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="relative overflow-hidden rounded-lg shadow-md"
//             >
//               {/* Image */}
//               <img
//                 src={course.img}
//                 alt={course.title}
//                 className="w-full h-72 object-cover  overflow-hidden "
//               />

//               {/* Title bar */}
//               <div className="absolute bottom-0 left-0 right-0">
//                 <div className="relative overflow-hidden group cursor-pointer">
//                   {/* Sliding semi-transparent green overlay */}
// <div className="absolute inset-0 bg-[#00FF00] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />

//                   {/* Title text */}
//                   <div className="relative py-3 text-center bg-white/90">
//                     <h3 className="p-4 text-lg font-semibold text-gray-800 uppercase tracking-wide relative z-10">
//                       {course.title}
//                     </h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurCourses;

// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const OurCourses = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/courses");
//         const data = await res.json();
//         setCourses(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchCourses();
//   }, []);

//   return (
//     <div className=" bg-gray-100 py-16 px-4 max-w-7xl mx-auto">
//       <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//         OUR COURSES
//       </h2>

//       <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
//         {courses.map((course) => (
//           <div
//             key={course._id}
//             className="relative overflow-hidden rounded-lg shadow-md group"
//           >
//             {/* Image */}
//             <img
//               src={course.image}
//               alt={course.name}
//               className="w-full h-72 object-cover"
//             />

//             {/* Transparent title section */}
//             <div className="text-center absolute bottom-0 left-0 right-0 bg-black/70 py-6 px-4 text-white">
//               <motion.h3
//                 className="text-lg font-bold text-white uppercase tracking-wide cursor-pointer inline-block"
//                 whileHover={{ scale: 1.05, color: "#22c55e" }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {course.name}
//               </motion.h3>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurCourses;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/courses");
        const data = await res.json();
        setCourses(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
        OUR COURSES
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Link
  key={course._id}
  to={`/courses/${course._id}`}
  className="relative overflow-hidden rounded-lg shadow-md group block"
>
  {/* Image */}
  <img
    src={course.image}
    alt={course.name}
    className="w-full h-72 object-cover"
  />

  {/* Transparent section with hover effect */}
  <div className="absolute bottom-0 left-0 right-0 bg-black/40 py-7 px-4 relative overflow-hidden">
    {/* Green sliding overlay */}
    <span className="absolute inset-0 bg-green-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

    {/* Texts */}
    <div className="relative z-10">
      <motion.h3
        className="text-lg font-bold text-white uppercase tracking-wide"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {course.name}
      </motion.h3>
    </div>
  </div>
</Link>

        ))}
      </div>
    </div>
  );
};

export default OurCourses;
