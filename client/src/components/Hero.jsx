// src/components/HeroSection.jsx
import Slider from "react-slick";
import slider1 from "../assets/slider-1.jpg";
import slider2 from "../assets/slider-2.jpg";
import slider3 from "../assets/slider-3.jpg";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const slides = [slider1, slider2, slider3];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-[600px] max-w-7xl mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            {/* Background image */}
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-[600px] object-cover"
            />

            {/* Overlay text */}
            <div className="absolute bottom-16 left-10 md:left-20 z-20">
              <div className="bg-black/50 p-6 rounded-xl max-w-xl">
                <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-400 mb-4 drop-shadow-2xl leading-tight">
                  Fitness Complex Gym
                </h1>
                <p className="text-3xl md:text-4xl text-white mb-6 drop-shadow-lg">
                  For Athletic Women
                </p>
                <button
                  onClick={scrollToContact}
                  className="bg-green-500 hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 text-lg"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Hero;
