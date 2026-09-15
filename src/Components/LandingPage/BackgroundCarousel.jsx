import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    tag: "5M+ Trusted Clients Worldwide",
    headline: ["Modern & Digital", "IT Solutions For", "Your Business"],
    sub: "25+ Years of experience delivering enterprise-grade technology solutions that drive real growth.",
  },
  {
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    tag: "Cloud & Infrastructure",
    headline: ["Scalable Cloud", "Solutions Built", "For Growth"],
    sub: "Secure, high-performance cloud infrastructure designed for businesses of every scale.",
  },
  {
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    tag: "AI & Automation",
    headline: ["Intelligent Systems", "That Drive", "Real Results"],
    sub: "Harness the power of AI to automate workflows and unlock competitive advantages.",
  },
  {
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    tag: "Cybersecurity & Compliance",
    headline: ["Protecting What", "Matters Most", "To Your Business"],
    sub: "Enterprise-grade security frameworks that keep threats at bay around the clock.",
  },
  {
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    tag: "Digital Transformation",
    headline: ["Transform Your", "Business For", "The Digital Age"],
    sub: "End-to-end digital transformation strategies that modernise your operations and culture.",
  },
];

const STATS = [
  { value: "5M+",  label: "Clients" },
  { value: "25+",  label: "Years" },
  { value: "500+", label: "Projects" },
];

const AUTO_PLAY_MS = 6000;

const BackgroundCarousel = () => {
  const [current,   setCurrent]   = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused,  setIsPaused]  = useState(false);
  const touchX = useRef(null);

  const go = useCallback((dir) => {
    setDirection(dir);
    setCurrent((c) => (c + dir + SLIDES.length) % SLIDES.length);
  }, []);

  const goTo = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  }, [current]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => go(1), AUTO_PLAY_MS);
    return () => clearInterval(id);
  }, [current, isPaused, go]);

  // Keyboard
  useEffect(() => {
    const fn = (e) => {
      if (e.key === "ArrowLeft")  go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [go]);

  // Preload images
  useEffect(() => {
    SLIDES.forEach(({ image }) => { const i = new Image(); i.src = image; });
  }, []);

  // Touch / swipe
  const onTouchStart = (e) => { touchX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e) => {
    if (touchX.current === null) return;
    const diff = touchX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 48) go(diff > 0 ? 1 : -1);
    touchX.current = null;
  };

  const bgVariants = {
    enter:  (d) => ({ opacity: 0, scale: 1.07, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, scale: 1.04, x: 0,
              transition: { duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] } },
    exit:   (d) => ({ opacity: 0, scale: 1, x: d > 0 ? -60 : 60,
                      transition: { duration: 0.55 } }),
  };

  const slide = SLIDES[current];

  return (
    <div
      className="-mt-[72px] relative w-full overflow-hidden bg-gray-950"
      style={{ minHeight: 600, height: "100svh" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="region"
      aria-label="Hero carousel"
    >
      {/* ── Background image ─────────────────────────────────────── */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.img
          key={current}
          src={slide.image}
          alt={slide.headline.join(" ")}
          className="absolute inset-0 w-full h-full object-cover"
          custom={direction}
          variants={bgVariants}
          initial="enter"
          animate="center"
          exit="exit"
          loading={current === 0 ? "eager" : "lazy"}
          decoding="async"
        />
      </AnimatePresence>

      {/* ── Overlays ─────────────────────────────────────────────── */}
      {/* left-to-right gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      {/* top + bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />

      {/* ── Vertical pill dots — desktop only ────────────────────── */}
      <div className="absolute right-6 xl:right-10 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="flex items-center justify-center w-4"
          >
            <motion.span
              animate={{
                height: i === current ? 32 : 8,
                backgroundColor:
                  i === current ? "rgba(99,102,241,1)" : "rgba(255,255,255,0.3)",
                width: i === current ? 3 : 2,
              }}
              transition={{ type: "spring", damping: 24, stiffness: 320 }}
              className="block rounded-full"
            />
          </button>
        ))}
      </div>

      {/* ── Main content ─────────────────────────────────────────── */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
            >
              {/* Tag / eyebrow */}
              <motion.div
                className="flex items-center gap-2.5 mb-4 sm:mb-5"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0, transition: { delay: 0.1, duration: 0.4 } }}
              >
                <span className="w-5 sm:w-7 h-px bg-indigo-400 flex-shrink-0" />
                <span className="text-indigo-300 text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                  {slide.tag}
                </span>
              </motion.div>

              {/* Headline */}
              <h1 className="mb-4 sm:mb-5">
                {slide.headline.map((line, i) => (
                  <motion.span
                    key={`${current}-${i}`}
                    className="block font-extrabold leading-[1.08] tracking-tight"
                    style={{
                      fontSize: "clamp(2rem, 6vw, 4.5rem)",
                      color: i === 1 ? "transparent" : "white",
                      backgroundImage:
                        i === 1 ? "linear-gradient(100deg, #818cf8 0%, #38bdf8 100%)" : "none",
                      WebkitBackgroundClip: i === 1 ? "text" : "unset",
                      backgroundClip:       i === 1 ? "text" : "unset",
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1, y: 0,
                      transition: { delay: 0.18 + i * 0.1, duration: 0.5, ease: "easeOut" },
                    }}
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>

              {/* Subtitle */}
              <motion.p
                className="text-white/60 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.48, duration: 0.45 } }}
              >
                {slide.sub}
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                className="flex flex-wrap gap-2.5 sm:gap-3 mb-8 sm:mb-10"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.58, duration: 0.4 } }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white text-sm font-semibold rounded-full transition-all shadow-xl shadow-indigo-600/30 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
                >
                  Get Started
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3.5 bg-white/10 hover:bg-white/20 active:scale-95 text-white text-sm font-semibold rounded-full border border-white/25 backdrop-blur-sm transition-all hover:-translate-y-0.5"
                >
                  Our Services
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                className="hidden sm:flex items-center gap-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.7, duration: 0.4 } }}
              >
                {STATS.map((s, i) => (
                  <React.Fragment key={s.value}>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-xl sm:text-2xl leading-none">
                        {s.value}
                      </span>
                      <span className="text-white/45 text-xs mt-0.5 uppercase tracking-wider">
                        {s.label}
                      </span>
                    </div>
                    {i < STATS.length - 1 && (
                      <div className="w-px h-8 bg-white/15 mx-5 sm:mx-7 flex-shrink-0" />
                    )}
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-5 sm:px-8 lg:px-12 xl:px-16 pb-6 sm:pb-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4">

          {/* Progress bars */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-1 max-w-[180px] sm:max-w-xs">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className="relative h-[3px] flex-1 rounded-full overflow-hidden bg-white/20"
              >
                {i === current && !isPaused && (
                  <motion.span
                    key={`prog-${current}`}
                    className="absolute inset-y-0 left-0 bg-indigo-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTO_PLAY_MS / 1000, ease: "linear" }}
                  />
                )}
                {i < current && (
                  <span className="absolute inset-0 bg-white/45 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Counter + arrows */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Counter — hide on very small screens */}
            <div className="hidden sm:flex items-baseline gap-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current}
                  className="text-white font-bold text-xl sm:text-2xl leading-none tabular-nums"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.22 }}
                >
                  {String(current + 1).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
              <span className="text-white/30 text-xs sm:text-sm font-medium">
                /{String(SLIDES.length).padStart(2, "0")}
              </span>
            </div>

            {/* Prev */}
            <motion.button
              onClick={() => go(-1)}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/22 border border-white/20 text-white backdrop-blur-sm flex items-center justify-center transition-colors"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {/* Next */}
            <motion.button
              onClick={() => go(1)}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center transition-colors shadow-lg shadow-indigo-600/35"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {current + 1} of {SLIDES.length}: {slide.headline.join(" ")}
      </div>
    </div>
  );
};

export default BackgroundCarousel;
