import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  GlobeAltIcon 
} from "@heroicons/react/24/outline";

// Social Icons Components
const FacebookIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.22 14.765 3.73 13.614 3.73 12.317s.49-2.448 1.396-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.906.875 1.396 2.026 1.396 3.323s-.49 2.448-1.396 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: ""
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  }, [formData]);

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Phone",
      content: "+91-(Your Number)"
    },
    {
      icon: EnvelopeIcon,
      title: "Email",
      content: "contact@skaurinternational.com"
    },
    {
      icon: MapPinIcon,
      title: "Address",
      content: "Delhi, India"
    },
    {
      icon: GlobeAltIcon,
      title: "Social",
      content: "social",
      social: true
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row w-full p-4 sm:p-6 lg:p-10 gap-6 lg:gap-8 bg-white">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-2 sm:p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-lg text-blue-600 font-semibold mb-2">Get In Touch</h1>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-black font-bold mb-4 leading-tight">
            Let's Collaborate And <br />
            Build What's Next
          </h1>
          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
            Fill out the form below or schedule a call with one of our senior advisors.
          </p>
          <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
            We look forward to learning about your project—what you're trying to achieve, 
            your timeframe, your challenges—and together we'll craft a plan to make it happen.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex w-full gap-4"
            >
              <span className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <item.icon className="w-6 h-6 text-blue-600" />
              </span>
              <div className="flex-1">
                <h1 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h1>
                {item.social ? (
                  <div className="flex gap-3">
                    <FacebookIcon className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer transition-colors" />
                    <TwitterIcon className="w-5 h-5 text-gray-600 hover:text-blue-400 cursor-pointer transition-colors" />
                    <InstagramIcon className="w-5 h-5 text-gray-600 hover:text-pink-600 cursor-pointer transition-colors" />
                    <LinkedinIcon className="w-5 h-5 text-gray-600 hover:text-blue-700 cursor-pointer transition-colors" />
                  </div>
                ) : (
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {item.content}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8"
        >
          <img 
            src="/api/placeholder/400/114" 
            alt="Contact visual"
            className="w-full h-auto object-cover rounded-lg shadow-md"
            style={{ aspectRatio: "3.5 / 1" }}
          />
        </motion.div>
      </div>

      {/* Right Section - Form */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 p-4 sm:p-6 lg:p-8 bg-amber-50 rounded-xl shadow-sm"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-xl sm:text-2xl text-gray-900 font-semibold mb-2">
            Send Us Message
          </h1>
          
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
              placeholder="Enter your email address"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="website" className="text-sm font-medium text-gray-700">
              Website
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none"
              placeholder="Enter your website URL"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-none"
              placeholder="Enter your message..."
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default React.memo(GetInTouch);