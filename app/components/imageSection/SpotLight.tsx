import clsx from 'clsx';
import SButton from '../core/buttons/sButton';
import { useTranslations } from 'next-intl';
import styles from './ImageSection.module.scss';

export default function SpotLight () {
    const tSpotLight = useTranslations('portfolio.spotLight');
    return (
        <div className={styles.texItem}>
            <h3>{tSpotLight('title')}</h3>
            <p>{tSpotLight('text')}</p>
            <div className={clsx('button-wrap', styles.textItemButton)}>
                <SButton text={tSpotLight('linkText')} url="#" icon={true} />    
            </div>
        </div>
    );

}