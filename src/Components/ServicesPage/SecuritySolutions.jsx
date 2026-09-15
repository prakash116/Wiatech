import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import StatsCard from "./StatsCard";

function SecuritySolutions() {
  const [openItems, setOpenItems] = useState([0]); // First item open by default

  const toggleItem = useCallback((index) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  }, []);

  const faqItems = [
    {
      question: "Network Security & Protection",
      answer:
        "Accelerate innovation with world-class tech teams We'll match you to an entire remote team.",
    },
    {
      question: "Infrastructure Technology",
      answer:
        "Accelerate innovation with world-class tech teams We'll match you to an entire remote team.",
    },
    {
      question: "Browser Safety & Firewall",
      answer:
        "Accelerate innovation with world-class tech teams We'll match you to an entire remote team.",
    },
    {
      question: "Management & Support Services",
      answer:
        "Accelerate innovation with world-class tech teams We'll match you to an entire remote team.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-12"
          >
            <h1 className="text-base sm:text-lg text-blue-600 font-semibold mb-3 sm:mb-4">
              Cyber Security Solutions
            </h1>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-snug sm:leading-tight">
              Highly Tailored IT <br className="hidden sm:block" />
              Design, Management <br className="hidden sm:block" />& Support{" "}
              <span className="text-blue-500">Services</span>
            </h1>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-l-2 border-blue-600 pl-4 sm:pl-6 space-y-4 sm:space-y-6"
          >
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer group"
                onClick={() => toggleItem(index)}
              >
                <div className="flex justify-between items-start gap-4">
                  <h1 className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300 flex-1">
                    {item.question}
                  </h1>
                  <motion.span
                    animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ChevronDownIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                  </motion.span>
                </div>

                <AnimatePresence>
                  {openItems.includes(index) && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-3 pr-4 sm:pr-6 overflow-hidden"
                    >
                      {item.answer}
                    </motion.p>
                  )}
                </AnimatePresence>

                {index < faqItems.length - 1 && (
                  <hr className="border-gray-200 mt-4 sm:mt-6" />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full lg:w-[80%] h-64 sm:h-80 lg:h-[550px] overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="/api/placeholder/600/500"
              alt="Cyber Security Solutions"
              className="w-full h-full object-cover bg-gray-200"
              loading="lazy"
            />
          </motion.div>

          {/* Stats Container - Positioned absolutely as per design */}
          <div className="hidden md:block absolute bottom-20 right-4 lg:right-65 w-[45%] sm:w-[35%] lg:w-[50%]">
            <StatsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SecuritySolutions);
