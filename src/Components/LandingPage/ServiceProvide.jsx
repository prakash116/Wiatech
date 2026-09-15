import React from "react";

const ServiceProvide = () => {
  const services = [
    {
      id: 1,
      emoji: "💼",
      title: "IT Consultancy",
    },
    {
      id: 2,
      emoji: "💻",
      title: "Software Development",
    },
    {
      id: 3,
      emoji: "📊",
      title: "Data Service",
    },
    {
      id: 4,
      emoji: "🔒",
      title: "Cyber Security Solutions",
    },
   
  ];

  return (
    <div className="py-10 bg-gray-50">
      <div className="bg-gray-50 text-center">
        <h1 className="text-blue-600 text-xl font-semibold">What We Provide</h1>
        <h1 className="text-black text-2xl md:text-5xl font-semibold">
          We Run all kinds of IT services <br />
          that vow your success
        </h1>
      </div>
      <div className="w-full grid grid-cols-2 md:flex justify-around flex-wrap py-10 bg-gray-50 gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

// Memoized component to prevent unnecessary re-renders
const ServiceCard = React.memo(({ service }) => {
  return (
    <div className="bg-white border border-gray-200 shadow-lg w-full sm:w-[45%] lg:w-1/6 rounded-t-full rounded-b-full text-black overflow-hidden relative group cursor-pointer min-h-[280px] flex items-center justify-center">
      {/* Background overlay - using transform-gpu for better performance */}
      <div
        className="absolute inset-0 bg-blue-600 transform-gpu origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300 ease-in-out"
        aria-hidden="true"
      />

      {/* Consistent border container */}
      <div className="relative z-10 border-2 border-dotted border-gray-300 group-hover:border-white rounded-t-full rounded-b-full w-[calc(100%-16px)] h-[calc(100%-16px)] flex items-center justify-center transition-colors duration-300">
        <div className="relative z-10 flex flex-col gap-4 p-4 w-full items-center">
          <div className="text-4xl sm:text-5xl group-hover:text-white transition-colors duration-300">
            {service.emoji}
          </div>

          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-bold group-hover:text-white transition-colors duration-300 line-clamp-2">
              {service.title}
            </h2>
          </div>

          <div className="mt-2">
            <button
              className="px-4 py-2 border border-gray-300 rounded-full group-hover:border-white group-hover:bg-blue-700 group-hover:text-white text-sm font-medium transition-all duration-300 transform-gpu hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              aria-label={`Select ${service.title}`}
            >
              ✅
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";

export default ServiceProvide;
