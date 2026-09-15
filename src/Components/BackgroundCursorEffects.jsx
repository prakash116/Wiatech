import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const R_NORMAL = 19; // ring radius (px) — normal
const R_HOVER  = 28; // ring radius — on hover

const BackgroundCursorEffects = () => {
  const [exactPos,  setExactPos]  = useState({ x: -300, y: -300 });
  const [smoothPos, setSmoothPos] = useState({ x: -300, y: -300 });
  const [isHover,   setIsHover]   = useState(false);
  const [isClick,   setIsClick]   = useState(false);
  const [isIdle,    setIsIdle]    = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [ripples,   setRipples]   = useState([]);

  const rafRef    = useRef(null);
  const idleRef   = useRef(null);
  const targetRef = useRef({ x: -300, y: -300 });
  const smoothRef = useRef({ x: -300, y: -300 });

  // ── event listeners ───────────────────────────────────────────────
  useEffect(() => {
    const onMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setExactPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      setIsIdle(false);
      clearTimeout(idleRef.current);
      idleRef.current = setTimeout(() => setIsIdle(true), 2000);
      setIsHover(!!e.target.closest('a,button,[role="button"],input,textarea,select'));
    };
    const onLeave = () => { setIsVisible(false); clearTimeout(idleRef.current); };
    const onEnter = () => setIsVisible(true);
    const onDown  = (e) => {
      setIsClick(true);
      const id = Date.now();
      setRipples(p => [...p, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => setRipples(p => p.filter(r => r.id !== id)), 700);
    };
    const onUp = () => setIsClick(false);

    document.addEventListener('mousemove',  onMove,  { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mousedown',  onDown);
    document.addEventListener('mouseup',    onUp);
    document.addEventListener('visibilitychange', () =>
      setIsVisible(document.visibilityState === 'visible'));

    return () => {
      document.removeEventListener('mousemove',  onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mousedown',  onDown);
      document.removeEventListener('mouseup',    onUp);
      clearTimeout(idleRef.current);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // ── smooth follow loop ────────────────────────────────────────────
  useEffect(() => {
    const loop = () => {
      const t = targetRef.current;
      const s = smoothRef.current;
      const nx = s.x + (t.x - s.x) * 0.1;
      const ny = s.y + (t.y - s.y) * 0.1;
      smoothRef.current = { x: nx, y: ny };
      setSmoothPos({ x: nx, y: ny });
      rafRef.current = requestAnimationFrame(loop);
    };
    if (isVisible) rafRef.current = requestAnimationFrame(loop);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [isVisible]);

  // ── color tokens ─────────────────────────────────────────────────
  const c     = isHover ? '#a78bfa' : '#38bdf8';
  const cRgba = isHover ? 'rgba(167,139,250,' : 'rgba(56,189,248,';
  const r     = isHover ? R_HOVER : R_NORMAL;

  // ── bracket positions (outer ring + small gap) ───────────────────
  const gap = r + 10;
  const brackets = [
    { top: -gap - 10, left: -gap - 10, rotate:   0 },
    { top: -gap - 10, left:  gap -  2, rotate:  90 },
    { top:  gap -  2, left:  gap -  2, rotate: 180 },
    { top:  gap -  2, left: -gap - 10, rotate: 270 },
  ];

  return (
    <>
      {/* ── click ripple ──────────────────────────────────────────── */}
      <AnimatePresence>
        {ripples.map(rp => (
          <motion.div
            key={rp.id}
            className="fixed pointer-events-none z-[9999] rounded-full"
            style={{
              left: rp.x, top: rp.y,
              translateX: '-50%', translateY: '-50%',
              border: `1px solid ${cRgba}0.55)`,
            }}
            initial={{ width: 0,  height: 0,  opacity: 1   }}
            animate={{ width: 96, height: 96, opacity: 0   }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          />
        ))}
      </AnimatePresence>

      {/* ── ring + orbital system (lagged follow) ─────────────────── */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed pointer-events-none z-[9997]"
            style={{ left: smoothPos.x, top: smoothPos.y, translateX: '-50%', translateY: '-50%' }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 22, stiffness: 320 }}
          >
            {/* Ring */}
            <motion.div
              className="absolute rounded-full"
              animate={{
                width:  r * 2,
                height: r * 2,
                scale:  isClick ? 0.78 : isIdle ? [1, 1.08, 1] : 1,
              }}
              transition={{
                width:  { type: 'spring', damping: 22, stiffness: 260 },
                height: { type: 'spring', damping: 22, stiffness: 260 },
                scale:  isIdle
                  ? { duration: 2.2, repeat: Infinity, ease: 'easeInOut' }
                  : { type: 'spring', damping: 16, stiffness: 340 },
              }}
              style={{
                transform: 'translate(-50%, -50%)',
                border: `1px solid ${cRgba}0.55)`,
                boxShadow: `0 0 12px ${cRgba}0.22), inset 0 0 12px ${cRgba}0.05)`,
                background: `radial-gradient(circle, ${cRgba}0.04) 0%, transparent 70%)`,
                transition: 'border-color 0.3s, box-shadow 0.3s, background 0.3s',
              }}
            />

            {/* ── Orbit node 1: primary bright ── */}
            <motion.div
              style={{ position: 'absolute', width: 0, height: 0, translateX: '-50%', translateY: '-50%' }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
            >
              <motion.div
                className="absolute rounded-full"
                animate={{ top: -r, width: isHover ? 7 : 5, height: isHover ? 7 : 5 }}
                transition={{ top: { type: 'spring', damping: 22, stiffness: 260 }, width: { duration: 0.25 }, height: { duration: 0.25 } }}
                style={{
                  left: -2.5,
                  background: `radial-gradient(circle, #fff 20%, ${c})`,
                  boxShadow: `0 0 5px #fff, 0 0 12px ${c}, 0 0 24px ${cRgba}0.4)`,
                  transition: 'background 0.3s, box-shadow 0.3s',
                }}
              />
            </motion.div>

            {/* ── Orbit node 2: dim opposite ── */}
            <motion.div
              style={{ position: 'absolute', width: 0, height: 0, translateX: '-50%', translateY: '-50%' }}
              animate={{ rotate: [180, 540] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
            >
              <motion.div
                className="absolute rounded-full"
                animate={{ top: -r }}
                transition={{ top: { type: 'spring', damping: 22, stiffness: 260 } }}
                style={{
                  width: 3, height: 3, left: -1.5,
                  background: c,
                  opacity: 0.4,
                  boxShadow: `0 0 6px ${c}`,
                  transition: 'background 0.3s',
                }}
              />
            </motion.div>

            {/* ── Hover corner brackets ── */}
            <AnimatePresence>
              {isHover && brackets.map((b, i) => (
                <motion.svg
                  key={i}
                  width="11" height="11" viewBox="0 0 11 11"
                  style={{ position: 'absolute', top: b.top, left: b.left, rotate: `${b.rotate}deg` }}
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.3 }}
                  transition={{ duration: 0.18, delay: i * 0.05 }}
                >
                  <path
                    d="M 9.5 1.5 L 1.5 1.5 L 1.5 9.5"
                    fill="none"
                    stroke={`${cRgba}0.85)`}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ filter: `drop-shadow(0 0 3px ${cRgba}0.8))` }}
                  />
                </motion.svg>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── exact cursor dot (zero lag) ───────────────────────────── */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed pointer-events-none z-[9998] rounded-full"
            style={{
              left: exactPos.x, top: exactPos.y,
              translateX: '-50%', translateY: '-50%',
              width:  isHover ? 9 : 5,
              height: isHover ? 9 : 5,
              background: isHover
                ? 'radial-gradient(circle, #f5f3ff 30%, #a78bfa)'
                : 'radial-gradient(circle, #f0f9ff 30%, #38bdf8)',
              boxShadow: isHover
                ? '0 0 5px #fff, 0 0 14px rgba(167,139,250,0.95)'
                : '0 0 5px #fff, 0 0 12px rgba(56,189,248,0.95)',
              transition: 'width 0.2s, height 0.2s, background 0.3s, box-shadow 0.3s',
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isClick ? 0.3 : 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', damping: 22, stiffness: 420 }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default BackgroundCursorEffects;
