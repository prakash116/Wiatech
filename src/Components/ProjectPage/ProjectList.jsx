import React, { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

// Project data array
const projectsData = {
  projects: [
    {
      id: 1,
      number: "01",
      category: "Research",
      title: "Business Website Design",
      type: "business",
      image: "/images/project1.jpg",
      description: "Professional business website design and development"
    },
    {
      id: 2,
      number: "02",
      category: "Research",
      title: "Digital Product Management",
      type: "development",
      image: "/images/project2.jpg",
      description: "Comprehensive digital product management solutions"
    },
    {
      id: 3,
      number: "03",
      category: "Mobile Apps",
      title: "Mobile Apps Development",
      type: "development",
      image: "/images/project3.jpg",
      description: "Cross-platform mobile application development"
    },
    {
      id: 4,
      number: "04",
      category: "Security",
      title: "Cyber Security Audit",
      type: "cyber-security",
      image: "/images/project4.jpg",
      description: "Complete cyber security assessment and audit"
    },
    {
      id: 5,
      number: "05",
      category: "Branding",
      title: "Brand Identity Design",
      type: "branding",
      image: "/images/project5.jpg",
      description: "Creative brand identity and logo design"
    },
    {
      id: 6,
      number: "06",
      category: "Research",
      title: "Business Intelligence",
      type: "business",
      image: "/images/project6.jpg",
      description: "Advanced business intelligence solutions"
    }
  ]
};

const ProjectList = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Filter categories
  const categories = useMemo(() => 
    ["all", "business", "cyber-security", "development", "branding"], 
  []);

  // Filtered projects with useMemo for performance
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projectsData.projects;
    return projectsData.projects.filter(project => project.type === activeFilter);
  }, [activeFilter]);

  // Memoized filter handler
  const handleFilter = useCallback((filter) => {
    setActiveFilter(filter);
  }, []);

  // Memoized hover handlers
  const handleMouseEnter = useCallback((id) => {
    setHoveredProject(id);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredProject(null);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Filter Buttons - Updated design */}
      <div className="flex justify-center items-center gap-3 md:gap-4 flex-wrap mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => handleFilter(category)}
            className={`px-5 py-2.5 md:px-6 md:py-3 rounded-full font-medium text-sm md:text-base transition-all duration-300 capitalize border-2 ${
              activeFilter === category
                ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                : "bg-transparent text-gray-700 border-gray-300 hover:border-blue-400 hover:text-blue-600"
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {category === "all" ? "Show All" : category.replace("-", " ")}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="group cursor-pointer"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
                {/* Image Container - Square size with zoom effect */}
                <div className="relative overflow-hidden aspect-square bg-gray-100">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1 min-w-0">
                      {/* Project number and category */}
                      <motion.div 
                        className="text-sm text-gray-500 mb-3 flex items-center gap-2"
                        whileHover={{ color: "#3B82F6" }}
                      >
                        <span className="font-semibold text-gray-700">{project.number}</span>
                        <span className="text-blue-500 font-bold">____</span>
                        <span>{project.category}</span>
                      </motion.div>
                      
                      {/* Project title with smooth underline animation */}
                      <motion.h2 
                        className="text-lg font-bold text-gray-900 mb-2 relative"
                      >
                        <motion.span
                          className="inline-block relative pb-1"
                          initial={{ color: "#111827" }}
                          whileHover={{ color: "#3B82F6" }}
                          transition={{ duration: 0.3 }}
                        >
                          {project.title}
                          {/* Underline animation - left to right */}
                          <motion.span
                            className="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 rounded-full"
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                          />
                        </motion.span>
                      </motion.h2>

                      {/* Description - hidden by default, shows on hover */}
                      <motion.p 
                        className="text-gray-600 text-sm leading-relaxed"
                        initial={{ opacity: 0, height: 0 }}
                        whileHover={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                      >
                        {project.description}
                      </motion.p>
                    </div>

                    {/* Action Button - Initially hidden, visible on hover */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 10 }}
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0,
                        scale: hoveredProject === project.id ? 1 : 0.8,
                        x: hoveredProject === project.id ? 0 : 10
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="flex-shrink-0"
                    >
                      <motion.button
                        className="p-3 bg-blue-500 hover:bg-orange-200 rounded-full text-white hover:text-blue-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <motion.div
                          initial={{ rotate: -45 }}
                          whileHover={{ rotate: 0 }}
                          transition={{ duration: 0.3, ease: "backOut" }}
                        >
                          <ArrowLongRightIcon className="w-5 h-5" />
                        </motion.div>
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default React.memo(ProjectList);