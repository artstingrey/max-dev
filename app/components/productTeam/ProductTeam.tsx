import clsx from 'clsx';
import styles from './ProductTeam.module.scss';


export default function ProductTeam () {
    return (
        <section className={clsx(styles.productTeam,"m-container")}>
            <div className={styles.productTeamContent}>
                <h2>We’re not<br/> an agency. We’re your<br/> product team.</h2>

                <div className={styles.productTeamInfo}>
                    <div className={styles.productTeamInfoItem}>
                        <div>
                            <div className={clsx(styles.icon,"svg")}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_69_937)">
                                    <mask id="mask0_69_937" mask-type="luminance" maskUnits="userSpaceOnUse" x="4" y="4" width="32" height="33">
                                    <path d="M35.9998 4.44434H4.88867V36.4443H35.9998V4.44434Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_69_937)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M30.9621 21.2052L30.9995 21.1611C30.9874 21.176 30.975 21.1907 30.9621 21.2052ZM22.0903 31.2842L21.7783 31.5962C21.8529 31.5396 21.9239 31.4737 21.9903 31.3978L22.0903 31.2842Z" stroke="#EB5107" strokeWidth="1.33333" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M14.9628 10.9639H6.6665" stroke="#0329A8" strokeWidth="1.33333" strokeMiterlimit="10" strokeLinejoin="round"/>
                                    <path d="M13.7776 29.9248H6.6665" stroke="#0329A8" strokeWidth="1.33333" strokeMiterlimit="10" strokeLinejoin="round"/>
                                    <path d="M10.2221 20.4443H6.6665" stroke="#0329A8" strokeWidth="1.33333" strokeMiterlimit="10" strokeLinejoin="round"/>
                                    <path d="M26.2689 6.66699L23.8748 9.49536L14.903 19.688L12.6274 21.9636H15.9341H19.5963V30.4969V33.7781L21.7784 31.596L22.0903 31.284L30.9622 21.205L30.9995 21.1609L32.8884 18.9295H29.9311H26.2689V10.3961V6.66699Z" stroke="#EB5107" strokeWidth="1.33333" strokeMiterlimit="10" strokeLinecap="round"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_69_937">
                                    <rect width="30.2222" height="31.1111" fill="white" transform="translate(4.88867 4.44434)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p>Fast cycles, lean mindset</p>
                        </div>
                    </div>

                    <div className={styles.productTeamInfoItem}>
                        <div>
                            <div className={clsx(styles.icon,"svg")}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_69_979" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                                    <path d="M40 0H0V40H40V0Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_69_979)">
                                    <path d="M20 20.168L12.5 24.5013L5 20.168V11.5013L12.5 7.16797L20 11.5013V14.118" stroke="#EB5107" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M20 20.1654L27.5 15.832L35 20.1654V28.8154L27.5 33.1487L20 28.8154V26.0654" stroke="#0329A8" strokeWidth="1.875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                </svg>
                            </div>
                            <p>30+ launches — from fintech to SaaS</p>
                        </div>
                    </div>

                    <div className={styles.productTeamInfoItem}>
                        <div>
                            <div className={clsx(styles.icon,"svg")}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.2346 28.3621C13.2254 28.3407 13.2169 28.3191 13.2093 28.2972M13.2346 28.3621L13.2093 28.2972M13.2346 28.3621L13.5472 29.1624H14.43H25.5708H26.4354L26.7753 28.385M13.2093 28.2972L8.30261 14.5728M8.26036 14.45L8.30261 14.5728M8.26036 14.45C8.27377 14.4903 8.28785 14.5313 8.30261 14.5728M8.26036 14.45L7.11133 11.1122L9.9823 13.1245M10.1041 13.2098L9.9823 13.1245M10.1041 13.2098C10.063 13.1803 10.0224 13.1518 9.9823 13.1245M10.1041 13.2098L14.7263 16.5165C15.4967 17.0498 16.3737 16.7772 16.7056 15.912L18.7915 10.3535M18.7915 10.3535C18.8503 10.1961 18.9125 10.0527 18.9775 9.92312M18.7915 10.3535L18.9775 9.92312M18.9775 9.92312L20.0001 7.55664L21.0215 9.89634M21.2211 10.3535L21.0215 9.89634M21.2211 10.3535C21.1583 10.1852 21.0915 10.0328 21.0215 9.89634M21.2211 10.3535L23.307 15.912C23.6389 16.7772 24.5159 17.0498 25.2745 16.5165L29.6122 13.4231M29.71 13.3542L29.6122 13.4231M29.71 13.3542C29.6777 13.3765 29.6451 13.3995 29.6122 13.4231M29.71 13.3542L32.889 11.1122L31.6424 14.7673M31.5915 14.9165L31.6424 14.7673M31.5915 14.9165C31.6094 14.8659 31.6263 14.8162 31.6424 14.7673M31.5915 14.9165L26.8033 28.3209M26.7753 28.385L26.8033 28.3209M26.7753 28.385C26.7855 28.3638 26.7949 28.3425 26.8033 28.3209" stroke="#EB5107" strokeWidth="1.77778" strokeLinecap="round"/>
                                    <path d="M13.4814 32.7422H26.5185" stroke="#0329A8" strokeWidth="1.77778" strokeLinecap="square" strokeLinejoin="round"/>
                                    <path d="M17.0371 23.2598H22.963" stroke="#0329A8" strokeWidth="1.77778" strokeLinecap="square" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <p>Senior team — no juniors, no outsourcing</p>
                        </div>
                    </div>

                    <div className={styles.productTeamInfoItem}>
                        <div>
                            <div className={clsx(styles.icon,"svg")}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_69_946)">
                                    <mask id="mask0_69_946" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                                    <path d="M40 0H0V40H40V0Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_69_946)">
                                    <path d="M28.2666 10.2832C31.5999 12.5999 33.8999 16.2832 34.3666 20.5332" stroke="#0329A8" strokeWidth="1.875" strokeLinecap="square" strokeLinejoin="round"/>
                                    <path d="M5.81738 20.6191C6.25072 16.3858 8.51738 12.7025 11.8174 10.3691" stroke="#0329A8" strokeWidth="1.875" strokeLinecap="square" strokeLinejoin="round"/>
                                    <path d="M13.6499 34.9004C15.5832 35.8837 17.7832 36.4337 20.0998 36.4337C22.3332 36.4337 24.4332 35.9337 26.3165 35.0171" stroke="#0329A8" strokeWidth="1.875" strokeLinecap="square" strokeLinejoin="round"/>
                                    <path d="M20.0997 12.8331C22.6585 12.8331 24.733 10.7587 24.733 8.19974C24.733 5.64082 22.6585 3.56641 20.0997 3.56641C17.5407 3.56641 15.4663 5.64082 15.4663 8.19974C15.4663 10.7587 17.5407 12.8331 20.0997 12.8331Z" stroke="#EB5107" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.04935 33.2003C10.6083 33.2003 12.6827 31.1258 12.6827 28.5669C12.6827 26.0079 10.6083 23.9336 8.04935 23.9336C5.49043 23.9336 3.41602 26.0079 3.41602 28.5669C3.41602 31.1258 5.49043 33.2003 8.04935 33.2003Z" stroke="#EB5107" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M31.9502 33.2003C34.5092 33.2003 36.5836 31.1258 36.5836 28.5669C36.5836 26.0079 34.5092 23.9336 31.9502 23.9336C29.3914 23.9336 27.3169 26.0079 27.3169 28.5669C27.3169 31.1258 29.3914 33.2003 31.9502 33.2003Z" stroke="#EB5107" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_69_946">
                                    <rect width="40" height="40" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p>Clear communication & weekly updates</p>
                        </div>
                    </div>

                    <div className={styles.productTeamInfoItem}>
                        <div>
                            <div className={clsx(styles.icon,"svg")}>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_69_980)">
                                    <mask id="mask0_69_980" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                                    <path d="M40 0H0V40H40V0Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_69_980)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.4667 24.9337C20.2167 25.017 19.8 25.017 19.5333 24.9337C17.3667 24.1837 12.5 21.1003 12.5 15.8503C12.5 13.5337 14.3667 11.667 16.6667 11.667C18.0333 11.667 19.2333 12.317 20 13.3337C20.7667 12.317 21.9667 11.667 23.3333 11.667C25.6333 11.667 27.5 13.5337 27.5 15.8503C27.4833 21.1003 22.6333 24.1837 20.4667 24.9337Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path opacity="0.4" d="M20.4667 24.9337C20.2167 25.017 19.8 25.017 19.5333 24.9337C17.3667 24.1837 12.5 21.1003 12.5 15.8503C12.5 13.5337 14.3667 11.667 16.6667 11.667C18.0333 11.667 19.2333 12.317 20 13.3337C20.7667 12.317 21.9667 11.667 23.3333 11.667C25.6333 11.667 27.5 13.5337 27.5 15.8503C27.4833 21.1003 22.6333 24.1837 20.4667 24.9337Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.5333 24.9337C19.8 25.017 20.2167 25.017 20.4667 24.9337C22.6333 24.1837 27.4833 21.1003 27.5 15.8503C27.5 13.5337 25.6333 11.667 23.3333 11.667C21.9667 11.667 20.7667 12.317 20 13.3337C19.2333 12.317 18.0333 11.667 16.6667 11.667C14.3667 11.667 12.5 13.5337 12.5 15.8503C12.5 21.1003 17.3667 24.1837 19.5333 24.9337Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.4667 24.9337C20.2167 25.017 19.8 25.017 19.5333 24.9337C17.3667 24.1837 12.5 21.1003 12.5 15.8503C12.5 13.5337 14.3667 11.667 16.6667 11.667C18.0333 11.667 19.2333 12.317 20 13.3337C20.7667 12.317 21.9667 11.667 23.3333 11.667C25.6333 11.667 27.5 13.5337 27.5 15.8503C27.4833 21.1003 22.6333 24.1837 20.4667 24.9337Z" stroke="#EB5107" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                                    <path d="M30 31.4328H28.7333C27.4 31.4328 26.1333 31.9495 25.2 32.8828L20 38.0495L17.6333 35.6995L14.7833 32.8828C13.85 31.9495 12.5667 31.4328 11.25 31.4328H10H5V26.483V8.29956V3.34961H10H30H35V8.29956V26.483V31.4328H30Z" stroke="#0329A8" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_69_980">
                                    <rect width="40" height="40" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p>Clients come back with 2nd and 3rd projects</p>
                        </div>
                    </div>
                </div>
            </div>
            <picture className={clsx("responsive-image", "section-bg", styles.productImage)}>
                <source srcSet="/images/m-buttons-m@2x.avif 2x" media="(max-width: 767px)" type="image/avif" />
                <source srcSet="/images/m-buttons-m@2x.webp 2x" media="(max-width: 767px)" type="image/webp" />
                <source srcSet="/images/m-buttons-m@2x.jpg 2x" media="(max-width: 767px)" type="image/jpeg" />

                <source srcSet="/images/m-buttons.avif 1x, /images/m-buttons@2x.avif 2x" media="(min-width: 768px)" type="image/avif" />
                <source srcSet="/images/m-buttons.webp 1x, /images/m-buttons@2x.webp 2x" media="(min-width: 768px)" type="image/webp" />
                <source srcSet="/images/m-buttons.jpg 1x, /images/m-buttons@2x.jpg 2x" media="(min-width: 768px)" type="image/jpeg" />

                <img src="/images/m-buttons@2x.jpg" width="750" height="1800" alt="M buttons" decoding="async" loading="lazy"/>
            </picture>
        </section>
    );
}