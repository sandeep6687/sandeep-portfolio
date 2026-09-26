"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Compass, RotateCcw } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { site } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero360() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  // Rotation in degrees (0 to 360)
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartAngle, setDragStartAngle] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll listener to drive 360 rotation
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setScrollProgress(progress);

      // Only update angle from scroll if not actively dragging
      if (!isDragging) {
        setAngle(progress * 360);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDragging]);

  // Canvas 360 Renderer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const rad = (angle * Math.PI) / 180;

      // Outer turntable telemetry rings
      ctx.save();
      ctx.translate(cx, cy + 180);
      ctx.scale(1, 0.36);

      // Rotating base platform
      ctx.beginPath();
      ctx.arc(0, 0, 220, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(10, 25, 40, 0.4)";
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "rgba(56, 189, 248, 0.3)";
      ctx.stroke();

      // Outer tick marks
      for (let i = 0; i < 36; i++) {
        const tickRad = rad + (i * 10 * Math.PI) / 180;
        const x1 = Math.cos(tickRad) * 205;
        const y1 = Math.sin(tickRad) * 205;
        const x2 = Math.cos(tickRad) * (i % 3 === 0 ? 225 : 215);
        const y2 = Math.sin(tickRad) * (i % 3 === 0 ? 225 : 215);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = i % 3 === 0 ? 2 : 1;
        ctx.strokeStyle = i % 3 === 0 ? "rgba(56, 189, 248, 0.7)" : "rgba(255, 255, 255, 0.15)";
        ctx.stroke();
      }

      // Compass degree points on the base
      const cardinals = [
        { label: "FRONT 0°", a: 0 },
        { label: "90° R", a: 90 },
        { label: "180° BACK", a: 180 },
        { label: "270° L", a: 270 },
      ];
      ctx.font = "9px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      cardinals.forEach(({ label, a }) => {
        const curA = rad + (a * Math.PI) / 180;
        const tx = Math.cos(curA) * 242;
        const ty = Math.sin(curA) * 242;
        ctx.fillStyle = "rgba(148, 163, 184, 0.6)";
        ctx.fillText(label, tx, ty);
      });
      ctx.restore();

      // 3D Architectural / Cybernetic Totem Core representing Microservices & Distributed Architecture
      // Rotates through true 360°: X, Y, Z projection
      ctx.save();
      ctx.translate(cx, cy);

      // Ambient glow behind subject
      const grad = ctx.createRadialGradient(0, -20, 10, 0, -20, 220);
      grad.addColorStop(0, "rgba(56, 189, 248, 0.16)");
      grad.addColorStop(0.5, "rgba(16, 185, 129, 0.08)");
      grad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(-220, -260, 440, 520);

      // 3D Polygonal Upper-body Figure / Architectural Monolith Model
      // Define 3D vertices for a stylized geometric developer silhouette & monolith core
      const cosA = Math.cos(rad);
      const sinA = Math.sin(rad);

      // Helper for 3D coordinate projection
      const project = (x: number, y: number, z: number) => {
        const rotX = x * cosA - z * sinA;
        const rotZ = x * sinA + z * cosA;
        const scale = 400 / (400 + rotZ * 0.4);
        return {
          px: rotX * scale,
          py: y * scale,
          depth: rotZ,
        };
      };

      // 3D Nodes representing Zenoti event-driven microservice system
      const nodes = [
        // Head / Cognitive Agent node
        { x: 0, y: -160, z: 0, r: 24, label: "AI AGENT", color: "#38bdf8" },
        // Upper Torso / Orchestrator
        { x: 0, y: -90, z: 0, r: 38, label: "FASTAPI / .NET", color: "#10b981" },
        // Left & Right Shoulder Satellites (Kafka & Redis)
        { x: -95, y: -95, z: 20, r: 26, label: "KAFKA BUS", color: "#f59e0b" },
        { x: 95, y: -95, z: -20, r: 26, label: "REDIS CACHE", color: "#ef4444" },
        // Mid Core / Multi-tenant Database
        { x: 0, y: -10, z: 0, r: 42, label: "POSTGRES / SQL", color: "#6366f1" },
        // Flank Satellites (Docker & K8s)
        { x: -110, y: -15, z: -30, r: 22, label: "DOCKER", color: "#0ea5e9" },
        { x: 110, y: -15, z: 30, r: 22, label: "KUBERNETES", color: "#8b5cf6" },
        // Lower Foundation / Cloud Infrastructure
        { x: 0, y: 75, z: 0, r: 48, label: "AWS / AZURE", color: "#14b8a6" },
        { x: -80, y: 80, z: 40, r: 20, label: "WEBSOCKETS", color: "#ec4899" },
        { x: 80, y: 80, z: -40, r: 20, label: "SPRING BOOT", color: "#22c55e" },
      ];

      // Draw connection vectors between nodes
      const edges = [
        [0, 1],
        [1, 2],
        [1, 3],
        [1, 4],
        [2, 4],
        [3, 4],
        [2, 5],
        [3, 6],
        [4, 7],
        [5, 7],
        [6, 7],
        [7, 8],
        [7, 9],
      ];

      // Project all nodes
      const projectedNodes = nodes.map((n) => ({
        ...n,
        ...project(n.x, n.y, n.z),
      }));

      // Draw wireframe grid plane rotating in 3D
      ctx.beginPath();
      for (let w = -140; w <= 140; w += 35) {
        const p1 = project(w, 140, -140);
        const p2 = project(w, 140, 140);
        ctx.moveTo(p1.px, p1.py);
        ctx.lineTo(p2.px, p2.py);

        const p3 = project(-140, 140, w);
        const p4 = project(140, 140, w);
        ctx.moveTo(p3.px, p3.py);
        ctx.lineTo(p4.px, p4.py);
      }
      ctx.strokeStyle = "rgba(56, 189, 248, 0.12)";
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw connecting circuit vectors
      edges.forEach(([i, j]) => {
        const pA = projectedNodes[i];
        const pB = projectedNodes[j];
        ctx.beginPath();
        ctx.moveTo(pA.px, pA.py);
        ctx.lineTo(pB.px, pB.py);
        const avgDepth = (pA.depth + pB.depth) / 2;
        const opacity = Math.min(Math.max(0.2 + (avgDepth + 100) / 250, 0.1), 0.7);
        ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      });

      // Sort nodes by depth for correct 3D render occlusion
      const sorted = [...projectedNodes].sort((a, b) => a.depth - b.depth);

      sorted.forEach((n) => {
        const depthFactor = (n.depth + 140) / 280;
        const alpha = Math.min(Math.max(0.35 + depthFactor * 0.65, 0.2), 1);

        // Node aura
        const nodeGlow = ctx.createRadialGradient(n.px, n.py, 2, n.px, n.py, n.r * 1.5);
        nodeGlow.addColorStop(0, n.color);
        nodeGlow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = nodeGlow;
        ctx.beginPath();
        ctx.arc(n.px, n.py, n.r * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Node core circle
        ctx.beginPath();
        ctx.arc(n.px, n.py, n.r * 0.65, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15, 23, 42, ${alpha * 0.9})`;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = n.color;
        ctx.stroke();

        // Microchip center pip
        ctx.beginPath();
        ctx.arc(n.px, n.py, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        // Node label if facing front
        if (n.depth > -40) {
          ctx.font = "bold 9px monospace";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#f8fafc";
          ctx.fillText(n.label, n.px, n.py + n.r * 0.95);
        }
      });

      // Central axis telemetry beam
      ctx.beginPath();
      const topBeam = project(0, -210, 0);
      const botBeam = project(0, 160, 0);
      ctx.moveTo(topBeam.px, topBeam.py);
      ctx.lineTo(botBeam.px, botBeam.py);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.25)";
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();
    };

    render();
  }, [angle]);

  // Touch and Mouse Drag to rotate turntable manually
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragStartAngle(angle);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    let newAngle = (dragStartAngle + deltaX * 0.75) % 360;
    if (newAngle < 0) newAngle += 360;
    setAngle(newAngle);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const normalizedAngle = Math.round(angle) % 360;

  // Cardinal orientation text based on exact prompt specifications
  const getOrientationName = (deg: number) => {
    if (deg >= 337.5 || deg < 22.5) return "0° · FRONT VIEW";
    if (deg >= 22.5 && deg < 67.5) return "45° · 3/4 RIGHT PERSPECTIVE";
    if (deg >= 67.5 && deg < 112.5) return "90° · PROFILE RIGHT";
    if (deg >= 112.5 && deg < 157.5) return "135° · 3/4 REAR RIGHT";
    if (deg >= 157.5 && deg < 202.5) return "180° · FULL BACK VIEW";
    if (deg >= 202.5 && deg < 247.5) return "225° · 3/4 REAR LEFT";
    if (deg >= 247.5 && deg < 292.5) return "270° · PROFILE LEFT";
    return "315° · 3/4 FRONT LEFT";
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-[175vh] w-full"
      id="hero-turntable-container"
    >
      {/* Pinned Viewport Container */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-between overflow-hidden px-4 sm:px-8 pt-20 pb-8">
        {/* Subtle Ambient Background Gradients */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_40%,rgba(56,189,248,0.08),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(10,10,10,0.85)_100%)]" />

        {/* Top Header Row of Typography (Left: Name & Role, Right: Production Stats) */}
        <div className="relative z-20 flex flex-wrap items-start justify-between gap-6">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-mono text-sky-300">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ZENOTI BACKEND & MICROSERVICES</span>
            </div>
            <h1 className="font-heading mt-3 text-2xl sm:text-4xl font-semibold tracking-tight text-white">
              {site.name}
            </h1>
            <p className="mt-1 font-mono text-xs sm:text-sm tracking-wider text-white/60 uppercase">
              {site.role}
            </p>
          </motion.div>

          {/* Right quick stats */}
          <motion.div
            className="flex items-center gap-6"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            <div className="text-right">
              <p className="font-mono text-xl sm:text-2xl font-bold text-white">
                18+ <span className="text-xs text-sky-400 font-normal">mo</span>
              </p>
              <p className="text-[11px] text-white/50">Production SaaS</p>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-right">
              <p className="font-mono text-xl sm:text-2xl font-bold text-white">
                40 <span className="text-xs text-emerald-400 font-normal">/sec</span>
              </p>
              <p className="text-[11px] text-white/50">Kafka Throughput</p>
            </div>
          </motion.div>
        </div>

        {/* Centered 360° Interactive Turntable Centerpiece (75-85% viewport height subject) */}
        <div
          className="absolute inset-0 z-10 flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          data-cursor-text="360°"
        >
          <div className="relative flex h-[78vh] w-full max-w-[720px] items-center justify-center" style={{ perspective: "1200px" }}>
            {/* Turntable Canvas Base Ring */}
            <canvas
              ref={canvasRef}
              width={720}
              height={720}
              className="absolute inset-0 h-full w-full object-contain pointer-events-none"
            />

            {/* 3D Rotatable Monolith Card */}
            <div
              className="relative z-10 h-[66vh] max-h-[560px] w-[320px] sm:w-[380px] transition-transform ease-out"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateY(${angle}deg)`,
                transitionDuration: isDragging ? "0ms" : "150ms",
              }}
            >
              {/* FRONT FACE: Sandeep's Portrait */}
              <div
                className="absolute inset-0 overflow-hidden rounded-3xl border border-white/20 bg-[#0a0a0a] shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(56,189,248,0.2)]"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(0deg)",
                }}
              >
                <Image
                  src="/sandeep.jpg"
                  alt="Sandeep Gonnabattula"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 320px, 380px"
                />

                {/* Dynamic Specular Sheen based on turntable angle */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transition-opacity"
                  style={{
                    opacity: Math.max(0, Math.cos((angle * Math.PI) / 180) * 0.4),
                  }}
                />

                {/* Subtle vignette blend */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />

                {/* Status Pills */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[11px] font-mono text-white/90 backdrop-blur-md">
                    SANDEEP GONNABATTULA
                  </div>
                  <div className="rounded-full border border-sky-400/40 bg-sky-500/20 px-2.5 py-1 text-[10px] font-mono text-sky-300 backdrop-blur-md">
                    {Math.round(angle) % 360}° FRONT
                  </div>
                </div>
              </div>

              {/* BACK FACE: Distributed Microservices Architecture Core */}
              <div
                className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-3xl border border-sky-500/40 bg-gradient-to-b from-[#0f172a] via-[#09111e] to-[#040810] p-6 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_50px_rgba(56,189,248,0.25)]"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-xs font-semibold text-sky-300">
                      SYSTEM ARCHITECTURE CORE
                    </span>
                    <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
                      40 steps/sec
                    </span>
                  </div>
                  <p className="mt-3 text-xs text-white/60">
                    Event-driven microservices, Kafka pipelines, and agentic workflows built at Zenoti.
                  </p>

                  <div className="mt-5 space-y-2.5">
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="text-[10px] font-mono text-amber-300 uppercase">Kafka Message Ingestion</p>
                      <p className="text-xs font-semibold text-white">40 automation steps/sec</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="text-[10px] font-mono text-rose-300 uppercase">Redis Hot-Path Cache</p>
                      <p className="text-xs font-semibold text-white">Sub-millisecond token lookup</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="text-[10px] font-mono text-emerald-300 uppercase">Autonomous SRE Triage</p>
                      <p className="text-xs font-semibold text-white">100% Eval Benchmark · 42.5% → 0.02%</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[10px] font-mono text-white/40">
                  <span>POSTGRESQL · DOCKER · KEDA</span>
                  <span>180° REAR VIEW</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Typography & CTAs (Left: Pitch, Right: 360 Telemetry & CTAs) */}
        <div className="relative z-20 flex flex-col sm:flex-row items-end justify-between gap-6 pb-2">
          {/* Left Pitch & CTAs */}
          <motion.div
            className="max-w-md"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: EASE }}
          >
            <p className="text-xs sm:text-sm leading-relaxed text-[#c8c8c8]">
              {site.pitch}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs sm:text-sm font-semibold text-black transition-all hover:bg-white/90"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="size-4" />
              </Link>
              <a
                href={site.mailHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.04] px-4 py-2.5 text-xs sm:text-sm font-medium text-white transition-all hover:bg-white/[0.09]"
              >
                <span>Let&apos;s Work Together</span>
              </a>
            </div>
          </motion.div>

          {/* Right Turntable Angle HUD */}
          <motion.div
            className="flex flex-col items-start sm:items-end gap-2 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-md"
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: EASE }}
          >
            <div className="flex items-center gap-3">
              <Compass className="size-4 text-sky-400" />
              <span className="font-mono text-xs font-semibold tracking-wider text-sky-300">
                TURNTABLE: {String(normalizedAngle).padStart(3, "0")}°
              </span>
            </div>
            <p className="font-mono text-[11px] text-white/70">
              {getOrientationName(normalizedAngle)}
            </p>
            <div className="flex items-center gap-1.5 pt-1 text-[10px] text-white/40">
              <RotateCcw className="size-3" />
              <span>DRAG TO ROTATE 360° OR SCROLL DOWN</span>
            </div>
          </motion.div>
        </div>

        {/* Scroll Progress Bar at very bottom */}
        <div className="relative z-20 w-full pt-2">
          <div className="flex items-center justify-between text-[10px] font-mono text-white/40 pb-1">
            <span className="flex items-center gap-1">
              <ArrowDown className="size-3 animate-bounce" />
              SCROLL TO COMPLETE 360° ROTATION
            </span>
            <span>{Math.round(scrollProgress * 100)}%</span>
          </div>
          <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-300 transition-all duration-75"
              style={{ width: `${Math.max(scrollProgress * 100, 4)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
