import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function About() {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const name         = "Wiatech";
  const typingSpeed  = 100;
  const deletingSpeed = 100;
  const pauseDuration = 1000;

  const animateText = useCallback(() => {
    if (isPaused) return;
    if (!isDeleting) {
      if (currentIndex <= name.length) {
        setDisplayText(name.substring(0, currentIndex));
        setCurrentIndex(prev => prev + 1);
        if (currentIndex === name.length) {
          setIsPaused(true);
          setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, pauseDuration);
        }
      }
    } else {
      if (currentIndex >= 0) {
        setDisplayText(name.substring(0, currentIndex));
        setCurrentIndex(prev => prev - 1);
        if (currentIndex === 0) {
          setIsPaused(true);
          setTimeout(() => { setIsPaused(false); setIsDeleting(false); }, pauseDuration);
        }
      }
    }
  }, [currentIndex, isDeleting, isPaused, name, pauseDuration]);

  useEffect(() => {
    if (!isPaused) {
      const timer = setTimeout(animateText, isDeleting ? deletingSpeed : typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [animateText, isDeleting, isPaused]);

  const features = [
    "Professional Team Member",
    "Professional Team Member",
    "Professional Team Member",
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 items-center">

          {/* ── Col 1 : Image ─────────────────────────────────────── */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="relative w-72 sm:w-80 lg:w-full max-w-[360px]">
              {/* Decorative frame behind image */}
              <div className="absolute inset-0 bg-indigo-50 rounded-2xl translate-x-3 translate-y-3" />
              {/* Accent dot */}
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-full bg-indigo-100/60 blur-xl" />
              <img
                src="/About.jpg"
                alt="About Wiatech"
                className="relative w-full aspect-[3/4] object-cover rounded-2xl shadow-lg"
                loading="eager"
                fetchPriority="high"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg px-4 py-2.5 flex items-center gap-2 border border-slate-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-slate-700">25+ Years of Trust</span>
              </div>
            </div>
          </motion.div>

          {/* ── Col 2 : About Content ─────────────────────────────── */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-indigo-600 text-xs font-bold tracking-[0.2em] uppercase">
              <span className="w-5 h-px bg-indigo-400" />
              About Us
            </span>

            {/* Headline with typing */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Make your life easier{' '}
              <br className="hidden sm:block" />
              with help from{' '}
              <span className="text-indigo-600 font-mono inline-flex items-baseline gap-0.5">
                {displayText}
                <span
                  className="inline-block w-[2px] h-7 bg-indigo-500 animate-pulse ml-0.5"
                  aria-hidden="true"
                />
              </span>
            </h2>

            {/* Feature list */}
            <ul className="space-y-3">
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-slate-700 text-sm sm:text-base font-medium">{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3 bg-indigo-600 hover:bg-indigo-700
                         active:scale-95 text-white text-sm font-semibold rounded-full
                         transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40
                         hover:-translate-y-0.5"
            >
              Read More
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          {/* ── Col 3 : Stats panel ───────────────────────────────── */}
          <motion.div
            className="space-y-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Heading + description */}
            <div className="space-y-3">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                We've 25+ Years Of Experience In Tech Services
              </h3>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium totam rem aperiam, eaque epsa inventore
              </p>
            </div>

            <div className="h-px bg-slate-100" />

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {/* Stat 1 */}
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">56K+</p>
                  <p className="text-slate-500 text-sm mt-0.5">Satisfied Customers</p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col gap-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-extrabold text-slate-900">8M+</p>
                  <p className="text-slate-500 text-sm mt-0.5">Project Complete</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
