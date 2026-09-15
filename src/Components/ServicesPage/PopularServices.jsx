import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ComputerDesktopIcon, 
  ShieldCheckIcon, 
  ServerIcon, 
  ChartBarIcon,
  BuildingStorefrontIcon,
  WrenchScrewdriverIcon,
  MagnifyingGlassIcon,
  CodeBracketIcon
} from "@heroicons/react/24/outline";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

function PopularServices() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const services = [
    {
      id: 1,
      number: "01",
      title: "Product Design",
      description: "We approached WiaTech with complex project deliver",
      icon: ComputerDesktopIcon
    },
    {
      id: 2,
      number: "02",
      title: "IT Management",
      description: "We approached WiaTech with complex project deliver",
      icon: WrenchScrewdriverIcon
    },
    {
      id: 3,
      number: "03",
      title: "Data Security",
      description: "We approached WiaTech with complex project deliver",
      icon: ShieldCheckIcon
    },
    {
      id: 4,
      number: "04",
      title: "Infrastructure Plan",
      description: "We approached WiaTech with complex project deliver",
      icon: ServerIcon
    },
    {
      id: 5,
      number: "05",
      title: "Firewall Advancement",
      description: "We approached WiaTech with complex project deliver",
      icon: ChartBarIcon
    },
    {
      id: 6,
      number: "06",
      title: "Desktop Computing",
      description: "We approached WiaTech with complex project deliver",
      icon: BuildingStorefrontIcon
    },
    {
      id: 7,
      number: "07",
      title: "Market Research",
      description: "We approached WiaTech with complex project deliver",
      icon: MagnifyingGlassIcon
    },
    {
      id: 8,
      number: "08",
      title: "Web Development",
      description: "We approached WiaTech with complex project deliver",
      icon: CodeBracketIcon
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-100">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full text-center mb-12"
      >
        <h1 className="text-lg text-blue-600 font-semibold mb-3">
          Popular Services
        </h1>
        <h1 className="text-3xl sm:text-4xl font-bold text-black">
          Services We Provide
        </h1>
      </motion.div>

      {/* Services Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                backgroundColor: "#2563eb",
                color: "White"
              }}
              onHoverStart={() => setHoveredItem(service.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className="w-full shadow p-6 border-white group cursor-pointer transition-all duration-300 relative overflow-hidden"
            >
              {/* Header with Number and Icon */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200 group-hover:border-white transition-colors duration-300">
                <h2 className="text-2xl font-bold text-gray-400 group-hover:text-white transition-colors duration-300">
                  {service.number}
                </h2>
                
                <motion.span
                  animate={{ 
                    rotate: hoveredItem === service.id ? 10 : 0,
                    scale: hoveredItem === service.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent 
                    className={`w-8 h-8 transition-colors duration-300 ${
                      hoveredItem === service.id 
                        ? 'text-white' 
                        : 'text-blue-600'
                    }`}
                  />
                </motion.span>
              </div>

              {/* Content Section */}
              <div className="relative">
                <h3 className="font-bold text-lg mb-3 text-black group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 mb-6">
                  {service.description}
                </p>
                <br />
                {/* Arrow Icon - Shows on Hover */}
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: hoveredItem === service.id ? 1 : 0,
                    x: hoveredItem === service.id ? 0 : -10,
                    rotate: hoveredItem === service.id ? -45 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left -0"
                >
                  <ArrowLongRightIcon className="w-6 h-6 text-white" />
                </motion.span>
              </div>

              {/* Background Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-5 pointer-events-none"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default PopularServices;