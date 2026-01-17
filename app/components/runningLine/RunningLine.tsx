import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import styles from './RunningLine.module.scss';

export default function RunningLine () {
    const t = useTranslations('clients');

    const logos = [
        {id: 1, src: "/images/partners/webflow.svg", alt: "Webflow", width: "215px"},
        {id: 2, src: "/images/partners/webflow.svg", alt: "Webflow", width: "215px"},
        {id: 3, src: "/images/partners/webflow.svg", alt: "Webflow", width: "215px" },
        {id: 4, src: "/images/partners/webflow.svg", alt: "Webflow", width: "215px"},
        {id: 5, src: "/images/partners/webflow.svg", alt: "Webflow", width: "215px" },

        {id: 6, src: "/images/partners/webflow.svg", alt: "Webflow", width: "215px"},
        {id: 7, src: "/images/partners/webflow.svg", alt: "Webflow", width: "215px"},
        {id: 8, src: "/images/partners/webflow.svg", alt: "Webflow", width: "215px" },
        {id: 9, src: "/images/partners/webflow.svg", alt: "Webflow", width: "215px"},
        {id: 10, src: "/images/partners/webflow.svg", alt: "Webflow", width: "215px" },

        // {id: 11, src: "/images/partners/kyrex.svg", alt: "Kyrex", width: "152px"},
        // {id: 12, src: "/images/partners/visa.svg", alt: "Visa", width: "100px"},
        // {id: 13, src: "/images/partners/mastercard.svg", alt: "Mastercard", width: "65px" },
        // {id: 14, src: "/images/partners/simplify-labs.svg", alt: "Simplifylabs", width: "88px"},
        // {id: 15, src: "/images/partners/chainalysis.svg", alt: "Chainalysis", width: "199px" },
    ];

    return (
        <section className={clsx("section-space", styles.runningLine)}>
            <h2 className={styles.runningLineTitle}>{t('text')}</h2> 

            <div className={clsx('running-line', styles.runningLineWrapper)}>
                <div className="running-line-wrap">
                    <div className={clsx('initial-child-container', styles.runningLineInitial)}>
                        {logos.map((logo) => (
                            <div key={logo.id} className={clsx('running-line-item')}>
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    loading="lazy"
                                    decoding="async"
                                    // width={96} height={32}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="running-line-wrap">
                    <div className={clsx('initial-child-container', styles.runningLineInitial)}>
                        {logos.map((logo) => (
                            <div key={logo.id} className="running-line-item">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    loading="lazy"
                                    decoding="async"
                                    // width={96} height={32}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>    
        </section>
    );
}