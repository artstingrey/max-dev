'use client';
import clsx from 'clsx';
import { useContactFormStore } from "@/app/stores/useContactFormStore";
import SButton from '../core/buttons/sButton';
import { useTranslations } from 'next-intl';
import styles from './FixedSection.module.scss';


export default function FixedSection () {
    const t = useTranslations('CTA');
    const openContactForm = useContactFormStore((s) => s.open);

    return (
        <section className={styles.fixedSection}>
             <picture className={clsx("section-bg", "section-bg--no-scale", "responsive-image")}>
                <source srcSet="/images/section-bg-mob@2x.avif 2x" media="(max-width: 767px)" type="image/avif" />
                <source srcSet="/images/section-bg-mob@2x.webp 2x" media="(max-width: 767px)" type="image/webp" />
                <source srcSet="/images/section-bg-mob@2x.jpg 2x" media="(max-width: 767px)" type="image/jpeg" />

                <source srcSet="/images/section-bg.avif 1x, /images/section-bg@2x.avif 2x" media="(min-width: 768px)" type="image/avif" />
                <source srcSet="/images/section-bg.webp 1x, /images/section-bg@2x.webp 2x" media="(min-width: 768px)" type="image/webp" />
                <source srcSet="/images/section-bg.jpg 1x, /images/section-bg@2x.jpg 2x" media="(min-width: 768px)" type="image/jpeg" />

                <img src="/images/section-bg-mob@2x.jpg" width="750" height="1400" alt="Section background" decoding="async" loading="lazy"/>
            </picture>
            <div className={styles.fixedSectionWrapper}>
                <h2>{t("title")}</h2>  
                <p>{t("text")}</p> 
                <SButton text={t("linkText")} icon={true} onClick={openContactForm} />
            </div>
        </section>
    );
}