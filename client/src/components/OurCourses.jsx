import React from "react";
import p1 from "../assets/p1.jpg";

const OurCourses = () => {
  const courses = [
    { id: 1,
       title: "Kettlebell", 
       img: p1 },
    {
      id: 2,
      title: "Conjugate Methods",
      img: p1 
    },
    {
      id: 3,
      title: "Kettlebelli",
      img: p1 
    },
    {
      id: 4,
      title: "Weightlifting",
      img: p1 
    },
    {
      id: 5,
      title: "Advanced Gymnastic",
      img: p1 
    },
    {
      id: 6,
      title: "Striking",
      img: p1 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 max-w-7xl mx-auto">
      <div className="">
        {/* Header */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          OUR COURSES
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="relative overflow-hidden rounded-lg shadow-md"
            >
              {/* Image */}
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-72 object-cover  overflow-hidden "
              />

              {/* Title bar */}
              <div className="absolute bottom-0 left-0 right-0">
                <div className="relative overflow-hidden group cursor-pointer">
                  {/* Sliding semi-transparent green overlay */}
<div className="absolute inset-0 bg-[#00FF00] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />

                  {/* Title text */}
                  <div className="relative py-3 text-center bg-white/90">
                    <h3 className="p-4 text-lg font-semibold text-gray-800 uppercase tracking-wide relative z-10">
                      {course.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCourses;
