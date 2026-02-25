import ExperienceRow from "./ExperienceRow";
import Reveal from "./Reveal";

type ProjectsSectionProps = {
    animated?: boolean;
};
export default function ExperienceSection({ animated = false }: ProjectsSectionProps) {
    const Content = (
        <section className="space-y-16">
            {/* Heading */}
            <div className="px-10">
                <h2 className="font-black leading-[0.9] tracking-tight">
                    <span className="block text-[clamp(3.5rem,7vw,7rem)] text-black dark:text-white">
                        2 + YEARS
                    </span>
                    <span className="block text-[clamp(3.5rem,7vw,7rem)] text-zinc-500/50">
                        EXPERIENCE
                    </span>
                </h2>
            </div>

            {/* Experience list */}
            <div className="space-y-10 px-10">
                <ExperienceRow
                    title="Cognizant Technology Solutions"
                    role="Network Engineer"
                    description="Network & Infrastructure Engineer with hands-on experience in NOC and SOC operations. With a strong foundation in networking, incident management, and IT support. Experienced in monitoring, troubleshooting, SLA management, and cross-team coordination. Certified in Google IT Support, Networking, and Zero Trust (ZTCA), with a focused goal of advancing toward CCNA/CCNP-level expertise and deeper cybersecurity specialization."
                    period="August 2023 – Present"
                />


            </div>
        </section>
    );

    // ✅ Animate only when requested (Home)
    if (animated) {
        return (
            <Reveal amount={0.3} y={28} margin="0px 0px -35% 0px">
                {Content}
            </Reveal>
        );
    }

    // ✅ Static version (Projects page)
    return Content;
}