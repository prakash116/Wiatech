import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StarIcon } from "@heroicons/react/24/solid";

function AboutTestimonial() {
  const testimonials = [
    {
      name: "Robert J. Hare",
      role: "Graphics Designer",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere laudantium quo obcaecati! Explicabo, sequi soluta fuga debitis natus reprehenderit ipsam provident illo hic delectus non perspiciatis, odio unde? Quisquam.",
      img: ""
    },
    {
      name: "Sarah Wilson",
      role: "Project Manager",
      text: "Excellent service and support throughout our project. The team was professional and delivered beyond expectations.",
      img: ""
    },
    {
      name: "Mike Johnson",
      role: "CEO Tech Corp",
      text: "Outstanding results! They understood our vision and executed perfectly. Highly recommended!",
      img: ""
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 w-full overflow-hidden">
      <div className="text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-blue-600 font-semibold"
        >
          Our Testimonials
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mt-2"
        >
          1250+ Clients Say <span className="text-blue-600">About Us</span>
        </motion.h1>
      </div>

      <div className="max-w-4xl mx-auto w-full px-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-700 rounded-lg p-4 md:p-6 shadow-lg w-full"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Image Section */}
              <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                <div className="w-32 h-32 md:w-60 md:h-70 bg-gray-200 rounded-md flex items-center justify-center">
                  {testimonials[currentIndex].img ? (
                    <img 
                      src={testimonials[currentIndex].img} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full rounded-md object-cover" 
                    />
                  ) : (
                    <div className="text-2xl text-gray-400">👤</div>
                  )}
                </div>
              </div>
              
              {/* Content Section */}
              <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent overflow */}
                <p className="text-gray-200 text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 leading-relaxed">
                  {testimonials[currentIndex].text}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl lg:text-4xl text-blue-600">"</span>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                      <h1 className="text-lg md:text-xl font-semibold text-gray-100 whitespace-nowrap">
                        {testimonials[currentIndex].name}
                      </h1>
                      <span className="hidden sm:inline text-gray-400">/</span>
                      <span className="text-sm md:text-lg text-blue-300 font-medium">
                        {testimonials[currentIndex].role}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex 
                  ? "bg-blue-600" 
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default React.memo(AboutTestimonial);