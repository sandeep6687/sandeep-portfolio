"use client";

import { type ReactNode, useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function ProjectVisual({ slug }: { slug: string }) {
  return (
    <Stage>
      {slug === "enterprise-ai-workflow" ? <WorkflowScene /> : null}
      {slug === "lead-management" ? <LeadScene /> : null}
      {slug === "talentpulse-ai" ? <TalentScene /> : null}
    </Stage>
  );
}

function Stage({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.35 });
  const rotateX = useSpring(my, { stiffness: 120, damping: 18, mass: 0.35 });
  const transform = useMotionTemplate`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  return (
    <div
      className="relative h-full w-full overflow-hidden"
      style={{ perspective: "900px" }}
      onMouseMove={(event) => {
        if (reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set(((event.clientX - rect.left) / rect.width - 0.5) * 18);
        my.set((0.5 - (event.clientY - rect.top) / rect.height) * 12);
      }}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_0%,rgb(255_255_255/0.18),transparent_42%)]" />
      <motion.div
        className="relative h-full w-full"
        style={{ transform, transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

const WORKFLOW_STEPS = [
  { label: "Trigger", caption: "A business event starts the run" },
  { label: "Condition", caption: "Rules decide if it should continue" },
  { label: "LLM", caption: "The model chooses the next action" },
  { label: "Tool call", caption: "It calls an external API" },
  { label: "Lookup", caption: "It fetches real company data" },
  { label: "Worker", caption: "A worker finishes the step" },
] as const;

function WorkflowScene() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setStep((current) => (current + 1) % WORKFLOW_STEPS.length);
    }, 1500);
    return () => window.clearInterval(id);
  }, [reduce]);

  const active = WORKFLOW_STEPS[step];

  return (
    <div className="relative flex h-full flex-col bg-[radial-gradient(circle_at_20%_0%,#1f7a82_0%,#0c3d44_50%,#08262c_100%)] px-4 pt-10 pb-[4.6rem]">
      <p className="absolute top-3 left-4 text-[10px] tracking-[0.16em] text-teal-100/75 uppercase">
        How one automation run works
      </p>
      <div className="flex flex-1 flex-col justify-center gap-3" style={{ transformStyle: "preserve-3d" }}>
        <FlowRow steps={WORKFLOW_STEPS.slice(0, 3)} offset={0} active={step} />
        <div className="flex justify-center">
          <span className={step >= 3 ? "text-teal-100" : "text-teal-100/30"}>↓</span>
        </div>
        <FlowRow steps={WORKFLOW_STEPS.slice(3, 6)} offset={3} active={step} />
      </div>
      <CaptionBar step={step} text={`${step + 1}. ${active.caption}`} />
    </div>
  );
}

function FlowRow({
  steps,
  offset,
  active,
}: {
  steps: readonly { label: string; caption: string }[];
  offset: number;
  active: number;
}) {
  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2" style={{ transformStyle: "preserve-3d" }}>
      {steps.map((item, index) => {
        const n = offset + index;
        const on = n === active;
        return (
          <div key={item.label} className="flex items-center gap-1 sm:gap-2" style={{ transformStyle: "preserve-3d" }}>
            {index > 0 ? (
              <span className={active >= n ? "text-teal-100" : "text-teal-100/30"}>→</span>
            ) : null}
            <motion.div
              animate={{
                rotateX: on ? 8 : 0,
                rotateY: on ? -8 : 0,
                z: on ? 32 : 0,
                scale: on ? 1.06 : 1,
                borderColor: on ? "rgb(204 251 241)" : "rgb(94 234 212 / 0.25)",
                backgroundColor: on ? "rgb(15 23 23 / 0.8)" : "rgb(0 0 0 / 0.28)",
              }}
              style={{ transformPerspective: 600 }}
              className="min-w-[4.5rem] rounded-lg border px-2 py-2 text-center shadow-lg sm:min-w-[5.4rem]"
            >
              <p className="font-mono text-[9px] text-teal-100/60">{n + 1}</p>
              <p className="text-[11px] font-medium text-white sm:text-xs">{item.label}</p>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

const LEAD_STEPS = [
  { label: "New lead", caption: "A lead lands in the system" },
  { label: "Score", caption: "The model scores how likely they are to buy" },
  { label: "Summary", caption: "It writes a short reason for sales" },
  { label: "Rank", caption: "High-intent leads rise to the top" },
] as const;

function LeadScene() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setStep((current) => (current + 1) % LEAD_STEPS.length);
    }, 1600);
    return () => window.clearInterval(id);
  }, [reduce]);

  const people = [
    { name: "Priya M.", score: 92, tag: "High intent" },
    { name: "James K.", score: 74, tag: "Warm" },
    { name: "Elena R.", score: 41, tag: "Nurture" },
  ];
  const ranked = step >= 3;
  const list = ranked ? people : [...people].reverse();
  const active = LEAD_STEPS[step];

  return (
    <div className="relative flex h-full flex-col px-4 pt-10 pb-[4.6rem]">
      <p className="absolute top-3 left-4 text-[10px] tracking-[0.16em] text-white/55 uppercase">
        How a lead is prioritized
      </p>
      <div className="mb-3 flex items-center justify-center gap-1 sm:gap-2" style={{ transformStyle: "preserve-3d" }}>
        {LEAD_STEPS.map((item, index) => {
          const on = index === step;
          return (
            <div key={item.label} className="flex items-center gap-1 sm:gap-2" style={{ transformStyle: "preserve-3d" }}>
              {index > 0 ? (
                <span className={step >= index ? "text-white" : "text-white/25"}>→</span>
              ) : null}
              <motion.div
                animate={{
                  rotateX: on ? 8 : 0,
                  rotateY: on ? -8 : 0,
                  z: on ? 28 : 0,
                  scale: on ? 1.05 : 1,
                  borderColor: on ? "rgb(255 255 255 / 0.7)" : "rgb(255 255 255 / 0.15)",
                }}
                style={{ transformPerspective: 600 }}
                className="rounded-lg border bg-black/35 px-2 py-1.5 text-center shadow-lg"
              >
                <p className="font-mono text-[9px] text-white/45">{index + 1}</p>
                <p className="text-[11px] font-medium text-white">{item.label}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2" style={{ transformStyle: "preserve-3d" }}>
        {list.map((lead, index) => (
          <motion.div
            layout
            key={lead.name}
            className={`flex items-center justify-between rounded-lg border bg-black/30 px-3 py-2 ${
              ranked && lead.score === 92 ? "border-white/55" : "border-white/15"
            }`}
            style={{ transformPerspective: 700 }}
            animate={{
              opacity: step === 0 && lead.score !== 41 ? 0.4 : 1,
              rotateX: ranked && lead.score === 92 ? 6 : 0,
              z: ranked && lead.score === 92 ? 24 : index * -4,
            }}
          >
            <div>
              <p className="text-sm text-white">{lead.name}</p>
              <p className="text-[10px] text-white/50">
                {step >= 2 ? "Likely to convert this week" : "Waiting for summary"}
              </p>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm text-white">{step >= 1 ? lead.score : "—"}</p>
              <p className="text-[10px] text-white/50">{step >= 3 ? lead.tag : "Unranked"}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <CaptionBar step={step} text={`${step + 1}. ${active.caption}`} />
    </div>
  );
}

function CaptionBar({ step, text }: { step: number; text: string }) {
  return (
    <div className="absolute right-3 bottom-3 left-3 rounded-lg bg-black/55 px-3 py-2 backdrop-blur-sm">
      <p className="text-[10px] tracking-widest text-white/45 uppercase">Now running</p>
      <AnimatePresence mode="wait">
        <motion.p
          key={`${step}-${text}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="text-[13px] font-medium text-white"
        >
          {text}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}

function TalentScene() {
  const reduce = useReducedMotion();
  const question = "Walk me through retries on a failed Kafka consumer.";
  const typed = useTyped(question, reduce);
  const keywords = useMemo(() => ["Kafka", "pgvector", "KEDA", "ATS"], []);

  return (
    <div className="grid h-full grid-cols-2 gap-4 p-5 sm:p-6" style={{ transformStyle: "preserve-3d" }}>
      <motion.div
        className="relative overflow-hidden rounded-xl border border-white/15 bg-black/35 p-4"
        style={{ transformPerspective: 700 }}
        animate={reduce ? undefined : { rotateY: -6, z: 16 }}
      >
        <p className="text-[10px] tracking-[0.2em] text-white/45 uppercase">1. Read the resume</p>
        <div className="mt-4 space-y-2.5">
          {[78, 100, 62, 88, 54].map((width, index) => (
            <div key={width} className="h-1.5 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-white/55"
                initial={{ width: 0 }}
                animate={{ width: `${width}%` }}
                transition={{ delay: 0.2 + index * 0.12, duration: 0.7, ease: EASE }}
              />
            </div>
          ))}
        </div>
        <p className="mt-6 text-[10px] text-white/45">Then export PDF or DOCX</p>
      </motion.div>
      <div className="flex flex-col justify-between" style={{ transformStyle: "preserve-3d" }}>
        <div>
          <p className="text-[10px] tracking-[0.2em] text-white/45 uppercase">2. Skills the job still needs</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {keywords.map((word, index) => (
              <motion.span
                key={word}
                className="rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[11px] text-white"
                style={{ transformPerspective: 500 }}
                initial={reduce ? false : { opacity: 0, y: 10, rotateX: -20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, z: 8 }}
                transition={{ delay: 0.45 + index * 0.12 }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>
        <motion.div
          className="rounded-xl border border-white/15 bg-black/40 p-3.5"
          style={{ transformPerspective: 700 }}
          animate={reduce ? undefined : { rotateY: 6, z: 20 }}
        >
          <p className="text-[10px] tracking-[0.18em] text-white/45 uppercase">3. Practice that gap</p>
          <p className="mt-2 min-h-[3.2em] text-[13px] leading-snug text-white">{typed}</p>
        </motion.div>
      </div>
    </div>
  );
}

function useTyped(text: string, reduce: boolean | null) {
  const [out, setOut] = useState(reduce ? text : "");

  useEffect(() => {
    if (reduce) {
      setOut(text);
      return;
    }
    let i = 0;
    let timer = 0;
    const start = window.setTimeout(() => {
      timer = window.setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length) window.clearInterval(timer);
      }, 28);
    }, 900);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(timer);
    };
  }, [reduce, text]);

  return out;
}
