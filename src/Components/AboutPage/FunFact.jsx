import React from "react";
import { motion } from "framer-motion";
import { TrophyIcon, UserGroupIcon, StarIcon } from "@heroicons/react/24/outline";

function FunFact() {
  return (
    <div className="flex flex-col md:flex-row p-4 bg-gray-100">
      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-blue-600 font-semibold"
        >
          Company Fun Fact
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-3xl font-bold text-gray-900 mt-2"
        >
          Behind the Scenes <br />
          Surprising Fun Facts <br />
          About Wiatech
        </motion.h1>
      </div>
      
      <div className="flex gap-4 mt-6 md:mt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex-1 text-center p-4"
        >
          <TrophyIcon className="w-8 h-8 text-blue-600 mx-auto" />
          <div className="text-2xl font-bold text-gray-900 mt-2">5K+</div>
          <p className="text-gray-700 font-semibold">Project Complete</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex-1 text-center p-4"
        >
          <UserGroupIcon className="w-8 h-8 text-blue-600 mx-auto" />
          <div className="text-2xl font-bold text-gray-900 mt-2">3K+</div>
          <p className="text-gray-700 font-semibold">Satisficed Clients</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex-1 text-center p-4"
        >
          <StarIcon className="w-8 h-8 text-blue-600 mx-auto" />
          <div className="text-2xl font-bold text-gray-900 mt-2">85+</div>
          <p className="text-gray-700 font-semibold">Awards Winning</p>
        </motion.div>
      </div>
    </div>
  );
}

export default React.memo(FunFact);