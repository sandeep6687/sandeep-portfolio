"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { site } from "@/lib/content";

export function Boot() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(!reduce);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduce) return;

    const interval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          window.clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15 + 8);
      });
    }, 80);

    const timer = window.setTimeout(() => setShow(false), 1400);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(timer);
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[120] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
          exit={{ y: "-100%", opacity: 0.1 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.4em] text-sky-400 uppercase">
            SG // PRODUCTION SYSTEMS
          </p>
          <motion.h1
            className="mt-4 font-mono text-3xl sm:text-5xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {site.name.toUpperCase()}
          </motion.h1>

          <p className="mt-2 text-xs font-mono text-white/50">
            Initializing microservice & agentic workflows...
          </p>

          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-sky-400 to-emerald-400 transition-all duration-100"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
            <span className="font-mono text-[11px] text-white/40">
              {Math.min(progress, 100)}%
            </span>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
