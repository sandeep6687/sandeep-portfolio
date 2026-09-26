"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";

export function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [cursorText, setCursorText] = useState<string | null>(null);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 420, damping: 30, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 420, damping: 30, mass: 0.35 });

  useEffect(() => {
    // Disable on touch screens / mobile
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine || reduce) return;
    const timer = window.setTimeout(() => setEnabled(true), 0);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };

    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor-text]") as HTMLElement | null;
      if (cursorTarget) {
        setHovering(true);
        setCursorText(cursorTarget.getAttribute("data-cursor-text"));
        return;
      }

      const projectLink = target.closest("#work a, [data-project-card]") as HTMLElement | null;
      if (projectLink) {
        setHovering(true);
        setCursorText("VIEW");
        return;
      }

      const interactiveStage = target.closest("[data-stage], canvas, #hero-turntable-container") as HTMLElement | null;
      if (interactiveStage) {
        setHovering(true);
        setCursorText("360°");
        return;
      }

      const isInteractive = Boolean(target.closest("a, button, [role='button'], input, select, textarea"));
      setHovering(isInteractive);
      setCursorText(null);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [reduce, x, y]);

  if (!enabled) return null;

  const size = cursorText ? 64 : hovering ? 44 : 10;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[100] flex items-center justify-center mix-blend-difference"
      style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full border border-white bg-white/15 backdrop-blur-[2px]"
        animate={{
          width: size,
          height: size,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 24 }}
      >
        {cursorText ? (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="font-mono text-[9px] font-bold tracking-widest text-white uppercase select-none"
          >
            {cursorText}
          </motion.span>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
