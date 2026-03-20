"use client";

import { m } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

type ActionButtonProps = {
  href: string;
  children: ReactNode;
  icon: LucideIcon;
  variant?: "primary" | "secondary" | "ghost";
  download?: boolean;
  className?: string;
};

export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "left" ? "text-left" : "text-center";
  const wrapperWidth = align === "left" ? "max-w-3xl" : "mx-auto max-w-3xl";

  return (
    <div className={`${wrapperWidth} ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200/80">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-400">{description}</p>
    </div>
  );
}

export function ActionButton({
  href,
  children,
  icon: Icon,
  variant = "primary",
  download = false,
  className = "",
}: ActionButtonProps) {
  const isExternal =
    href.startsWith("http://") || href.startsWith("https://");

  const variantClasses = {
    primary:
      "bg-white text-slate-950 shadow-[0_18px_40px_rgba(255,255,255,0.12)]",
    secondary:
      "border border-cyan-400/20 bg-cyan-400/10 text-cyan-50 shadow-[0_18px_48px_rgba(56,189,248,0.14)]",
    ghost:
      "border border-white/12 bg-white/[0.04] text-white shadow-[0_18px_48px_rgba(15,23,42,0.22)]",
  };

  return (
    <m.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      download={download}
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      className={`group inline-flex items-center gap-3 rounded-2xl px-5 py-3 text-sm font-semibold transition ${variantClasses[variant]} ${className}`}
    >
      <span>{children}</span>
      <Icon
        size={16}
        className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </m.a>
  );
}
