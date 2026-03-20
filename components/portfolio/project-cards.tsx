"use client";

import { m } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Database,
  Github,
  Search,
  Server,
  Sparkles,
  Upload,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { FeaturedProject, OtherProject } from "@/components/portfolio/data";

const focusIconMap: Record<string, LucideIcon> = {
  API: Server,
  Database,
  AI: BrainCircuit,
  Analytics: Sparkles,
  Upload,
  Search,
};

type FeaturedProjectCardProps = {
  project: FeaturedProject;
  className?: string;
};

type OtherProjectCardProps = {
  project: OtherProject;
};

export function FeaturedProjectCard({
  project,
  className = "",
}: FeaturedProjectCardProps) {
  return (
    <m.article
      whileHover={{ y: -8, scale: 1.008 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[30px] p-px ${className}`}
      style={{ background: project.accent.border }}
    >
      <div
        className="glass-surface relative h-full overflow-hidden rounded-[29px] p-7 md:p-8"
        style={{ boxShadow: `0 30px 90px ${project.accent.glow}` }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at top right, ${project.accent.glow}, transparent 46%)`,
          }}
        />

        <div className="relative grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
              {project.label}
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
              {project.title}
            </h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.focusAreas.map((area) => {
                const Icon = focusIconMap[area] ?? Sparkles;
                return (
                  <div
                    key={area}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-slate-200"
                  >
                    <Icon size={14} />
                    {area}
                  </div>
                );
              })}
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                What I Worked On
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {project.backendContributions.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Tech Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {project.techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-slate-200"
                    style={{ backgroundColor: project.accent.pill }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <m.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_36px_rgba(255,255,255,0.12)]"
              >
                <Github size={16} />
                GitHub
              </m.a>
              <m.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.985 }}
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-cyan-50 shadow-[0_16px_46px_rgba(56,189,248,0.14)]"
              >
                <ArrowUpRight size={16} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                Live Demo
              </m.a>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-[26px] border border-white/10 p-5"
            style={{ background: project.accent.preview }}
          >
            <div className="pointer-events-none absolute -right-12 top-0 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/90">
                Quick Look
              </p>

              <div className="mt-5 space-y-3">
                {project.architecture.map((node, index) => (
                  <div key={node} className="flex items-center gap-3">
                    <div className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-medium text-slate-100 backdrop-blur-sm">
                      {node}
                    </div>
                    {index < project.architecture.length - 1 ? (
                      <span className="text-cyan-100">→</span>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3">
                {project.keyFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm leading-6 text-slate-200 backdrop-blur-sm"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </m.article>
  );
}

export function OtherProjectCard({ project }: OtherProjectCardProps) {
  return (
    <m.article
      whileHover={{ y: -6, scale: 1.012 }}
      transition={{ duration: 0.22 }}
      className="group relative overflow-hidden rounded-[26px] p-px"
      style={{ background: project.accent.border }}
    >
      <div
        className="glass-surface relative overflow-hidden rounded-[25px] p-6"
        style={{ boxShadow: `0 24px 70px ${project.accent.glow}` }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at top right, ${project.accent.glow}, transparent 45%)`,
          }}
        />

        <div
          className="relative rounded-[20px] border border-white/10 p-4"
          style={{ background: project.accent.preview }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
            {project.label}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            {project.description}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {project.techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-2 text-xs font-medium text-slate-200"
              style={{ backgroundColor: project.accent.pill }}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
          >
            <ArrowUpRight size={16} />
            Live Demo
          </a>
        </div>
      </div>
    </m.article>
  );
}
