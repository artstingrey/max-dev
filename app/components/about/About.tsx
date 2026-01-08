import clsx from 'clsx';
import styles from './About.module.scss';

export default function About () {
    return (
        <section className={clsx(styles.aboutSection, 'm-container')}>
            <div className={styles.aboutWrapper}>
                <h2>About</h2>
                <div className={clsx("svg", styles.decorationTop)}>
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
                        <span className={styles.aboutTextColumn}><span>We step in as your product squad: from MVPs to full-scale platforms, we help you </span></span><span className={styles.aboutTextColumn}><span>validate faster, launch smarter, and focus on what really matters — growth.</span></span>
                    </p>
                    <p className={styles.aboutText}>We get startups — because we build them too :)</p>
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
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_51_118)">
                                    <mask id="mask0_51_118" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                                    <path d="M80 0H0V80H80V0Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_51_118)">
                                    <path d="M39.8702 28.2988C35.5813 28.2988 32.1045 31.7756 32.1045 36.0645C32.1045 40.3534 35.5813 43.8302 39.8702 43.8302C44.1591 43.8302 47.6359 40.3534 47.6359 36.0645C47.6359 31.7756 44.1591 28.2988 39.8702 28.2988Z" stroke="#EB5107" strokeWidth="2.23152"/>
                                    <path d="M26.7502 56.9445C26.6471 55.3458 28.19 44.0645 40.1102 44.0645C52.0302 44.0645 53.0702 56.7845 53.0702 56.7845" stroke="#EB5107" strokeWidth="2"/>
                                    <path d="M45.2705 26.1451C45.717 25.2116 46.4086 24.4966 47.2522 23.8992C47.9609 23.3972 48.7767 22.9272 49.6446 22.6731C50.6123 22.3896 51.6447 22.3552 52.6648 22.443C53.3759 22.5042 54.1363 22.6589 54.8757 22.9728C55.6594 23.3055 56.4195 23.812 57.0723 24.395C58.4419 25.6184 59.3555 27.3516 59.4905 29.3451C59.5701 30.5211 59.4781 31.5638 59.213 32.4716C58.8456 33.7294 57.9426 34.8481 57.2723 35.5832C55.0064 38.0685 51.2105 37.8851 51.2105 37.8851C51.2105 37.8851 53.8768 37.7242 56.8716 38.9224C58.5231 39.583 60.2743 40.7544 61.7335 42.3642C62.959 43.7162 63.9855 45.4576 64.5411 47.7921C64.7673 48.7428 64.8321 49.5917 64.9305 50.8651" stroke="#0329A8" strokeWidth="2"/>
                                    <path d="M34.8604 26.3922C34.4139 25.4587 33.7223 24.7437 32.8787 24.1462C32.17 23.6443 31.3541 23.1743 30.4863 22.9202C29.5185 22.6367 28.4862 22.6023 27.466 22.6901C26.755 22.7513 25.9946 22.906 25.2552 23.2199C24.4715 23.5526 23.7114 24.059 23.0586 24.6421C21.6889 25.8654 20.7753 27.5986 20.6404 29.5922C20.5608 30.7682 20.6528 31.8109 20.9179 32.7187C21.2852 33.9765 22.1883 35.0952 22.8585 35.8303C25.1244 38.3156 28.9204 38.1322 28.9204 38.1322C28.9204 38.1322 26.254 37.9713 23.2592 39.1694C21.6078 39.8301 19.8565 41.0014 18.3973 42.6113C17.1719 43.9633 16.1454 45.7046 15.5898 48.0392C15.3636 48.9899 15.2988 49.8388 15.2004 51.1122" stroke="#0329A8" strokeWidth="2"/>
                                    </g>
                                    </g>
                                    <defs>
                                   
                                    </defs>
                                </svg>
                            </div>
                            <p>Pre-seed & early-stage startups</p>
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
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_45_2524)">
                                    <mask id="mask0_45_2524" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                                    <path d="M80 0H0V80H80V0Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_45_2524)">
                                    <path d="M40 50.5887C26.7452 50.5887 16 45.8484 16 40.0009C16 34.1534 26.7452 29.4131 40 29.4131C53.2548 29.4131 64 34.1534 64 40.0009C64 45.8484 53.2548 50.5887 40 50.5887Z" stroke="#EB5107" strokeWidth="1.80466" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M58.5763 40C58.5763 53.2548 50.2593 64 39.9998 64C29.7403 64 21.4233 53.2548 21.4233 40C21.4233 26.7452 29.7403 16 39.9998 16C50.2593 16 58.5763 26.7452 58.5763 40Z" stroke="#EB5107" strokeWidth="1.80466" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M64 40C64 53.2548 53.2548 64 40 64C26.7452 64 16 53.2548 16 40C16 26.7452 26.7452 16 40 16C53.2548 16 64 26.7452 64 40Z" stroke="#0329A8" strokeWidth="1.80466" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_45_2524">
                                    <rect width="80" height="80" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p>Small and medium businesses</p>
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
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_45_2570" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                                    <path d="M80 0H0V80H80V0Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_45_2570)">
                                    <path d="M32.4574 27.2828L33.5424 12L48.8252 13.085L47.7402 28.3678L32.4574 27.2828Z" stroke="#0329A8" strokeWidth="1.85938" strokeMiterlimit="10"/>
                                    <path d="M37.7212 47.6641H22.3999V32.3428H37.7212V47.6641Z" stroke="#EB5107" strokeWidth="1.85938" strokeMiterlimit="10"/>
                                    <path d="M57.9629 47.6582H42.6416V32.3369H57.9629V47.6582Z" stroke="#EB5107" strokeWidth="1.85938" strokeMiterlimit="10"/>
                                    <path d="M46.8155 51.6322L47.9005 66.915L32.6177 68L31.5327 52.7172L46.8155 51.6322Z" stroke="#0329A8" strokeWidth="1.85938" strokeMiterlimit="10"/>
                                    </g>
                                </svg>
                            </div>
                            <p>Digital founders without dev teams</p>
                        </div>
                    </div>
                </div>
                <div className={clsx("svg", styles.decorationBottom)}>
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