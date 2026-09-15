import React from "react";
import { motion } from "framer-motion";

const ROW1 = [
  { name: "HTML5",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Vue.js",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
  { name: "Node.js",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

const ROW2 = [
  { name: "Docker",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "MongoDB",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Git",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "PHP",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel",    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Figma",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

// Triplicate for seamless loop at any viewport width
const track1 = [...ROW1, ...ROW1, ...ROW1];
const track2 = [...ROW2, ...ROW2, ...ROW2];

const Card = ({ icon }) => (
  <div className="group flex-shrink-0 flex flex-col items-center justify-center gap-2.5
                  w-[88px] h-[88px] sm:w-[100px] sm:h-[100px] md:w-[112px] md:h-[112px]
                  bg-white rounded-2xl border border-slate-100
                  shadow-sm hover:shadow-md hover:shadow-slate-200/80
                  hover:border-slate-200 hover:-translate-y-1
                  transition-all duration-300 cursor-default mx-3 sm:mx-4">
    <img
      src={icon.src}
      alt={icon.name}
      width={40}
      height={40}
      loading="lazy"
      decoding="async"
      className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 object-contain
                 group-hover:scale-110 transition-transform duration-300"
      onError={(e) => { e.target.style.opacity = "0"; }}
    />
    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500
                     group-hover:text-slate-700 transition-colors tracking-wide">
      {icon.name}
    </span>
  </div>
);

const IconsCarousel = () => (
  <>
    {/* CSS keyframes — injected once */}
    <style>{`
      @keyframes marquee-left {
        0%   { transform: translateX(0); }
        100% { transform: translateX(calc(-100% / 3)); }
      }
      @keyframes marquee-right {
        0%   { transform: translateX(calc(-100% / 3)); }
        100% { transform: translateX(0); }
      }
      .marquee-left  { animation: marquee-left  28s linear infinite; }
      .marquee-right { animation: marquee-right 24s linear infinite; }
      .marquee-wrap:hover .marquee-left,
      .marquee-wrap:hover .marquee-right {
        animation-play-state: paused;
      }
    `}</style>

    <section className="relative bg-slate-50 py-14 sm:py-18 md:py-20 overflow-hidden">

      {/* Subtle background blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      {/* Section header */}
      <motion.div
        className="text-center px-5 mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center gap-2 text-indigo-500 text-xs font-bold
                         tracking-[0.2em] uppercase mb-3">
          <span className="w-5 h-px bg-indigo-400" />
          Our Tech Stack
          <span className="w-5 h-px bg-indigo-400" />
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Technologies We Work With
        </h2>
        <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          We build with industry-leading tools and frameworks to deliver
          scalable, future-proof solutions.
        </p>
      </motion.div>

      {/* Marquee tracks */}
      <div
        className="marquee-wrap relative"
        role="region"
        aria-label="Technology logos"
      >
        {/* Edge fade masks */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-28 z-10
                        bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-28 z-10
                        bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />

        {/* Row 1 — scrolls left */}
        <div className="flex overflow-hidden mb-4 sm:mb-5">
          <div className="marquee-left flex">
            {track1.map((icon, i) => (
              <Card key={`r1-${i}`} icon={icon} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex overflow-hidden">
          <div className="marquee-right flex">
            {track2.map((icon, i) => (
              <Card key={`r2-${i}`} icon={icon} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom trust line */}
      <motion.p
        className="text-center text-slate-400 text-xs sm:text-sm mt-10 sm:mt-12 px-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        …and many more tools powering our client solutions
      </motion.p>
    </section>
  </>
);

export default IconsCarousel;
