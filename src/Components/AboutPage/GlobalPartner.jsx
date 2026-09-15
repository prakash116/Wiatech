import React, { useState } from "react";
import { motion } from "framer-motion";

function GlobalPartner() {
  const topBrands = [
    { name: "Addidas", color: "from-red-500 to-black" },
    { name: "Linkedin", color: "from-blue-500 to-blue-700" },
    { name: "Walmart", color: "from-blue-400 to-blue-600" },
    { name: "Trello", color: "from-blue-300 to-blue-500" },
    { name: "Microsoft", color: "from-green-500 to-blue-500" },
    { name: "Google", color: "from-red-500 to-yellow-500" },
  ];

  const bottomBrands = [
    { name: "Spotify", color: "from-green-500 to-green-700" },
    { name: "Amazon", color: "from-orange-400 to-yellow-500" },
    { name: "Flipkart", color: "from-yellow-400 to-blue-500" },
    { name: "Trend", color: "from-purple-500 to-pink-500" },
    { name: "Netflix", color: "from-red-600 to-red-800" },
    { name: "Uber", color: "from-black to-gray-800" },
  ];

  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="py-10 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center mb-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-blue-600 font-semibold"
        >
          Global Partners
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-gray-100 mt-4"
        >
          Trusted by{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            1250+
          </span>{" "}
          Global Partners
        </motion.h1>
      </div>

      <div
        className="space-y-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Top Carousel - Right to Left */}
        <div className="relative overflow-hidden py-4">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

          <motion.div
            className="flex gap-8"
            animate={isPaused ? { x: "0%" } : { x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...topBrands, ...topBrands].map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 px-8 py-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-600"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${brand.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <span className="text-white font-bold text-sm">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <span className="text-white font-bold text-lg">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Carousel - Left to Right */}
        <div
          className="relative overflow-hidden py-4"
        >
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>

          <motion.div
            className="flex gap-8"
            animate={isPaused ? { x: "0%" } : { x: ["-50%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {[...bottomBrands, ...bottomBrands].map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex-shrink-0 px-8 py-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${brand.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <span className="text-white font-bold text-sm">
                    {brand.name.charAt(0)}
                  </span>
                </div>
                <span className="text-white font-bold text-lg">
                  {brand.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(GlobalPartner);
