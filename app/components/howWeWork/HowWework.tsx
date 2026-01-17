import Image from "next/image";
import HowWeWorkCellsContainer from './HowWeWorkCellsContainer';
import { useTranslations } from 'next-intl';
import styles from './HowWeWork.module.scss';


export default function HowWeWork () {
    const t = useTranslations('howWewORK');
    
    return (
        <section id="how-we-work" className={styles.textSection}>
            <h2 className="flex--center"><span className="subtitle">{t('subTitle')}</span></h2>
            <div className={styles.textSectionContainer}>
                <div className={styles.howWeWorkText}>
                    <Image src="/images/how-we-work.png" alt="How we work" quality={100} width="1490" height="1543" />
                </div>
                <img src="/images/svg/color-wheel.svg" alt="Big logo" loading="lazy" decoding="async" className={styles.colorWheel}/>
                <img src="/images/svg/color-wheel-desctop.svg" alt="Big logo" loading="lazy" decoding="async" className={styles.colorWheelDesctop}/>
                <HowWeWorkCellsContainer />
            </div>
        </section>
    );
}