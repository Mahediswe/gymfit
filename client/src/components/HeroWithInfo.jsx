import React from "react";
import { FaDumbbell, FaRunning, FaHeartbeat, FaAppleAlt } from "react-icons/fa";
import Hero from "./Hero";

const HeroWithInfo = () => {
  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <div>
        <Hero />
      </div>

      {/* Info Cards Section */}
      <div className="relative z-10 -mt-20 px-4 sm:px-8 lg:px-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-1 sm: grid-cols-1 gap-8">
          {/* Opening Hours Card */}
          <div className="relative bg-black/80 text-white p-10 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg')",
              }}
            ></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold mb-6 border-b-4 border-green-500 inline-block pb-2">
                Opening Hours
              </h2>
              <div className="grid grid-cols-2 gap-6 text-lg font-semibold">
                <div className="space-y-2">
                  <p>Mon - Sat</p>
                  <p className="text-green-400">8:30 AM - 6:00 PM</p>
                </div>
                <div className="space-y-2">
                  <p>Sunday</p>
                  <p className="text-green-400">8:30 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Services Card */}
          <div className="relative bg-black/80 text-white p-10 rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-500">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg')",
              }}
            ></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold mb-6 border-b-4 border-green-500 inline-block pb-2">
                Our Services
              </h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <FaDumbbell className="text-green-500 text-4xl mr-5" />
                  <div>
                    <h3 className="font-bold text-xl">Personal Training</h3>
                    <p className="text-sm opacity-80">
                      Get one-on-one guidance from our expert trainers.
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <FaRunning className="text-green-500 text-4xl mr-5" />
                  <div>
                    <h3 className="font-bold text-xl">Fat Loss Program</h3>
                    <p className="text-sm opacity-80">
                      Achieve your fitness goals with our specialized plans.
                    </p>
                  </div>
                </div> */}

                <div className="flex items-start">
                  <FaHeartbeat className="text-green-500 text-4xl mr-5" />
                  <div>
                    <h3 className="font-bold text-xl">Cardio Training</h3>
                    <p className="text-sm opacity-80">
                      Improve stamina and endurance with high-energy workouts.
                    </p>
                  </div>
                </div>

                {/* <div className="flex items-start">
                  <FaAppleAlt className="text-green-500 text-4xl mr-5" />
                  <div>
                    <h3 className="font-bold text-xl">Nutrition Plans</h3>
                    <p className="text-sm opacity-80">
                      Customized meal plans to complement your fitness journey.
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default HeroWithInfo;
