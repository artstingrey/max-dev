
export type MenuItem =
  | { href: string | { pathname: string; hash?: string }; labelKey: `${string}`; external?: false }
  | { href: string; labelKey: `${string}`; external: true };
