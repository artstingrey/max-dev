import clsx from "clsx";
import styles from './MailLinks.module.scss';

type orButtonProps = {
    text: string;
    className?: string;
};

function MainLink({text, className = ""}:orButtonProps) {
    return (
        <a href="mailto:hello@maxdev.io" className={clsx(styles.orButton, className)}>
            <span className={clsx(styles.icon, "svg")}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_94_1221)">
                    <mask id="mask0_94_1221" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                    <path d="M32 0H0V32H32V0Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_94_1221)">
                    <path d="M29.3337 14.0003V20.667C29.3337 25.3337 26.667 27.3337 22.667 27.3337H9.33366C5.33366 27.3337 2.66699 25.3337 2.66699 20.667V11.3337C2.66699 6.66699 5.33366 4.66699 9.33366 4.66699H18.667" stroke="#8C8C8C" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.33398 12L13.5073 15.3333L16.0007 17.3333L20.0007 14.6667" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                    <path d="M26.0003 10.6667C27.8413 10.6667 29.3337 9.17428 29.3337 7.33333C29.3337 5.49239 27.8413 4 26.0003 4C24.1594 4 22.667 5.49239 22.667 7.33333C22.667 9.17428 24.1594 10.6667 26.0003 10.6667Z" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_94_1221">
                    <rect width="32" height="32" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </span>
            {text}
        </a>
    );
}

function TelegramLink ({text, className = ""}:orButtonProps) {
    return (
        <a href="#" className={clsx(styles.orButton, className)}>
            <span className={clsx(styles.icon, "svg")}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_94_1231)">
                    <mask id="mask0_94_1231" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
                    <path d="M31.333 0.666992V31.333H0.666992V0.666992H31.333Z" fill="white" stroke="white" strokeWidth="1.33333"/>
                    </mask>
                    <g mask="url(#mask0_94_1231)">
                    <path d="M13.4805 18.2007L18.2538 13.4141" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                    <path d="M9.86723 8.42687L21.1873 4.65354C26.2673 2.96021 29.0273 5.73354 27.3473 10.8135L23.5739 22.1336C21.0406 29.7469 16.8806 29.7469 14.3473 22.1336L13.2272 18.7736L9.86723 17.6536C2.25389 15.1203 2.25389 10.9735 9.86723 8.42687Z" stroke="#8C8C8C" strokeWidth="2" strokeLinecap="round"/>
                    </g>
                    </g>
                    <defs>
                    <clipPath id="clip0_94_1231">
                    <rect width="32" height="32" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </span>
            {text}
        </a>
    );
}

export { MainLink, TelegramLink };