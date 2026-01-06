'use client';
import { useIsMobile } from '@/app/hooks/isMobile';
import HowWeWorkSwiper from './HowWeWorkSwiper';
import HowWeWorkDesctop from './HowWeWorkDesctop';

export default function HowWeWorkCellsContainer () {
    const isMobile = useIsMobile();

    if(isMobile) {
        return <HowWeWorkSwiper />;
    } else {
        return <HowWeWorkDesctop />
    }
}