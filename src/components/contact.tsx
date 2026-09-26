"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Phone, Send } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { site } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Contact() {
  const reduce = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Event-Driven Microservices / Backend",
    message: "",
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Direct user to open mail draft as well with their inputs pre-filled
    const subject = encodeURIComponent(`[Inquiry: ${formData.projectType}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Sandeep,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
    );
    window.open(`mailto:${site.email}?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <section id="contact" className="scroll-mt-24 mx-auto max-w-[1080px] px-6 pb-24 pt-12">
      {/* Section 21: Main Contact */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="text-[11px] tracking-[0.22em] text-[#a1a1a1] uppercase">Get In Touch</p>
        <h2 className="font-heading mt-2 text-3xl sm:text-5xl font-semibold tracking-tight text-white">
          Have an idea? Let’s build it.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[#a1a1a1]">
          Whether you&apos;re looking for high-throughput event-driven microservices, an autonomous AI workflow engine, or a full-stack SaaS platform, let&apos;s create something people remember.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        {/* Left column: Direct CTAs & Details */}
        <motion.div
          className="flex flex-col justify-between lg:col-span-5"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: EASE }}
        >
          <div>
            <div className="flex flex-wrap items-center gap-3">
              {/* Direct Email Link */}
              <a
                href={site.mailHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all hover:bg-white/90"
              >
                <Mail className="size-4" />
                <span>Start a Project</span>
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* 1-Click Copy Button */}
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/[0.08]"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="size-4 text-emerald-400" />
                    <span className="text-emerald-300">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="size-4 text-white/60" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-8 space-y-4 text-sm text-[#a1a1a1]">
              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70">
                  <Mail className="size-4" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase">Email Address</p>
                  <a href={`mailto:${site.email}`} className="text-white hover:underline">
                    {site.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/70">
                  <Phone className="size-4" />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase">Direct Phone</p>
                  <a href={`tel:${site.phone}`} className="text-white hover:underline">
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs text-white/50 uppercase tracking-wider">Connect Channels</p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80 hover:border-white/20 hover:text-white"
                >
                  LinkedIn
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80 hover:border-white/20 hover:text-white"
                >
                  GitHub
                </a>
                <a
                  href={site.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80 hover:border-white/20 hover:text-white"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-xs leading-relaxed text-emerald-300">
            <span className="font-semibold text-emerald-200">Current Availability:</span> Open to Backend, Microservices, and AI Agent platform engineering opportunities.
          </div>
        </motion.div>

        {/* Right column: Interactive Message Form */}
        <motion.div
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-md lg:col-span-7"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
        >
          {formSubmitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 p-4 text-emerald-400">
                <Check className="size-8" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">Message Prepared!</h3>
              <p className="mt-2 max-w-sm text-sm text-[#a1a1a1]">
                Your email client was opened to send this inquiry directly to Sandeep ({site.email}).
              </p>
              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="mt-6 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-xs text-white hover:bg-white/10"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-white/70">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-sky-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-medium text-white/70">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-sky-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-type" className="block text-xs font-medium text-white/70">
                  Project Type / Opportunity
                </label>
                <select
                  id="contact-type"
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-white focus:border-sky-400 focus:outline-none"
                >
                  <option value="Event-Driven Microservices / Backend" className="bg-[#0a0a0a]">
                    Event-Driven Microservices / Backend
                  </option>
                  <option value="Autonomous AI Agent & Workflow Engine" className="bg-[#0a0a0a]">
                    Autonomous AI Agent & Workflow Engine
                  </option>
                  <option value="Full-Stack Web Application / SaaS" className="bg-[#0a0a0a]">
                    Full-Stack Web Application / SaaS
                  </option>
                  <option value="Full-time Engineering Role" className="bg-[#0a0a0a]">
                    Full-time Engineering Role
                  </option>
                  <option value="System Architecture Consultation" className="bg-[#0a0a0a]">
                    System Architecture Consultation
                  </option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-medium text-white/70">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your project scope, timeline, or engineering goals..."
                  className="mt-1.5 w-full rounded-xl border border-white/10 bg-black/40 px-3.5 py-2.5 text-sm text-white placeholder-white/30 focus:border-sky-400 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black transition-all hover:bg-white/90"
              >
                <span>Let&apos;s Build</span>
                <Send className="size-4" />
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* Section 22: Dramatic Minimal Final CTA */}
      <motion.div
        className="mt-20 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-sky-950/20 via-black to-emerald-950/20 p-8 sm:p-12 text-center"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, ease: EASE }}
      >
        <p className="font-mono text-xs tracking-[0.3em] text-sky-400 uppercase">
          Production Systems · Clear Contracts · High Throughput
        </p>
        <h3 className="font-heading mt-3 text-2xl sm:text-4xl font-semibold text-white">
          Your next high-throughput platform starts here.
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm text-[#a1a1a1]">
          Let’s talk architecture, agentic orchestration, and systems that don’t flinch under load.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href={site.mailHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:bg-white/90 shadow-lg"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
