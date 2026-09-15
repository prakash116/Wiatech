import React from 'react';
import { motion } from 'framer-motion';
import { BoltIcon, CpuChipIcon, CircleStackIcon } from '@heroicons/react/24/outline';

function Loading() {
  // Floating particles animation
  const floatingParticles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 2 + Math.random() * 2
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {floatingParticles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main loading container */}
      <div className="text-center relative z-10">
        {/* Animated logo/icon section */}
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <motion.div
            className="w-32 h-32 border-4 border-cyan-400/30 rounded-full absolute inset-0 mx-auto"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Middle rotating ring */}
          <motion.div
            className="w-24 h-24 border-4 border-purple-400/50 rounded-full absolute inset-0 mx-auto mt-4"
            animate={{ rotate: -360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Central icon with pulse animation */}
          <div className="relative w-16 h-16 mx-auto mt-8">
            <motion.div
              className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <BoltIcon className="w-8 h-8 text-white" />
            </motion.div>
          </div>
        </div>

        {/* Company name with typing animation */}
        <motion.h1
          className="text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          WITECH
        </motion.h1>

        {/* Loading text with bounce animation */}
        <motion.p
          className="text-blue-200 text-lg mb-8 flex items-center justify-center gap-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading Innovation
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            ⚡
          </motion.span>
        </motion.p>

        {/* Animated progress bar */}
        <div className="w-64 h-2 bg-blue-800/30 rounded-full mx-auto overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Tech icons floating at bottom */}
        <div className="flex justify-center gap-6 mt-12">
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 0.2,
            }}
          >
            <CpuChipIcon className="w-8 h-8 text-cyan-400/60" />
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              delay: 0.5,
            }}
          >
            <CircleStackIcon className="w-8 h-8 text-purple-400/60" />
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, -12, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 0.8,
            }}
          >
            <BoltIcon className="w-8 h-8 text-blue-400/60" />
          </motion.div>
        </div>

        {/* Subtle background grid */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-pulse" />
          <div 
            className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]"
            style={{
              maskImage: 'radial-gradient(ellipse at center, transparent 20%, black 70%)'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Loading);