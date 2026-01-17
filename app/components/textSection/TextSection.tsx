import clsx from 'clsx';
import SButton from '../core/buttons/sButton';
import { useTranslations } from 'next-intl';
import styles from './TextSection.module.scss';


export default function TextSection () {
    const t = useTranslations('banner');
    return (
        <section className={styles.textSection}>
            <div className={styles.textSectionWrapper}>
                <h3>{t('title')}</h3>
                <div className={clsx("button-wrap button-wrap--center", styles.button)}>
                    <SButton text={t('linkText')} url="#" icon={true} />
                </div>
            </div>
        </section>
    );
}