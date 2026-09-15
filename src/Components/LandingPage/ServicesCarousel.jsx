import { motion } from 'framer-motion';

const ServicesCarousel = () => {
  const services = ['Cyber Security', 'Data Security', 'IT Services','Cyber Security', 'Data Security', 'IT Services'];
  
  // Create the repeating pattern with stars
  const carouselItems = services.flatMap((service, index) => [
    { type: 'star', content: '*' },
    { type: 'heading', content: service }
  ]);

  return (
    <div className="relative w-full text-4xl md:text-7xl overflow-hidden py-10 md:py-20">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: ['0%', '-100%']
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {/* Double the content for seamless looping */}
        {[...carouselItems, ...carouselItems].map((item, index) => (
          <div key={index} className="inline-flex items-center mx-4">
            {item.type === 'star' ? (
              <span className="text-blue-600 font-bold mx-2">*</span>
            ) : (
              <h1 className="relative text-black font-semibold mx-2 cursor-default transition-colors duration-300 hover:text-blue-600 group">
                {item.content}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </h1>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServicesCarousel;