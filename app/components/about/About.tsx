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
                       <svg className={styles.circle} width="472" height="472" viewBox="0 0 472 472" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="path-1-inside-1_728_889" fill="white">
                        <path d="M10 236C10 111.184 111.184 10 236 10C360.816 10 462 111.184 462 236C462 360.816 360.816 462 236 462C111.184 462 10 360.816 10 236Z"/>
                        </mask>
                        <g clipPath="url(#paint0_angular_728_889_clip_path)" data-figma-skip-parse="true" mask="url(#path-1-inside-1_728_889)"><g transform="matrix(-0.0135 0.264 -0.307717 -0.0157355 274 249.5)"><foreignObject x="-949.094" y="-949.094" width="1898.19" height="1898.19"><div style={{background:'conic-gradient(from 90deg,rgba(255, 255, 255, 1) 0deg,rgba(255, 255, 255, 0) 246.731deg,rgba(255, 255, 255, 0) 359.027deg,rgba(255, 255, 255, 1) 360deg)', height:'100%', width:'100%', opacity:1}}></div></foreignObject></g></g><path d="M236 462V460C112.288 460 12 359.712 12 236H10H8C8 361.921 110.079 464 236 464V462ZM462 236H460C460 359.712 359.712 460 236 460V462V464C361.921 464 464 361.921 464 236H462ZM236 10V12C359.712 12 460 112.288 460 236H462H464C464 110.079 361.921 8 236 8V10ZM236 10V8C110.079 8 8 110.079 8 236H10H12C12 112.288 112.288 12 236 12V10Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_ANGULAR&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:0.0},&quot;position&quot;:0.68536388874053955},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:0.0},&quot;position&quot;:0.99729651212692261},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:0.0},&quot;position&quot;:0.68536388874053955},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:0.0},&quot;position&quot;:0.99729651212692261},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;transform&quot;:{&quot;m00&quot;:-26.999950408935547,&quot;m01&quot;:-615.43475341796875,&quot;m02&quot;:595.21734619140625,&quot;m10&quot;:528.0,&quot;m11&quot;:-31.471033096313477,&quot;m12&quot;:1.2355335950851440},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}" mask="url(#path-1-inside-1_728_889)"/>
                        <rect x="256" y="449" width="20" height="20" rx="10" fill="white" fillOpacity="0.2"/>
                        <rect x="260" y="453" width="12" height="12" rx="6" fill="white"/>
                        <defs>
                        <clipPath id="paint0_angular_728_889_clip_path"><path d="M236 462V460C112.288 460 12 359.712 12 236H10H8C8 361.921 110.079 464 236 464V462ZM462 236H460C460 359.712 359.712 460 236 460V462V464C361.921 464 464 361.921 464 236H462ZM236 10V12C359.712 12 460 112.288 460 236H462H464C464 110.079 361.921 8 236 8V10ZM236 10V8C110.079 8 8 110.079 8 236H10H12C12 112.288 112.288 12 236 12V10Z" mask="url(#path-1-inside-1_728_889)"/></clipPath></defs>
                        </svg>


                        <div className={styles.circleContent}>
                            <div className={clsx(styles.icon,'svg')}>
                               <BodymovinPlayer path='/json/People.json' speed={60} />
                            </div>
                            <p>{t('about-item-1')}</p>
                        </div>
                    </div>

                    <div className={styles.circleItem}>
                        <svg className={styles.circle} width="472" height="472" viewBox="0 0 472 472" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_695_822" fill="white">
                            <path d="M10 236C10 111.184 111.184 10 236 10C360.816 10 462 111.184 462 236C462 360.816 360.816 462 236 462C111.184 462 10 360.816 10 236Z"/>
                            </mask>
                            <g clipPath="url(#paint0_angular_695_822_clip_path)" data-figma-skip-parse="true" mask="url(#path-1-inside-1_695_822)"><g transform="matrix(-0.264 -0.0135 0.0157355 -0.307717 274 249.5)"><foreignObject x="-1051.6" y="-1051.6" width="2103.21" height="2103.21"><div style={{background:'conic-gradient(from 90deg,rgba(255, 255, 255, 1) 0deg,rgba(255, 255, 255, 0) 246.731deg,rgba(255, 255, 255, 0) 359.027deg,rgba(255, 255, 255, 1) 360deg)', height:'100%', width:'100%', opacity:1}}></div></foreignObject></g></g><path d="M236 462V460C112.288 460 12 359.712 12 236H10H8C8 361.921 110.079 464 236 464V462ZM462 236H460C460 359.712 359.712 460 236 460V462V464C361.921 464 464 361.921 464 236H462ZM236 10V12C359.712 12 460 112.288 460 236H462H464C464 110.079 361.921 8 236 8V10ZM236 10V8C110.079 8 8 110.079 8 236H10H12C12 112.288 112.288 12 236 12V10Z" data-figma-gradient-fill="{&#34;type&#34;:&#34;GRADIENT_ANGULAR&#34;,&#34;stops&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.68536388874053955},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.99729651212692261},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;stopsVar&#34;:[{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.68536388874053955},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:0.0},&#34;position&#34;:0.99729651212692261},{&#34;color&#34;:{&#34;r&#34;:1.0,&#34;g&#34;:1.0,&#34;b&#34;:1.0,&#34;a&#34;:1.0},&#34;position&#34;:1.0}],&#34;transform&#34;:{&#34;m00&#34;:-528.0,&#34;m01&#34;:31.471035003662109,&#34;m02&#34;:522.26452636718750,&#34;m10&#34;:-26.999950408935547,&#34;m11&#34;:-615.43475341796875,&#34;m12&#34;:570.71734619140625},&#34;opacity&#34;:1.0,&#34;blendMode&#34;:&#34;NORMAL&#34;,&#34;visible&#34;:true}" mask="url(#path-1-inside-1_695_822)"/>
                            <rect x="1" y="232" width="20" height="20" rx="10" fill="white" fillOpacity="0.2"/>
                            <rect x="5" y="236" width="12" height="12" rx="6" fill="white"/>
                            <defs>
                            <clipPath id="paint0_angular_695_822_clip_path"><path d="M236 462V460C112.288 460 12 359.712 12 236H10H8C8 361.921 110.079 464 236 464V462ZM462 236H460C460 359.712 359.712 460 236 460V462V464C361.921 464 464 361.921 464 236H462ZM236 10V12C359.712 12 460 112.288 460 236H462H464C464 110.079 361.921 8 236 8V10ZM236 10V8C110.079 8 8 110.079 8 236H10H12C12 112.288 112.288 12 236 12V10Z" mask="url(#path-1-inside-1_695_822)"/></clipPath></defs>
                        </svg>

                        <div className={styles.circleContent}>
                            <div className={clsx(styles.icon,'svg')}>
                                <BodymovinPlayer path='/json/Global.json' />
                            </div>
                            <p>{t('about-item-2')}</p>
                        </div>
                    </div>

                    <div className={styles.circleItem}>
                        <svg className={styles.circle} width="472" height="472" viewBox="0 0 472 472" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_695_822" fill="white">
                            <path d="M10 236C10 111.184 111.184 10 236 10C360.816 10 462 111.184 462 236C462 360.816 360.816 462 236 462C111.184 462 10 360.816 10 236Z"/>
                            </mask>
                            <g clipPath="url(#paint0_angular_695_822_clip_path)" data-figma-skip-parse="true" mask="url(#path-1-inside-1_695_822)"><g transform="matrix(0.0135 -0.264 0.307717 0.0157355 274 249.5)"><foreignObject x="-949.094" y="-949.094" width="1898.19" height="1898.19"><div style={{background:'conic-gradient(from 90deg,rgba(255, 255, 255, 1) 0deg,rgba(255, 255, 255, 0) 246.731deg,rgba(255, 255, 255, 0) 359.027deg,rgba(255, 255, 255, 1) 360deg)', height:'100%', width:'100%', opacity:1}}></div></foreignObject></g></g><path d="M236 462V460C112.288 460 12 359.712 12 236H10H8C8 361.921 110.079 464 236 464V462ZM462 236H460C460 359.712 359.712 460 236 460V462V464C361.921 464 464 361.921 464 236H462ZM236 10V12C359.712 12 460 112.288 460 236H462H464C464 110.079 361.921 8 236 8V10ZM236 10V8C110.079 8 8 110.079 8 236H10H12C12 112.288 112.288 12 236 12V10Z" data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_ANGULAR&quot;,&quot;stops&quot;:[{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:0.0},&quot;position&quot;:0.68536388874053955},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:0.0},&quot;position&quot;:0.99729651212692261},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;stopsVar&quot;:[{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:0.0},&quot;position&quot;:0.68536388874053955},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:0.0},&quot;position&quot;:0.99729651212692261},{&quot;color&quot;:{&quot;r&quot;:1.0,&quot;g&quot;:1.0,&quot;b&quot;:1.0,&quot;a&quot;:1.0},&quot;position&quot;:1.0}],&quot;transform&quot;:{&quot;m00&quot;:26.999950408935547,&quot;m01&quot;:615.43475341796875,&quot;m02&quot;:-47.217330932617188,&quot;m10&quot;:-528.0,&quot;m11&quot;:31.471035003662109,&quot;m12&quot;:497.76452636718750},&quot;opacity&quot;:1.0,&quot;blendMode&quot;:&quot;NORMAL&quot;,&quot;visible&quot;:true}" mask="url(#path-1-inside-1_695_822)"/>
                            <rect x="273" y="5" width="20" height="20" rx="10" fill="white" fillOpacity="0.2"/>
                            <rect x="277" y="9" width="12" height="12" rx="6" fill="white"/>
                            <defs>
                            <clipPath id="paint0_angular_695_822_clip_path"><path d="M236 462V460C112.288 460 12 359.712 12 236H10H8C8 361.921 110.079 464 236 464V462ZM462 236H460C460 359.712 359.712 460 236 460V462V464C361.921 464 464 361.921 464 236H462ZM236 10V12C359.712 12 460 112.288 460 236H462H464C464 110.079 361.921 8 236 8V10ZM236 10V8C110.079 8 8 110.079 8 236H10H12C12 112.288 112.288 12 236 12V10Z" mask="url(#path-1-inside-1_695_822)"/></clipPath></defs>
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