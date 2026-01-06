import { portfolioDataType } from './ImageSection';
import PortfolioMobileItem from './PortfolioMobileItem';
import styles from './ImageSection.module.scss';

export default function PortfolioMobile ({data}:portfolioDataType) {
    return (
        <div className={styles.portfolioContainer}>
            {data.map((item) => <PortfolioMobileItem key={crypto.randomUUID()} image={item.image} title={item.title} subTitle={item.subTitle} desc={item.desc} descArr={item.descArr} about={item.about} services={item.services} url={item.url} />)}
        </div>
    );
}
