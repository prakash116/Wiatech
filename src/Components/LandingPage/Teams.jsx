import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Teams() {
  const [activeClient, setActiveClient] = useState(0);
  const [hoveredClient, setHoveredClient] = useState(null);

  const clients = useMemo(() => [
    { id: 1, name: "George C. Anderson", position: "Senior Manager", image: "/George.jpg" },
    { id: 2, name: "Olivia Brown", position: "Marketing Lead", image: "/Olivia.jpg" },
    { id: 3, name: "James Smith", position: "Project Manager", image: "/James.jpg" },
    { id: 4, name: "Sophia Taylor", position: "UI/UX Designer", image: "/Sofia_Mechetner.jpg" }
  ], []);

  const getThumbnails = () => {
    return clients.filter((_, index) => index !== activeClient).slice(0, 3);
  };

  const handleClientHover = (index) => {
    setHoveredClient(index);
    setActiveClient(index);
  };

  const ArrowIcon = ({ isHovered }) => (
    <motion.svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      initial={{ rotate: -45 }}
      animate={{ rotate: isHovered ? 0 : -45 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      aria-hidden="true" // Hide from screen readers since we have text label
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </motion.svg>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-blue-50">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-blue-600 font-semibold text-lg mb-3">Meet Our Team</h1>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          We have Exclusive Team members <br /> Meet our Professionals
        </h1>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Side - Team Members List */}
        <div className="w-full lg:w-1/2">
          {clients.map((client, index) => {
            const isHovered = hoveredClient === index || activeClient === index;
            return (
              <motion.div
                key={client.id}
                className={`relative flex items-center gap-6 py-6 px-4 cursor-pointer group transition-all duration-300 ${
                  isHovered 
                    ? "border-blue-500" 
                    : "border-gray-200"
                }`}
                style={{
                  borderBottom: "2px solid",
                  borderBottomColor: isHovered ? "#3B82F6" : "#E5E7EB"
                }}
                onMouseEnter={() => handleClientHover(index)}
                onMouseLeave={() => setHoveredClient(null)}
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.05)" }}
                role="listitem"
                aria-label={`Team member: ${client.name}, ${client.position}`}
              >
                {/* Index Number */}
                <div className="flex-shrink-0">
                  <span className="text-2xl font-bold text-gray-400 group-hover:text-blue-600 transition-colors duration-300">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                </div>

                {/* Name and Position */}
                <div className="flex-grow">
                  <div className="relative inline-block">
                    <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                      {client.name}
                    </h2>
                    {/* Smooth Underline Animation */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600"
                      initial={false}
                      animate={{ 
                        width: isHovered ? "100%" : "0%",
                        transition: { duration: 0.4, ease: "easeInOut" }
                      }}
                    />
                  </div>
                  <p className="text-gray-600 text-sm mt-1">{client.position}</p>
                </div>

                {/* Arrow Button with Individual Hover Animation */}
                <motion.button
                  className={`p-3 rounded-full transition-all duration-300 ${
                    isHovered 
                      ? "bg-blue-600 text-white" 
                      : "bg-gray-100 text-gray-600"
                  }`}
                  whileHover={{ 
                    scale: 1.1,
                    x: 4,
                    transition: { 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 10 
                    }
                  }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`View details for ${client.name}`}
                >
                  <ArrowIcon isHovered={isHovered} />
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Right Side - Image Area */}
        <div className="w-full lg:w-1/2 md:h-[420px]">
          <div className="flex flex-col lg:flex-row gap-1">
            {/* Main Image Container - Perfect Square */}
            <div className="w-full lg:w-2/3 h-full">
              <div className="relative md:h-[420px] overflow-hidden bg-gray-100 shadow-lg">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeClient}
                    src={clients[activeClient].image}
                    alt={`Portrait of ${clients[activeClient].name}, ${clients[activeClient].position}`}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  />
                </AnimatePresence>
                
                {/* Image Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {clients[activeClient].name}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {clients[activeClient].position}
                  </p>
                </div>
              </div>
            </div>

            {/* Thumbnail Images - Also Square */}
            <div className="w-full lg:w-1/3 md:h-[420px] flex lg:flex-col gap-1">
              {getThumbnails().map((client, index) => (
                <motion.button
                  key={client.id}
                  className="flex-1 overflow-hidden bg-gray-100 cursor-pointer shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveClient(clients.findIndex(c => c.id === client.id))}
                  aria-label={`View ${client.name}'s profile`}
                >
                  <img
                    src={client.image}
                    alt={`Thumbnail portrait of ${client.name}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teams;