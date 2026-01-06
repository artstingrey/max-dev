import Image from "next/image";
import SButton from '../core/buttons/sButton';
import { portfolioItemDataType } from "./ImageSection";
import styles from './ImageSection.module.scss';

export default function PortfolioDesctopItem ({image, subTitle, title, desc = '', descArr = [], about, services, url = '#'}:portfolioItemDataType) {
    return (
        <div className={styles.portfolioItem}>
            <div className={styles.portfolioImageContainer}>
                <div className={styles.portfolioImageDescritionContainer}>
                    <div>
                        <div className={styles.portfolioImageTextItem}>
                            <p className={styles.portfolioImageTitle}>About project</p>
                            <div className={styles.portfolioImageDesc}>
                                <p>{about}</p>
                            </div>
                        </div>
                        <div className={styles.portfolioImageTextItem}>
                            <p className={styles.portfolioImageTitle}>Services</p>
                            <div className={styles.portfolioImageDesc}>
                                <ul>
                                    {services.map((service, index) => {
                                        return <li key={index}>{service}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="button-wrap">
                            <SButton text="Live project" url={url} icon={true} />
                        </div>
                    </div>
                </div>
                <Image src={image.src} alt={image.alt} quality={100} width={image.width} height={image.height} />
            </div>
            <div className={styles.portfolioText}>
                <div className={styles.portfolioProjectSubtitle}>
                    <p>{subTitle}</p>
                    <p>{title}</p>
                </div>
                <div className={styles.portfolioProjectDesc}>
                    {desc ? <p className="shiny-text">{desc}</p> : null}
                    {Array.isArray(descArr) && descArr.length > 0 ? (
                        <ul>
                            {descArr.map((item, i) => (
                                <li key={`${item}-${i}`}>{item}</li>
                            ))}
                        </ul>
                    ) : null}
                </div>
            </div>
        </div>    
    );
}