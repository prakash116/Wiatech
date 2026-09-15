import React from 'react';
import { motion } from 'framer-motion';

function ServicesContent() {
  return (
    <motion.div
      className="text-center pt-16 pb-10 px-5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="inline-flex items-center gap-2 text-indigo-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
        <span className="w-5 h-px bg-indigo-400" />
        Popular Service
        <span className="w-5 h-px bg-indigo-400" />
      </span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
        Services We Provide
      </h2>
    </motion.div>
  );
}

export default ServicesContent;
