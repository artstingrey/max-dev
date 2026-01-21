'use client';
import clsx from 'clsx';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useTranslations } from 'next-intl';
import BodymovinPlayer from '../dodymovinPlayer/BodymovinPlayer';
import styles from './TrustPilotSection.module.scss';



export default function TrustPilotSection () {
    const folder = '/images/trusted-logo/';
    const t = useTranslations('trustPilot');
    const items = t.raw('items') as { text: string; author: string; position: string; }[];

    return (
        <section className={clsx(styles.trustPilotSection, "trust-pilot-section")}>
            <h2><span>{t('title')}</span>
                <BodymovinPlayer path='/json/Star.json' className="svg" />
            </h2>
            <div className={styles.trustedLogos}>
                <p>{t('subTitle')}</p>
                <div className={clsx("trust-pilot-pagination", styles.trustedLogosWrapper)}></div>
            </div>      
            <div className={clsx('shadow-section-desctop', styles.trustedSwiper)}>
                <Swiper modules={[Pagination]} spaceBetween={0} slidesPerView={1.2} loop={true} pagination={{
                    el: '.trust-pilot-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="'+ clsx(styles.trustedLogo, className) +'"><img src="' + folder + "trusted-logo-" + index +'.png"  alt="Logo" width="100" height="100" decoding="async" loading="lazy" /></span>';
                    },
                    }} breakpoints={{600: {slidesPerView: 1.6}, 760:{slidesPerView: 2.2}, 1080: {slidesPerView: 3.2, centeredSlides: true},  1200: {slidesPerView: 3.4, centeredSlides: true}, 1400: {slidesPerView: 4, centeredSlides: true}}}>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.item}>
                            <p>&quot;{items[0].text}&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-0.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>{items[0].author}</p>
                                    <p className={styles.authorText}>{items[0].position}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.item}>
                            <p>&quot;{items[1].text}&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-1.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>{items[1].author}</p>
                                    <p className={styles.authorText}>{items[1].position}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.item}>
                            <p>&quot;{items[2].text}&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-2.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>{items[2].author}</p>
                                    <p className={styles.authorText}>{items[2].position}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.item}>
                            <p>&quot;{items[3].text}&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-3.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>{items[3].author}</p>
                                    <p className={styles.authorText}>{items[3].position}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.item}>
                            <p>&quot;{items[4].text}&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-4.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>{items[4].author}</p>
                                    <p className={styles.authorText}>{items[4].position}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.item}>
                            <p>&quot;{items[4].text}&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-4.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>{items[4].author}</p>
                                    <p className={styles.authorText}>{items[4].position}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.item}>
                            <p>&quot;{items[4].text}&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-4.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>{items[4].author}</p>
                                    <p className={styles.authorText}>{items[4].position}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperSlide}>
                        <div className={styles.item}>
                            <p>&quot;{items[4].text}&quot;</p>
                            <div className={styles.author}>
                                <div className={styles.itemImage}>
                                    <Image src={folder + 'trusted-logo-4.png'} width={100} height={100} alt='Trusted logo' quality={100}/>
                                </div>
                                <div>
                                    <p className={styles.authorTitle}>{items[4].author}</p>
                                    <p className={styles.authorText}>{items[4].position}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>    
            </div>
            <div className={styles.trustPilot}>
                <div className={clsx("svg", styles.trustPilotLogo)}>
                    <svg width="200" height="50" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_535_903)">
                        <path d="M52.5601 17.4062H72.8108V21.1845H64.8483V42.4239H60.4697V21.1845H52.5425V17.4062H52.5601ZM71.9457 24.3095H75.6887V27.8053H75.7593C75.8829 27.3109 76.1124 26.8342 76.4478 26.3752C76.7833 25.9161 77.1894 25.4748 77.6661 25.104C78.1428 24.7156 78.6724 24.4154 79.255 24.1683C79.8377 23.9387 80.438 23.8151 81.0382 23.8151C81.4973 23.8151 81.8327 23.8328 82.0093 23.8505C82.1858 23.8681 82.3624 23.9034 82.5566 23.9211V27.77C82.2741 27.717 81.9916 27.6817 81.6915 27.6464C81.3913 27.6111 81.1089 27.5934 80.8264 27.5934C80.1555 27.5934 79.5199 27.7346 78.9196 27.9995C78.3193 28.2643 77.8073 28.6704 77.3659 29.1824C76.9245 29.712 76.5714 30.3476 76.3066 31.1245C76.0418 31.9013 75.9182 32.7841 75.9182 33.7904V42.4062H71.9281V24.3095H71.9457ZM100.901 42.4239H96.981V39.8992H96.9104C96.4161 40.8173 95.6922 41.5411 94.7211 42.0885C93.7501 42.6358 92.7614 42.9183 91.7551 42.9183C89.3716 42.9183 87.6413 42.3356 86.582 41.1527C85.5227 39.9698 84.993 38.1866 84.993 35.8031V24.3095H88.9832V35.4147C88.9832 37.0037 89.2833 38.1336 89.9012 38.7869C90.5015 39.4401 91.3666 39.7756 92.4613 39.7756C93.3087 39.7756 93.9973 39.652 94.5622 39.3872C95.1272 39.1224 95.5863 38.7869 95.9217 38.3455C96.2748 37.9218 96.522 37.3921 96.6809 36.7918C96.8398 36.1916 96.9104 35.5383 96.9104 34.8321V24.3272H100.901V42.4239ZM107.698 36.6153C107.821 37.7805 108.263 38.5927 109.022 39.0694C109.799 39.5284 110.717 39.7756 111.794 39.7756C112.165 39.7756 112.588 39.7403 113.065 39.6873C113.542 39.6344 114.001 39.5108 114.407 39.3519C114.831 39.193 115.166 38.9458 115.449 38.628C115.713 38.3102 115.837 37.9041 115.819 37.3921C115.802 36.8801 115.607 36.4564 115.254 36.1386C114.901 35.8031 114.46 35.556 113.913 35.3441C113.365 35.1499 112.747 34.9733 112.041 34.8321C111.335 34.6909 110.629 34.532 109.905 34.3731C109.163 34.2142 108.439 34.0023 107.751 33.7728C107.062 33.5433 106.444 33.2255 105.897 32.8194C105.35 32.431 104.908 31.919 104.591 31.301C104.255 30.6831 104.096 29.9239 104.096 29.0058C104.096 28.0171 104.343 27.205 104.82 26.5341C105.297 25.8632 105.915 25.3335 106.639 24.9274C107.38 24.5214 108.192 24.2389 109.093 24.0623C109.993 23.9034 110.858 23.8151 111.67 23.8151C112.606 23.8151 113.506 23.9211 114.354 24.1153C115.201 24.3095 115.978 24.6273 116.667 25.0863C117.355 25.5277 117.92 26.1103 118.379 26.8166C118.838 27.5228 119.121 28.3879 119.244 29.3942H115.078C114.884 28.4409 114.46 27.7876 113.771 27.4698C113.083 27.1344 112.288 26.9755 111.405 26.9755C111.123 26.9755 110.788 26.9931 110.399 27.0461C110.011 27.099 109.658 27.1873 109.304 27.3109C108.969 27.4345 108.687 27.6287 108.439 27.8759C108.21 28.1231 108.086 28.4409 108.086 28.8469C108.086 29.3413 108.263 29.7297 108.598 30.0298C108.934 30.33 109.375 30.5772 109.922 30.789C110.47 30.9832 111.088 31.1598 111.794 31.301C112.5 31.4423 113.224 31.6012 113.965 31.7601C114.689 31.919 115.396 32.1308 116.102 32.3603C116.808 32.5899 117.426 32.9077 117.973 33.3137C118.521 33.7198 118.962 34.2142 119.297 34.8144C119.633 35.4147 119.809 36.1739 119.809 37.0567C119.809 38.1336 119.562 39.0341 119.068 39.7933C118.574 40.5348 117.938 41.1527 117.161 41.6118C116.384 42.0708 115.502 42.4239 114.548 42.6358C113.595 42.8476 112.641 42.9536 111.706 42.9536C110.558 42.9536 109.499 42.83 108.528 42.5651C107.557 42.3003 106.709 41.9119 106.003 41.3999C105.297 40.8702 104.732 40.217 104.326 39.4401C103.92 38.6633 103.708 37.7276 103.672 36.6506H107.698V36.6153ZM120.869 24.3095H123.888V18.8716H127.878V24.3095H131.48V27.2933H127.878V36.9684C127.878 37.3921 127.896 37.7452 127.931 38.063C127.966 38.3632 128.054 38.628 128.178 38.8399C128.302 39.0517 128.496 39.2106 128.761 39.3166C129.026 39.4225 129.361 39.4755 129.82 39.4755C130.103 39.4755 130.385 39.4755 130.667 39.4578C130.95 39.4401 131.232 39.4048 131.515 39.3342V42.4239C131.074 42.4769 130.632 42.5122 130.226 42.5651C129.802 42.6181 129.379 42.6358 128.937 42.6358C127.878 42.6358 127.03 42.5298 126.395 42.3356C125.759 42.1414 125.247 41.8413 124.894 41.4529C124.523 41.0644 124.294 40.5877 124.153 40.0051C124.029 39.4225 123.941 38.7516 123.923 38.0101V27.3286H120.904V24.3095H120.869ZM134.304 24.3095H138.083V26.7636H138.153C138.718 25.7043 139.495 24.9627 140.502 24.5037C141.508 24.0447 142.585 23.8151 143.768 23.8151C145.198 23.8151 146.434 24.0623 147.493 24.5743C148.552 25.0687 149.435 25.7572 150.141 26.64C150.848 27.5228 151.36 28.5468 151.713 29.712C152.066 30.8773 152.242 32.1308 152.242 33.455C152.242 34.6732 152.083 35.8561 151.766 36.9861C151.448 38.1336 150.971 39.14 150.336 40.0228C149.7 40.9055 148.888 41.5941 147.899 42.1238C146.91 42.6534 145.763 42.9183 144.421 42.9183C143.838 42.9183 143.256 42.8653 142.673 42.7594C142.09 42.6534 141.526 42.4769 140.996 42.2474C140.466 42.0178 139.954 41.7177 139.513 41.3469C139.054 40.9762 138.683 40.5524 138.365 40.0757H138.295V49.1153H134.304V24.3095ZM148.252 33.3844C148.252 32.5722 148.146 31.7777 147.934 31.0009C147.723 30.224 147.405 29.5531 146.981 28.9529C146.557 28.3526 146.028 27.8759 145.41 27.5228C144.774 27.1697 144.05 26.9755 143.238 26.9755C141.561 26.9755 140.29 27.5581 139.442 28.7233C138.595 29.8886 138.171 31.4423 138.171 33.3844C138.171 34.3024 138.277 35.1499 138.506 35.9267C138.736 36.7036 139.054 37.3745 139.513 37.9394C139.954 38.5044 140.484 38.9458 141.102 39.2636C141.72 39.599 142.444 39.7579 143.256 39.7579C144.174 39.7579 144.933 39.5637 145.569 39.193C146.204 38.8222 146.716 38.3279 147.122 37.7452C147.528 37.145 147.828 36.474 148.005 35.7149C148.164 34.9557 148.252 34.1789 148.252 33.3844ZM155.297 17.4062H159.287V21.1845H155.297V17.4062ZM155.297 24.3095H159.287V42.4239H155.297V24.3095ZM162.853 17.4062H166.843V42.4239H162.853V17.4062ZM179.078 42.9183C177.631 42.9183 176.342 42.6711 175.212 42.1944C174.082 41.7177 173.129 41.0468 172.334 40.217C171.557 39.3695 170.957 38.3632 170.551 37.1979C170.145 36.0327 169.933 34.7438 169.933 33.349C169.933 31.9719 170.145 30.7007 170.551 29.5355C170.957 28.3702 171.557 27.3639 172.334 26.5164C173.111 25.669 174.082 25.0157 175.212 24.539C176.342 24.0623 177.631 23.8151 179.078 23.8151C180.526 23.8151 181.815 24.0623 182.945 24.539C184.075 25.0157 185.028 25.6866 185.823 26.5164C186.6 27.3639 187.2 28.3702 187.606 29.5355C188.012 30.7007 188.224 31.9719 188.224 33.349C188.224 34.7438 188.012 36.0327 187.606 37.1979C187.2 38.3632 186.6 39.3695 185.823 40.217C185.046 41.0644 184.075 41.7177 182.945 42.1944C181.815 42.6711 180.526 42.9183 179.078 42.9183ZM179.078 39.7579C179.961 39.7579 180.738 39.5637 181.391 39.193C182.045 38.8222 182.574 38.3279 182.998 37.7276C183.422 37.1273 183.722 36.4387 183.934 35.6796C184.128 34.9204 184.234 34.1435 184.234 33.349C184.234 32.5722 184.128 31.813 183.934 31.0362C183.74 30.2594 183.422 29.5885 182.998 28.9882C182.574 28.3879 182.045 27.9112 181.391 27.5404C180.738 27.1697 179.961 26.9755 179.078 26.9755C178.196 26.9755 177.419 27.1697 176.766 27.5404C176.112 27.9112 175.583 28.4055 175.159 28.9882C174.735 29.5885 174.435 30.2594 174.223 31.0362C174.029 31.813 173.923 32.5722 173.923 33.349C173.923 34.1435 174.029 34.9204 174.223 35.6796C174.417 36.4387 174.735 37.1273 175.159 37.7276C175.583 38.3279 176.112 38.8222 176.766 39.193C177.419 39.5814 178.196 39.7579 179.078 39.7579ZM189.389 24.3095H192.408V18.8716H196.398V24.3095H200V27.2933H196.398V36.9684C196.398 37.3921 196.416 37.7452 196.451 38.063C196.487 38.3632 196.575 38.628 196.699 38.8399C196.822 39.0517 197.016 39.2106 197.281 39.3166C197.546 39.4225 197.881 39.4755 198.34 39.4755C198.623 39.4755 198.905 39.4755 199.188 39.4578C199.47 39.4401 199.753 39.4048 200.035 39.3342V42.4239C199.594 42.4769 199.153 42.5122 198.747 42.5651C198.323 42.6181 197.899 42.6358 197.458 42.6358C196.398 42.6358 195.551 42.5298 194.915 42.3356C194.28 42.1414 193.768 41.8413 193.415 41.4529C193.044 41.0644 192.814 40.5877 192.673 40.0051C192.55 39.4225 192.461 38.7516 192.444 38.0101V27.3286H189.425V24.3095H189.389Z" fill="white"/>
                        <path d="M47.899 17.4082H29.608L23.9583 0L18.291 17.4082L0 17.3905L14.8129 28.1603L9.14548 45.5508L23.9583 34.7987L38.7535 45.5508L33.1038 28.1603L47.899 17.4082Z" fill="#00B67A"/>
                        <path d="M34.3752 32.0954L33.104 28.1582L23.9585 34.7966L34.3752 32.0954Z" fill="#005128"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_535_903">
                        <rect width="200" height="49.1172" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </div>
                <p>{t('trustPilotText')}</p>
            </div>
        </section>
    );
}
