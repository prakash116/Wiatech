import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CARDS = [
  {
    fill:    "bg-indigo-600",
    iconBg:  "bg-indigo-50",
    iconClr: "text-indigo-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Cost-Effectiveness",
    desc:  "Premium IT solutions at competitive rates — maximum ROI without compromising quality.",
  },
  {
    fill:    "bg-amber-500",
    iconBg:  "bg-amber-50",
    iconClr: "text-amber-500",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Innovative Technology",
    desc:  "Cutting-edge frameworks and emerging tech to build scalable, future-proof solutions.",
  },
  {
    fill:    "bg-emerald-600",
    iconBg:  "bg-emerald-50",
    iconClr: "text-emerald-600",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Industry Expertise",
    desc:  "25+ years of proven domain knowledge across diverse industries and verticals.",
  },
];

function Info() {
  return (
    <section className="relative bg-slate-50 py-16 sm:py-20 overflow-hidden">

      {/* Background blobs */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-sky-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">

        {/* Section header */}
        <motion.div
          className="text-center mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-indigo-500 text-xs font-bold tracking-[0.2em] uppercase mb-3">
            <span className="w-5 h-px bg-indigo-400" />
            Why Choose Us
            <span className="w-5 h-px bg-indigo-400" />
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Built Around Your Success
          </h2>
          <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            We combine technical depth with business understanding to deliver solutions that create lasting impact.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: "easeOut" }}
              className="group relative bg-white border border-slate-100 shadow-md
                         rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Fill layer — bottom to top */}
              <div className={`absolute inset-0 ${card.fill}
                               origin-bottom scale-y-0 group-hover:scale-y-100
                               transition-transform duration-500 ease-in-out`} />

              {/* Content */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-4">

                {/* Icon pill */}
                <div className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center flex-shrink-0
                                 ${card.iconBg} ${card.iconClr}
                                 group-hover:bg-white/20 group-hover:text-white
                                 transition-colors duration-300`}>
                  {card.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-white
                                 transition-colors duration-300 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed
                                group-hover:text-white/80 transition-colors duration-300">
                    {card.desc}
                  </p>
                </div>

                {/* Read more */}
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold
                             border border-slate-200 rounded-lg px-4 py-2 w-fit
                             text-slate-700 group-hover:text-white group-hover:border-white/40
                             group-hover:bg-white/10 transition-all duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats strip */}
        <motion.div
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {[
            { value: "500+", label: "Projects Delivered" },
            { value: "98%",  label: "Client Satisfaction" },
            { value: "25+",  label: "Years Experience"   },
            { value: "5M+",  label: "Users Served"       },
          ].map((s) => (
            <div key={s.label} className="bg-white px-6 py-5 flex flex-col items-center text-center">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900">{s.value}</span>
              <span className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">{s.label}</span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Info;
