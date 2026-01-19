'use client';
import clsx from 'clsx';
import { useContactFormStore } from "@/app/stores/useContactFormStore";
import { useEffect, useRef } from 'react';
import SButton from '../core/buttons/sButton';
import { useTranslations } from 'next-intl';
import styles from './FixedSection.module.scss';


export default function FixedSection () {
    const t = useTranslations('CTA');
    const openContactForm = useContactFormStore((s) => s.open);
    const parallaxStrength = 24;
    const sectionRef = useRef<HTMLElement | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);
    const ticking = useRef(false);
    const lastY = useRef<number>(0);

    useEffect(() => {
      const section = sectionRef.current;
      const image = imgRef.current;
      if (!section || !image) return;

      const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
      if (reduceMotion) return; // уважаем настройки пользователя

      const onScroll = () => {
        if (ticking.current) return;
        ticking.current = true;
        requestAnimationFrame(() => {
          const rect = section.getBoundingClientRect();
          const vh = window.innerHeight;

         
          const centerProgress = ((rect.top + rect.height / 2) - vh / 2) / (vh / 2);
          const clamped = Math.max(-1, Math.min(1, centerProgress));

         
          const dir = window.scrollY > lastY.current ? 1 : -1;
          lastY.current = window.scrollY;

          const offset =
          
            (-clamped * parallaxStrength * 0.7) +
            
            (dir * parallaxStrength * 0.3);

          image.style.setProperty("--y", `${offset.toFixed(2)}px`);
          ticking.current = false;
        });
      };

      const opts: AddEventListenerOptions = { passive: true };
      window.addEventListener("scroll", onScroll, opts);
      window.addEventListener("resize", onScroll, opts);
      onScroll();

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }, [parallaxStrength]);

    return (
        <section className={styles.fixedSection} ref={sectionRef}>
             <picture className={clsx("section-bg", "responsive-image")}>
                <source srcSet="/images/section-bg-mob@2x.avif 2x" media="(max-width: 767px)" type="image/avif" />
                <source srcSet="/images/section-bg-mob@2x.webp 2x" media="(max-width: 767px)" type="image/webp" />
                <source srcSet="/images/section-bg-mob@2x.jpg 2x" media="(max-width: 767px)" type="image/jpeg" />

                <source srcSet="/images/section-bg.avif 1x, /images/section-bg@2x.avif 2x" media="(min-width: 768px)" type="image/avif" />
                <source srcSet="/images/section-bg.webp 1x, /images/section-bg@2x.webp 2x" media="(min-width: 768px)" type="image/webp" />
                <source srcSet="/images/section-bg.jpg 1x, /images/section-bg@2x.jpg 2x" media="(min-width: 768px)" type="image/jpeg" />

                <img src="/images/section-bg-mob@2x.jpg" width="750" height="1400" alt="Section background" ref={imgRef} decoding="async" loading="lazy"/>
            </picture>
            <div className={styles.fixedSectionWrapper}>
                <h2>{t("title")}</h2>  
                <p>{t("text")}</p> 
                <SButton text={t("linkText")} icon={true} onClick={openContactForm} />
            </div>
        </section>
    );
}