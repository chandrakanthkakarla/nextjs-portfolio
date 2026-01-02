import ProfileCard from "../components/ProfileCard";
import ProjectRow from "../components/ProjectRow";

export default function ProjectsPage() {
  return (
    <main className="pt-24">
      <section className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[380px_1fr]">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <ProfileCard />
          </aside>

          <div className="space-y-16 pb-24">
            <header>
              <h1 className="font-black leading-[0.9] tracking-tight">
                <span className="block text-[clamp(3.5rem,7vw,6rem)] text-white">
                  RECENT
                </span>
                <span className="block text-[clamp(3.5rem,7vw,6rem)] text-zinc-500/50">
                  PROJECTS
                </span>
              </h1>
            </header>

            <div className="space-y-10">
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
