interface EditorialCardProps {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  cta?: string;
  href?: string;
}

export function EditorialCard({
  id,
  title,
  subtitle,
  imageUrl,
  cta = "Shop Now",
  href = "#editorial",
}: EditorialCardProps) {
  return (
    <a
      href={href}
      className="group block relative overflow-hidden cursor-pointer"
      style={{ aspectRatio: "3 / 4" }}
      data-ocid={`editorial-card-${id}`}
    >
      {/* Real image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        loading="lazy"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)",
        }}
      />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3
          className="font-display font-bold uppercase leading-tight mb-2"
          style={{
            fontSize: "clamp(0.85rem, 1.5vw, 1.15rem)",
            color: "oklch(0.98 0 0)",
            letterSpacing: "0.08em",
          }}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            className="text-xs leading-relaxed mb-4 line-clamp-2"
            style={{ color: "oklch(0.98 0 0 / 0.75)" }}
          >
            {subtitle}
          </p>
        )}
        <span
          className="text-[10px] tracking-[0.28em] uppercase font-semibold pb-0.5 transition-smooth group-hover:opacity-100"
          style={{
            color: "oklch(0.98 0 0 / 0.9)",
            borderBottom: "1px solid oklch(0.98 0 0 / 0.55)",
          }}
        >
          {cta}
        </span>
      </div>
    </a>
  );
}
