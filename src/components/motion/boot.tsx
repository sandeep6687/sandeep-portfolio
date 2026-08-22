"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

import { site } from "@/lib/content";

export function Boot() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(!reduce);

  useEffect(() => {
    if (reduce) return;
    const id = window.setTimeout(() => setShow(false), 1600);
    return () => window.clearTimeout(id);
  }, [reduce]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center bg-background"
          exit={{ y: "-100%", opacity: 0.4 }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <p className="font-mono text-[10px] tracking-[0.5em] text-primary uppercase">
            Systems online
          </p>
          <motion.p
            className="font-display mt-4 text-5xl sm:text-7xl"
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, letterSpacing: "0.08em" }}
            transition={{ duration: 0.9 }}
          >
            {site.firstName.toUpperCase()}
          </motion.p>
          <motion.div
            className="mt-8 h-px w-40 origin-left bg-primary"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
