import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import styles from './RunningLine.module.scss';

export default function RunningLine () {
    const t = useTranslations('clients');

    const logos = [
        {id: 1, src: "/images/partners/maxprofit_logo.svg", alt: "maxprofit_logo", width: "212px"},
        {id: 2, src: "/images/partners/maxswap_logo.svg", alt: "maxswap_logo", width: "188px"},
        {id: 3, src: "/images/partners/maxwallet_logo.svg", alt: "maxwallet_logo", width: "68px" },
        {id: 4, src: "/images/partners/maxprofit_logo.svg", alt: "maxprofit_logo", width: "212px"},
        {id: 5, src: "/images/partners/maxswap_logo.svg", alt: "maxswap_logo", width: "188px"},
        {id: 6, src: "/images/partners/maxwallet_logo.svg", alt: "maxwallet_logo", width: "68px" },

        {id: 7, src: "/images/partners/maxprofit_logo.svg", alt: "maxprofit_logo", width: "212px"},
        {id: 8, src: "/images/partners/maxswap_logo.svg", alt: "maxswap_logo", width: "188px"},
        {id: 9, src: "/images/partners/maxwallet_logo.svg", alt: "maxwallet_logo", width: "68px" },
        {id: 10, src: "/images/partners/maxprofit_logo.svg", alt: "maxprofit_logo", width: "212px"},
        {id: 11, src: "/images/partners/maxswap_logo.svg", alt: "maxswap_logo", width: "188px"},
        {id: 12, src: "/images/partners/maxwallet_logo.svg", alt: "maxwallet_logo", width: "68px" },
    ];

    return (
        <section className={clsx("section-space", styles.runningLine)}>
            <h2 className={styles.runningLineTitle}>{t('text')}</h2> 

            <div className={clsx('running-line', styles.runningLineWrapper)}>
                <div className="running-line-wrap">
                    <div className={clsx('initial-child-container', styles.runningLineInitial)}>
                        {logos.map((logo) => (
                            <div key={logo.id} className={clsx('running-line-item', styles.runningLineItem)} style={{width: logo.width}}>
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
                            <div key={logo.id} className={clsx('running-line-item', styles.runningLineItem)} style={{width: logo.width}}>
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