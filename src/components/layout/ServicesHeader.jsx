import React from 'react';
import { motion } from 'framer-motion';

const ServicesHeader = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white overflow-hidden h-140">
      <div className="max-w-6xl mx-auto px-6 py-24 text-center relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-white to-amber-200"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          At <span className="font-semibold text-white">Kamal Legal FinTax Pro Solution</span>, we provide a wide array of expert services in
          <span className="font-medium text-amber-200"> legal, taxation, business compliance, and registration</span>. Whether you're an individual, startup, or enterprise, we ensure smooth operations and full regulatory compliance.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          From <span className="text-white font-semibold">GST & Income Tax solutions</span> to <span className="text-white font-semibold">company formation, licensing</span>, and corporate legal services — our experienced professionals are here to support you every step of the way.
        </motion.p>
      </div>

      {/* Wave Shape Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 rotate-180 z-0">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 1200 120" preserveAspectRatio="none"
             className="relative block w-full h-16 md:h-24">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,
            172-41.86,82.39-16.72,168.19-17.73,
            250.45-.39C823.78,31,906.67,72,985.66,
            92.83c70.05,18.48,146.53,26.09,
            214.34,3V0H0V27.35A600.21,600.21,
            0,0,0,321.39,56.44Z"
            className="fill-gray-50 to-white">
          </path>
        </svg>
      </div>

      {/* Animated Gradient Dots */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-4 h-4 rounded-full bg-amber-300 opacity-20 top-1/4 left-1/4 animate-pulse" />
        <div className="absolute w-6 h-6 rounded-full bg-purple-300 opacity-20 top-3/4 left-1/2 animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute w-3 h-3 rounded-full bg-indigo-300 opacity-20 top-1/3 left-3/4 animate-pulse" style={{ animationDelay: "2s" }} />
      </div>
    </section>
  );
};

export default ServicesHeader;
