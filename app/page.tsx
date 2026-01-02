import ProfileCard from "./components/ProfileCard";
import ProjectRow from "./components/ProjectRow";
export default function HomePage() {
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[380px_1fr]">
          {/* LEFT: sticky (no separate scroll) */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <ProfileCard />
          </aside>

          {/* RIGHT: normal content (page scrolls) */}
          <div className="space-y-10 pb-16">
            <div className="bg-zinc-950/40 p-10">
              <h1 className="font-black leading-[0.9] tracking-tight">
                <span className="block text-[clamp(3.5rem,7vw,7rem)] text-white">
                  SOFTWARE
                </span>
                <span className="block text-[clamp(3.5rem,7vw,7rem)] text-zinc-500/50">
                  ENGINEER
                </span>
              </h1>


              <p className="mt-6 max-w-2xl text-zinc-400">
                Passionate about creating intuitive and engaging user experiences.
                Specialize in transforming ideas into beautifully crafted products.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-10 sm:grid-cols-3">
                <Stat value="+3" label="Years of experience" />
                <Stat value="+10" label="Projects completed" />
              </div>

            </div>

            <div className="space-y-10 p-10">
              <ProjectRow
                title="Revo"
                subtitle="Free Framer Template"
                image="https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&w=400&q=80"
              />
              <ProjectRow
                title="NajmAI"
                subtitle="SaaS Framer Template"
                image="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=400&q=80"
              />
              <ProjectRow
                title="Orbit UI"
                subtitle="Modern UI Kit"
                image="https://images.unsplash.com/photo-1581091870627-3d5c1f5d09f1?auto=format&fit=crop&w=400&q=80"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-5xl font-extrabold text-white">
        {value}
      </div>
      <div className="mt-2 text-sm uppercase tracking-wide text-zinc-500">
        {label}
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>
      {children}
    </section>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl bg-white p-5 ring-1 ring-black/5 transition hover:-translate-y-0.5 dark:bg-zinc-900 dark:ring-white/10">
      <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{title}</div>
      <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{desc}</div>
    </div>
  );
}
