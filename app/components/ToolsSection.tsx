import Reveal from "./Reveal";

type ProjectsSectionProps = {
    animated?: boolean;
};
export default function ToolsSection({ animated = false }: ProjectsSectionProps) {
    const Content = (
        <section className="space-y-16">
            {/* Heading */}
            <div className="px-10">
                <h2 className="font-black leading-[0.9] tracking-tight">
                    <span className="block text-[clamp(3.5rem,7vw,7rem)] text-black dark:text-white">
                       TOOLS AND
                    </span>
                    <span className="block text-[clamp(3.5rem,7vw,7rem)] text-zinc-500/50">
                        TECHNOLOGY
                    </span>
                </h2>
            </div>

            {/* Project list */}
            <div className="space-y-10 px-10">
               
            </div>
        </section>
    );

    // ✅ Animate only when requested (Home)
    if (animated) {
        return (
            <Reveal amount={0.3} y={28}>
                {Content}
            </Reveal>
        );
    }

    // ✅ Static version (Projects page)
    return Content;
}