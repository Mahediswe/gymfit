// import React from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import p1 from '../assets/p1.jpg'
// import p2 from '../assets/m1.jpg'
// import p3 from '../assets/p1.jpg'
// import p4 from '../assets/m3.jpg'
// import p5 from '../assets/m4.jpg'
// import p6 from '../assets/m1.jpg'

// const trainers = [
//   {
//     id: 1,
//     name: "Rachel Adam",
//     role: "Gym Trainer",
//       img: p1 
//   },
//   {
//     id: 2,
//     name: "Michael Lee",
//     role: "Fitness Coach",
//       img: p2 
//   },
//   {
//     id: 3,
//     name: "Sophia Brown",
//     role: "Yoga Instructor",
//       img: p3 
//   },
//   {
//     id: 4,
//     name: "David Smith",
//     role: "Strength Coach",
//       img: p4 
//   },
//   {
//     id: 5,
//     name: "Emily Johnson",
//     role: "Nutritionist",
//       img: p5 
//   },
//   {
//     id: 6,
//     name: "James White",
//     role: "Cardio Trainer",
//       img: p6 
//   },
// ];

// const OurTrainers = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3500,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section className="max-w-7xl mx-auto h-[700px] py-12 bg-gray-100">
//       <h2 className="text-center text-2xl font-bold mb-8">OUR TRAINERS</h2>
//       <Slider {...settings}>
//         {trainers.map((trainer) => (
//           <motion.div
//             key={trainer.id}
//             whileHover={{ scale: 1.02 }}
//             className="px-3"
//           >
//             <div className="relative group overflow-hidden  shadow-lg cursor-pointer">
//               {/* Image */}
//               <img
//                 src={trainer.img}
//                 alt={trainer.name}
//                 className="w-full h-[400px] object-cover "
//               />

//               {/* Overlay */}
//               <div className=" absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white text-center px-4
//                 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
//                 <h3 className="text-xl font-semibold ">{trainer.name}</h3>
//                 <p className="text-green-400 ">{trainer.role}</p>
//               </div>

//               {/* Bottom Title with Green Effect */}
//               <div className="absolute bottom-0 left-0 right-0 bg-white  overflow-hidden">
//                 <div className="relative group">
//                   {/* Green sliding layer */}
//                   <div className="absolute inset-0 bg-green-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
//                   <div className="relative z-10 p-8 text-center">
//                     <h4 className="font-bold text-black uppercase">
//                       {trainer.name}
//                     </h4>
//                     <p className="text-black">{trainer.role}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default OurTrainers;



// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import { motion } from "framer-motion";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const OurTrainers = () => {
//   const [trainers, setTrainers] = useState([]);

//   useEffect(() => {
//     const fetchTrainers = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/trainers");
//         const data = await res.json();
//         setTrainers(data);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchTrainers();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3500,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <section className="max-w-7xl mx-auto h-[700px] py-12 bg-gray-100">
//       <h2 className="text-center text-2xl font-bold mb-8">OUR TRAINERS</h2>
//       <Slider {...settings}>
//         {trainers.map((trainer) => (
//           <motion.div
//             key={trainer._id}
//             whileHover={{ scale: 1.02 }}
//             className="px-3"
//           >
//             <div className="relative group overflow-hidden shadow-lg cursor-pointer">
//               {/* Image */}
//               <img
//                 src={trainer.image}
//                 alt={trainer.name}
//                 className="w-full h-[400px] object-cover"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white text-center px-4
//                 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
//                 <h3 className="text-xl font-semibold">{trainer.name}</h3>
//                 <p className="text-green-400">{trainer.role}</p>
//               </div>

//               {/* Bottom Title with Green Effect */}
//               <div className="absolute bottom-0 left-0 right-0 bg-white overflow-hidden">
//                 <div className="relative group">
//                   <div className="absolute inset-0 bg-green-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
//                   <div className="relative z-10 p-8 text-center">
//                     <h4 className="font-bold text-black uppercase">{trainer.name}</h4>
//                     <p className="text-black">{trainer.role}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </Slider>
//     </section>
//   );
// };

// export default OurTrainers;



import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const OurTrainers = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/trainers")
      .then(res => res.json())
      .then(data => setTrainers(data))
      .catch(err => console.error(err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="max-w-7xl mx-auto py-12 bg-gray-100">
      <h2 className="text-center text-2xl font-bold mb-8">OUR TRAINERS</h2>
      <Slider {...settings}>
        {trainers.map((trainer) => (
          <motion.div
            key={trainer._id}
            whileHover={{ scale: 1.02 }}
            className="px-3"
          >
            <Link to={`/trainers/${trainer._id}`}>
              <div className="relative group overflow-hidden shadow-lg cursor-pointer">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className=" absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white text-center px-4 transform -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                  <h3 className="text-xl font-semibold">{trainer.name}</h3>
                  <p className="text-green-400">{trainer.role}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white overflow-hidden">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-green-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
                    <div className="relative z-10 p-8 text-center">
                      <h4 className="font-bold text-black uppercase">
                        {trainer.name}
                      </h4>
                      <p className="text-black">{trainer.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
};

export default OurTrainers;
