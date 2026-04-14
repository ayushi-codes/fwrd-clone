import { Heart } from "lucide-react";
import { useState } from "react";
import type { Product } from "../types";

function formatPrice(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const [wished, setWished] = useState(false);

  return (
    <article
      className="group cursor-pointer"
      data-ocid={`product-card-${index}`}
    >
      {/* Image container */}
      <div
        className="relative overflow-hidden bg-muted"
        style={{ aspectRatio: "4 / 5" }}
      >
        <img
          src={product.imageUrl}
          alt={`${product.brand} ${product.name}`}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />

        {/* Tag badge */}
        {product.tag && (
          <span
            className="absolute top-3 left-3 z-10 text-[9px] tracking-widest uppercase px-2.5 py-1.5 font-semibold"
            style={{
              backgroundColor: "oklch(0.08 0 0)",
              color: "oklch(0.98 0 0)",
            }}
          >
            {product.tag}
          </span>
        )}

        {/* Wishlist toggle */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setWished((w) => !w);
          }}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-background/90 hover:bg-background transition-smooth opacity-0 group-hover:opacity-100"
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={wished}
          data-ocid={`wishlist-btn.${index}`}
        >
          <Heart
            size={14}
            className={
              wished ? "fill-foreground text-foreground" : "text-foreground"
            }
          />
        </button>

        {/* Quick add hover strip */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden transition-all duration-300 h-0 group-hover:h-10 bg-background/95 flex items-center justify-center z-10">
          <button
            type="button"
            className="text-[10px] tracking-widest uppercase font-semibold text-foreground"
            data-ocid={`quick-add-btn.${index}`}
          >
            QUICK ADD
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="pt-3 pb-1">
        <p className="text-[10px] tracking-widest uppercase font-semibold text-foreground">
          {product.brand}
        </p>
        <p className="text-sm text-foreground/65 truncate min-w-0 mt-0.5">
          {product.name}
        </p>
        <div className="flex items-center gap-2 mt-1">
          {product.salePrice ? (
            <>
              <span
                className="text-sm font-medium"
                style={{ color: "oklch(0.5 0.22 25)" }}
              >
                {formatPrice(product.salePrice)}
              </span>
              <span className="text-xs text-foreground/35 line-through">
                {formatPrice(product.price)}
              </span>
            </>
          ) : (
            <span className="text-sm text-foreground/80">
              {formatPrice(product.price)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
