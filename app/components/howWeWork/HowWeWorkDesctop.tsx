'use client';
import { useEffect, useRef, useState } from "react";
import HowWeWorkCell from "./HowWeWorkCell";
import { HowWeWorkProps } from "./HowWeWorkCellsContainer";
import styles from './HowWeWork.module.scss';

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export default function HowWeworkDesctop ({items}:HowWeWorkProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let raf = 0;

        const update = () => {
        const el = containerRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;

        const start = vh;                 // rect.top == vh  -> progress = 0
        const end = -rect.height;         // rect.top == -height -> progress = 1
        const raw = (start - rect.top) / (start - end);

        setProgress(clamp(raw, 0, 1));
        };

        const onScroll = () => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(update);
        };

        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);

        return () => {
        cancelAnimationFrame(raf);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        };
    }, []);


    const MAX_SHIFT = 120;
    const STEP = 10;

    return (
        <div ref={containerRef} className={styles.cellContainer}>
            {items.map((item, index) => {
                const offset = progress * MAX_SHIFT + index * STEP;

                return <HowWeWorkCell key={index} number={'0' + (index + 1) + '.'} title={item.title} text={item.text} offset={offset}/>
            })}
        </div>
    );
}