import { ACTIVE_CLASS } from "@/app/utils/constants";
import Link from "next/link";
import { mainMenu } from "@/app/config/menu.main";
import { MobileLogo } from "../Logo";
import SButtonClose from "../buttons/sButtonClose";
import { MailIcon, TelegramGreyIcon } from "../socials/Icons";
import LangMenu from "../langMenu/LangMenu";

type MenuSectionProps = {
 isActive: boolean;
 onLinkClick?: () => void;
 closeMenu?: () => void;
};

export default function MenuSection({isActive, onLinkClick, closeMenu}:MenuSectionProps) {
    
    return (
        <div className={`menu-section ${isActive ? ACTIVE_CLASS : ''}`}>
            <div className="menu-section-wrapper">
                <div className="menu-section__top">
                    <div className="menu-section__header">
                        <div className="menu-section__logo">
                            <Link href="/" className="svg"><MobileLogo /></Link>
                        </div>
                        <SButtonClose onClick={closeMenu} />    
                    </div>
                    <nav className="menu-section__nav">
                        <ul>
                            {mainMenu.map((menuItem) => {
                                return (
                                <li key={menuItem.labelKey}>
                                    <Link href={menuItem.href}>{menuItem.labelKey}</Link>
                                </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
                <div className="menu-section__bottom">
                   <LangMenu />
                    <div className="menu-section__bottom-contacts">
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
                    </div>           
                </div>
            </div>
        </div>
    );
}