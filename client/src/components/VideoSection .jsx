import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import img from '../assets/slider-1.jpg';

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative h-[400px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${img})`, // Fixed this line
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // key part → parallax effect
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        {/* Play Icon */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-20 h-20 flex items-center justify-center rounded-full bg-green-600 cursor-pointer mb-6 shadow-lg"
        >
          <FaPlay className="text-3xl" />
        </motion.div>

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">Experience Our Training</h2>

        {/* Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 bg-green-600 rounded-full text-lg font-semibold hover:bg-green-500 transition"
        >
          Watch Now
        </button>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative w-full max-w-3xl aspect-video">
              {/* YouTube iframe */}
              <iframe
                className="w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Training Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>

              {/* Close button */}
              <button
                className="absolute -top-10 right-0 text-white text-2xl"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoSection;