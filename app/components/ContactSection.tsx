"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Props = { animated?: boolean };

export default function ContactSection({ animated = false }: Props) {
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState<boolean | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formEl = e.currentTarget; // ✅ capture immediately
        const form = new FormData(formEl);

        setLoading(true);
        setOk(null);
        setError(null);

        const payload = {
            name: String(form.get("name") || ""),
            email: String(form.get("email") || ""),
            message: String(form.get("message") || ""),
            website: String(form.get("website") || ""), // honeypot
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            if (!res.ok || !data.ok) throw new Error(data.error || "Failed");

            setOk(true);
            formEl.reset(); // ✅ always valid now
        } catch (err: any) {
            setOk(false);
            setError(err.message || "Something went wrong.");
        } finally {
            setLoading(false);
        }
    }

    const Content = (
        <section className="space-y-10">
            <div className="px-10">
                <h2 className="font-black leading-[0.9] tracking-tight">
                    <span className="block text-[clamp(3.5rem,7vw,7rem)] text-black dark:text-white">
                        CONTACT
                    </span>
                    <span className="block text-[clamp(3.5rem,7vw,7rem)] text-neutral-500/50">
                        ME
                    </span>
                </h2>
            </div>

            <div className="px-10">
                <div className="rounded-2xl bg-neutral-100/60 p-8 transition-colors duration-300 hover:bg-neutral-200/70 dark:bg-neutral-900/50 dark:hover:bg-neutral-800/70">
                    <form onSubmit={onSubmit} className="space-y-5">
                        {/* honeypot */}
                        <input
                            name="website"
                            className="hidden"
                            tabIndex={-1}
                            autoComplete="off"
                        />

                        <div className="grid gap-4 md:grid-cols-2">
                            <Field label="Name">
                                <input
                                    name="name"
                                    required
                                    className="w-full rounded-xl bg-white/70 px-4 py-3 text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 dark:bg-black/20 dark:text-white"
                                    placeholder="Your name"
                                />
                            </Field>

                            <Field label="Email">
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full rounded-xl bg-white/70 px-4 py-3 text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 dark:bg-black/20 dark:text-white"
                                    placeholder="you@email.com"
                                />
                            </Field>
                        </div>

                        <Field label="Message">
                            <textarea
                                name="message"
                                required
                                rows={5}
                                className="w-full rounded-xl bg-white/70 px-4 py-3 text-neutral-900 outline-none ring-0 placeholder:text-neutral-400 dark:bg-black/20 dark:text-white"
                                placeholder="Tell me about your project..."
                            />
                        </Field>

                        <button
                            disabled={loading}
                            className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60 dark:bg-white dark:text-black"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                        {ok === true && (
                            <p className="text-sm text-green-600 dark:text-green-400">
                                Message sent! I’ll get back to you soon.
                            </p>
                        )}
                        {ok === false && (
                            <p className="text-sm text-red-600 dark:text-red-400">
                                {error || "Failed to send. Try again."}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );

    return animated ? <Reveal amount={0.15} y={24}>{Content}</Reveal> : Content;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return (
        <label className="block space-y-2">
            <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                {label}
            </span>
            {children}
        </label>
    );
}
