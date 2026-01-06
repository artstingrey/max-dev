'use client';
import { useContactFormStore } from '@/app/stores/useContactFormStore';
import clsx from 'clsx';
import styles from './ContactForm.module.scss';
import SButton from '../core/buttons/sButton';
import SButtonClose from '../core/buttons/sButtonClose';
import Checkbox from './checkbox/CheckBox';
import RadioGroup from './radioButton/RadioWrapper';
import { MainLink, TelegramLink } from '../mailLink/MailLink';

export default function ContactForm () {
    const isOpen = useContactFormStore((s) => s.isOpen);
    const close = useContactFormStore((s) => s.close);
return (
    <div className={clsx(styles.overlay, isOpen && styles.active)} aria-hidden={!isOpen}>
        <SButtonClose className={styles.formButtonCloseD} onClick={close}/>
        <div className={styles.contactFormWrapper}>
            <div className={styles.contactFormContent}>
                <SButtonClose className={styles.formButtonCloseM} onClick={close}/>
                <div className={styles.contactFormGap}>
                    <h2>Get in touch</h2>
                    <p className={styles.contactFormDesc}>
                        Drop us a few lines about your idea and we’ll get back within 24h
                    </p>
                </div>
                <form className={styles.form}>
                    <div className="field-wrapper">
                        <label className="s-label" htmlFor="name">
                            <span className="icon svg">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_72_2305)">
                                    <mask id="mask0_72_2305" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                    <path d="M20 0H0V20H20V0Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_72_2305)">
                                    <path d="M9.99967 10.0003C12.3008 10.0003 14.1663 8.13484 14.1663 5.83366C14.1663 3.53248 12.3008 1.66699 9.99967 1.66699C7.69849 1.66699 5.83301 3.53248 5.83301 5.83366C5.83301 8.13484 7.69849 10.0003 9.99967 10.0003Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path opacity="0.4" d="M17.1584 18.3338C17.1584 15.1088 13.9501 12.5005 10.0001 12.5005C6.05013 12.5005 2.8418 15.1088 2.8418 18.3338" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_72_2305">
                                    <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            Name*
                        </label>
                        <div className="s-input">
                            <input type="text" placeholder="Full name" id="name" required/>
                        </div>
                    </div>
                    <div className="field-wrapper">
                        <label className="s-label" htmlFor="email">
                            <span className="icon svg">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_94_1063)">
                                    <mask id="mask0_94_1063" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                    <path d="M20 0H0V20H20V0Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_94_1063)">
                                    <path d="M18.3337 8.74935V12.916C18.3337 15.8327 16.667 17.0827 14.167 17.0827H5.83366C3.33366 17.0827 1.66699 15.8327 1.66699 12.916V7.08268C1.66699 4.16602 3.33366 2.91602 5.83366 2.91602H11.667" stroke="#8C8C8C" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M5.83398 7.5L8.44232 9.58333L10.0007 10.8333L12.5007 9.16667" stroke="white" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="square" strokeLinejoin="round"/>
                                    <path d="M16.2503 6.66667C17.4009 6.66667 18.3337 5.73392 18.3337 4.58333C18.3337 3.43274 17.4009 2.5 16.2503 2.5C15.0997 2.5 14.167 3.43274 14.167 4.58333C14.167 5.73392 15.0997 6.66667 16.2503 6.66667Z" stroke="white" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_94_1063">
                                    <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            Email*
                        </label>
                        <div className="s-input">
                            <input type="text" placeholder="example@gmail.com" id="email" required/>
                        </div>
                    </div>

                    <div className="field-wrapper">
                        <label className="s-label" htmlFor="project-desc">
                            <span className="icon svg">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_94_1076)">
                                    <mask id="mask0_94_1076" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                    <path d="M20 0H0V20H20V0Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_94_1076)">
                                    <path opacity="0.4" d="M15.3922 14.0253L15.7172 16.6587C15.8005 17.3503 15.0588 17.8337 14.4672 17.4753L10.9755 15.4003C10.5922 15.4003 10.2172 15.3753 9.85057 15.3253C10.4672 14.6003 10.8338 13.6837 10.8338 12.692C10.8338 10.3253 8.78382 8.40866 6.25053 8.40866C5.28386 8.40866 4.3922 8.68366 3.65053 9.16699C3.62553 8.95866 3.61719 8.75033 3.61719 8.53366C3.61719 4.74198 6.90886 1.66699 10.9755 1.66699C15.0422 1.66699 18.3338 4.74198 18.3338 8.53366C18.3338 10.7837 17.1755 12.7753 15.3922 14.0253Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M10.8337 12.692C10.8337 13.6837 10.467 14.6004 9.85033 15.3254C9.02533 16.3254 7.71699 16.967 6.25033 16.967L4.07533 18.2587C3.70866 18.4837 3.24199 18.1754 3.29199 17.7504L3.50033 16.1087C2.38366 15.3337 1.66699 14.092 1.66699 12.692C1.66699 11.2254 2.45033 9.93369 3.65033 9.16702C4.39199 8.68369 5.28366 8.40869 6.25033 8.40869C8.78366 8.40869 10.8337 10.3254 10.8337 12.692Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_94_1076">
                                    <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            Tell us about your project
                        </label>
                        <div className="s-input">
                            <input type="text" placeholder="What do you want to build?" id="project-desc" />
                        </div>
                    </div>

                    <div className="field-wrapper">
                        <div className="s-input">
                            <div className="s-input-file-decoration">
                                <span className="icon svg">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0_94_1089" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                        <path d="M20 0H0V20H20V0Z" fill="white"/>
                                        </mask>
                                        <g mask="url(#mask0_94_1089)">
                                        <path d="M9.9759 10V12.9167C9.9759 14.525 11.2842 15.8333 12.8926 15.8333C14.5009 15.8333 15.8092 14.525 15.8092 12.9167V8.33333C15.8092 5.10833 13.2009 2.5 9.9759 2.5C6.75092 2.5 4.14258 5.10833 4.14258 8.33333V13.3333C4.14258 16.0917 6.38425 18.3333 9.14257 18.3333" stroke="#6F6F6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </g>
                                    </svg>
                                </span>
                                Attach file
                            </div>
                            <input type="file" />
                        </div>
                    </div>

                    <div className={styles.contactFormSection}>
                        <p className={styles.contactFormSectionTitle}>
                            <span className={clsx(styles.icon,"svg")}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_94_1098)">
                                    <mask id="mask0_94_1098" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                    <path d="M20 0H0V20H20V0Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_94_1098)">
                                    <path d="M18.3333 7.10033V3.31699C18.3333 2.14199 17.8 1.66699 16.475 1.66699H13.1083C11.7833 1.66699 11.25 2.14199 11.25 3.31699V7.09199C11.25 8.27533 11.7833 8.74199 13.1083 8.74199H16.475C17.8 8.75033 18.3333 8.27533 18.3333 7.10033Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path opacity="0.4" d="M18.3333 16.4755V13.1088C18.3333 11.7838 17.8 11.2505 16.475 11.2505H13.1083C11.7833 11.2505 11.25 11.7838 11.25 13.1088V16.4755C11.25 17.8005 11.7833 18.3338 13.1083 18.3338H16.475C17.8 18.3338 18.3333 17.8005 18.3333 16.4755Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path opacity="0.4" d="M8.75033 7.10033V3.31699C8.75033 2.14199 8.21699 1.66699 6.89199 1.66699H3.52533C2.20033 1.66699 1.66699 2.14199 1.66699 3.31699V7.09199C1.66699 8.27533 2.20033 8.74199 3.52533 8.74199H6.89199C8.21699 8.75033 8.75033 8.27533 8.75033 7.10033Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.75033 16.4755V13.1088C8.75033 11.7838 8.21699 11.2505 6.89199 11.2505H3.52533C2.20033 11.2505 1.66699 11.7838 1.66699 13.1088V16.4755C1.66699 17.8005 2.20033 18.3338 3.52533 18.3338H6.89199C8.21699 18.3338 8.75033 17.8005 8.75033 16.4755Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_94_1098">
                                    <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            I&#39;m interested in...
                        </p> 

                        <div className={styles.contactFormChecboxes}>
                            <Checkbox id="product-strategy" label="Product Strategy" />
                            <Checkbox id="ui-ux-design" label="UI/UX Design" />
                            <Checkbox id="full-stack" label="Full-Stack Development" />
                            <Checkbox id="mvp-launch" label="MVP Launch" />
                            <Checkbox id="scaling" label="Scaling" />
                            <Checkbox id="oher" label="Other" />
                        </div>   
                    </div>

                    <div className={styles.contactFormSection}>
                        <p className={styles.contactFormSectionTitle}>
                            <span className={clsx(styles.icon,"svg")}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_94_1165)">
                                    <mask id="mask0_94_1165" mask-type="luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                                    <path d="M20 0H0V20H20V0Z" fill="white"/>
                                    </mask>
                                    <g mask="url(#mask0_94_1165)">
                                    <g opacity="0.4">
                                    <path d="M8.95833 14.0522V15.7439C8.95833 17.1772 7.62501 18.3356 5.98334 18.3356C4.34167 18.3356 3 17.1772 3 15.7439V14.0522C3 15.4856 4.33334 16.5022 5.98334 16.5022C7.62501 16.5022 8.95833 15.4772 8.95833 14.0522Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.95784 11.759C8.95784 12.1757 8.84118 12.559 8.64118 12.8924C8.14952 13.7007 7.14118 14.209 5.97451 14.209C4.80784 14.209 3.7995 13.6924 3.30784 12.8924C3.10784 12.559 2.99121 12.1757 2.99121 11.759C2.99121 11.0424 3.32453 10.4007 3.85786 9.93403C4.39953 9.45903 5.14117 9.17578 5.96617 9.17578C6.79117 9.17578 7.53286 9.46736 8.07453 9.93403C8.62451 10.3924 8.95784 11.0424 8.95784 11.759Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.95833 11.7591V14.0508C8.95833 15.4841 7.62501 16.5008 5.98334 16.5008C4.34167 16.5008 3 15.4758 3 14.0508V11.7591C3 10.3258 4.33334 9.16748 5.98334 9.16748C6.80834 9.16748 7.55003 9.45915 8.0917 9.92581C8.625 10.3925 8.95833 11.0425 8.95833 11.7591Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    <path d="M18.3338 9.14297V10.8596C18.3338 11.318 17.9672 11.693 17.5005 11.7096H15.8672C14.9672 11.7096 14.1422 11.0513 14.0672 10.1513C14.0172 9.6263 14.2172 9.13464 14.5672 8.79297C14.8755 8.4763 15.3005 8.29297 15.7672 8.29297H17.5005C17.9672 8.30964 18.3338 8.68463 18.3338 9.14297Z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1.66699 8.75033V7.08366C1.66699 4.81699 3.03366 3.23366 5.15866 2.96699C5.37533 2.93366 5.60033 2.91699 5.83366 2.91699H13.3337C13.5503 2.91699 13.7587 2.92532 13.9587 2.95865C16.1087 3.20865 17.5003 4.80033 17.5003 7.08366V8.292H15.767C15.3003 8.292 14.8753 8.47533 14.567 8.79199C14.217 9.13366 14.017 9.62533 14.067 10.1503C14.142 11.0503 14.967 11.7087 15.867 11.7087H17.5003V12.917C17.5003 15.417 15.8337 17.0837 13.3337 17.0837H11.2503" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_94_1165">
                                    <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>

                            </span>
                            my budget is...
                        </p> 

                        <div className={clsx(styles.contactFormChecboxes, styles.contactFormRadio)}>
                        <RadioGroup name="my_budget_is" data={
                            [
                                {
                                    id: 'up-10',
                                    label: 'up to $10k',
                                    value: 'up to $10k'
                                },
                                {
                                    id: 'up-10-20',
                                    label: '$10-20k',
                                    value: '$10-20k'
                                },
                                {
                                    id: 'up-20-50',
                                    label: '$20-50k',
                                    value: '$20-50k'
                                },
                                {
                                    id: 'up-50',
                                    label: '> $50k',
                                    value: '> $50k'
                                },
                            ]
                        } />
                        </div>
                        <div className={styles.buttonWrap}>
                        <SButton text="Send" icon={true} type="submit"/>
                        </div>   
                    </div>
                </form>
                <div className={styles.contactFormGap}>
                    <p className={styles.or}>or</p>
                    <div className={styles.orButtons}>
                        <MainLink text='Send an email' />
                        <TelegramLink text='Contact via Telegram' />
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}