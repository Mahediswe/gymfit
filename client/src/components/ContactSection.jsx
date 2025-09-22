// import React from "react";

// const ContactSection = () => {
//   return (
//     <section className="w-full min-h-[600px] flex sm:flex-col lg:flex-row gap-6">
//       {/* Left Side - Contact Form */}
//       <div className="w-full md:w-1/2 bg-black/70 text-white flex items-center justify-center p-10 bg-cover bg-center " 
//         style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1')" }}>
        
//         <div className="w-full max-w-md">
//           <h2 className="text-2xl font-bold mb-6">GET IN TOUCH</h2>
//           <form className="space-y-6">
//             <input
//               type="text"
//               placeholder="Name"
//               className="w-full bg-transparent border-b border-gray-400 focus:outline-none p-2"
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full bg-transparent border-b border-gray-400 focus:outline-none p-2"
//             />
//             <input
//               type="text"
//               placeholder="Phone"
//               className="w-full bg-transparent border-b border-gray-400 focus:outline-none p-2"
//             />
//             <textarea
//               placeholder="Message"
//               className="w-full bg-transparent border-b border-gray-400 focus:outline-none p-2 h-24"
//             ></textarea>
//             <button
//               type="submit"
//               className="bg-green-500 text-black font-bold px-6 py-2 mt-4 rounded hover:bg-green-600"
//             >
//               SEND MESSAGE
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Right Side - Google Map */}
//       <div className="w-full md:w-1/2">
//         <iframe
//           title="Google Map"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.901110023325!2d90.39124621498146!3d23.750885984588254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4d36d2a1a1%3A0x6a4f7c14d8c1c8d6!2sDhaka!5e0!3m2!1sen!2sbd!4v1693660258589!5m2!1sen!2sbd"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           className="h-full"
//         ></iframe>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React from "react";

const ContactSection = () => {
  return (
    <section className="w-full min-h-screen grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 object-cover ">
      {/* Left Side - Contact Form */}
      <div className="w-full lg:w-1/2 bg-black/70 text-white flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605296867304-46d5465a13f1')" }}>
        
        <div className="w-full max-w-md">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">GET IN TOUCH</h2>
          <form className="space-y-4 sm:space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none p-2 focus:border-white transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none p-2 focus:border-white transition-colors"
            />
            <input
              type="text"
              placeholder="Phone"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none p-2 focus:border-white transition-colors"
            />
            <textarea
              placeholder="Message"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none p-2 h-20 sm:h-24 focus:border-white transition-colors resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-black font-bold px-8 py-3 mt-4 rounded hover:bg-green-600 transition-colors w-full sm:w-auto"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* Right Side - Google Map */}
      <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-auto">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.901110023325!2d90.39124621498146!3d23.750885984588254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4d36d2a1a1%3A0x6a4f7c14d8c1c8d6!2sDhaka!5e0!3m2!1sen!2sbd!4v1693660258589!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-[400px] lg:min-h-[600px]"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;