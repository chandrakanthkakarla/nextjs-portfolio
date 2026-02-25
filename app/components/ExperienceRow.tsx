"use client";
import { motion } from "framer-motion";

type ExperienceRowProps = {
  title: string; role: string;
  description: string; period: string; href?: string;
};

export default function ExperienceRow({ title, role, description, period, href }: ExperienceRowProps) {
  const Wrapper: any = href ? "a" : motion.div;

  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group flex items-start justify-between gap-8
        rounded-2xl py-10 px-8 transition-all duration-300 mb-2
        bg-neutral-100/60 dark:bg-neutral-900/50
        hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70
        border-l-4 border-l-transparent hover:border-l-orange-500"
    >
      <div className="max-w-3xl">
        <h3 className="text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">{title}</h3>
        <p className="mt-1 text-lg font-medium text-neutral-600 dark:text-neutral-400">{role}</p>
        <p className="mt-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">{description}</p>
        <p className="mt-6 text-base text-neutral-500 dark:text-neutral-400">{period}</p>
      </div>
    </Wrapper>
  );
}
