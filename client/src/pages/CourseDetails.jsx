import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams(); 
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/courses/${id}`);
        const data = await res.json();
        setCourse(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCourse();
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        {course.name}
      </h2>
      <img
        src={course.image}
        alt={course.name}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <p className="text-gray-700 mb-4">{course.description}</p>
      <div className="flex gap-6 mb-4">
        <p className="text-gray-800 font-semibold">
          Duration: {course.duration}
        </p>
        <p className="text-gray-800 font-semibold">
          Price: {course.price}৳
        </p>
      </div>
      <p className="text-gray-600">
        Instructor: {course.instructor}
      </p>
    </div>
  );
};

export default CourseDetails;
