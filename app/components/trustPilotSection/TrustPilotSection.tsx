'use client';
import clsx from 'clsx';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import styles from './TrustPilotSection.module.scss';


export default function TrustPilotSection () {
    const folder = '/images/trusted-logo/';

    return (
        <section className={clsx(styles.trustPilotSection, "trust-pilot-section")}>
            <h2>We’re proud to<br/> be 5 rated
            <span className="svg">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M55.9443 39.5813C57.0902 42.1993 57.9421 44.1459 57.9421 44.1459L75 44.1834L62.6423 56.3491L65.5428 73.4849L50.0184 65.5831L34.628 73.5133L37.4004 56.4487L25 44.1265L42.1717 44.089L50 26C50 26 51.1584 28.6466 52.5903 31.9183" stroke="#EB5107" strokeWidth="3" strokeLinecap="round"/>
                </svg>
            </span>
            </h2>
            <div className={styles.trustedLogos}>
                <p>
                    Trusted by 50+ teams
                </p>
                <div className={clsx("trust-pilot-pagination", styles.trustedLogosWrapper)}></div>
            </div>      

            <div className={styles.trustedSwiper}>
                <Swiper modules={[Pagination]} spaceBetween={0} slidesPerView={1.2} pagination={{
                    el: '.trust-pilot-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="'+ clsx(styles.trustedLogo, className) +'"><img src="' + folder + "trusted-logo-" + index +'.png"  alt="Logo" width="100" height="100" decoding="async" loading="lazy" /></span>';
                    },
                    }} centeredSlides={true} breakpoints={{600: {slidesPerView: 1.6}, 760:{slidesPerView: 2.2}, 1080: {slidesPerView: 3.4},  1200: {slidesPerView: 3.8}, 1400: {slidesPerView: 4}}}>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.item}>
                            <p>&quot;We had an idea but no team. MaxDev not only built our MVP but helped shape the concept, prioritize features, and launch quickly. The team is hands-on, communicative, and deeply skilled.&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-0.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>Omar T.</p>
                                    <p className={styles.authorText}>Product Owner</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.item}>
                            <p>&quot;We had an idea but no team. MaxDev not only built our MVP but helped shape the concept, prioritize features, and launch quickly. The team is hands-on, communicative, and deeply skilled.&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-1.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>Omar T.</p>
                                    <p className={styles.authorText}>Product Owner</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.item}>
                            <p>&quot;We had an idea but no team. MaxDev not only built our MVP but helped shape the concept, prioritize features, and launch quickly. The team is hands-on, communicative, and deeply skilled.&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-2.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>Omar T.</p>
                                    <p className={styles.authorText}>Product Owner</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.item}>
                            <p>&quot;We had an idea but no team. MaxDev not only built our MVP but helped shape the concept, prioritize features, and launch quickly. The team is hands-on, communicative, and deeply skilled.&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-3.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>Omar T.</p>
                                    <p className={styles.authorText}>Product Owner</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.item}>
                            <p>&quot;We had an idea but no team. MaxDev not only built our MVP but helped shape the concept, prioritize features, and launch quickly. The team is hands-on, communicative, and deeply skilled.&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-4.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>Omar T.</p>
                                    <p className={styles.authorText}>Product Owner</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.item}>
                            <p>&quot;We had an idea but no team. MaxDev not only built our MVP but helped shape the concept, prioritize features, and launch quickly. The team is hands-on, communicative, and deeply skilled.&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-5.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>Omar T.</p>
                                    <p className={styles.authorText}>Product Owner</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                            <div className={styles.item}>
                            <p>&quot;We had an idea but no team. MaxDev not only built our MVP but helped shape the concept, prioritize features, and launch quickly. The team is hands-on, communicative, and deeply skilled.&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-6.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>Omar T.</p>
                                    <p className={styles.authorText}>Product Owner</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>    
            </div>
        </section>
    );
}
