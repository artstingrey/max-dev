import { portfolioDataType } from './ImageSection';
import PortfolioMobileItem from './PortfolioMobileItem';
import SpotLight from './SpotLight';
import styles from './ImageSection.module.scss';

export default function PortfolioMobile ({data}:portfolioDataType) {
    return (
        <div className={styles.portfolioContainer}>
            {data.map((item) => <PortfolioMobileItem key={crypto.randomUUID()} image={item.image} title={item.title} subTitle={item.subTitle} desc={item.desc} descArr={item.descArr} aboutTitle={item.aboutTitle} about={item.about} servicesTitle={item.servicesTitle} services={item.services} url={item.url} linkText={item.linkText} />)}
            <SpotLight />
        </div>
    );
}
