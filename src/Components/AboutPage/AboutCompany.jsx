import React from "react";
import { motion } from "framer-motion";
import { UserGroupIcon, TrophyIcon } from "@heroicons/react/24/outline";

function AboutCompany() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex-1 p-5">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg font-bold text-blue-600"
        >
          About Company
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2"
        >
          Make your life easier with help from <span className="text-blue-600 dark:text-blue-400">Wiatech</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 space-y-2"
        >
          <p className="text-gray-700">Professional Team Member</p>
          <p className="text-gray-700">Awards Winning IT Solutions Company</p>
          <p className="text-gray-700">Dedicated Tech Services</p>
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
        >
          Read More
        </motion.button>
      </div>
      
      <div className="flex-1 p-4">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          src="/AboutCompany.jpg"
          alt=""
          className="w-full object-cover h-64 lg:h-90 bg-gray-200 dark:bg-gray-700 rounded-lg"
        />
      </div>
      
      <div className="flex-1 p-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
            We've <span className="text-blue-600 dark:text-blue-400">25+ Years</span> Of Experience In Tech Services
          </h1>
          <p className="text-gray-700 mt-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium totam rem aperiam, eaque epsa
            inventore
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex mt-6 space-x-4"
        >
          <div className="flex-1 text-center">
            <UserGroupIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto" />
            <div className="text-2xl font-bold text-gray-900 mt-2">56K+</div>
            <p className="text-gray-600 ">Satisfied Customers</p>
          </div>
          <div className="flex-1 text-center">
            <TrophyIcon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto" />
            <div className="text-2xl font-bold text-gray-900 mt-2">56M+</div>
            <p className="text-gray-600">Project Complete</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default React.memo(AboutCompany);