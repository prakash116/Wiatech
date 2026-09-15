import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { to: "/",         label: "Home"     },
  { to: "/about",    label: "About"    },
  { to: "/services", label: "Services" },
  { to: "/project",  label: "Projects" },
  { to: "/faq",      label: "FAQ"      },
  { to: "/contact",  label: "Contact"  },
];

const SocialIcon = ({ href, label, children }) => (
  <a
    href={href}
    aria-label={label}
    className="w-6 h-6 flex items-center justify-center rounded hover:text-white transition-colors"
  >
    {children}
  </a>
);

const Header = () => {
  const location = useLocation();
  const [isMenuOpen,   setIsMenuOpen]   = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [isSticky,     setIsSticky]     = React.useState(false);

  const rafRef    = React.useRef(null);
  const ticking   = React.useRef(false);
  const searchRef = React.useRef(null);

  const handleScroll = React.useCallback(() => {
    if (!ticking.current) {
      ticking.current = true;
      rafRef.current = requestAnimationFrame(() => {
        setIsSticky(window.scrollY > 80);
        ticking.current = false;
      });
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  React.useEffect(() => {
    if (isSearchOpen) searchRef.current?.focus();
  }, [isSearchOpen]);

  const isActive = (path) => location.pathname === path;

  const drawerVariants = {
    open:   { x: 0,      transition: { type: "spring", damping: 30, stiffness: 300 } },
    closed: { x: "-100%", transition: { type: "spring", damping: 30, stiffness: 300 } },
  };

  const t = isSticky; // shorthand

  return (
    <div>
      {/* ── Pre-header ──────────────────────────────────────────────── */}
      <AnimatePresence>
        {!isSticky && (
          <motion.div
            initial={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0, overflow: "hidden" }}
            transition={{ duration: 0.25 }}
            className="hidden md:block bg-gray-950 text-gray-400 w-full text-xs overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-2 flex justify-between items-center">
              <div className="flex items-center gap-5">
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  A-20 City, State
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  support@wiatech.com
                </span>
              </div>
              <div className="flex items-center gap-5">
                {["Help", "Support", "FAQ"].map((l) => (
                  <span key={l} className="hover:text-white transition-colors cursor-pointer">{l}</span>
                ))}
                <div className="w-px h-3 bg-gray-700" />
                <div className="flex items-center gap-3 text-gray-500">
                  <SocialIcon href="#" label="Facebook">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </SocialIcon>
                  <SocialIcon href="#" label="Twitter">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </SocialIcon>
                  <SocialIcon href="#" label="LinkedIn">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </SocialIcon>
                  <SocialIcon href="#" label="YouTube">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </SocialIcon>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main header ─────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "spring", damping: 28 }}
        className={`${
          t
            ? "fixed top-0 left-0 w-full bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
            : "absolute top-0 left-0 w-full bg-transparent"
        } z-50 px-6 lg:px-10 h-[72px] flex items-center justify-between transition-colors duration-300`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-md shadow-indigo-500/30 group-hover:shadow-indigo-500/50 transition-shadow">
            W
          </div>
          <span className={`font-bold text-xl tracking-tight hidden sm:block ${t ? "text-gray-900" : "text-white"}`}>
            Wia<span className="text-indigo-400">Tech</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive(to)
                  ? t ? "text-indigo-600" : "text-white"
                  : t
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    : "text-white/75 hover:text-white hover:bg-white/10"
              }`}
            >
              {label}
              {isActive(to) && (
                <motion.span
                  layoutId="nav-indicator"
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-indigo-500 rounded-full"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <div
            className={`relative flex items-center rounded-full overflow-hidden h-9 flex-shrink-0 transition-all duration-300 ease-in-out ${
              isSearchOpen
                ? `w-36 sm:w-44 md:w-52 ${t ? "bg-gray-100" : "bg-white/15 backdrop-blur-sm"}`
                : "w-9"
            }`}
          >
            <input
              ref={searchRef}
              type="text"
              placeholder="Search..."
              className={`absolute left-4 right-9 bg-transparent border-none outline-none text-sm min-w-0 transition-opacity duration-200 ${
                isSearchOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              } ${t ? "text-gray-900 placeholder-gray-400" : "text-white placeholder-white/50"}`}
              onBlur={() => setIsSearchOpen(false)}
            />
            <button
              onClick={() => setIsSearchOpen((v) => !v)}
              className={`w-9 h-9 flex items-center justify-center flex-shrink-0 rounded-full transition-colors ml-auto ${
                t ? "text-gray-600 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle search"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* CTA — desktop */}
          <Link
            to="/contact"
            className="hidden lg:flex items-center gap-1.5 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-px"
          >
            Get Started
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Hamburger — mobile/tablet */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className={`lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg transition-colors ${
              t ? "hover:bg-gray-100" : "hover:bg-white/10"
            }`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {[
              { w: isMenuOpen ? 20 : 14, r: isMenuOpen ?  45 : 0, y: isMenuOpen ?  7 : 0 },
              { w: 20,                   r: 0,                     y: 0, hide: isMenuOpen },
              { w: isMenuOpen ? 20 : 14, r: isMenuOpen ? -45 : 0, y: isMenuOpen ? -7 : 0 },
            ].map(({ w, r, y, hide }, i) => (
              <motion.span
                key={i}
                className={`block h-0.5 rounded-full ${t ? "bg-gray-800" : "bg-white"}`}
                animate={{ width: w, rotate: r, y, opacity: hide ? 0 : 1 }}
                transition={{ duration: 0.25 }}
              />
            ))}
          </button>
        </div>
      </motion.header>

      {isSticky && <div className="h-[72px]" />}

      {/* ── Mobile drawer ────────────────────────────────────────────── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.nav
              className="fixed top-0 left-0 w-[300px] max-w-[85vw] h-full bg-white z-50 flex flex-col shadow-2xl"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              aria-label="Mobile navigation"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold">W</div>
                  <span className="font-bold text-xl text-gray-900">Wia<span className="text-indigo-500">Tech</span></span>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-400"
                  aria-label="Close menu"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Links */}
              <ul className="flex-1 px-4 py-4 flex flex-col gap-1 list-none">
                {NAV_LINKS.map(({ to, label }, idx) => (
                  <motion.li
                    key={to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: idx * 0.06 } }}
                  >
                    <Link
                      to={to}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all ${
                        isActive(to)
                          ? "bg-indigo-50 text-indigo-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      {isActive(to) && (
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 flex-shrink-0" />
                      )}
                      {label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Bottom CTA */}
              <div className="px-6 pb-8 pt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center w-full py-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-500/25"
                >
                  Get Started
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
