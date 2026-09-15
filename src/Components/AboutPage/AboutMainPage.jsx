import React from "react";
import { motion } from "framer-motion";
import { HomeIcon } from "@heroicons/react/24/outline";

function AboutMainPage() {
  return (
    <div className="-mt-[80px] bg-[url('/AboutUS.jpg')] bg-cover bg-center bg-no-repeat h-[80vh] md:h-[100vh] w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-full bg-gray-900/80 flex items-center justify-center "
      >
        <div className="text-center bg-gray-900/95 p-20 rounded-2xl">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Company
          </motion.h1>

          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400"
          >
            <motion.a
              href=""
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <HomeIcon className="w-4 h-4" />
              Home
            </motion.a>
            |
            <motion.a
              href=""
              whileHover={{ scale: 1.05 }}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About Company
            </motion.a>
          </motion.span>
        </div>
      </motion.div>
    </div>
  );
}

export default React.memo(AboutMainPage);
