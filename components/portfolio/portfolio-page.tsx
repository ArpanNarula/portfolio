"use client";

import { LazyMotion, MotionConfig, domAnimation, m } from "framer-motion";
import {
  ArrowUpRight,
  CircuitBoard,
  Database,
  FileDown,
  Github,
  Linkedin,
  Mail,
  Menu,
  Server,
  Workflow,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import {
  experience,
  featuredProjects,
  heroHighlights,
  heroRoles,
  navItems,
  otherProjects,
  proofPoints,
  skillGroups,
} from "@/components/portfolio/data";
import {
  FeaturedProjectCard,
  OtherProjectCard,
} from "@/components/portfolio/project-cards";
import { ShowcaseSection } from "@/components/portfolio/showcase-section";
import { SkillGroupCard } from "@/components/portfolio/skill-group-card";
import { TypewriterRoles } from "@/components/portfolio/typewriter-roles";
import { usePremiumScroll } from "@/components/portfolio/use-premium-scroll";
import { ActionButton, Reveal, SectionHeading } from "@/components/portfolio/ui";

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
      <div
        data-parallax="8"
        className="hero-grid-mask absolute inset-0 opacity-60"
      />
      <div className="noise-overlay absolute inset-0 opacity-40" />

      <div
        data-parallax="12"
        className="absolute inset-x-0 top-[-8rem] h-[26rem] bg-[radial-gradient(circle_at_top,rgba(217,119,6,0.16),transparent_58%)] blur-3xl"
      />
      <div
        data-parallax="18"
        className="animate-drift-slow absolute left-[-10%] top-[8%] h-[28rem] w-[28rem] rounded-full bg-amber-600/12 blur-[120px]"
      />
      <div
        data-parallax="24"
        className="animate-drift-delayed absolute right-[-8%] top-[16%] h-[24rem] w-[24rem] rounded-full bg-emerald-600/10 blur-[120px]"
      />
      <div
        data-parallax="16"
        className="animate-drift-slow absolute bottom-[-8rem] left-[36%] h-[24rem] w-[24rem] rounded-full bg-stone-500/10 blur-[140px]"
      />
      <div
        data-parallax="10"
        className="animate-light-sweep absolute left-1/2 top-[12%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_58%)] blur-[120px]"
      />

      {particles.map((particle) => (
        <span
          key={`${particle.left}-${particle.top}`}
          className="particle-dot absolute rounded-full bg-amber-100/50"
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
  const mainRef = useRef<HTMLElement | null>(null);
  const mainFeaturedProjects = featuredProjects.slice(0, -1);
  const closingFeaturedProject = featuredProjects[featuredProjects.length - 1];
  const stackedProjects = otherProjects;
  usePremiumScroll(mainRef);

  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">
        <main
          ref={mainRef}
          className="app-shell relative min-h-screen overflow-x-hidden px-6 pb-28 pt-6 text-white sm:px-8"
        >
          <BackgroundEffects />

          <m.nav
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            data-nav
            className="fixed inset-x-0 top-4 z-30 mx-auto flex w-[min(1160px,calc(100%-1.5rem))] items-center justify-between rounded-[24px] border border-white/10 bg-stone-950/64 px-4 py-3 shadow-[0_18px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          >
            <a
              href="#top"
              className="text-sm font-semibold uppercase tracking-[0.28em] text-white"
            >
              Portfolio
            </a>

            <div className="hidden items-center gap-6 text-sm font-medium text-stone-300 md:flex">
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
              className="fixed left-1/2 top-24 z-20 w-[92%] max-w-md -translate-x-1/2 rounded-[28px] border border-white/12 bg-stone-950/92 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:hidden"
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
                  className="text-amber-200"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/arpan-narula-4a4793253"
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-200"
                >
                  LinkedIn
                </a>
              </div>
            </m.div>
          ) : null}

          <section
            id="top"
            data-hero-section
            className="mx-auto max-w-6xl pb-10 pt-[7.5rem] sm:pt-36 lg:pt-40"
          >
            <div className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
              <div data-hero-copy className="max-w-[40rem]">
                <div>
                  <h1 className="text-5xl font-semibold tracking-[-0.07em] text-white md:text-7xl lg:text-[6.4rem]">
                    <span className="text-glow bg-[linear-gradient(135deg,#fffaf0_18%,#f5d58b_48%,#9fd0ad_82%)] bg-clip-text text-transparent">
                      Arpan Narula
                    </span>
                  </h1>

                  <div className="mt-6 text-xl font-medium tracking-[-0.03em] text-amber-100 md:text-3xl">
                    <TypewriterRoles roles={heroRoles} />
                  </div>

                  <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300">
                    I build products that feel useful, fast, and easy to use,
                    whether the work leans frontend, backend, or both.
                  </p>

                  <p className="mt-4 max-w-2xl text-base leading-8 text-stone-400">
                    Most of my work sits between product, backend, and UI. This
                    portfolio brings together dashboards, APIs, support tools,
                    legal tech, and a few smaller experiments.
                  </p>

                  <div className="mt-9 flex flex-wrap gap-3">
                    <ActionButton
                      href="#projects"
                      icon={ArrowUpRight}
                      variant="primary"
                    >
                      View Projects
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

                  <div className="mt-9 flex flex-wrap gap-3">
                    {heroHighlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div data-hero-panel className="hero-panel relative">
                <div className="relative">
                  <div className="relative overflow-hidden rounded-[34px] p-px shadow-[0_30px_100px_rgba(217,119,6,0.1)]">
                    <div className="absolute inset-0 rounded-[34px] bg-[linear-gradient(135deg,rgba(217,119,6,0.46),rgba(34,197,94,0.2),rgba(120,113,108,0.28))]" />
                    <div className="glass-surface relative rounded-[33px] p-6 md:p-7">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.1),transparent_44%)]" />
                      <div className="relative">
                        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
                          <div className="max-w-[26rem]">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/90">
                              Quick intro
                            </p>
                            <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white">
                              Product thinking, interface detail, and backend work
                            </h2>
                          </div>
                          <div className="hidden rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-200 md:block lg:justify-self-end">
                            Open to software roles
                          </div>
                        </div>

                        <div className="mt-6 rounded-[28px] border border-white/10 bg-black/20 p-5 backdrop-blur-xl">
                          <div className="grid gap-3">
                            {[
                              "Product ideas",
                              "Frontend work",
                              "Backend logic",
                              "Deployment",
                            ].map((step, index) => (
                              <div key={step} className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-amber-300/20 bg-amber-300/10 text-sm font-semibold text-amber-100">
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
                              title: "Web apps",
                              text: "I like building products that feel clear and practical.",
                              icon: Server,
                            },
                            {
                              title: "APIs",
                              text: "A lot of my work involves APIs, data flow, and integrations.",
                              icon: Database,
                            },
                            {
                              title: "AI features",
                              text: "I use AI when it adds something real to the product.",
                              icon: CircuitBoard,
                            },
                            {
                              title: "Shipping",
                              text: "I care about finishing projects and getting them live.",
                              icon: Workflow,
                            },
                          ].map((item) => {
                            const Icon = item.icon;
                            return (
                              <div
                                key={item.title}
                                className="rounded-[24px] border border-white/10 bg-white/[0.05] p-4"
                              >
                                <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-amber-100">
                                  <Icon size={18} />
                                </div>
                                <p className="mt-4 text-sm font-semibold text-white">
                                  {item.title}
                                </p>
                                <p className="mt-2 text-sm leading-6 text-stone-400">
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
              </div>
            </div>

            <ShowcaseSection
              points={proofPoints}
              highlights={heroHighlights}
            />
          </section>

          <section
            id="projects"
            className="mx-auto mt-28 max-w-6xl scroll-mt-28"
          >
            <Reveal>
              <SectionHeading
                eyebrow="Projects"
                title="Some things I’ve built"
                description="A selection of product, backend, and interface work."
                align="left"
              />
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {mainFeaturedProjects.map((project, index) => (
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

            {closingFeaturedProject ? (
              <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.88fr)] lg:items-start">
                <Reveal delay={0.08 * mainFeaturedProjects.length}>
                  <FeaturedProjectCard project={closingFeaturedProject} />
                </Reveal>

                {stackedProjects.length > 0 ? (
                  <div className="grid gap-5 self-start">
                    {stackedProjects.map((project, index) => (
                      <Reveal
                        key={project.title}
                        delay={0.08 * (mainFeaturedProjects.length + index + 1)}
                      >
                        <OtherProjectCard project={project} />
                      </Reveal>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
          </section>

          <section id="skills" className="mx-auto mt-28 max-w-6xl scroll-mt-28">
            <Reveal>
              <SectionHeading
                eyebrow="Skills"
                title="Tech I use"
                align="left"
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
              <div className="glass-surface rounded-[26px] p-5 text-sm leading-7 text-stone-400">
                I’m comfortable working across the stack, depending on what the
                product needs.
              </div>
            </Reveal>
          </section>

          <section
            id="experience"
            className="mx-auto mt-28 max-w-5xl scroll-mt-28"
          >
            <Reveal>
              <SectionHeading
                eyebrow="Experience"
                title="Experience"
                align="left"
              />
            </Reveal>

            <div className="mt-12 space-y-8">
              {experience.map((item, index) => (
                <Reveal key={`${item.company}-${item.title}`} delay={0.08 * index}>
                  <div className="relative pl-8">
                    <div
                      className={`absolute left-3 top-3 w-px bg-gradient-to-b from-amber-300/70 via-emerald-500/35 to-transparent ${
                        index === experience.length - 1 ? "bottom-4" : "bottom-[-2rem]"
                      }`}
                    />
                    <div className="absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/12 shadow-[0_12px_24px_rgba(217,119,6,0.18)]">
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-200" />
                    </div>

                    <m.article
                      whileHover={{ x: 4, y: -3 }}
                      data-contact-card
                      className="glass-surface rounded-[24px] border-l border-l-amber-300/30 p-7 shadow-[0_24px_80px_rgba(2,6,23,0.26)]"
                    >
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-100/80">
                            {item.employmentType}
                          </p>
                          <h3 className="mt-3 text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-base text-stone-300">
                            {item.company} · {item.location}
                          </p>
                        </div>
                        <p className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-stone-300">
                          {item.period}
                        </p>
                      </div>

                      <p className="mt-6 max-w-3xl text-base leading-8 text-stone-300">
                        {item.summary}
                      </p>

                      <div className="mt-6 grid gap-3 md:grid-cols-2">
                        {item.responsibilities.map((responsibility) => (
                          <div
                            key={responsibility}
                            className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-stone-300"
                          >
                            {responsibility}
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 flex flex-wrap gap-2.5">
                        {item.technologies.map((technology) => (
                          <span
                            key={`${item.company}-${technology}`}
                            className="rounded-full border border-amber-200/12 bg-amber-200/[0.07] px-3 py-2 text-xs font-medium text-amber-50/90"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div className="mt-6 grid gap-3 md:grid-cols-3">
                        {item.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="rounded-2xl border border-emerald-200/10 bg-emerald-200/[0.045] p-4 text-sm leading-6 text-stone-300"
                          >
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </m.article>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          <section id="contact" className="mx-auto mt-28 max-w-6xl scroll-mt-28">
            <Reveal>
              <SectionHeading
                eyebrow="Contact"
                title="Get in touch"
                align="left"
              />
            </Reveal>

            <div className="mt-12 grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
              <Reveal>
                <div
                  data-contact-card
                  className="glass-surface rounded-[32px] p-7 shadow-[0_24px_90px_rgba(2,6,23,0.3)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-100/80">
                    Let&apos;s connect
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
                    Open to new opportunities
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-8 text-stone-400">
                    If there’s a role, team, or product where I could help,
                    feel free to reach out.
                  </p>

                  <div className="mt-8 space-y-4">
                    <a
                      href="mailto:arpannarula9999@gmail.com"
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-stone-200 transition hover:border-amber-300/20 hover:bg-white/[0.06]"
                    >
                      <Mail size={18} className="text-amber-200" />
                      arpannarula9999@gmail.com
                    </a>
                    <a
                      href="https://github.com/ArpanNarula"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-stone-200 transition hover:border-amber-300/20 hover:bg-white/[0.06]"
                    >
                      <Github size={18} className="text-amber-200" />
                      GitHub
                    </a>
                    <a
                      href="https://linkedin.com/in/arpan-narula-4a4793253"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-stone-200 transition hover:border-amber-300/20 hover:bg-white/[0.06]"
                    >
                      <Linkedin size={18} className="text-amber-200" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <form
                  data-contact-card
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
                      className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-amber-300/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(254,243,199,0.9))] px-5 py-3 text-sm font-semibold text-stone-950 shadow-[0_18px_46px_rgba(217,119,6,0.12)]"
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
