"use client";

import { Layers3, Rocket, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "@/components/portfolio/ui";

type Point = {
  title: string;
  value: string;
};

type ShowcaseSectionProps = {
  points: Point[];
  highlights: string[];
};

const iconMap: Record<string, LucideIcon> = {
  Projects: Layers3,
  "Work I enjoy": Sparkles,
  "Looking for": Rocket,
};

const cardAccents = [
  "linear-gradient(180deg, rgba(15,23,42,0.92), rgba(17,24,39,0.78))",
  "linear-gradient(180deg, rgba(10,21,44,0.94), rgba(19,27,48,0.8))",
  "linear-gradient(180deg, rgba(16,18,42,0.94), rgba(23,23,46,0.8))",
];

export function ShowcaseSection({
  points,
  highlights,
}: ShowcaseSectionProps) {
  return (
    <section className="mt-16 lg:mt-24">
      <div className="lg:hidden">
        <Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {points.map((point) => (
              <article
                key={point.title}
                className="glass-surface rounded-[28px] p-6 shadow-[0_20px_80px_rgba(2,6,23,0.28)]"
              >
                <p className="text-sm font-medium text-slate-400">
                  {point.title}
                </p>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-white">
                  {point.value}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>

      <div data-showcase className="hidden lg:block">
        <div className="relative rounded-[40px] p-px">
          <div className="absolute inset-0 rounded-[40px] bg-[linear-gradient(135deg,rgba(255,255,255,0.16),rgba(99,102,241,0.32),rgba(56,189,248,0.22),rgba(15,23,42,0.18))]" />
          <div
            data-showcase-pin
            className="glass-surface relative overflow-hidden rounded-[39px] px-9 py-10 xl:px-10 xl:py-12"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.16),transparent_34%)]" />

            <div className="relative grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-center">
              <div className="max-w-md">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-100/80">
                  Build Mindset
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white">
                  Thoughtful products, solid systems, and work that ships.
                </h2>
                <p className="mt-6 text-base leading-8 text-slate-400">
                  I care about the full product experience, but I usually think
                  about it in layers: what gets built, how it works, and how it
                  reaches users.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative h-[420px]">
                {points.map((point, index) => {
                  const Icon = iconMap[point.title] ?? Sparkles;
                  const highlightPair = [
                    highlights[index % highlights.length],
                    highlights[(index + 1) % highlights.length],
                  ];

                  return (
                    <article
                      key={point.title}
                      data-showcase-card
                      className="showcase-card absolute inset-0 mx-auto flex max-w-[34rem] flex-col justify-between rounded-[34px] border border-white/10 p-8 shadow-[0_30px_100px_rgba(2,6,23,0.34)]"
                      style={{ background: cardAccents[index] ?? cardAccents[0] }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-[20px] border border-cyan-300/20 bg-cyan-300/10 text-cyan-100 shadow-[0_18px_40px_rgba(56,189,248,0.14)]">
                          <Icon size={22} />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">
                          {point.title}
                        </p>
                      </div>

                      <div className="mt-14">
                        <p className="max-w-lg text-4xl font-semibold leading-tight tracking-[-0.05em] text-white">
                          {point.value}
                        </p>
                      </div>

                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {highlightPair.map((item) => (
                          <div
                            key={`${point.title}-${item}`}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-300"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
