interface ShopCardProps {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  href?: string;
  index: number;
}

export function ShopCard({
  id: _id,
  title,
  subtitle,
  imageUrl,
  href = "#shop",
  index,
}: ShopCardProps) {
  return (
    <a
      href={href}
      className="group block relative overflow-hidden cursor-pointer bg-muted"
      style={{ aspectRatio: "4 / 5" }}
      data-ocid={`shop-card.item.${index}`}
    >
      {/* Real image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        loading="lazy"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)",
        }}
      />

      {/* Text */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3
          className="font-display font-bold uppercase leading-tight mb-1.5"
          style={{
            fontSize: "clamp(0.9rem, 1.3vw, 1.1rem)",
            color: "oklch(0.98 0 0)",
            letterSpacing: "0.06em",
          }}
        >
          {title}
        </h3>
        <p
          className="text-xs leading-relaxed mb-4 line-clamp-2"
          style={{ color: "oklch(0.98 0 0 / 0.7)" }}
        >
          {subtitle}
        </p>
        <span
          className="text-[10px] tracking-[0.28em] uppercase font-semibold transition-smooth"
          style={{
            color: "oklch(0.98 0 0 / 0.9)",
            borderBottom: "1px solid oklch(0.98 0 0 / 0.5)",
            paddingBottom: "2px",
          }}
          data-ocid={`shop-card-cta.${index}`}
        >
          Shop Now →
        </span>
      </div>
    </a>
  );
}
