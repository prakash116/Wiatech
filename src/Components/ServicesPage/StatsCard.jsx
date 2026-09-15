import { motion } from 'framer-motion';

function StatsCard() {
  const stats = [
    { label: "Project Success", percentage: 80, colorClass: "text-green-500" },
    { label: "Happy Clients", percentage: 63, colorClass: "text-blue-500" }
  ];

  // Color mapping for stroke colors
  const colorMap = {
    "text-green-500": "#10B981",
    "text-blue-500": "#3B82F6"
  };

  return (
    <div className="mx-auto bg-indigo-900 text-white shadow-md p-2">
      <div className="flex flex-col justify-around space-y-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex gap-4 items-center">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20">
              <svg className="w-16 h-16 sm:w-20 sm:h-20 transform -rotate-90">
                <circle cx="32" cy="32" r="28" stroke="#4B5563" strokeWidth="4" fill="transparent" className="sm:cx-40 sm:cy-40 sm:r-34" />
                <motion.circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke={colorMap[stat.colorClass]}
                  strokeWidth="4"
                  fill="transparent"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: stat.percentage / 100 }}
                  transition={{ delay: index * 0.2, duration: 1, ease: "easeOut" }}
                  strokeLinecap="round"
                  className="sm:cx-40 sm:cy-40 sm:r-34"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span 
                  className="text-white md:mt-3.5 md:mr-3.5"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                >
                  {/* Arrow Icon -45 Degree */}
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="transform -rotate-45"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </motion.span>
              </div>
            </div>
            <div className='flex flex-col justify-center mt-3'>
             <h1 className='text-xl sm:text-2xl font-bold'>{stat.percentage}%</h1> 
             <h1 className='text-xs sm:text-sm font-medium text-gray-300'>{stat.label}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatsCard;