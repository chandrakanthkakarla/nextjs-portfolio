type ProjectRowProps = {
  title: string;
  subtitle: string;
  image: string;
};

export default function ProjectRow({ title, subtitle, image }: ProjectRowProps) {
  return (
    <div className="group flex items-center justify-between gap-6">
      <div className="flex items-center gap-6">
        <div className="h-20 w-20 overflow-hidden rounded-xl bg-zinc-800 ring-1 ring-white/10">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-zinc-400">{subtitle}</p>
        </div>
      </div>

      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
        <span
          className="
            inline-block text-orange-400
            transition-all duration-300
            group-hover:translate-x-1 group-hover:-translate-y-1
            group-hover:rotate-45
          "
        >
          ↗
        </span>
      </div>
    </div>
  );
}
