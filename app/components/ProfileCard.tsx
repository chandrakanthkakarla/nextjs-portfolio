"use client";
import { motion } from "framer-motion";
import { Linkedin, InstagramIcon } from "lucide-react";

const socials = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/chandrakanth18/", icon: Linkedin },
  // { label: "Instagram", href: "https://www.instagram.com/ckchowdary21",      icon: InstagramIcon },
];

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5"
    >
      {/* spinning ring top-left */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full border-[3px] border-dashed border-gray-300 opacity-60"
      />

      {/* spinning ring bottom-right */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full border-[3px] border-dashed border-gray-200 opacity-40"
      />

      <div className="p-7">
        {/* image */}
        <div className="rounded-3xl bg-white p-4">
          <div className="h-[210px] w-full overflow-hidden rounded-3xl">
            <img
              src="/img/smart.png"
              alt="Profile"
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        {/* name */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-center text-4xl font-black tracking-tight text-zinc-900"
        >
          Chandrakanth Kakarla
        </motion.h2>

        {/* role badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-3 flex justify-center"
        >
          <span className="rounded-full bg-zinc-100 px-4 py-1 text-sm font-semibold text-zinc-500 ring-1 ring-zinc-200">
            Network Engineer
          </span>
        </motion.div>

        {/* ✅ availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-3 flex justify-center"
        >
          <span className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-1.5 text-sm font-semibold text-green-600 ring-1 ring-green-500/20">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Available 
          </span>
        </motion.div>

        {/* socials */}
        <motion.div
          className="mt-6 flex items-center justify-center gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.7 } },
          }}
        >
          {socials.map(({ label, href, icon: Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.2, y: -3 }}
              className="grid h-11 w-11 place-items-center rounded-full text-zinc-400 transition-colors hover:text-zinc-900"
            >
              <Icon size={22} strokeWidth={2.2} />
            </motion.a>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
}
