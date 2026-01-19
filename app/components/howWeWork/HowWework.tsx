import Image from "next/image";
import HowWeWorkCellsContainer from './HowWeWorkCellsContainer';
import { useTranslations } from 'next-intl';
import styles from './HowWeWork.module.scss';


export default function HowWeWork () {
    const t = useTranslations('howWewORK');
    
    return (
        <section id="how-we-work" className={styles.textSection}>
            <h2 className="flex--center"><span className="subtitle pusle-dot--shadow pusle-dot pusle-dot--inner-pulse">{t('subTitle')}</span></h2>
            <div className={styles.textSectionContainer}>
                <div className={styles.howWeWorkText}>
                    <Image src="/images/how-we-work.png" alt="How we work" quality={100} width="1490" height="1543" />
                </div>
                <Image src="/images/color-wheel-mobile.png" alt="Big logo" className={styles.colorWheel} quality={100} width="750" height="998" />
                <Image src="/images/color-wheel.png" alt="Big logo" className={styles.colorWheelDesctop} quality={100} width="2133" height="1836" />
                <HowWeWorkCellsContainer />
            </div>
        </section>
    );
}