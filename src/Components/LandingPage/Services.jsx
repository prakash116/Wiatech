import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServicesContent from "./SercivesContent";
import Quote from "./Quote";

const SERVICES = [
  {
    number: "01",
    title: "UX/UI Design",
    desc: "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium",
    fill: "bg-indigo-600",
    iconBg: "bg-indigo-50",
    iconClr: "text-indigo-600",
    numClr: "text-indigo-100",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "IT Management",
    desc: "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium",
    fill: "bg-sky-600",
    iconBg: "bg-sky-50",
    iconClr: "text-sky-600",
    numClr: "text-sky-100",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Data Security",
    desc: "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium",
    fill: "bg-emerald-600",
    iconBg: "bg-emerald-50",
    iconClr: "text-emerald-600",
    numClr: "text-emerald-100",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Infrastructure Plan",
    desc: "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium",
    fill: "bg-amber-500",
    iconBg: "bg-amber-50",
    iconClr: "text-amber-500",
    numClr: "text-amber-100",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Firewall Advancement",
    desc: "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium",
    fill: "bg-rose-600",
    iconBg: "bg-rose-50",
    iconClr: "text-rose-600",
    numClr: "text-rose-100",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "Desktop Computing",
    desc: "Sed ut perspiciatis unde omnis iste natus voluptatem accusantium laudantium",
    fill: "bg-violet-600",
    iconBg: "bg-violet-50",
    iconClr: "text-violet-600",
    numClr: "text-violet-100",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

function Services() {
  return (
    <section className="bg-slate-50 pb-16 sm:pb-20">
      <ServicesContent />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              className="group relative bg-white border border-slate-100 shadow-md
                         rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Bottom-to-top fill */}
              <div className={`absolute inset-0 ${s.fill}
                               origin-bottom scale-y-0 group-hover:scale-y-100
                               transition-transform duration-500 ease-in-out`} />

              {/* Content */}
              <div className="relative z-10 p-6 sm:p-7 flex flex-col gap-5">

                {/* Top row: icon + number */}
                <div className="flex items-start justify-between">
                  <div className={`w-[52px] h-[52px] rounded-xl flex items-center justify-center flex-shrink-0
                                   ${s.iconBg} ${s.iconClr}
                                   group-hover:bg-white/20 group-hover:text-white
                                   transition-colors duration-300`}>
                    {s.icon}
                  </div>
                  <span className={`text-4xl font-extrabold ${s.iconClr} opacity-20
                                    group-hover:text-white group-hover:opacity-30
                                    transition-colors duration-300 leading-none select-none`}>
                    {s.number}
                  </span>
                </div>

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-white
                                 transition-colors duration-300 leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed
                                group-hover:text-white/80 transition-colors duration-300">
                    {s.desc}
                  </p>
                </div>

                {/* Read more */}
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold
                             border border-slate-200 rounded-lg px-4 py-2 w-fit mt-auto
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
      </div>

      <Quote />
    </section>
  );
}

export default Services;
