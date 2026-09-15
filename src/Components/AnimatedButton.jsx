import { motion } from 'framer-motion';

const AnimatedButton = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <motion.button
        className="relative rounded-lg px-6 py-3 font-semibold text-white bg-blue-500 shadow-lg overflow-hidden"
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{}}
      >
        <motion.span
          className="relative z-10"
          variants={{
            rest: { color: '#ffffff' },
            hover: { color: '#2563EB' }, // text-blue-600
          }}
        >
          Click Me
        </motion.span>
        <motion.div
          className="absolute inset-0 bg-white"
          variants={{
            rest: { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
            hover: { clipPath: 'polygon(0 0, 50% 25%, 100% 0, 100% 100%, 50% 75%, 0 100%)' },
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </motion.button>
    </div>
  );
};

export default AnimatedButton;
