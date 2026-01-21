import { tiktokSans, roobert } from "../fonts";
import type { Metadata } from "next";
import {NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "../components/core/header/Header";
import ContactForm from "../components/contactForm/ContactForm";
import Footer from "../components/core/footer/Footer";
import GradualBlur from "../components/gradualBlur/GradualBlur";
import {DEV, PROD_DOMAIN, STAGE_DOMAIN } from "../config/constants";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import "@/app/styles/global.scss";

const domain = DEV ? STAGE_DOMAIN : PROD_DOMAIN;

// export const metadata: Metadata = {
//   title: {
//     default: "MaxDev | MVP Development for Startups. From Idea to Launch.",
//     template: "%s | Max dev",
//   },
//   description: "A reliable and fast way to buy, sell and store cryptocurrency",
//   // icons: {
//   //   icon: [
//   //     { url: "/images/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
//   //     { url: "/images/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
//   //     { url: "/images/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
//   //   ],
//   // },
//   // openGraph: {
//   //   type: "website",
//   //   url: stage,
//   //   siteName: "Coin Corner",
//   //   title: "Coin Corner - Storage and exchange of cryptocurrencies 24/7",
//   //   description: "A reliable and fast way to buy, sell and store cryptocurrency",
//   //   images: [
//   //     {
//   //       url: "/images/preview.png",
//   //       width: 1600,
//   //       height: 960,
//   //       alt: "Coin Corner preview",
//   //     },
//   //   ],
//   //   locale: "en_US",
//   // },
//   // twitter: {
//   //   card: "summary_large_image",
//   //   title: "Coin Corner - Storage and exchange of cryptocurrencies 24/7",
//   //   description: "A reliable and fast way to buy, sell and store cryptocurrency",
//   //   images: ["/images/preview.png"],
//   // },
// };

export async function generateMetadata({params}:{params: Promise<{locale: string}>}):Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  const url = "";
  const t = await getTranslations({ locale, namespace: 'SEO' });
  const title = t('title');
  const desription = t('description');

  return {
    metadataBase: new URL(domain),
    title: {
      default: title,
      template: "MaxDev | %s"
    },
    description: desription,
    openGraph: {
      type: "website",
      url: url,
      siteName: "MaxDev",
      title: title,
      description: desription,
      images: [
        {
          url: "/images/maxdev.png",
          width: 1200,
          height: 630,
          alt: "MaxDe preview",  
        }
      ],
      locale: locale === 'ru' ? 'ru_RU' : 'en_US'
    },
    twitter: {
      card: "summary_large_image",  
      title: title,
      description: desription,
      images: ['/images/maxdev.png']
    }
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: LayoutProps) {
  const {locale} = await params;

  if(!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const className = `${tiktokSans.variable}` + ` ${roobert.variable}` + ' locale-' + locale;

  return (
    <html lang={locale}>
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
      <body className={className}>
        <NextIntlClientProvider>
        <ContactForm />
        <Header />
        {children}
        <Footer />
        </NextIntlClientProvider>
        {/* <GradualBlur
          target="page"
          position="bottom"
          height="4rem"
          strength={2}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        /> */}
      </body>
    </html>
  );
}
