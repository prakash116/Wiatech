import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon } from '@heroicons/react/24/outline';

// Mock images - replace with your actual image paths
const BLOG_IMAGES = {
  main: '/images/blog-main.jpg',
  secondary: [
    '/images/blog-1.jpg',
    '/images/blog-2.jpg',
    '/images/blog-3.jpg'
  ]
};

const Blog = React.memo(() => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const blogPosts = [
    {
      id: 1,
      date: "October 25, 2023",
      title: "IT Service Case Accelerating to Business Fly Success Tech",
      excerpt: "Discover how our IT services transformed business operations...",
      image: BLOG_IMAGES.secondary[0]
    },
    {
      id: 2,
      date: "October 24, 2023",
      title: "IT Service Case Studies Accelerating Business Fly Success",
      excerpt: "Learn about the success stories of our digital transformation...",
      image: BLOG_IMAGES.secondary[1]
    },
    {
      id: 3,
      date: "October 23, 2023",
      title: "Digital Innovation Driving Business Growth in 2023",
      excerpt: "Explore the latest trends in digital innovation and growth...",
      image: BLOG_IMAGES.secondary[2]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-blue-600 text-lg font-semibold mb-3"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            Latest News & Blog
          </motion.h2>
          <motion.h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Read Our Latest News & Blog
          </motion.h1>
        </motion.div>

        {/* Blog Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:h-120">
          {/* Main Featured Post */}
          <motion.div 
            className="lg:w-1/2 h-full"
            variants={itemVariants}
          >
            <motion.article 
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              whileHover={{ y: -5 }}
            >
              <div className="overflow-hidden">
                <motion.img
                  src={BLOG_IMAGES.main}
                  alt="Featured Blog Post"
                  className="w-full h-80 lg:h-120 object-cover group-hover:scale-105 transition-transform duration-700"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center text-white/80 mb-2">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  <span className="text-sm">October 25, 2023</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 line-clamp-2">
                  IT Service Case Accelerating to Business Fly Success Tech
                </h3>
                <motion.button
                  className="inline-flex items-center px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 4px 12px rgba(37, 99, 235, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read More
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </motion.button>
              </div>
            </motion.article>
          </motion.div>

          {/* Secondary Posts */}
          <motion.div 
            className="lg:w-1/2 space-y-2"
            variants={itemVariants}
          >
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                whileHover={{ x: 5 }}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Content */}
                  <div className="flex-1 p-4">
                    <div className="flex items-center text-gray-500 mb-2">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      <span className="text-sm">{post.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    <motion.button
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group/btn"
                      whileHover={{ x: 5 }}
                    >
                      Read More
                      <ArrowRightIcon className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </motion.button>
                  </div>

                  {/* Image */}
                  <div className="sm:w-32 lg:w-40 flex-shrink-0">
                    <div className="overflow-hidden h-full">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-32 sm:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        whileHover={{ scale: 1.1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
});

Blog.displayName = 'Blog';

export default Blog;