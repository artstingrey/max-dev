import { tiktokSans } from "./fonts";
import type { Metadata } from "next";
import Header from "./components/core/header/Header";
import ContactForm from "./components/contactForm/ContactForm";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import "@/app/styles/global.scss";

export const metadata: Metadata = {
  title: {
    default: "Max dev - Storage and exchange of cryptocurrencies 24/7",
    template: "%s | Max dev",
  },
  description: "A reliable and fast way to buy, sell and store cryptocurrency",
  // icons: {
  //   icon: [
  //     { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
  //     { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
  //     { url: "/images/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
  //   ],
  // },
  // openGraph: {
  //   type: "website",
  //   url: stage,
  //   siteName: "Coin Corner",
  //   title: "Coin Corner - Storage and exchange of cryptocurrencies 24/7",
  //   description: "A reliable and fast way to buy, sell and store cryptocurrency",
  //   images: [
  //     {
  //       url: "/images/preview.png",
  //       width: 1600,
  //       height: 960,
  //       alt: "Coin Corner preview",
  //     },
  //   ],
  //   locale: "en_US",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Coin Corner - Storage and exchange of cryptocurrencies 24/7",
  //   description: "A reliable and fast way to buy, sell and store cryptocurrency",
  //   images: ["/images/preview.png"],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg-mob@2x.avif"
          type="image/avif"
          media="(max-width: 767px)"
          fetchPriority="high"
        />

        {/* Mobile WEBP fallback */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg-mob@2x.webp"
          type="image/webp"
          media="(max-width: 767px)"
        />

        {/* Desktop AVIF (LCP) */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg.avif"
          type="image/avif"
          media="(min-width: 768px)"
          imageSrcSet="/images/hero-bg.avif 1x, /images/hero-bg@2x.avif 2x"
          fetchPriority="high"
        />

        {/* Desktop WEBP fallback */}
        <link
          rel="preload"
          as="image"
          href="/images/hero-bg.webp"
          type="image/webp"
          media="(min-width: 768px)"
          imageSrcSet="/images/hero-bg.webp 1x, /images/hero-bg@2x.webp 2x"
        />

      </head>
      <body className={`${tiktokSans.variable}`}>
        <ContactForm />
        <Header />
        {children}
      </body>
    </html>
  );
}
