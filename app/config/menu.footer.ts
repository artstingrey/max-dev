import { BLOG_PAGE_LINK } from "../utils/constants";
import { MenuItem } from "./menuTypes";


export const quickLinks: MenuItem[] = [
  { href: { pathname: "/", hash: "card" }, labelKey: "Card" },
  { href: { pathname: "/", hash: "features" }, labelKey: "Features" },
  { href: "/referal", labelKey: "Referal" },
  { href: BLOG_PAGE_LINK, labelKey: "Blog" },
  { href: { pathname: "/", hash: "faq" }, labelKey: "Faq" }
];

export const contactsLinks: MenuItem[] = [
  { href: "mailto:support@coincorner.exchange", labelKey: "Support" },
  { href: "mailto:media@coincorner.exchange", labelKey: "Media" },
  { href: "https://t.me/CoinCorner_exchange_support", labelKey: "Telegram Bot" }
];
