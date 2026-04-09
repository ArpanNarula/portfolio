"use client";

import { m } from "framer-motion";
import { Database, Server, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SkillGroup } from "@/components/portfolio/data";

const iconMap: Record<string, LucideIcon> = {
  "Languages & Frameworks": Server,
  "Data & Backend": Database,
  Tools: Wrench,
};

type SkillGroupCardProps = {
  group: SkillGroup;
};

export function SkillGroupCard({ group }: SkillGroupCardProps) {
  const Icon = iconMap[group.title] ?? Wrench;

  return (
    <m.article
      data-skill-card
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22 }}
      className="group rounded-[28px] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_70px_rgba(2,6,23,0.3)] backdrop-blur-xl"
    >
      <div className="flex items-center gap-3">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-100 shadow-[0_12px_30px_rgba(56,189,248,0.18)]">
          <Icon size={20} />
        </div>
        <div>
          <p className="text-xl font-semibold text-white">{group.title}</p>
          <p className="text-sm text-slate-400">{group.subtitle}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {group.items.map((item) => (
          <m.span
            key={item}
            whileHover={{ scale: 1.04 }}
            className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-medium text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition group-hover:border-cyan-400/18"
          >
            {item}
          </m.span>
        ))}
      </div>
    </m.article>
  );
}
