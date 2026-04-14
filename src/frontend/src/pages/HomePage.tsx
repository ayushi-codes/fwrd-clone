import { EditorialCard } from "../components/EditorialCard";
import { HeroCarousel } from "../components/HeroCarousel";
import { ProductCard } from "../components/ProductCard";
import { ShopCard } from "../components/ShopCard";
import type { EditorialItem, Product, ShopItem } from "../types";

// ── Data ─────────────────────────────────────────────────────────────────────

const NEW_THIS_WEEK: EditorialItem[] = [
  {
    id: "ntw1",
    title: "Resort '26",
    subtitle: "Dive into the latest resortwear from our most coveted labels.",
    imageUrl:
      "https://images.unsplash.com/photo-1599744331096-2ed68c88b40d?w=800&q=80",
    cta: "Shop Now",
    href: "#resort",
  },
  {
    id: "ntw2",
    title: "New Arrivals",
    subtitle: "Explore our just-landed designer ready-to-wear and accessories.",
    imageUrl:
      "https://images.unsplash.com/photo-1617631917638-fa7d7b3742d7?w=800&q=80",
    cta: "Shop Now",
    href: "#new-arrivals",
  },
  {
    id: "ntw3",
    title: "The Year of the Horse",
    subtitle:
      "Confident red dresses encapsulate the bold spirit of the Year of the Horse.",
    imageUrl:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80",
    cta: "Shop Now",
    href: "#year-of-the-horse",
  },
];

const TRENDING_NOW: EditorialItem[] = [
  {
    id: "tn1",
    title: "Trending Now: Stripes",
    subtitle:
      "We're making the case for this eclectic pattern's sartorial return.",
    imageUrl:
      "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?w=800&q=80",
    cta: "Shop Now",
    href: "#stripes",
  },
  {
    id: "tn2",
    title: "Best of Swim",
    subtitle: "Our most coveted bikinis, one pieces, coverups, and more.",
    imageUrl:
      "https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?w=800&q=80",
    cta: "Shop Now",
    href: "#swim",
  },
  {
    id: "tn3",
    title: "Fresh Florals",
    subtitle: "The classic spring print is back and better than ever.",
    imageUrl:
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=800&q=80",
    cta: "Shop Now",
    href: "#florals",
  },
];

const FEATURED_PRODUCTS: Product[] = [
  {
    id: "fp1",
    brand: "Emilio Pucci",
    name: "Pareo",
    price: 315,
    imageUrl:
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=600&q=80",
  },
  {
    id: "fp2",
    brand: "Emilio Pucci",
    name: "Silk Kaftan",
    price: 460,
    imageUrl:
      "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=600&q=80",
  },
  {
    id: "fp3",
    brand: "Emilio Pucci",
    name: "Printed Midi Dress",
    price: 315,
    imageUrl:
      "https://images.unsplash.com/photo-1594938298603-c8148c4b8a5c?w=600&q=80",
  },
  {
    id: "fp4",
    brand: "THE ATTICO",
    name: "Boxy Tee",
    price: 375,
    imageUrl:
      "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=600&q=80",
  },
  {
    id: "fp5",
    brand: "THE ATTICO",
    name: "Lea 65mm Boot",
    price: 1190,
    imageUrl:
      "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80",
  },
  {
    id: "fp6",
    brand: "Emilio Pucci",
    name: "Beachwear Set",
    price: 390,
    imageUrl:
      "https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=600&q=80",
  },
  {
    id: "fp7",
    brand: "Acne Studios",
    name: "2013F Roots Bootcut",
    price: 580,
    imageUrl:
      "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?w=600&q=80",
    tag: "BACK IN STOCK",
  },
  {
    id: "fp8",
    brand: "Saint Laurent",
    name: "Babylone Mule Sandal",
    price: 1150,
    imageUrl:
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
    tag: "KENDALL'S EDIT",
  },
];

const FWRD_SHOPS: ShopItem[] = [
  {
    id: "fs1",
    title: "Matching Sets",
    subtitle: "Elegance, made easy.",
    imageUrl:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    href: "#matching-sets",
  },
  {
    id: "fs2",
    title: "Kendall's Edit",
    subtitle: "Get inspired by our forever muse's new-season buys.",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
    href: "#kendalls-edit",
  },
  {
    id: "fs3",
    title: "Destination Dresses",
    subtitle:
      "Because picturesque beach sunsets call for equally captivating dresses.",
    imageUrl:
      "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=600&q=80",
    href: "#destination-dresses",
  },
  {
    id: "fs4",
    title: "The Spring Shop",
    subtitle:
      "Fresh pastels, floaty fabrics, and more of the season's best trends.",
    imageUrl:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80",
    href: "#spring-shop",
  },
  {
    id: "fs5",
    title: "The Vacation Shop",
    subtitle: "Everything to pack for a tropical paradise.",
    imageUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    href: "#vacation-shop",
  },
  {
    id: "fs6",
    title: "Rosie's Picks",
    subtitle:
      "Explore FWRD Fashion Director Rosie Huntington-Whiteley's wardrobe foundations.",
    imageUrl:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    href: "#rosies-picks",
  },
  {
    id: "fs7",
    title: "Soft Focus",
    subtitle:
      "Easy separates, delicate hues, and dainty fabrics that welcome a spring refresh.",
    imageUrl:
      "https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&q=80",
    href: "#soft-focus",
  },
  {
    id: "fs8",
    title: "The Color Report",
    subtitle:
      "The most-wanted seasonal hues we're predicting to be the next big thing.",
    imageUrl:
      "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?w=600&q=80",
    href: "#color-report",
  },
];

// ── Sections ─────────────────────────────────────────────────────────────────

function SectionHeader({
  label,
  title,
  viewAllHref,
  viewAllLabel,
}: {
  label?: string;
  title: string;
  viewAllHref?: string;
  viewAllLabel?: string;
}) {
  return (
    <div className="flex items-end justify-between mb-8">
      <div>
        {label && (
          <p className="text-[10px] tracking-[0.35em] uppercase text-foreground/45 mb-1.5">
            {label}
          </p>
        )}
        <h2
          className="font-display font-bold uppercase tracking-widest text-foreground"
          style={{
            fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
            letterSpacing: "0.1em",
          }}
        >
          {title}
        </h2>
      </div>
      {viewAllHref && (
        <a
          href={viewAllHref}
          className="text-[11px] tracking-widest uppercase font-medium border-b border-foreground pb-0.5 hover:opacity-60 transition-smooth whitespace-nowrap"
          data-ocid="section-view-all"
        >
          {viewAllLabel ?? "View All"}
        </a>
      )}
    </div>
  );
}

function NewThisWeekSection() {
  return (
    <section
      className="bg-background py-16 px-6 lg:px-10"
      id="new-this-week"
      data-ocid="new-this-week-section"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionHeader label="NEW THIS WEEK" title="" />
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          data-ocid="new-this-week-grid"
        >
          {NEW_THIS_WEEK.map((card) => (
            <EditorialCard
              key={card.id}
              id={card.id}
              title={card.title}
              subtitle={card.subtitle}
              imageUrl={card.imageUrl}
              cta={card.cta}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TrendingNowSection() {
  return (
    <section
      className="py-16 px-6 lg:px-10"
      id="trending-now"
      data-ocid="trending-now-section"
      style={{ backgroundColor: "oklch(0.965 0 0)" }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-10">
          <h2
            className="font-display font-bold uppercase tracking-widest text-foreground"
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
              letterSpacing: "0.15em",
            }}
            data-ocid="trending-now-heading"
          >
            TRENDING NOW
          </h2>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          data-ocid="trending-now-grid"
        >
          {TRENDING_NOW.map((card) => (
            <EditorialCard
              key={card.id}
              id={card.id}
              title={card.title}
              subtitle={card.subtitle}
              imageUrl={card.imageUrl}
              cta={card.cta}
              href={card.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedSection() {
  return (
    <section
      className="bg-background py-16 px-6 lg:px-10"
      id="featured"
      data-ocid="featured-section"
    >
      <div className="max-w-[1600px] mx-auto">
        <SectionHeader
          label="EDITOR'S PICKS"
          title="FEATURED"
          viewAllHref="#clothing"
          viewAllLabel="View All"
        />
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10"
          data-ocid="featured-grid"
        >
          {FEATURED_PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FwrdShopsSection() {
  return (
    <section
      className="py-16 px-6 lg:px-10"
      id="fwrd-shops"
      data-ocid="fwrd-shops-section"
      style={{ backgroundColor: "oklch(0.965 0 0)" }}
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-10">
          <h2
            className="font-display font-bold uppercase tracking-widest text-foreground mb-2"
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 2rem)",
              letterSpacing: "0.15em",
            }}
          >
            FWRD SHOPS
          </h2>
          <p className="text-xs tracking-widest uppercase text-foreground/45">
            Explore our curated collections
          </p>
        </div>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
          data-ocid="fwrd-shops-grid"
        >
          {FWRD_SHOPS.map((shop, i) => (
            <ShopCard
              key={shop.id}
              id={shop.id}
              title={shop.title}
              subtitle={shop.subtitle}
              imageUrl={shop.imageUrl}
              href={shop.href}
              index={i + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AppDownloadSection() {
  return (
    <section
      className="py-20 px-6 lg:px-10 text-center"
      id="app-download"
      data-ocid="app-download-section"
      style={{ backgroundColor: "oklch(0.08 0 0)" }}
    >
      <div className="max-w-2xl mx-auto">
        <hr
          style={{
            borderColor: "oklch(0.98 0 0 / 0.15)",
            marginBottom: "3rem",
          }}
        />
        <p
          className="text-[10px] tracking-[0.35em] uppercase mb-4 font-medium"
          style={{ color: "oklch(0.98 0 0 / 0.5)" }}
        >
          FWRD ON THE GO
        </p>
        <h2
          className="font-display font-bold uppercase leading-tight mb-4"
          style={{
            fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
            color: "oklch(0.98 0 0)",
            letterSpacing: "0.06em",
          }}
        >
          Receive 15% OFF your first in-app purchase
        </h2>
        <p
          className="text-sm mb-10 leading-relaxed"
          style={{ color: "oklch(0.98 0 0 / 0.5)" }}
        >
          iPad App — use code:{" "}
          <span
            className="font-semibold tracking-widest"
            style={{ color: "oklch(0.98 0 0 / 0.75)" }}
          >
            FWRDIPAD15
          </span>
        </p>
        <a
          href="#app-ipad"
          className="inline-block text-[11px] tracking-widest uppercase font-semibold px-10 py-4 transition-smooth"
          style={{
            border: "1px solid oklch(0.98 0 0)",
            color: "oklch(0.98 0 0)",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor =
              "oklch(0.98 0 0)";
            (e.currentTarget as HTMLElement).style.color = "oklch(0.08 0 0)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor =
              "transparent";
            (e.currentTarget as HTMLElement).style.color = "oklch(0.98 0 0)";
          }}
          data-ocid="app-download-btn"
        >
          Free Download — iPad App
        </a>
        <hr
          style={{ borderColor: "oklch(0.98 0 0 / 0.15)", marginTop: "3rem" }}
        />
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <NewThisWeekSection />
      <TrendingNowSection />
      <FeaturedSection />
      <FwrdShopsSection />
      <AppDownloadSection />
    </>
  );
}
