import React from "react";

// Import your images (replace these with your actual image imports)
import img1 from "../assets/slider-1.jpg";
import img2 from "../assets/slider-2.jpg";
import img3 from "../assets/slider-1.jpg";
import img4 from "../assets/slider-3.jpg";
import img5 from "../assets/slider-2.jpg";
import img6 from "../assets/slider-3.jpg";
import img7 from "../assets/slider-1.jpg";


const ImageGallery = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="">
      <h2 className="text-3xl font-bold text-center mb-8">OUR GALLERY</h2>
      
      <div className="grid grid-cols-7 sm:grid-cols-2 md:grid-cols-3 gap-0"> {/* No gap between images */}
        {images.map((image, index) => (
          <div 
            key={index} 
            className="overflow-hidden relative group"
            style={{ height: "300px" }}
          >
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Optional overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;