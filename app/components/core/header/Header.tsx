'use client';
import {Logo} from "../Logo";
import { mainMenu } from "@/app/config/menu.main";
import MenuSection from "../menuSection/MenuSection";
import { useState } from "react";
import SButtonSmall from "../buttons/sButtonSmall";
import { ScrambleText } from "../scrambleText/ScrambleText";
import Link from "next/link";
import { useContactFormStore } from "@/app/stores/useContactFormStore";
import LangMenu from "../langMenu/LangMenu";
import { useTranslations } from "next-intl";
import HoverText from "../../hoverText/HoverText";



type HeaderProps = {
  color?: string;
};

export default function Header({ color = '' }: HeaderProps) {
  const tMenu = useTranslations('mainMenu');
  const tHeader = useTranslations('header');
  const openContactForm = useContactFormStore((s) => s.open);
  const [isActive, seActive] = useState(false);
  
  const contactFormButtonText = tHeader('contactFormButton').split(" ");

  const openMenu = () => {
    seActive(true);
  }

  const closeMenu = () => {
    seActive(false);
  };

  return (
    <>
      <MenuSection isActive={isActive} closeMenu={closeMenu} />
      <header className="header">
        <div className="m-container">
          <div className="header__left-part">
            <Link href="/" className="logo svg"><Logo /></Link>
          </div>
          <nav className="header__center-part">
            <ul className="main-menu">
              {mainMenu.map((menuItem) => {
                return (
                  <li key={menuItem.key}>
                    <Link href={menuItem.href}><ScrambleText text={tMenu(menuItem.key)}></ScrambleText></Link>
                  </li>
                );
              })}
              
            </ul>
          </nav>
          <div className="header__right-part">
            <SButtonSmall text={tHeader('contact')} icon={true} className="desctop-hide" onClick={openContactForm} />
            <button className="menu-section-button" onClick={openMenu}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_93_1613)">
                  <mask id="mask0_93_1613" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <path d="M24 0H0V24H24V0Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_93_1613)">
                    <path d="M10.5 19.9V4.1C10.5 2.6 9.86 2 8.27 2H4.23C2.64 2 2 2.6 2 4.1V19.9C2 21.4 2.64 22 4.23 22H8.27C9.86 22 10.5 21.4 10.5 19.9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 10.9V4.1C22 2.6 21.36 2 19.77 2H15.73C14.14 2 13.5 2.6 13.5 4.1V10.9C13.5 12.4 14.14 13 15.73 13H19.77C21.36 13 22 12.4 22 10.9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path opacity="0.4" d="M22 19.9V18.1C22 16.6 21.36 16 19.77 16H15.73C14.14 16 13.5 16.6 13.5 18.1V19.9C13.5 21.4 14.14 22 15.73 22H19.77C21.36 22 22 21.4 22 19.9Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </g>
                  </g>
                  <defs>
                  <clipPath id="clip0_93_1613">
                    <rect width="24" height="24" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
            </button>
            <LangMenu className="header-lang-menu" />
            <button className="text-button hover-text-part" onClick={openContactForm}>
                <HoverText visible={contactFormButtonText} hover={contactFormButtonText} />
                <span className="icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_38_2182" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                      <rect width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_38_2182)">
                      <path d="M6.29425 17.6443L5.25 16.6L15.0905 6.75H6.14425V5.25H17.6443V16.75H16.1443V7.80375L6.29425 17.6443Z" fill="white"/>
                    </g>
                  </svg>
                </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}