"use client";

import { type CSSProperties, type MouseEvent, type ReactNode, useCallback, useRef } from "react";
import { useReducedMotion } from "motion/react";

type Tilt3DProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  intensity?: number;
  shine?: boolean;
};

export function Tilt3D({
  children,
  className,
  href,
  target,
  rel,
  ariaLabel,
  intensity = 14,
  shine = true,
}: Tilt3DProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const setRef = useCallback((node: HTMLElement | null) => {
    ref.current = node;
  }, []);

  const reset = useCallback(() => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)";
    node.style.setProperty("--shine-x", "50%");
    node.style.setProperty("--shine-y", "0%");
  }, []);

  const tilt = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (reduce) return;
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      const rotateX = (0.5 - py) * intensity;
      const rotateY = (px - 0.5) * (intensity * 1.35);
      node.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      node.style.setProperty("--shine-x", `${px * 100}%`);
      node.style.setProperty("--shine-y", `${py * 100}%`);
    },
    [intensity, reduce],
  );

  const style: CSSProperties = {
    transformStyle: "preserve-3d",
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
    transition: "transform 180ms ease-out",
    ["--shine-x" as string]: "50%",
    ["--shine-y" as string]: "0%",
  };

  const shineLayer = shine ? (
    <span
      className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      style={{
        background:
          "radial-gradient(circle at var(--shine-x) var(--shine-y), rgb(255 255 255 / 0.22), transparent 55%)",
      }}
    />
  ) : null;

  if (href) {
    return (
      <a
        ref={setRef}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onMouseMove={tilt}
        onMouseLeave={reset}
        className={`group relative ${className ?? ""}`}
        style={style}
      >
        {shineLayer}
        {children}
      </a>
    );
  }

  return (
    <div
      ref={setRef}
      onMouseMove={tilt}
      onMouseLeave={reset}
      className={`group relative ${className ?? ""}`}
      style={style}
    >
      {shineLayer}
      {children}
    </div>
  );
}
