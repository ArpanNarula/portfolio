"use client";

import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  CircuitBoard,
  Database,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Menu,
  Network,
  Server,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import {
  experience,
  featuredProjects,
  heroHighlights,
  heroRoles,
  navItems,
  otherProjects,
  proofPoints,
  skillGroups,
  whatIBuild,
} from "@/components/portfolio/data";
import {
  FeaturedProjectCard,
  OtherProjectCard,
} from "@/components/portfolio/project-cards";
import { SkillGroupCard } from "@/components/portfolio/skill-group-card";
import { TypewriterRoles } from "@/components/portfolio/typewriter-roles";
import { ActionButton, Reveal, SectionHeading } from "@/components/portfolio/ui";

const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const heroFloatingIcons = [
  {
    label: "Node APIs",
    icon: Server,
    className: "left-[-10px] top-14 animate-float-slow",
  },
  {
    label: "DB Models",
    icon: Database,
    className: "right-[-8px] top-8 animate-float-delayed",
  },
  {
    label: "REST",
    icon: Network,
    className: "right-10 bottom-8 animate-float-slow",
  },
  {
    label: "Logic",
    icon: Braces,
    className: "left-12 bottom-2 animate-float-delayed",
  },
];

const buildIcons: LucideIcon[] = [Server, Workflow, Database, Sparkles];

const particles = [
  { left: "8%", top: "10%", size: 3, duration: "11s", delay: "0s" },
  { left: "24%", top: "18%", size: 2, duration: "14s", delay: "1.5s" },
  { left: "38%", top: "8%", size: 4, duration: "13s", delay: "0.8s" },
  { left: "54%", top: "24%", size: 3, duration: "15s", delay: "2.2s" },
  { left: "72%", top: "14%", size: 2, duration: "12s", delay: "1.2s" },
  { left: "86%", top: "30%", size: 4, duration: "16s", delay: "2.5s" },
  { left: "18%", top: "60%", size: 2, duration: "12s", delay: "0.3s" },
  { left: "32%", top: "74%", size: 3, duration: "15s", delay: "1.8s" },
  { left: "66%", top: "70%", size: 2, duration: "13s", delay: "0.6s" },
  { left: "84%", top: "82%", size: 3, duration: "14s", delay: "2s" },
];

function BackgroundEffects() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="hero-grid-mask absolute inset-0 opacity-60" />
      <div className="noise-overlay absolute inset-0 opacity-40" />

      <div className="absolute inset-x-0 top-[-8rem] h-[26rem] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.26),transparent_55%)] blur-3xl" />
      <div className="animate-drift-slow absolute left-[-10%] top-[8%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/18 blur-[120px]" />
      <div className="animate-drift-delayed absolute right-[-8%] top-[16%] h-[24rem] w-[24rem] rounded-full bg-violet-500/14 blur-[120px]" />
      <div className="animate-drift-slow absolute bottom-[-8rem] left-[36%] h-[24rem] w-[24rem] rounded-full bg-blue-500/14 blur-[140px]" />
      <div className="animate-light-sweep absolute left-1/2 top-[12%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_58%)] blur-[120px]" />

      {particles.map((particle) => (
        <span
          key={`${particle.left}-${particle.top}`}
          className="particle-dot absolute rounded-full bg-cyan-100/60"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}
    </div>
  );
}

export function PortfolioPage() {
  const [open, setOpen] = useState(false);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <main className="app-shell relative min-h-screen overflow-x-hidden px-6 pb-24 pt-6 text-white sm:px-8">
          <BackgroundEffects />

          <m.nav
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-4 z-30 mx-auto flex w-[min(1160px,calc(100%-1.5rem))] items-center justify-between rounded-[24px] border border-white/12 bg-slate-950/70 px-4 py-3 shadow-[0_18px_80px_rgba(2,6,23,0.32)] backdrop-blur-2xl"
          >
            <a
              href="#top"
              className="text-sm font-semibold uppercase tracking-[0.28em] text-white"
            >
              arpan.dev
            </a>

            <div className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 sm:flex">
              <ActionButton
                href="https://github.com/ArpanNarula"
                icon={Github}
                variant="ghost"
                className="px-4 py-2"
              >
                GitHub
              </ActionButton>
              <ActionButton
                href="/resume.pdf"
                icon={FileDown}
                variant="secondary"
                download
                className="px-4 py-2"
              >
                Resume
              </ActionButton>
            </div>

            <div className="flex items-center gap-3 sm:hidden">
              <a
                href="/resume.pdf"
                download
                className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-slate-950"
              >
                Resume
              </a>
              <button
                aria-label="Toggle navigation menu"
                className="rounded-2xl border border-white/12 bg-white/[0.04] p-2 text-white backdrop-blur-xl"
                onClick={() => setOpen((current) => !current)}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </m.nav>

          {open ? (
            <m.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed left-1/2 top-24 z-20 w-[92%] max-w-md -translate-x-1/2 rounded-[28px] border border-white/12 bg-slate-950/90 p-6 shadow-[0_20px_70px_rgba(2,6,23,0.4)] backdrop-blur-2xl sm:hidden"
            >
              <div className="flex flex-col gap-4 text-slate-200">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base transition hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 h-px bg-white/10" />
                <a
                  href="https://github.com/ArpanNarula"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-200"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/arpan-narula-4a4793253"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-200"
                >
                  LinkedIn
                </a>
              </div>
            </m.div>
          ) : null}

          <section
            id="top"
            className="mx-auto max-w-6xl pb-8 pt-28 sm:pt-32 lg:pt-36"
          >
            <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <Reveal>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/18 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-50 shadow-[0_14px_40px_rgba(56,189,248,0.14)]">
                    <Sparkles size={16} />
                    Premium backend portfolio
                  </div>

                  <h1 className="mt-7 text-5xl font-semibold tracking-[-0.06em] text-white md:text-7xl">
                    <span className="text-glow bg-[linear-gradient(135deg,#ffffff_20%,#dbeafe_45%,#c4b5fd_80%)] bg-clip-text text-transparent">
                      Arpan Narula
                    </span>
                  </h1>

                  <div className="mt-6 text-xl font-medium tracking-[-0.03em] text-cyan-100 md:text-3xl">
                    <TypewriterRoles roles={heroRoles} />
                  </div>

                  <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                    Backend-focused engineer building scalable APIs, reliable
                    data systems, and service workflows that power real
                    products, not just polished interfaces.
                  </p>

                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                    I design backend architecture for inventory analytics, legal
                    research, and support tooling with a strong focus on clean
                    data flow, maintainability, and recruiter-friendly clarity.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <ActionButton
                      href="#featured-projects"
                      icon={ArrowUpRight}
                      variant="primary"
                    >
                      Explore Featured Work
                    </ActionButton>
                    <ActionButton
                      href="https://github.com/ArpanNarula"
                      icon={Github}
                      variant="secondary"
                    >
                      GitHub
                    </ActionButton>
                    <ActionButton
                      href="/resume.pdf"
                      icon={FileDown}
                      variant="ghost"
                      download
                    >
                      Resume
                    </ActionButton>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {heroHighlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="relative">
                  {heroFloatingIcons.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className={`absolute hidden rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 shadow-[0_12px_40px_rgba(2,6,23,0.36)] backdrop-blur-2xl lg:flex ${item.className}`}
                      >
                        <span className="flex items-center gap-2">
                          <Icon size={15} className="text-cyan-200" />
                          {item.label}
                        </span>
                      </div>
                    );
                  })}

                  <div className="relative overflow-hidden rounded-[34px] p-px shadow-[0_30px_100px_rgba(37,99,235,0.14)]">
                    <div className="absolute inset-0 rounded-[34px] bg-[linear-gradient(135deg,rgba(59,130,246,0.64),rgba(99,102,241,0.24),rgba(168,85,247,0.42))]" />
                    <div className="glass-surface relative rounded-[33px] p-6 md:p-7">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_42%)]" />
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/90">
                              Backend Snapshot
                            </p>
                            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                              APIs, services, and data flow
                            </h2>
                          </div>
                          <div className="hidden rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200 md:block">
                            Open to backend roles
                          </div>
                        </div>

                        <div className="mt-6 rounded-[28px] border border-white/10 bg-black/20 p-5 backdrop-blur-xl">
                          <div className="grid gap-3">
                            {[
                              "Client Requests",
                              "REST API Layer",
                              "Business Logic",
                              "Databases + AI Services",
                            ].map((step, index) => (
                              <div key={step} className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-semibold text-cyan-100">
                                  0{index + 1}
                                </div>
                                <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-medium text-slate-100">
                                  {step}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {[
                            {
                              title: "API Design",
                              text: "Clean route structures for real application workflows.",
                              icon: Server,
                            },
                            {
                              title: "Data Systems",
                              text: "Schemas shaped around query patterns and product needs.",
                              icon: Database,
                            },
                            {
                              title: "Integrations",
                              text: "AI and external service orchestration with reliable flow.",
                              icon: CircuitBoard,
                            },
                            {
                              title: "Service Logic",
                              text: "Backend-first thinking behind every dashboard and feature.",
                              icon: Workflow,
                            },
                          ].map((item) => {
                            const Icon = item.icon;
                            return (
                              <div
                                key={item.title}
                                className="rounded-[24px] border border-white/10 bg-white/[0.05] p-4"
                              >
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-cyan-100">
                                  <Icon size={18} />
                                </div>
                                <p className="mt-4 text-sm font-semibold text-white">
                                  {item.title}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                  {item.text}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal className="mt-10">
              <m.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid gap-4 md:grid-cols-3"
              >
                {proofPoints.map((point) => (
                  <m.div
                    key={point.title}
                    variants={fadeItem}
                    className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_70px_rgba(2,6,23,0.28)] backdrop-blur-2xl"
                  >
                    <p className="text-sm font-medium text-slate-400">
                      {point.title}
                    </p>
                    <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-white">
                      {point.value}
                    </p>
                  </m.div>
                ))}
              </m.div>
            </Reveal>
          </section>

          <section
            id="featured-projects"
            className="mx-auto mt-20 max-w-6xl scroll-mt-28"
          >
            <Reveal>
              <SectionHeading
                eyebrow="Featured Projects"
                title="Backend-heavy work gets the spotlight first"
                description="These projects are intentionally larger, richer, and more detailed so recruiter attention lands on backend systems, APIs, and architecture before anything else."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {featuredProjects.map((project, index) => (
                <Reveal
                  key={project.title}
                  delay={0.08 * index}
                  className={project.featured ? "lg:col-span-2" : ""}
                >
                  <FeaturedProjectCard
                    project={project}
                    className={project.featured ? "lg:col-span-2" : ""}
                  />
                </Reveal>
              ))}
            </div>
          </section>

          <section
            id="what-i-build"
            className="mx-auto mt-24 max-w-6xl scroll-mt-28"
          >
            <Reveal>
              <SectionHeading
                eyebrow="What I Build"
                title="Systems that make the interface possible"
                description="The goal is not just to show finished screens. It is to show the backend thinking underneath them: APIs, workflows, integrations, and data systems."
              />
            </Reveal>

            <m.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
            >
              {whatIBuild.map((item, index) => {
                const Icon = buildIcons[index];

                return (
                  <m.article
                    key={item.title}
                    variants={fadeItem}
                    whileHover={{ y: -6 }}
                    className="glass-surface rounded-[28px] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.26)]"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/18 bg-cyan-400/10 text-cyan-100 shadow-[0_12px_30px_rgba(56,189,248,0.16)]">
                      <Icon size={20} />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </m.article>
                );
              })}
            </m.div>
          </section>

          <section id="skills" className="mx-auto mt-24 max-w-6xl scroll-mt-28">
            <Reveal>
              <SectionHeading
                eyebrow="Backend Skills"
                title="Visual, scannable, and still honest"
                description="Grouped skill cards make backend strengths easy to scan quickly while keeping the page polished and recruiter-friendly."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {skillGroups.map((group, index) => (
                <Reveal key={group.title} delay={0.08 * index}>
                  <SkillGroupCard group={group} />
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-6">
              <div className="glass-surface rounded-[26px] p-5 text-sm leading-7 text-slate-400">
                I can still build the frontend layer when needed, but the core
                positioning here is deliberate: backend systems, API design,
                data flow, and application architecture come first.
              </div>
            </Reveal>
          </section>

          <section
            id="experience"
            className="mx-auto mt-24 max-w-5xl scroll-mt-28"
          >
            <Reveal>
              <SectionHeading
                eyebrow="Experience"
                title="Professional work framed like backend ownership"
                description="The experience block now reads more like an engineering timeline entry than a generic internship line item."
              />
            </Reveal>

            <Reveal className="mt-12">
              <div className="relative pl-8">
                <div className="absolute left-3 top-3 bottom-4 w-px bg-gradient-to-b from-cyan-300 via-blue-400/60 to-transparent" />
                <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/15 shadow-[0_12px_24px_rgba(56,189,248,0.22)]">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-200" />
                </div>

                <m.article
                  whileHover={{ x: 4, y: -3 }}
                  className="glass-surface rounded-[30px] border-l border-l-cyan-300/30 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.3)]"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
                        Timeline Entry
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                        {experience.title}
                      </h3>
                      <p className="mt-1 text-base text-slate-300">
                        {experience.company}
                      </p>
                    </div>
                    <p className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300">
                      {experience.period}
                    </p>
                  </div>

                  <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
                    {experience.summary}
                  </p>

                  <div className="mt-6 grid gap-3 md:grid-cols-3">
                    {experience.highlights.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-300"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </m.article>
              </div>
            </Reveal>
          </section>

          <section
            id="other-projects"
            className="mx-auto mt-24 max-w-6xl scroll-mt-28"
          >
            <Reveal>
              <SectionHeading
                eyebrow="Other Projects"
                title="Smaller cards, supporting range"
                description="These projects stay visible, but with a lighter visual hierarchy so the portfolio still leads with backend-first work."
              />
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              {otherProjects.map((project, index) => (
                <Reveal key={project.title} delay={0.08 * index}>
                  <OtherProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </section>

          <section id="contact" className="mx-auto mt-24 max-w-6xl scroll-mt-28">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="A premium finish, still easy to reach"
                description="The contact area keeps the same simplicity as the rest of the portfolio: polished surfaces, clear actions, and no unnecessary clutter."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <Reveal>
                <div className="glass-surface rounded-[32px] p-7 shadow-[0_24px_90px_rgba(2,6,23,0.3)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
                    Let&apos;s connect
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                    Open to backend engineering opportunities
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-slate-400">
                    Especially interested in roles focused on APIs, backend
                    systems, support tooling, analytics workflows, and platform
                    engineering foundations.
                  </p>

                  <div className="mt-8 space-y-4">
                    <a
                      href="mailto:arpannarula9999@gmail.com"
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-200 transition hover:border-cyan-300/20 hover:bg-white/[0.06]"
                    >
                      <Mail size={18} className="text-cyan-200" />
                      arpannarula9999@gmail.com
                    </a>
                    <a
                      href="https://github.com/ArpanNarula"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-200 transition hover:border-cyan-300/20 hover:bg-white/[0.06]"
                    >
                      <Github size={18} className="text-cyan-200" />
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/arpan-narula-4a4793253"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-200 transition hover:border-cyan-300/20 hover:bg-white/[0.06]"
                    >
                      <Linkedin size={18} className="text-cyan-200" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <form
                  action="https://formspree.io/f/mojnlnej"
                  method="POST"
                  className="glass-surface rounded-[32px] p-7 shadow-[0_24px_90px_rgba(2,6,23,0.3)]"
                >
                  <div className="grid gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="input-surface w-full rounded-2xl px-4 py-3 text-white placeholder:text-slate-500"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="input-surface w-full rounded-2xl px-4 py-3 text-white placeholder:text-slate-500"
                    />
                    <textarea
                      name="message"
                      placeholder="Tell me about the role, team, or project."
                      required
                      rows={6}
                      className="input-surface w-full rounded-2xl px-4 py-3 text-white placeholder:text-slate-500"
                    />
                    <m.button
                      whileHover={{ y: -2, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(224,242,254,0.92))] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_46px_rgba(148,163,184,0.16)]"
                    >
                      <span>Send Message</span>
                      <ArrowUpRight
                        size={16}
                        className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </m.button>
                  </div>
                </form>
              </Reveal>
            </div>
          </section>
        </main>
      </MotionConfig>
    </LazyMotion>
  );
}
