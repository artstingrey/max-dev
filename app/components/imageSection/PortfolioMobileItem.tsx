import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import SButton from '../core/buttons/sButton';
import { portfolioItemDataType } from "./ImageSection";
import styles from './ImageSection.module.scss';

export default function PortfolioMobileItem ({image,subTitle,title,desc = '',descArr = [], about, services, url = '#'}:portfolioItemDataType) {
    return (
        <div className={styles.portfolioItem}>
            <div className={styles.portfolioImageContainer}>
                <Swiper modules={[Pagination]} spaceBetween={20} freeMode={true} slidesPerView="auto" pagination={{ clickable: false}} breakpoints={{768: {enabled: false,allowTouchMove: false,pagination: { enabled: false }}}}>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.portfolioImage}>
                            <Image src={image.src} alt={image.alt} quality={100} width={image.width} height={image.height} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.portfolioImage}>
                            <Image src={image.src} alt={image.alt} quality={100} width={image.width} height={image.height} />
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
                                    <SButton text="Live project" url={url} icon={true} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
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