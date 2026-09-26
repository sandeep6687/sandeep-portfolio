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
      {slug === "multi-tenant-task-saas" ? <MultiTenantSaasScene /> : null}
      {slug === "autonomous-sre-agent" ? <SreAgentScene /> : null}
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
    if (reduce) return;
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

const SRE_STAGES = [
  {
    step: "Alert",
    tag: "P1 Incident",
    tagStyle: "border-rose-500/40 bg-rose-500/15 text-rose-300",
    title: "Auth Gateway: Connection Pool Exhaustion",
    metric: "Error Rate: 34.2% · p99 Latency: 4850ms",
    cmd: "ingest_alert(sev='P1', service='auth-gateway')",
    desc: "Autonomous triage initialized. Localizing degraded dependency.",
  },
  {
    step: "RAG Runbook",
    tag: "ChromaDB RAG",
    tagStyle: "border-emerald-500/40 bg-emerald-500/15 text-emerald-300",
    title: "Matched: runbooks/pg_pool_exhaustion.md",
    metric: "Cosine Sim: 0.94 · Dual-mode Gemini Embedding",
    cmd: "chroma.similarity_search('pg pool saturation', k=2)",
    desc: "Ingested runbook escalation path and remediation procedure.",
  },
  {
    step: "Telemetry Triage",
    tag: "Tool Calling",
    tagStyle: "border-sky-500/40 bg-sky-500/15 text-sky-300",
    title: "query_service_logs() + get_git_diff()",
    metric: "Root cause: Leaked cursor in commit a8f9c1 (checkout_v2)",
    cmd: "get_git_diff('auth-gateway', commit='a8f9c1')",
    desc: "Correlated surge with unclosed database connection block.",
  },
  {
    step: "HITL Gate",
    tag: "Breakpoint Pause",
    tagStyle: "border-amber-500/40 bg-amber-500/15 text-amber-300",
    title: "LangGraph MemorySaver Checkpoint",
    metric: "Pending tool: rollback_deployment('auth-gateway', 'v1.4.2')",
    cmd: "interrupt_before=['execute_remediation']",
    desc: "⏸️ Freezing graph execution. Waiting for operator approval.",
  },
  {
    step: "Remediation",
    tag: "Resolved",
    tagStyle: "border-emerald-500/40 bg-emerald-500/15 text-emerald-300",
    title: "Rollback Complete · Metrics Normalized",
    metric: "p99: 38ms · Errors: 0.0% · MTTR: 42s",
    cmd: "generate_postmortem(incident_id='INC-4029')",
    desc: "Automated Markdown postmortem generated with full audit trail.",
  },
] as const;

function SreAgentScene() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const timer = window.setInterval(() => {
      setIndex((curr) => (curr + 1) % SRE_STAGES.length);
    }, 2200);
    return () => window.clearInterval(timer);
  }, [reduce]);

  const current = SRE_STAGES[index];

  return (
    <div className="relative flex h-full flex-col justify-between bg-gradient-to-b from-[#0f172a] via-[#090d16] to-[#05070d] p-5">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[11px] font-medium tracking-wide text-slate-300 uppercase">
            LangGraph SRE Agent · State Machine
          </span>
        </div>
        <span className="rounded border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
          Eval: 100% Pass
        </span>
      </div>

      {/* State nodes stepper */}
      <div className="grid grid-cols-5 gap-1.5 pt-2">
        {SRE_STAGES.map((st, i) => {
          const isActive = i === index;
          const isDone = i < index;
          return (
            <button
              type="button"
              key={st.step}
              onClick={() => setIndex(i)}
              className={`group flex flex-col items-center rounded-lg border px-1.5 py-2 text-center transition-all ${
                isActive
                  ? "border-sky-400/60 bg-sky-500/15 shadow-[0_0_12px_rgba(56,189,248,0.25)]"
                  : isDone
                    ? "border-emerald-500/30 bg-emerald-500/5 text-emerald-400/80"
                    : "border-white/5 bg-white/[0.02] text-slate-500"
              }`}
            >
              <span
                className={`text-[9px] font-mono uppercase tracking-wider ${
                  isActive ? "font-semibold text-sky-200" : ""
                }`}
              >
                {st.step}
              </span>
              <span
                className={`mt-1 size-1.5 rounded-full ${
                  isActive
                    ? "bg-sky-400 shadow-[0_0_6px_#38bdf8]"
                    : isDone
                      ? "bg-emerald-400"
                      : "bg-white/20"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Active Stage Card */}
      <motion.div
        key={current.step}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur-md"
      >
        <div className="flex items-center justify-between gap-2">
          <span
            className={`rounded-full border px-2.5 py-0.5 text-[10px] font-medium tracking-wide ${current.tagStyle}`}
          >
            {current.tag}
          </span>
          <span className="font-mono text-[10px] text-slate-400">
            Node {index + 1} of 5
          </span>
        </div>

        <h4 className="mt-2.5 text-sm font-semibold text-white tracking-tight">
          {current.title}
        </h4>

        <p className="mt-1 font-mono text-[11px] text-sky-300/90">
          {current.metric}
        </p>

        <div className="mt-3 rounded-lg border border-white/5 bg-slate-950/80 px-2.5 py-1.5 font-mono text-[11px] text-slate-300">
          <span className="text-emerald-400">$ </span>
          {current.cmd}
        </div>

        <p className="mt-2 text-[11px] leading-relaxed text-slate-400">
          {current.desc}
        </p>
      </motion.div>

      {/* Bottom status strip */}
      <div className="flex items-center justify-between pt-1 text-[10px] text-slate-500">
        <span>HITL Gated · MemorySaver Active</span>
        <span>Simulated Latency: ~38ms</span>
      </div>
    </div>
  );
}

function MultiTenantSaasScene() {
  const reduce = useReducedMotion();
  const [tenant, setTenant] = useState<"acme" | "vertex">("acme");
  const [boardStep, setBoardStep] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const interval = window.setInterval(() => {
      setBoardStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => window.clearInterval(interval);
  }, [reduce]);

  const tenantData = {
    acme: {
      name: "Acme Corp",
      orgId: "tenant_acme_8921",
      tasks: [
        { id: "TSK-101", title: "Implement OAuth2 / JWT Auth Filter", col: 2, priority: "High" },
        { id: "TSK-102", title: "WebSocket Session Heartbeat", col: boardStep >= 1 ? 2 : 1, priority: "Medium" },
        { id: "TSK-103", title: "PostgreSQL Schema Partitioning", col: boardStep >= 2 ? 3 : 2, priority: "High" },
      ],
      event: boardStep === 0
        ? "WebSocket: 4 team peers syncing state"
        : boardStep === 1
        ? "STOMP: TSK-102 moved to In-Progress"
        : boardStep === 2
        ? "STOMP: TSK-103 moved to Completed"
        : "PostgreSQL: Tenant isolation verified",
    },
    vertex: {
      name: "Vertex Global",
      orgId: "tenant_vertex_3341",
      tasks: [
        { id: "VTX-401", title: "Drag & drop Kanban reordering", col: 3, priority: "High" },
        { id: "VTX-402", title: "AWS ECS Task Auto-scale", col: boardStep >= 2 ? 3 : 2, priority: "High" },
        { id: "VTX-403", title: "GitHub Actions CI Pipeline", col: 2, priority: "Medium" },
      ],
      event: "Spring Security: Tenant context isolated from Acme",
    },
  };

  const currentData = tenantData[tenant];

  return (
    <div className="relative flex h-full flex-col justify-between bg-gradient-to-b from-[#0f172a] via-[#09111e] to-[#040810] p-4 sm:p-5">
      {/* Top Tenant & Status Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border border-white/15 bg-black/40 p-0.5">
            <button
              type="button"
              onClick={() => setTenant("acme")}
              className={`rounded-md px-2.5 py-1 text-[10px] font-medium transition-colors ${
                tenant === "acme"
                  ? "bg-sky-500 text-white shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Acme Corp (Tenant 1)
            </button>
            <button
              type="button"
              onClick={() => setTenant("vertex")}
              className={`rounded-md px-2.5 py-1 text-[10px] font-medium transition-colors ${
                tenant === "vertex"
                  ? "bg-sky-500 text-white shadow-sm"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Vertex (Tenant 2)
            </button>
          </div>
          <span className="hidden font-mono text-[10px] text-white/40 sm:inline">
            [{currentData.orgId}]
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[10px] text-emerald-300">
            WS: Connected (14ms)
          </span>
        </div>
      </div>

      {/* Real-time Kanban Board Columns */}
      <div className="my-2 grid grid-cols-3 gap-2 flex-1" style={{ transformStyle: "preserve-3d" }}>
        {/* Column 1: Backlog */}
        <div className="flex flex-col rounded-lg border border-white/10 bg-black/30 p-2">
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5 text-[10px] font-semibold text-white/70 uppercase">
            <span>Backlog</span>
            <span className="rounded bg-white/10 px-1 font-mono text-[9px]">
              {currentData.tasks.filter((t) => t.col === 1).length}
            </span>
          </div>
          <div className="mt-2 space-y-1.5 flex-1">
            {currentData.tasks
              .filter((t) => t.col === 1)
              .map((t) => (
                <motion.div
                  layout
                  key={t.id}
                  className="rounded-md border border-white/10 bg-white/[0.04] p-2 text-left shadow-sm"
                >
                  <p className="font-mono text-[9px] text-sky-400">{t.id}</p>
                  <p className="mt-0.5 text-[11px] leading-tight text-white/90">{t.title}</p>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Column 2: In Progress */}
        <div className="flex flex-col rounded-lg border border-sky-500/25 bg-sky-950/20 p-2">
          <div className="flex items-center justify-between border-b border-sky-500/30 pb-1.5 text-[10px] font-semibold text-sky-300 uppercase">
            <span>In Progress</span>
            <span className="rounded bg-sky-500/20 px-1 font-mono text-[9px] text-sky-300">
              {currentData.tasks.filter((t) => t.col === 2).length}
            </span>
          </div>
          <div className="mt-2 space-y-1.5 flex-1">
            {currentData.tasks
              .filter((t) => t.col === 2)
              .map((t) => (
                <motion.div
                  layout
                  key={t.id}
                  className="rounded-md border border-sky-400/40 bg-sky-900/30 p-2 text-left shadow-[0_0_10px_rgba(56,189,248,0.15)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px] text-sky-300">{t.id}</span>
                    <span className="rounded bg-amber-500/20 px-1 text-[8px] text-amber-300">
                      {t.priority}
                    </span>
                  </div>
                  <p className="mt-0.5 text-[11px] leading-tight text-white">{t.title}</p>
                  <div className="mt-1 flex items-center gap-1 text-[9px] text-sky-200/70">
                    <span className="size-1 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Real-time Drag Sync</span>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Column 3: Completed */}
        <div className="flex flex-col rounded-lg border border-emerald-500/25 bg-emerald-950/20 p-2">
          <div className="flex items-center justify-between border-b border-emerald-500/30 pb-1.5 text-[10px] font-semibold text-emerald-300 uppercase">
            <span>Completed</span>
            <span className="rounded bg-emerald-500/20 px-1 font-mono text-[9px] text-emerald-300">
              {currentData.tasks.filter((t) => t.col === 3).length}
            </span>
          </div>
          <div className="mt-2 space-y-1.5 flex-1">
            {currentData.tasks
              .filter((t) => t.col === 3)
              .map((t) => (
                <motion.div
                  layout
                  key={t.id}
                  className="rounded-md border border-emerald-400/30 bg-emerald-900/20 p-2 text-left"
                >
                  <span className="font-mono text-[9px] text-emerald-400">{t.id}</span>
                  <p className="mt-0.5 text-[11px] leading-tight text-white/90">{t.title}</p>
                  <span className="mt-1 inline-block text-[8px] font-mono text-emerald-400/80">
                    ✓ Verified in DB
                  </span>
                </motion.div>
              ))}
          </div>
        </div>
      </div>

      {/* Bottom Live Broadcast Banner */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-[10px]">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sky-400">$ STOMP:</span>
          <span className="text-white/80">{currentData.event}</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] text-white/50">
          <span>Spring Security RBAC</span>
          <span>·</span>
          <span>AWS ECS Healthy</span>
        </div>
      </div>
    </div>
  );
}


