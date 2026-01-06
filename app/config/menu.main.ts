import { MenuItem } from "./menuTypes";

export const mainMenu: MenuItem[] = [
  { href: { pathname: "/", hash: "projects" }, labelKey: "Projects" },
  { href: { pathname: "/", hash: "services" }, labelKey: "Services" },
  { href: { pathname: "/", hash: "how-we-work" }, labelKey: "How we work" },
  { href: { pathname: "/", hash: "contact" }, labelKey: "Contact" }
];
