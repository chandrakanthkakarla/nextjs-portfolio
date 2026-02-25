"use client";
import { motion } from "framer-motion";

type ToolsRowProps = { name: string; subtitle: string; iconSrc: string; active?: boolean };

export default function ToolsRow({ name, subtitle, iconSrc, active = false }: ToolsRowProps) {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={[
        "flex items-center gap-5 rounded-2xl p-6 transition-colors duration-300",
        "bg-neutral-100/60 dark:bg-neutral-900/50",
        "hover:bg-neutral-200/70 dark:hover:bg-neutral-800/70",
        active ? "bg-neutral-200/80 dark:bg-neutral-800/80" : "",
      ].join(" ")}
    >
      <motion.div
        whileHover={{ rotate: 15, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-sm"
      >
        <img src={iconSrc} alt={name} className="h-8 w-8 object-contain" />
      </motion.div>
      <div className="min-w-0">
        <div className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">{name}</div>
        <div className="mt-1 text-base text-neutral-600 dark:text-neutral-400">{subtitle}</div>
      </div>
    </motion.div>
  );
}
