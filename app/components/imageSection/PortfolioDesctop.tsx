import { portfolioDataType } from './ImageSection';
import PortfolioDesctopItem from './PortfolioDesctopItem';
import clsx from 'clsx';
import SpotLight from './SpotLight';
import styles from './ImageSection.module.scss';

export default function PortfolioDesctop ({data}:portfolioDataType) {
    
    return (
        <div className={styles.portfolioContainer}>
            <div className={styles.portfolioRow}>
                <div className={styles.portfolioColumn}>
                    <PortfolioDesctopItem image={data[0].image} title={data[0].title} subTitle={data[0].subTitle} desc={data[0].desc} descArr={data[0].descArr} aboutTitle={data[0].aboutTitle} about={data[0].about} servicesTitle={data[0].servicesTitle} services={data[0].services} url={data[0].url} linkText={data[0].linkText} />    
                </div> 
                <div className={styles.portfolioColumn}>
                    <PortfolioDesctopItem image={data[1].image} title={data[1].title} subTitle={data[1].subTitle} desc={data[1].desc} descArr={data[1].descArr} aboutTitle={data[1].aboutTitle} about={data[1].about} servicesTitle={data[1].servicesTitle} services={data[1].services} url={data[1].url} linkText={data[1].linkText} />    
                </div>                  
            </div>
            <div className={clsx(styles.portfolioRow, styles.portfolioRowReverse)}>
                <div className={styles.portfolioColumn}>
                    <SpotLight />    
                </div>
                <div className={styles.portfolioColumn}>
                    <PortfolioDesctopItem image={data[2].image} title={data[2].title} subTitle={data[2].subTitle} desc={data[2].desc} descArr={data[2].descArr} aboutTitle={data[2].aboutTitle} about={data[2].about} servicesTitle={data[2].servicesTitle} services={data[2].services} url={data[2].url} linkText={data[2].linkText} />    
                </div>
            </div>
        </div>
    );
}