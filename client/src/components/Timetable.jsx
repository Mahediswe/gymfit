import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDumbbell, FaRunning, FaSpa, FaUserShield } from "react-icons/fa";

const scheduleData = {
  Monday: [
    {
      time: "06AM-08AM",
      course: "Weight Loose",
      trainer: "Rachel Adam",
      icon: <FaRunning />,
    },
    {
      time: "08AM-10AM",
      course: "Cardio",
      trainer: "Rachel Adam",
      icon: <FaDumbbell />,
    },
    {
      time: "10AM-12PM",
      course: "Yoga",
      trainer: "Lefew D. Loe",
      icon: <FaSpa />,
    },
    {
      time: "04PM-06PM",
      course: "Karate",
      trainer: "Keaf Shen",
      icon: <FaUserShield />,
    },
  ],
  Tuesday: [
    {
      time: "07AM-09AM",
      course: "Boxing",
      trainer: "Rachel Adam",
      icon: <FaUserShield />,
    },
    {
      time: "05PM-07PM",
      course: "Fitness",
      trainer: "Rachel Adam",
      icon: <FaDumbbell />,
    },
    {
      time: "06AM-08AM",
      course: "Weight Loose",
      trainer: "Rachel Adam",
      icon: <FaRunning />,
    },
  ],
  Wednesday: [
    {
      time: "06AM-07AM",
      course: "Aerobics & Skipping",
      trainer: "Lefew D. Loe",
      icon: <FaRunning />,
    },
    {
      time: "07PM-08PM",
      course: "Body Building",
      trainer: "Rachel Adam",
      icon: <FaDumbbell />,
    },
    {
      time: "10AM-12PM",
      course: "Yoga",
      trainer: "Lefew D. Loe",
      icon: <FaSpa />,
    },
  ],
  Thursday: [
    {
      time: "09AM-10AM",
      course: "Yoga",
      trainer: "Lefew D. Loe",
      icon: <FaSpa />,
    },
    {
      time: "08AM-10AM",
      course: "Cardio",
      trainer: "Rachel Adam",
      icon: <FaDumbbell />,
    },
    {
      time: "07PM-09PM",
      course: "Body Building",
      trainer: "Rachel Adam",
      icon: <FaDumbbell />,
    },
    {
      time: "06AM-08AM",
      course: "Weight Loose",
      trainer: "Rachel Adam",
      icon: <FaRunning />,
    },
  ],
  Friday: [
    {
      time: "08AM-09AM",
      course: "Cardio",
      trainer: "Rachel Adam",
      icon: <FaRunning />,
    },
    {
      time: "10AM-12PM",
      course: "Yoga",
      trainer: "Lefew D. Loe",
      icon: <FaSpa />,
    },

    {
      time: "06PM-08PM",
      course: "Karate",
      trainer: "Keaf Shen",
      icon: <FaUserShield />,
    },
  ],
  Saturday: [
    {
      time: "05PM-07PM",
      course: "Fitness",
      trainer: "Rachel Adam",
      icon: <FaDumbbell />,
    },
    {
      time: "07PM-09PM",
      course: "Body Building",
      trainer: "Rachel Adam",
      icon: <FaDumbbell />,
    },
    {
      time: "06AM-08AM",
      course: "Weight Loose",
      trainer: "Rachel Adam",
      icon: <FaRunning />,
    },
  ],
  Sunday: [
    {
      time: "10AM-12PM",
      course: "Aerobics & Skipping",
      trainer: "Lefew D. Loe",
      icon: <FaRunning />,
    },
    {
      time: "08AM-10AM",
      course: "Cardio",
      trainer: "Rachel Adam",
      icon: <FaDumbbell />,
    },
    {
      time: "07PM-09PM",
      course: "Body Building",
      trainer: "Rachel Adam",
      icon: <FaDumbbell />,
    },
    {
      time: "06AM-08AM",
      course: "Weight Loose",
      trainer: "Rachel Adam",
      icon: <FaRunning />,
    },
  ],
};

// Define all time slots
const timeSlots = [
  "06AM-08AM",
  "08AM-10AM",
  "10AM-12PM",
  "12PM-02PM",
  "02PM-04PM",
  "04PM-06PM",
  "06PM-08PM",
  "08PM-10PM",
];

const Timetable = () => {
  const [activeDay, setActiveDay] = useState("Monday");

  return (
    <div className="py-12 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">OUR TIMETABLE</h2>

      {/* Days */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {Object.keys(scheduleData).map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-6 py-3 rounded-full font-semibold text-lg transition-all 
              ${
                activeDay === day
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-black hover:bg-green-400"
              }
            `}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule with 8 time slots */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeDay}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto border-r-2 border-gray-300" // Right border for the whole timetable
        >
          <div className="grid grid-cols-4 md:grid-cols-8 gap-0">
            {" "}
            {/* Removed gap between time slots */}
            {timeSlots.map((timeSlot, idx) => {
              // Find if there's a class at this time slot for the active day
              const classItem = scheduleData[activeDay].find(
                (item) => item.time === timeSlot
              );

              return (
                <div
                  key={idx}
                  className="p-4 flex flex-col items-center text-center min-h-[150px] justify-center relative"
                  style={{
                    borderRight:
                      idx < timeSlots.length - 1 ? "1px solid #e5e7eb" : "none",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  {classItem ? (
                    <>
                      <div className="text-green-600 text-3xl mb-2">
                        {classItem.icon}
                      </div>
                      <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full mb-2">
                        {classItem.time}
                      </span>
                      <h3 className="text-sm font-bold mb-1">
                        {classItem.course}
                      </h3>
                      <p className="text-gray-700 text-xs">
                        {classItem.trainer}
                      </p>
                    </>
                  ) : (
                    <>
                      <span className="text-gray-400 text-xs mb-2">
                        {timeSlot}
                      </span>
                      <p className="text-gray-400 text-sm">No Class</p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Timetable;
