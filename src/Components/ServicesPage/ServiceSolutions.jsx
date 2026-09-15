import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

function ServiceSolutions() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredText, setHoveredText] = useState(null);

  const services = [
    {
      id: 1,
      title: "Small Business",
      description: "Defense Arsenal Unveiling Our Cyber Security Suite",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      title: "Enterprise Solutions",
      description: "Advanced Threat Protection for Large Organizations",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      title: "Cloud Security",
      description: "Secure Your Cloud Infrastructure with Best Practices",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="w-full flex flex-col lg:flex-row gap-8 mb-12">
        <div className="w-full lg:w-[70%]">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-600 text-lg font-semibold mb-4"
          >
            Optimize Security Solutions
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-bold text-3xl sm:text-4xl lg:text-5xl text-black mb-6"
          >
            Comprehensive Protection <br className="hidden sm:block" /> for{" "}
            <span className="text-blue-600">your Business</span>
          </motion.h1>
        </div>
        
        <div className="w-full lg:w-[30%] space-y-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            Metrics for improving your site's performance over time security measures like systems
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <CheckBadgeIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
            <span className="text-gray-800">Professional Team Member</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <CheckBadgeIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
            <span className="text-gray-800">Awards Winning IT Solutions Company</span>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            onHoverStart={() => setHoveredCard(service.id)}
            onHoverEnd={() => setHoveredCard(null)}
            className="w-full group cursor-pointer"
          >
            {/* Image Container */}
            <motion.div 
              className="w-full h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <h3 className="font-bold text-xl text-black mb-4">
              {service.title}
            </h3>
            
            <hr className="border-gray-300 mb-6" />
            
            <div className="flex items-start gap-4">
              {/* Number Badge */}
              <motion.span 
                className={`p-4 h-14 w-16 text-center rounded-full font-semibold transition-colors duration-300 ${
                  hoveredCard === service.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-orange-200 text-black'
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                {service.id}
              </motion.span>
              
              {/* Text with Hover Effect */}
              <div 
                className="relative"
                onMouseEnter={() => setHoveredText(service.id)}
                onMouseLeave={() => setHoveredText(null)}
              >
                <motion.h4 
                  className={`font-semibold text-lg transition-colors duration-300 ${
                    hoveredText === service.id ? 'text-blue-600' : 'text-gray-800'
                  }`}
                >
                  {service.description}
                </motion.h4>
                
                {/* Animated Underline */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredText === service.id ? '100%' : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSolutions;