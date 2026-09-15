import React, { useState, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FAQ = memo(function FAQ() {
  const [activeFilter, setActiveFilter] = useState("General");
  const [openQuestion, setOpenQuestion] = useState(null);

 const faqData = {
  General: [
    {
      id: 1,
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary depending on scope and complexity. As a guideline, standard web/mobile MVPs can be delivered in ~8-12 weeks; larger enterprise systems may take several months. We’ll provide a refined estimate after the initial consultation."
    },
    {
      id: 2,
      question: "Which industries do you serve?",
      answer:
        "We’ve worked across manufacturing, logistics, retail, healthcare, fintech and more. Regardless of your domain, we tailor our solutions to your specific business context."
    },
    {
      id: 3,
      question: "What technologies do you use?",
      answer:
        "We specialise in JavaScript/TypeScript (including Node.js, React/React Native), Python, .NET, cloud platforms (AWS, Azure, GCP), IoT protocols & embedded systems—selecting the best tool for your goals."
    },
    {
      id: 4,
      question: "How is pricing structured?",
      answer:
        "We offer flexible models: fixed-scope projects, time-&-materials engagements or monthly retainer for ongoing support. During our free consultation, we’ll recommend the best pricing model for you."
    }
  ]
};


  const filters = ["General", "Service", "Product", "Team", "Pricing"];

  const toggleQuestion = useCallback((id) => {
    setOpenQuestion(prev => prev === id ? null : id);
  }, []);

  const currentFAQs = faqData[activeFilter] || [];

  return (
    <div className="w-full flex flex-col lg:flex-row px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl mx-auto">
      {/* Left Container */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="w-full lg:w-[40%] mb-8 lg:mb-0 lg:pr-8"
      >
        <h1 className="text-lg sm:text-xl text-blue-600 font-semibold mb-2">
          FAQ
        </h1>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked <br />
          Questions
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
          Sed ut perspiciatis unde omniste natus voluptatem accusantiume rem 
          aperia eaque quae abillo inventore veritatis quasi architecto beatae vitae
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
        >
          Read More
        </motion.button>
      </motion.div>

      {/* Right Container */}
      <div className="w-full lg:w-[60%]">
        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-start gap-2 mb-6"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveFilter(filter);
                setOpenQuestion(null); // Close any open question when filter changes
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* FAQ List */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {currentFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="w-full border-b border-gray-200 pb-4"
            >
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleQuestion(faq.id)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <motion.button
                  animate={{ rotate: openQuestion === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDownIcon className="w-5 h-5 text-gray-600" />
                </motion.button>
              </div>
              <AnimatePresence>
                {openQuestion === faq.id && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-600 mt-3 leading-relaxed overflow-hidden"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
});

export default FAQ;