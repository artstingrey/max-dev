import clsx from "clsx";
import Link from "next/link";
import { mainMenu } from "@/app/config/menu.main";
import { MailIcon, TelegramGreyIcon } from "../socials/Icons";
import { FooterLogo } from "../Logo";
import styles from "./Footer.module.scss";
import SButton from "../buttons/sButton";
import { MainLink, TelegramLink } from "../../mailLink/MailLink";



export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.topPart}>
                <div className={clsx(styles.linkPart, styles.footerHoverPart)}>
                    <p>Want to see<br/>your idea live?<br/> <a href="#" className={styles.footerHoverPartLink}><span className="">Let’s talk.</span></a></p>
                    <span className={clsx("svg", styles.rowIcon)} >
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.66154 34L0 30.3385L25.1077 5.23077H2.61538V0H34V31.3846H28.7692V8.89231L3.66154 34Z" fill="white"/>
                        </svg>
                    </span>
                </div>
                <div className={clsx(styles.footerHoverPart, styles.footerPorfolioPart)}>
                    <div className="subtitle">maxdev portfolio</div>
                    <div className={styles.footerPorfolioPartBottom}>
                        <p>See Our Work<br/> in Action</p>
                        <SButton text="Check Out" url="#" icon={true} />
                    </div>    
                </div>
            </div>
            <div className={styles.bottomPart}>
                <div className={styles.footerMenuPart}>
                    <div className={styles.footerContacts}>
                        <nav className={styles.footerMenu}>
                            <ul>
                                {mainMenu.map((menuItem) => {
                                    return (
                                    <li key={menuItem.labelKey}>
                                        <Link href={menuItem.href}>
                                        {menuItem.labelKey}
                                        <span>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <mask id="mask0_94_559" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                                                <rect x="7.86806e-07" y="18" width="18" height="18" transform="rotate(-90 7.86806e-07 18)" fill="#D9D9D9"/>
                                                </mask>
                                                <g mask="url(#mask0_94_559)">
                                                <path d="M3.375 9.5625L12.4703 9.5625L8.19806 13.8347L9 14.625L14.625 9L9 3.375L8.19806 4.16531L12.4703 8.4375L3.375 8.4375L3.375 9.5625Z" fill="white"/>
                                                </g>
                                            </svg>
                                        </span>
                                        </Link>
                                    </li>
                                    );
                                })}
                            </ul>
                        </nav>

                        <div className={styles.contactIcons}>
                            <a href="#" className="contact-button">
                                <span className="icon svg">
                                    <MailIcon />
                                </span>
                            </a> 
                            <a href="#" className="contact-button">
                                <span className="icon svg">
                                    <TelegramGreyIcon />
                                </span>
                            </a>
                            
                            <MainLink text="hello@maxdev.io" className={styles.footerMailLink} />
                            <div className={styles.mailDelimiter}></div>
                            <TelegramLink text="Telegram" className={styles.footerMailLink} />
                        </div>
                    </div>
                    <div className={styles.termsPart}>
                        <p className={styles.copy}>© {year} MaxDev. All rights reserved.</p>
                        <div className={styles.termsLinks}>
                            <a href="#">Terms of Service</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>

                <div className={styles.footerLogoPart}>
                    <div className="footer-logo svg">
                        <FooterLogo />
                    </div>
                    <div className={styles.termsPart}>
                        <div className={styles.termsLinks}>
                            <a href="#">Terms of Service</a>
                            <a href="#">Privacy Policy</a>
                        </div>
                        <p className={styles.copy}>© {year} MaxDev. All rights reserved.</p>
                    </div>
                </div>

            </div>    
        </footer>
    );
}