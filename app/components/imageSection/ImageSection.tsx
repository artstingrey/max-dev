'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import PortfolioMobile from './PortfolioMobile';
import { BaseImage } from '@/app/config/types';
import PortfolioDesctop from './PortfolioDesctop';
import styles from './ImageSection.module.scss';



export type portfolioItemDataType = {
    image: BaseImage;
    subTitle: string;
    title: string;
    desc?: string;
    descArr?: string[];
    about: string;
    services: string[];
    url: string;
};

export type portfolioDataType = {
    data: portfolioItemDataType[]
};

export default function ImageSection () {
    const [isMobile, setIsMobile] = useState(false);

    const dataImageMobile = [
       {
            src: '/images/portfolioMaxWallet.png',
            alt: 'MaxWallet',
            width: 670,
            height: 841
        },
        {
            src: '/images/portfolioMaxProfit.jpg',
            alt: 'MaxProfit',
            width: 670,
            height: 841
        },
        {
            src: '/images/portfolioMaxMaxSwap.jpg',
            alt: 'MaxSwap',
            width: 670,
            height: 841
        }
    ];

    const dataImageDesctop = [
        {
            src: '/images/portfolioMaxWalletDesctop.jpg',
            alt: 'MaxWallet',
            width: 1404,
            height: 1700
        },  
        {
            src: '/images/portfolioMaxProfitDesctop.jpg',
            alt: 'MaxProfit',
            width: 2140,
            height: 1200
        },
        {
            src: '/images/portfolioMaxMaxSwapDesctop.jpg',
            alt: 'MaxSwap',
            width: 2140,
            height: 1200
        }   
    ];

    const baseData = [
        {
            subTitle: 'crypto wallet',
            title: 'MaxWallet',
            desc: 'From Idea to Launch',
            about: 'MaxWallet is a non-custodial cryptocurrency wallet designed to offer users seamless management of their digital assets.',
            services: ['Web Design', 'Web Development', 'Mobile App Development', 'Blockchain Integration', 'UI/UX Design', 'Security Implementation'],
            url: '#'
        },
        {
            subTitle: 'educational platform',
            title: 'MaxProfit',
            descArr: ['Product Strategy', 'Full-Stack Development'],
            about: 'MaxProfit is an educational platform tailored for individuals interested in cryptocurrency trading and investment.',
            services: ['Web Design', 'Web Development', 'Educational Content Creation', 'UI/UX Design', 'Tool Development', 'Security Implementation'],
            url: '#'
        },
        {
            subTitle: 'crypto ecosystem',
            title: 'MaxSwap',
            desc: 'From Idea to Launch',
            about: 'MaxSwap is a crypto wallet with built-in virtual cards, allowing users to store, manage, and spend their digital assets with ease.',
            services: ['Web Design', 'Web Development', 'Mobile App Development', 'Blockchain Integration', 'UI/UX Design', 'Security Implementation'],
            url: '#'
        },
    ];

    const dataMobile = baseData.map((item, index) => {
        return {
            ...item,
            image: dataImageMobile[index]
        }    
    });

    const dataDesctop = baseData.map((item, index) => {
        return {
            ...item,
            image: dataImageDesctop[index]
        }    
    });

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener('resize', check);
        return () => window.removeEventListener('resize', check);
    }, []);

    return (
        <section id="projects" className={clsx(styles.portfolioSection, 'm-container')}>
            <div className={styles.portfolioHeader}>
                <p className="subtitle">featured works</p>
                <h2>Proven by founders.<br /> Backed by results.</h2>
            </div>
            {isMobile && <PortfolioMobile data={dataMobile} />}
            {!isMobile && <PortfolioDesctop data={dataDesctop} />}
        </section>
    );
}