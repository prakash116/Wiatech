import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// SVG Icons
const QuoteIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
  </svg>
);

const LinkedInIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const StarIcon = ({ className = "w-5 h-5", filled = false }) => (
  <svg className={className} fill={filled ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/>
  </svg>
);

// Mock data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    profession: "Product Manager",
    review: "The service exceeded all my expectations. The team delivered outstanding results that helped us achieve our business goals faster than anticipated.",
    rating: 4.9,
    photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    profession: "Software Engineer",
    review: "Exceptional quality and attention to detail. The project was completed on time and the communication throughout was excellent.",
    rating: 5.0,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    profession: "Marketing Director",
    review: "Outstanding work! The team understood our vision perfectly and delivered beyond what we imagined possible.",
    rating: 4.8,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Kim",
    profession: "UX Designer",
    review: "Professional, creative, and highly skilled. The results speak for themselves - our user engagement increased significantly.",
    rating: 4.7,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    profession: "Data Scientist",
    review: "Working with this team was a game-changer for our project. Their expertise and dedication were evident throughout.",
    rating: 4.9,
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "James Wilson",
    profession: "CTO",
    review: "Reliable, innovative, and results-driven. The partnership has been invaluable to our company's growth.",
    rating: 5.0,
    photo: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 7,
    name: "Maria Garcia",
    profession: "Project Manager",
    review: "The team's professionalism and expertise made this project a huge success. Highly recommended!",
    rating: 4.8,
    photo: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 8,
    name: "Robert Brown",
    profession: "DevOps Engineer",
    review: "Exceptional service from start to finish. The results exceeded our expectations in every way.",
    rating: 4.9,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);

  const totalSlides = testimonials.length;

  // Update visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2); // Tablet: 2 cards
      } else {
        setVisibleCount(4); // Desktop: 4 cards
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Create duplicated array for seamless infinite loop
  const carouselItems = [...testimonials, ...testimonials.slice(0, visibleCount)];
  const totalItems = carouselItems.length;

  // Calculate the transform value for smooth horizontal sliding
  const getTransformValue = () => {
    return `translateX(-${currentIndex * (100 / visibleCount)}%)`;
  };

  // Auto-slide with continuous loop
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        // When we reach the duplicate start point, reset to 0 seamlessly
        if (nextIndex >= testimonials.length) {
          return 0;
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, totalSlides - visibleCount));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 1 }).map((_, index) => (
      <StarIcon
        key={index}
        filled={index < rating}
        className={`w-4 h-4 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Testimonials Slider */}
        <motion.div
          className="flex"
          style={{
            transform: getTransformValue(),
            transition: "transform 0.8s ease-in-out"
          }}
        >
          {carouselItems.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="mx-3 h-75">
                <div className="bg-white h-full rounded-xl shadow-lg p-2 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  {/* Header */}
                  <div className="flex justify-between items-center h-15 border-b border-gray-300 mb-2">
                    <QuoteIcon className="w-10 h-10 text-blue-500" />
                    <LinkedInIcon className="w-8 h-8 text-gray-400 hover:text-blue-600 transition-colors cursor-pointer" />
                  </div>

                  {/* Review Text */}
                  <div className="h-36">
                    <p className="text-gray-600 leading-relaxed text-sm line-clamp-4">
                      {testimonial.review}
                    </p>
                  </div>

                  {/* User Info */}
                  <div className="bg-zinc-200 flex items-center p-3 rounded-lg justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={testimonial.photo}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {testimonial.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {testimonial.profession}
                        </p>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center border-2 border-white space-x-1 bg-blue-600 px-2 py-1 rounded-full">
                      <div className="flex">
                        {renderStars(testimonial.rating)}
                      </div>
                      <span className="text-xs font-medium text-gray-100 ml-1">
                        {testimonial.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-8 space-x-3">
        <div className="flex gap-2 border border-dotted p-2 rounded-full">
          {Array.from({ length: totalSlides - visibleCount + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;