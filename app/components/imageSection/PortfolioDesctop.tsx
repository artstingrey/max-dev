import { portfolioDataType } from './ImageSection';
import PortfolioDesctopItem from './PortfolioDesctopItem';
import clsx from 'clsx';
import SButton from '../core/buttons/sButton';
import styles from './ImageSection.module.scss';

export default function PortfolioDesctop ({data}:portfolioDataType) {
    
    return (
        <div className={styles.portfolioContainer}>
            <div className={styles.portfolioRow}>
                <div className={styles.portfolioColumn}>
                    <PortfolioDesctopItem image={data[0].image} title={data[0].title} subTitle={data[0].subTitle} desc={data[0].desc} descArr={data[0].descArr} about={data[0].about} services={data[0].services} url={data[0].url} />    
                </div> 
                <div className={styles.portfolioColumn}>
                    <PortfolioDesctopItem image={data[1].image} title={data[1].title} subTitle={data[1].subTitle} desc={data[1].desc} descArr={data[1].descArr} about={data[1].about} services={data[1].services} url={data[1].url} />    
                </div>                  
            </div>
            <div className={clsx(styles.portfolioRow, styles.portfolioRowReverse)}>
                <div className={styles.portfolioColumn}>
                    <div className={styles.texItem}>
                        <h3>Ready for the<br/> spotlight?</h3>
                        <p>Become our next featured project. We turn ambitious ideas into digital products that get noticed and deliver results.</p>
                        <div className={clsx('button-wrap', styles.textItemButton)}>
                            <SButton text="Let's talk" url="#" icon={true} />    
                        </div>
                    </div>
                </div>
                <div className={styles.portfolioColumn}>
                    <PortfolioDesctopItem image={data[2].image} title={data[2].title} subTitle={data[2].subTitle} desc={data[2].desc} descArr={data[2].descArr} about={data[2].about} services={data[2].services} url={data[2].url} />    
                </div>
            </div>
        </div>
    );
}