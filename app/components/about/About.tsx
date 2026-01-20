import clsx from 'clsx';
import { useTranslations, useLocale } from 'next-intl';
import BodymovinPlayer from '../dodymovinPlayer/BodymovinPlayer';
import styles from './About.module.scss';



export default function About () {
    const locale = useLocale();
    const addClass = locale == "ru" ? styles.aboutSectionRu : "";
    const t = useTranslations('about');

    return (
        <section className={clsx(styles.aboutSection, 'm-container', addClass)}>
            <div className={styles.aboutWrapper}>
                <h2>{t('title')}</h2>
                <div className="svg decorationTop">
                    <svg width="1" height="200" viewBox="0 0 1 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1" height="200" fill="url(#paint0_linear_38_2341)"/>
                        <defs>
                        <linearGradient id="paint0_linear_38_2341" x1="0.5" y1="0" x2="0.5" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="0.857865" stopColor="white" stopOpacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div>
                    <p className={styles.aboutText}>
                        <span className={styles.aboutTextColumn}><span>{t('text-top-1')} </span></span><span className={styles.aboutTextColumn}><span>{t('text-top-2')}</span></span>
                    </p>
                    <p className={styles.aboutText}>{t('text-bottom')}</p>
                </div>
                <div className={styles.circles}>
                    <div className={styles.circleItem}>
                        <svg className={styles.circle} width="452" height="459" viewBox="0 0 452 459" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_3126_852" fill="white">
                            <path d="M0 226C0 101.184 101.184 0 226 0C350.816 0 452 101.184 452 226C452 350.816 350.816 452 226 452C101.184 452 0 350.816 0 226Z"/>
                            </mask>
                            <g clipPath="url(#paint0_angular_3126_852_clip_path)" data-figma-skip-parse="true" mask="url(#path-1-inside-1_3126_852)"><g transform="matrix(-0.0135 0.264 -0.307717 -0.0157355 264 239.5)"><foreignObject x="-949.094" y="-949.094" width="1898.19" height="1898.19"><div style={{background:'conic-gradient(from 90deg,rgba(255, 255, 255, 1) 0deg,rgba(255, 255, 255, 0) 246.731deg,rgba(255, 255, 255, 0) 359.027deg,rgba(255, 255, 255, 1) 360deg)', height:'100%', width:'100%', opacity:1}}></div></foreignObject></g></g><path d="M226 452V450C102.288 450 2 349.712 2 226H0H-2C-2 351.921 100.079 454 226 454V452ZM452 226H450C450 349.712 349.712 450 226 450V452V454C351.921 454 454 351.921 454 226H452ZM226 0V2C349.712 2 450 102.288 450 226H452H454C454 100.079 351.921 -2 226 -2V0ZM226 0V-2C100.079 -2 -2 100.079 -2 226H0H2C2 102.288 102.288 2 226 2V0Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.68536388874053955},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.99729651212692261},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.68536388874053955},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.99729651212692261},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:-26.999950408935547,&#34;m01&#34;:-615.43475341796875,&#34;m02&#34;:585.21734619140625,&#34;m10&#34;:528.0,&#34;m11&#34;:-31.471033096313477,&#34;m12&#34;:-8.7644662857055664},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" mask="url(#path-1-inside-1_3126_852)"/>
                            <rect x="246" y="439" width="20" height="20" rx="10" fill="white" fillOpacity="0.2"/>
                            <rect x="250" y="443" width="12" height="12" rx="6" fill="white"/>
                            <defs>
                            <clipPath id="paint0_angular_3126_852_clip_path"><path d="M226 452V450C102.288 450 2 349.712 2 226H0H-2C-2 351.921 100.079 454 226 454V452ZM452 226H450C450 349.712 349.712 450 226 450V452V454C351.921 454 454 351.921 454 226H452ZM226 0V2C349.712 2 450 102.288 450 226H452H454C454 100.079 351.921 -2 226 -2V0ZM226 0V-2C100.079 -2 -2 100.079 -2 226H0H2C2 102.288 102.288 2 226 2V0Z" mask="url(#path-1-inside-1_3126_852)"/></clipPath></defs>
                        </svg>


                        <div className={styles.circleContent}>
                            <div className={clsx(styles.icon,'svg')}>
                               <BodymovinPlayer path='/json/People.json' speed={60} />
                            </div>
                            <p>{t('about-item-1')}</p>
                        </div>
                    </div>

                    <div className={styles.circleItem}>
                        <svg className={styles.circle} width="461" height="452" viewBox="0 0 461 452" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_3126_927" fill="white">
                            <path d="M9 226C9 101.184 110.184 0 235 0C359.816 0 461 101.184 461 226C461 350.816 359.816 452 235 452C110.184 452 9 350.816 9 226Z"/>
                            </mask>
                            <g clipPath="url(#paint0_angular_3126_927_clip_path)" data-figma-skip-parse="true" mask="url(#path-1-inside-1_3126_927)"><g transform="matrix(-0.264 -0.0135 0.0157355 -0.307717 273 239.5)"><foreignObject x="-1051.6" y="-1051.6" width="2103.21" height="2103.21"><div style={{background:'conic-gradient(from 90deg,rgba(255, 255, 255, 1) 0deg,rgba(255, 255, 255, 0) 246.731deg,rgba(255, 255, 255, 0) 359.027deg,rgba(255, 255, 255, 1) 360deg)',height:'100%', width:'100%', opacity:1}}></div></foreignObject></g></g><path d="M235 452V450C111.288 450 11 349.712 11 226H9H7C7 351.921 109.079 454 235 454V452ZM461 226H459C459 349.712 358.712 450 235 450V452V454C360.921 454 463 351.921 463 226H461ZM235 0V2C358.712 2 459 102.288 459 226H461H463C463 100.079 360.921 -2 235 -2V0ZM235 0V-2C109.079 -2 7 100.079 7 226H9H11C11 102.288 111.288 2 235 2V0Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.68536388874053955},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.99729651212692261},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.68536388874053955},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.99729651212692261},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:-528.0,&#34;m01&#34;:31.471035003662109,&#34;m02&#34;:521.26452636718750,&#34;m10&#34;:-26.999950408935547,&#34;m11&#34;:-615.43475341796875,&#34;m12&#34;:560.71734619140625},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" mask="url(#path-1-inside-1_3126_927)"/>
                            <rect y="222" width="20" height="20" rx="10" fill="white" fillOpacity="0.2"/>
                            <rect x="4" y="226" width="12" height="12" rx="6" fill="white"/>
                            <defs>
                            <clipPath id="paint0_angular_3126_927_clip_path"><path d="M235 452V450C111.288 450 11 349.712 11 226H9H7C7 351.921 109.079 454 235 454V452ZM461 226H459C459 349.712 358.712 450 235 450V452V454C360.921 454 463 351.921 463 226H461ZM235 0V2C358.712 2 459 102.288 459 226H461H463C463 100.079 360.921 -2 235 -2V0ZM235 0V-2C109.079 -2 7 100.079 7 226H9H11C11 102.288 111.288 2 235 2V0Z" mask="url(#path-1-inside-1_3126_927)"/></clipPath></defs>
                        </svg>

                        <div className={styles.circleContent}>
                            <div className={clsx(styles.icon,'svg')}>
                                <BodymovinPlayer path='/json/Global.json' />
                            </div>
                            <p>{t('about-item-2')}</p>
                        </div>
                    </div>

                    <div className={styles.circleItem}>
                        <svg className={styles.circle} width="452" height="457" viewBox="0 0 452 457" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_3126_902" fill="white">
                            <path d="M0 231C0 106.184 101.184 5 226 5C350.816 5 452 106.184 452 231C452 355.816 350.816 457 226 457C101.184 457 0 355.816 0 231Z"/>
                            </mask>
                            <g clipPath="url(#paint0_angular_3126_902_clip_path)" data-figma-skip-parse="true" mask="url(#path-1-inside-1_3126_902)"><g transform="matrix(0.0135 -0.264 0.307717 0.0157355 264 244.5)"><foreignObject x="-949.094" y="-949.094" width="1898.19" height="1898.19"><div style={{background:'conic-gradient(from 90deg,rgba(255, 255, 255, 1) 0deg,rgba(255, 255, 255, 0) 246.731deg,rgba(255, 255, 255, 0) 359.027deg,rgba(255, 255, 255, 1) 360deg)', height:'100%', width:'100%', opacity:1}}></div></foreignObject></g></g><path d="M226 457V455C102.288 455 2 354.712 2 231H0H-2C-2 356.921 100.079 459 226 459V457ZM452 231H450C450 354.712 349.712 455 226 455V457V459C351.921 459 454 356.921 454 231H452ZM226 5V7C349.712 7 450 107.288 450 231H452H454C454 105.079 351.921 3 226 3V5ZM226 5V3C100.079 3 -2 105.079 -2 231H0H2C2 107.288 102.288 7 226 7V5Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.68536388874053955},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.99729651212692261},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.68536388874053955},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.99729651212692261},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:26.999950408935547,&#34;m01&#34;:615.43475341796875,&#34;m02&#34;:-57.217330932617188,&#34;m10&#34;:-528.0,&#34;m11&#34;:31.471035003662109,&#34;m12&#34;:492.76452636718750},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" mask="url(#path-1-inside-1_3126_902)"/>
                            <rect x="263" width="20" height="20" rx="10" fill="white" fillOpacity="0.2"/>
                            <rect x="267" y="4" width="12" height="12" rx="6" fill="white"/>
                            <defs>
                            <clipPath id="paint0_angular_3126_902_clip_path"><path d="M226 457V455C102.288 455 2 354.712 2 231H0H-2C-2 356.921 100.079 459 226 459V457ZM452 231H450C450 354.712 349.712 455 226 455V457V459C351.921 459 454 356.921 454 231H452ZM226 5V7C349.712 7 450 107.288 450 231H452H454C454 105.079 351.921 3 226 3V5ZM226 5V3C100.079 3 -2 105.079 -2 231H0H2C2 107.288 102.288 7 226 7V5Z" mask="url(#path-1-inside-1_3126_902)"/></clipPath></defs>
                        </svg>

                        <div className={styles.circleContent}>
                            <div className={clsx(styles.icon,'svg')}>
                                <BodymovinPlayer path='/json/Blocks-loading.json' />
                            </div>
                            <p>{t('about-item-3')}</p>
                        </div>
                    </div>
                </div>
                <div className="svg decorationBottom">
                    <svg width="1" height="200" viewBox="0 0 1 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1" height="200" transform="matrix(1 0 0 -1 0 200)" fill="url(#paint0_linear_38_2364)"/>
                        <defs>
                        <linearGradient id="paint0_linear_38_2364" x1="0.5" y1="0" x2="0.5" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white"/>
                        <stop offset="0.857865" stopColor="white" stopOpacity="0"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    );
}