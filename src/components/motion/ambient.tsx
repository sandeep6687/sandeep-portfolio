"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";

export function Ambient() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const sx = useSpring(mx, { stiffness: 45, damping: 22 });
  const sy = useSpring(my, { stiffness: 45, damping: 22 });
  const left = useTransform(sx, (value) => `${value}%`);
  const top = useTransform(sy, (value) => `${value}%`);

  useEffect(() => {
    if (reduce) return;
    const onMove = (event: MouseEvent) => {
      mx.set((event.clientX / window.innerWidth) * 100);
      my.set((event.clientY / window.innerHeight) * 100);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, reduce]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.96_0.008_95/0.045)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.96_0.008_95/0.045)_1px,transparent_1px)] bg-size-[64px_64px] mask-[radial-gradient(ellipse_at_center,black_15%,transparent_72%)]" />
      {reduce ? (
        <div className="absolute top-[-10%] left-[20%] size-[36rem] rounded-full bg-primary/14 blur-3xl" />
      ) : (
        <>
          <motion.div
            className="absolute size-[30rem] rounded-full bg-primary/22 blur-3xl"
            style={{
              left,
              top,
              x: "-50%",
              y: "-50%",
            }}
          />
          <motion.div
            className="absolute top-[-20%] right-[-10%] size-[40rem] rounded-full bg-[oklch(0.45_0.08_250/0.35)] blur-3xl"
            animate={{ x: [0, -60, 20, 0], y: [0, 40, -20, 0], scale: [1, 1.12, 0.94, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[-18%] left-[-8%] size-[34rem] rounded-full bg-[oklch(0.5_0.06_210/0.28)] blur-3xl"
            animate={{ x: [0, 50, -30, 0], y: [0, -30, 40, 0] }}
            transition={{ duration: 17, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
}
