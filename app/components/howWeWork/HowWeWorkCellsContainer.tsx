'use client';
import { useIsMobile } from '@/app/hooks/isMobile';
import HowWeWorkSwiper from './HowWeWorkSwiper';
import HowWeWorkDesctop from './HowWeWorkDesctop';
import { useTranslations } from 'next-intl';

type HowWeWorkItemProps = {
    title: string;
    text: string;
}

export type HowWeWorkProps = {
    items: HowWeWorkItemProps[];
}

export default function HowWeWorkCellsContainer () {
    const isMobile = useIsMobile();
    const t = useTranslations('howWewORK');
    const items = t.raw('items') as HowWeWorkItemProps[];
    
    if(isMobile) {
        return <HowWeWorkSwiper items={items} />;
    } else {
        return <HowWeWorkDesctop items={items} />
    }
}