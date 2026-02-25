"use client";

import { motion } from "framer-motion";
import {
  Linkedin,
  InstagramIcon,
} from "lucide-react";

const socials = [
  { label: "LinkedIn",  href: "https://www.linkedin.com/in/chandrakanth18/", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com/ckchowdary21",      icon: InstagramIcon },
];

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
    >
      {/* dotted arc (top) */}
      <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full border-[4px] border-dashed border-gray-300 opacity-90" />

      <div className="p-7">
        {/* image frame */}
        <div className="rounded-3xl bg-white p-4">
          <div className="h-[285px] overflow-hidden rounded-3xl">
            <img
              src="/img/smart.png"
              alt="Profile"
              className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* name */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 text-center text-4xl font-black tracking-tight text-zinc-900"
        >
          Chandrakanth Kakarla
        </motion.h2>

        {/* dotted arc */}
        <div className="relative mt-6 flex items-center justify-center">
          <div className="pointer-events-none absolute -left-12 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border-[4px] border-dashed border-gray-300 opacity-90" />
        </div>

        {/* description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-center text-lg leading-snug text-zinc-500"
        >
          A Network Engineer
        </motion.p>

        {/* socials */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15, delayChildren: 0.6 } },
          }}
        >
          {socials.map(({ label, href, icon: Icon }) => (
            <motion.div
              key={label}
              variants={{
                hidden:  { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <SocialIcon label={label} href={href}>
                <Icon size={22} strokeWidth={2.2} />
              </SocialIcon>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </motion.div>
  );
}

function SocialIcon({
  children,
  label,
  href,
}: {
  children: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="
        relative z-20
        grid h-11 w-11 place-items-center rounded-full
        text-gray-500 transition-all duration-300
        hover:scale-125 hover:text-black hover:-translate-y-1
      "
    >
      {children}
    </a>
  );
}
