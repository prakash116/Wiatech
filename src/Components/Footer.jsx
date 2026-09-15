import React from "react";
import { motion } from "framer-motion";
import { 
  CubeIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';

function Footer() {
  const socialIcons = [
    { icon: UserGroupIcon, color: "hover:text-blue-600", label: "Facebook" },
    { icon: PhoneIcon, color: "hover:text-blue-400", label: "Twitter" },
    { icon: EnvelopeIcon, color: "hover:text-blue-700", label: "LinkedIn" },
    { icon: ShieldCheckIcon, color: "hover:text-pink-600", label: "Instagram" },
    { icon: CloudIcon, color: "hover:text-red-600", label: "YouTube" }
  ];

  const itServices = [
    { name: "IT Consultancy", icon: ChatBubbleLeftRightIcon },
    { name: "IT Management", icon: UserGroupIcon },
    { name: "IT Supports", icon: QuestionMarkCircleIcon },
    { name: "Cloud Computing", icon: CloudIcon },
    { name: "Cyber Security", icon: ShieldCheckIcon }
  ];

  const supportLinks = [
    { name: "Forum Support", icon: ChatBubbleLeftRightIcon },
    { name: "Help & FAQ", icon: QuestionMarkCircleIcon },
    { name: "Contact Us", icon: PhoneIcon },
    { name: "Pricing and plans", icon: CurrencyDollarIcon },
    { name: "Cookies Policy", icon: DocumentTextIcon }
  ];

  return (
    <motion.div 
      className="w-full flex flex-col lg:flex-row gap-12 p-6 md:p-8 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      {/* Company Info */}
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex items-center gap-3">
          <motion.div 
            className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <CubeIcon className="w-6 h-6 text-white" />
          </motion.div>
          <motion.h1 
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            WiaTech
          </motion.h1>
        </div>
        
        <motion.p 
          className="text-gray-300 leading-relaxed text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Sed ut persiciatis unde omnis natus voluptatem accusantium dolore
        </motion.p>
        
        <motion.h1 
          className="text-xl font-semibold text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Follow Us
        </motion.h1>
        
        <motion.div 
          className="flex gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {socialIcons.map((SocialIcon, index) => (
            <motion.a
              key={index}
              href="#"
              className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 transition-all duration-300 ${SocialIcon.color} hover:bg-gray-700`}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={SocialIcon.label}
            >
              <SocialIcon.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* IT Services */}
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.h1 
          className="text-xl font-semibold text-white"
          whileHover={{ x: 5 }}
        >
          IT Services
        </motion.h1>
        
        <div className="space-y-3">
          {itServices.map((service, index) => (
            <motion.a
              key={index}
              href="#"
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 text-lg group"
              whileHover={{ x: 10, color: "#60A5FA" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <service.icon className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
              {service.name}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Support */}
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.h1 
          className="text-xl font-semibold text-white"
          whileHover={{ x: 5 }}
        >
          Support
        </motion.h1>
        
        <div className="space-y-3">
          {supportLinks.map((link, index) => (
            <motion.a
              key={index}
              href="#"
              className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-200 text-lg group"
              whileHover={{ x: 10, color: "#60A5FA" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <link.icon className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform duration-200" />
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Newsletter */}
      <motion.div 
        className="flex-1 space-y-6"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.h1 
          className="text-xl font-semibold text-white"
          whileHover={{ x: 5 }}
        >
          Newsletter
        </motion.h1>
        
        <motion.p 
          className="text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Subscribe our newsletter to get more updates
        </motion.p>
        
        <motion.div 
          className="flex border p-1 rounded-full h-[50px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <input 
            type="text" 
            placeholder="Enter your email"
            className="flex-1 h-full px-4 bg-gray-800 border border-gray-700 rounded-l-full outline-none text-white placeholder-gray-400 transition-all duration-200"
          />
          <motion.button
            className="px-6 h-full bg-blue-600 text-white rounded-r-full font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PaperAirplaneIcon className="w-4 h-4" />
            Sign Up
          </motion.button>
        </motion.div>
        
        <motion.p 
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          By subscribing, you're accept{" "}
          <motion.span 
            className="text-blue-400 hover:text-blue-300 cursor-pointer underline"
            whileHover={{ scale: 1.05 }}
          >
            Privacy Policy
          </motion.span>
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export default React.memo(Footer);