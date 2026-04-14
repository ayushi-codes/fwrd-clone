import { Link } from "@tanstack/react-router";
import {
  Heart,
  Menu,
  MessageCircle,
  Search,
  ShoppingBag,
  User,
  X,
} from "lucide-react";
import { useState } from "react";
import { SiFacebook, SiInstagram, SiPinterest, SiTiktok } from "react-icons/si";

const NAV_LINKS = [
  { label: "WOMEN", href: "#women" },
  { label: "MEN", href: "#men" },
  { label: "DESIGNERS", href: "#designers" },
  { label: "SALE", href: "#sale", isSale: true },
  { label: "EDITORIAL", href: "#editorial" },
  { label: "STORES", href: "#stores" },
];

const SECONDARY_NAV = [
  { label: "NEW", href: "#new" },
  { label: "DESIGNERS", href: "#designers" },
  { label: "CLOTHING", href: "#clothing" },
  { label: "DRESSES", href: "#dresses" },
  { label: "SHOES", href: "#shoes" },
  { label: "BAGS", href: "#bags" },
  { label: "ACCESSORIES", href: "#accessories" },
  { label: "BEAUTY", href: "#beauty" },
  { label: "SALE", href: "#sale", isSale: true },
  { label: "SHOPS", href: "#fwrd-shops" },
  { label: "KENDALL'S EDIT", href: "#kendalls-edit", isKendall: true },
];

function AnnouncementBar() {
  return (
    <div
      className="bg-foreground text-primary-foreground text-center py-2 px-4"
      data-ocid="announcement-bar"
    >
      <span className="text-[11px] tracking-widest uppercase">
        FREE SHIPPING &amp; FREE RETURNS ON ALL U.S. ORDERS
      </span>
    </div>
  );
}

function SecondaryNav() {
  return (
    <nav
      className="border-t border-border bg-background overflow-x-auto"
      data-ocid="secondary-nav"
      aria-label="Category navigation"
    >
      <div className="flex items-center justify-center min-w-max mx-auto px-4">
        {SECONDARY_NAV.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`
              px-4 py-2.5 text-[11px] font-medium tracking-[0.15em] uppercase whitespace-nowrap
              transition-colors duration-150 hover:opacity-60
              ${link.isSale ? "text-red-600" : "text-foreground"}
              ${(link as { isKendall?: boolean }).isKendall ? "italic font-semibold" : ""}
            `}
            data-ocid={`secondary-nav-${link.label.toLowerCase().replace(/['\s]/g, "-")}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <AnnouncementBar />

      {/* Sticky Header */}
      <header
        className="sticky top-0 z-50 bg-background border-b border-border"
        data-ocid="site-header"
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 relative">
            {/* Mobile menu toggle */}
            <button
              type="button"
              className="lg:hidden text-foreground opacity-70 hover:opacity-100 transition-smooth"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              data-ocid="mobile-menu-toggle"
            >
              <Menu size={20} />
            </button>

            {/* Left nav */}
            <nav
              className="hidden lg:flex items-center gap-6"
              data-ocid="main-nav-left"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[11px] font-medium tracking-widest uppercase transition-smooth hover:opacity-60 whitespace-nowrap ${link.isSale ? "text-red-600" : "text-foreground"}`}
                  data-ocid={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Logo — centered absolutely */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link to="/" className="flex-shrink-0">
                <span
                  className="font-display font-bold tracking-[0.18em] uppercase text-foreground"
                  style={{ fontSize: "1.6rem", letterSpacing: "0.22em" }}
                >
                  FWRD
                </span>
              </Link>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-4" data-ocid="header-actions">
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="text-foreground opacity-70 hover:opacity-100 transition-smooth"
                aria-label="Search"
                data-ocid="search-toggle"
              >
                <Search size={18} />
              </button>
              <button
                type="button"
                className="text-foreground opacity-70 hover:opacity-100 transition-smooth hidden sm:block"
                aria-label="Wishlist"
                data-ocid="wishlist-btn"
              >
                <Heart size={18} />
              </button>
              <button
                type="button"
                className="text-foreground opacity-70 hover:opacity-100 transition-smooth hidden sm:block"
                aria-label="Account"
                data-ocid="account-btn"
              >
                <User size={18} />
              </button>
              <button
                type="button"
                className="text-foreground opacity-70 hover:opacity-100 transition-smooth relative"
                aria-label="Bag"
                data-ocid="bag-btn"
              >
                <ShoppingBag size={18} />
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-foreground text-primary-foreground text-[9px] flex items-center justify-center font-medium">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div
              className="border-t border-border py-3 animate-fade-in"
              data-ocid="search-bar"
            >
              <div className="flex items-center gap-3">
                <Search
                  size={16}
                  className="text-foreground/40 flex-shrink-0"
                />
                <input
                  type="text"
                  placeholder="Search designers, products, categories..."
                  className="flex-1 bg-transparent text-sm text-foreground placeholder:text-foreground/40 outline-none tracking-wide"
                  data-ocid="search-input"
                />
                <button
                  type="button"
                  onClick={() => setSearchOpen(false)}
                  className="text-foreground/40 hover:text-foreground transition-smooth"
                  aria-label="Close search"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Secondary Navigation Bar */}
        <SecondaryNav />

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="lg:hidden border-t border-border bg-background animate-fade-in"
            data-ocid="mobile-menu"
          >
            <nav className="flex flex-col py-4 px-6 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`py-2.5 text-xs font-medium tracking-widest uppercase border-b border-border/40 last:border-0 transition-smooth ${link.isSale ? "text-red-600" : "text-foreground/70 hover:text-foreground"}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-border/40">
                {SECONDARY_NAV.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`py-2 block text-[11px] font-medium tracking-widest uppercase transition-smooth ${link.isSale ? "text-red-600" : "text-foreground/60 hover:text-foreground"}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1" data-ocid="main-content">
        {children}
      </main>

      {/* Footer */}
      <footer
        className="bg-foreground text-primary-foreground"
        data-ocid="site-footer"
      >
        {/* Get 10% Off Newsletter */}
        <div className="text-center py-14 px-6 border-b border-primary-foreground/10">
          <h2
            className="font-display font-bold uppercase tracking-widest mb-2"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
              letterSpacing: "0.1em",
            }}
          >
            Get 10% Off
          </h2>
          <p className="text-sm mb-6 opacity-60 tracking-wide">
            when you sign up for our daily newsletters
          </p>
          <div className="flex max-w-md mx-auto" data-ocid="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 text-sm outline-none bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-primary-foreground/50 transition-smooth"
              data-ocid="newsletter-email"
            />
            <button
              type="button"
              className="px-7 py-3 text-xs tracking-widest uppercase font-semibold bg-primary-foreground text-foreground hover:opacity-85 transition-smooth whitespace-nowrap"
              data-ocid="newsletter-submit"
            >
              SUBSCRIBE
            </button>
          </div>
          <p className="text-[10px] mt-4 opacity-35 max-w-sm mx-auto leading-relaxed">
            By entering your email, you agree to receive marketing emails from
            FWRD
          </p>
        </div>

        {/* Footer links grid */}
        <div className="max-w-[1600px] mx-auto px-6 lg:px-10 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
            {/* Col 1 - Brand */}
            <div>
              <p
                className="font-display font-bold uppercase tracking-[0.18em] mb-3"
                style={{ fontSize: "1.5rem" }}
              >
                FWRD
              </p>
              <p className="text-xs leading-relaxed opacity-45">
                Luxury fashion and beyond
              </p>
            </div>
            {/* Col 2 - Help */}
            <div>
              <p className="text-[10px] tracking-widest uppercase font-semibold mb-5 opacity-50">
                HELP
              </p>
              <ul className="space-y-3">
                {[
                  "Contact Us",
                  "FAQ",
                  "Shipping & Returns",
                  "Order Status",
                  "Size Guide",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")}`}
                      className="text-xs opacity-55 hover:opacity-100 transition-smooth"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Col 3 - Company */}
            <div>
              <p className="text-[10px] tracking-widest uppercase font-semibold mb-5 opacity-50">
                COMPANY
              </p>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Careers",
                  "Sustainability",
                  "Press",
                  "Affiliate Program",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")}`}
                      className="text-xs opacity-55 hover:opacity-100 transition-smooth"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Col 4 - Legal */}
            <div>
              <p className="text-[10px] tracking-widest uppercase font-semibold mb-5 opacity-50">
                LEGAL
              </p>
              <ul className="space-y-3">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "Do Not Sell My Info",
                  "Accessibility",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href={`#${l
                        .toLowerCase()
                        .replace(/\s+/g, "-")
                        .replace(/[^a-z0-9-]/g, "")}`}
                      className="text-xs opacity-55 hover:opacity-100 transition-smooth"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-5 pt-8 border-t border-primary-foreground/10">
            <p className="text-xs opacity-35">
              © {new Date().getFullYear()} FWRD. All rights reserved. Built with{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                className="underline underline-offset-2 hover:opacity-100 transition-smooth opacity-60"
                target="_blank"
                rel="noopener noreferrer"
              >
                caffeine.ai
              </a>
            </p>
            <div className="flex items-center gap-5" data-ocid="social-icons">
              {[
                { icon: SiInstagram, label: "Instagram" },
                { icon: SiTiktok, label: "TikTok" },
                { icon: SiPinterest, label: "Pinterest" },
                { icon: SiFacebook, label: "Facebook" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href={`#social-${label.toLowerCase()}`}
                  aria-label={label}
                  className="opacity-45 hover:opacity-100 transition-smooth"
                  data-ocid={`social-${label.toLowerCase()}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button
        type="button"
        aria-label="Chat with us"
        data-ocid="chat-button"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-smooth"
        style={{ backgroundColor: "oklch(0.22 0 0)" }}
      >
        <MessageCircle size={24} className="text-primary-foreground" />
      </button>
    </div>
  );
}
