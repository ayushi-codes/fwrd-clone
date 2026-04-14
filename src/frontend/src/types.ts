export interface Product {
  id: string;
  brand: string;
  name: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
  tag?: string;
}

export interface HeroSlide {
  id: string;
  headline: string;
  cta: string;
  imageUrl: string;
  textColor: "white" | "black";
}

export interface EditorialItem {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  cta?: string;
  href?: string;
}

export interface ShopItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  href?: string;
}

export interface NavLink {
  label: string;
  href: string;
  isSale?: boolean;
}
