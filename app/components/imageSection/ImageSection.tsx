'use client';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import PortfolioMobile from './PortfolioMobile';
import { BaseImage } from '@/app/config/types';
import PortfolioDesctop from './PortfolioDesctop';
import { useTranslations } from 'next-intl';
import styles from './ImageSection.module.scss';


export type portfolioItemDataType = {
    image: BaseImage;
    subTitle: string;
    title: string;
    desc?: string;
    descArr?: string[];
    aboutTitle: string;
    about: string;
    servicesTitle: string;
    services: string[];
    url: string;
    linkText: string;
};

export type portfolioDataType = {
    data: portfolioItemDataType[]
};

export default function ImageSection () {
    const tPortfolio = useTranslations('portfolio');

    const tWallet = useTranslations('portfolio.maxWallet');
    const tWalletDetails = useTranslations('portfolio.maxWallet.details');

    const tProfit = useTranslations('portfolio.maxProfit');
    const tProfitDetails = useTranslations('portfolio.maxProfit.details');

    const tSwap = useTranslations('portfolio.maxSwap');
    const tSwapDetails = useTranslations('portfolio.maxSwap.details');

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
            subTitle: tWallet('subTitle'),
            title: tWallet('title'),
            desc: tWallet('desc'),
            aboutTitle: tWalletDetails('about'),
            about: tWalletDetails('aboutText'),
            servicesTitle: tWalletDetails('services'),
            services: tWalletDetails.raw('servicesList') as string[],
            url: '#',
            linkText: tWallet('linkText')
        },
        {
            subTitle: tProfit('subTitle'),
            title: tProfit('title'),
            descArr: tProfit.raw('descItems') as string[],
            aboutTitle: tProfitDetails('about'),
            about: tProfitDetails('aboutText'),
            servicesTitle: tProfitDetails('services'),
            services: tProfitDetails.raw('servicesList') as string[],
            url: '#',
            linkText: tProfit('linkText')
        },
        {
            subTitle: tSwap('subTitle'),
            title: tSwap('title'),
            desc: tSwap('desc'),
            aboutTitle: tSwapDetails('about'),
            about: tSwapDetails('aboutText'),
            servicesTitle: tSwapDetails('services'),
            services: tSwapDetails.raw('servicesList') as string[],
            url: '#',
            linkText: tSwap('linkText')
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
                <p className="subtitle">{tPortfolio("subTitle")}</p>
                <h2>{tPortfolio("title")}</h2>
            </div>
            {isMobile && <PortfolioMobile data={dataMobile} />}
            {!isMobile && <PortfolioDesctop data={dataDesctop} />}
        </section>
    );
}