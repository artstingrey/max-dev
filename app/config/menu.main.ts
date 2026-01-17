import { MenuItem } from "./menuTypes";

export const mainMenu: MenuItem[] = [
  { href: { pathname: "/", hash: "projects" }, labelKey: "Projects", key: "projects"},
  { href: { pathname: "/", hash: "services" }, labelKey: "Services", key: "services"},
  { href: { pathname: "/", hash: "how-we-work" }, labelKey: "How we work", key: "how-we-work"},
  { href: { pathname: "/", hash: "contact" }, labelKey: "Contact", key: "contact"}
];
