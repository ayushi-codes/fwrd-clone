import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface Slide {
  id: string;
  headline: string;
  cta: string;
  imageUrl: string;
  textColor: "white" | "black";
}

const SLIDES: Slide[] = [
  {
    id: "s1",
    headline: "DOPAMINE-INDUCING DRESSES",
    cta: "Shop Now",
    imageUrl:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1920&q=80",
    textColor: "white",
  },
  {
    id: "s2",
    headline: "MATCH MADE",
    cta: "Shop Now",
    imageUrl:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1920&q=80",
    textColor: "white",
  },
  {
    id: "s3",
    headline: "LAYERING WITH INTENTION",
    cta: "Shop Now",
    imageUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1920&q=80",
    textColor: "white",
  },
  {
    id: "s4",
    headline: "MODERN ROMANCE",
    cta: "Shop Now",
    imageUrl:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=1920&q=80",
    textColor: "white",
  },
  {
    id: "s5",
    headline: "SUBTLE STATEMENT PIECES",
    cta: "Shop Now",
    imageUrl:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80",
    textColor: "white",
  },
  {
    id: "s6",
    headline: "FWRD RENEW",
    cta: "Shop Now",
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    textColor: "white",
  },
  {
    id: "s7",
    headline: "PLANNING A ROMANTIC GETAWAY?",
    cta: "Shop Now",
    imageUrl:
      "https://images.unsplash.com/photo-1542295669297-4d352b042bca?w=1920&q=80",
    textColor: "white",
  },
  {
    id: "s8",
    headline: "WHAT TO WEAR FOR THE WEEK AHEAD",
    cta: "Shop Now",
    imageUrl:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
    textColor: "white",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 500);
    },
    [isTransitioning],
  );

  const prev = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length);
  }, [current, goTo]);

  const next = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = SLIDES[current];
  const isWhite = slide.textColor === "white";

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "560px", maxHeight: "980px" }}
      data-ocid="hero-carousel"
      aria-label="Hero carousel"
    >
      {/* Image slides */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: i === current ? 1 : 0,
            zIndex: i === current ? 1 : 0,
          }}
          aria-hidden={i !== current}
        >
          <img
            src={s.imageUrl}
            alt={s.headline}
            className="w-full h-full object-cover object-center"
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* Dark overlay for text readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.05) 100%)",
            }}
          />
        </div>
      ))}

      {/* Text content */}
      <div
        className="relative z-10 h-full flex items-center"
        style={{ paddingLeft: "clamp(2rem, 8vw, 8rem)" }}
      >
        <div
          key={slide.id}
          className="max-w-2xl animate-fade-in-up"
          style={{ color: isWhite ? "oklch(0.98 0 0)" : "oklch(0.08 0 0)" }}
        >
          <h1
            className="font-display font-bold uppercase leading-none mb-8"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 6rem)",
              letterSpacing: "0.04em",
              textShadow: "0 2px 20px rgba(0,0,0,0.3)",
            }}
          >
            {slide.headline}
          </h1>
          <a
            href="#new-arrivals"
            className="inline-block text-[11px] tracking-widest uppercase font-semibold px-10 py-4 transition-smooth"
            style={{
              border: `1px solid ${isWhite ? "oklch(0.98 0 0)" : "oklch(0.08 0 0)"}`,
              color: isWhite ? "oklch(0.98 0 0)" : "oklch(0.08 0 0)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = isWhite
                ? "oklch(0.98 0 0)"
                : "oklch(0.08 0 0)";
              el.style.color = isWhite ? "oklch(0.08 0 0)" : "oklch(0.98 0 0)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.backgroundColor = "transparent";
              el.style.color = isWhite ? "oklch(0.98 0 0)" : "oklch(0.08 0 0)";
            }}
            data-ocid="hero-cta"
          >
            {slide.cta}
          </a>
        </div>
      </div>

      {/* Prev arrow */}
      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center bg-background/80 text-foreground transition-smooth opacity-0 hover:opacity-100 focus-visible:opacity-100"
        aria-label="Previous slide"
        data-ocid="hero-prev"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 flex items-center justify-center bg-background/80 text-foreground transition-smooth opacity-0 hover:opacity-100 focus-visible:opacity-100"
        aria-label="Next slide"
        data-ocid="hero-next"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dot indicators */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
        role="tablist"
        aria-label="Carousel slides"
        data-ocid="hero-dots"
      >
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className="transition-smooth"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              backgroundColor: "oklch(0.98 0 0)",
              opacity: i === current ? 1 : 0.45,
              border: "none",
              padding: 0,
              cursor: "pointer",
            }}
            data-ocid={`hero-dot-${i}`}
          />
        ))}
      </div>

      {/* Hover reveal arrows via CSS */}
      <style>{`
        [data-ocid="hero-carousel"]:hover [data-ocid="hero-prev"],
        [data-ocid="hero-carousel"]:hover [data-ocid="hero-next"] {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
