export type NavLink = {
  label: string;
  href: string;
};

export const primaryLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "À propos", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const ctaLink: NavLink = {
  label: "Obtenir un devis",
  href: "/contact",
};
