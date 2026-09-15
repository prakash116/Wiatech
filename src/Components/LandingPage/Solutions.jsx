import React from "react";
import { motion } from "framer-motion";

function Solutions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const progressData = [
    { percentage: 68, label: "Strategy", sublabel: "Business" },
    { percentage: 93, label: "Solutions", sublabel: "Technology" },
  ];

  // Circular Progress Component
  const CircularProgress = ({ percentage, label, sublabel }) => {
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row gap-4 items-center text-center sm:text-left"
      >
        <div className="relative w-20 h-20">
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 140 140"
          >
            <circle
              cx="70"
              cy="70"
              r={radius}
              stroke="#e2e8f0"
              strokeWidth="8"
              fill="none"
            />
            <motion.circle
              cx="70"
              cy="70"
              r={radius}
              stroke="#3b82f6"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference}
              whileInView={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold text-gray-900">
              {percentage}%
            </span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {sublabel}
          </h3>
          <p className="text-lg font-semibold text-gray-900">{label}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50/30 py-12 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-lg md:text-2xl lg:text-2xl font-bold text-blue-600 leading-tight">
                Best IT Solutions
              </h1>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight">
                We Provide Truly Prominent IT Solutions
              </h2>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                We denounce with righteous indignation and dislike men who are
                so beguiled and demoralized by the charms of pleasure of the
                moment, so blinded by desire that they cannot foresee the pain
                and trouble that are bound to ensue.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="py-4">
              <div className="flex justify-center md:justify-start items-center sm:items-start gap-12 sm:gap-12">
                {progressData.map((item, index) => (
                  <CircularProgress key={index} {...item} />
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center gap-6 pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto text-center"
              >
                Read More
              </motion.button>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="flex -space-x-3">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span className="font-medium">10m+ Customers</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://themesflat.co/html/wiatech/assets/images/page/feature-h1.jpg"
                alt="IT Solutions"
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/5] lg:aspect-[3/4]"
              />

              {/* Overlay Stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 right-6 lg:right-auto lg:w-1/2 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-3xl font-bold text-gray-900">25+</h3>
                  <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1 rounded-full">
                    <span className="text-yellow-500 font-bold">4.9</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">Years Of Experience</p>
                <div className="flex items-center gap-2">
                  <div className="flex text-blue-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-4 h-4 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-700 font-medium">Trustpoint</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;