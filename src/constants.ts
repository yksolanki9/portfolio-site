import type { NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#blog", label: "Blogs" },
  { href: "#contact", label: "Contact" },
  {
    href: "https://drive.google.com/file/d/1sq5ydeNHuI9-Wzdju6-CmI6Fhrziak0w/view?usp=drive_link",
    label: "Resume",
    external: true,
  },
] as const;
