import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import type { NavigationOptions } from "swiper/types";
import { Navigation } from 'swiper/modules';
import HowWeWorkCell from "./HowWeWorkCell";
import { useRef } from "react";
import styles from './HowWeWork.module.scss';


export default function HowWeWorkSwiper () {
    const navigationPrevRef = useRef<HTMLButtonElement | null>(null);
    const navigationNextRef = useRef<HTMLButtonElement | null>(null);

    return (
        <>
        <Swiper modules={[Navigation]} navigation={{prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current}} onBeforeInit={(swiper: SwiperType) => {
           const nav = (swiper.params.navigation ?? {}) as NavigationOptions;

            nav.prevEl = navigationPrevRef.current;
            nav.nextEl = navigationNextRef.current;

            swiper.params.navigation = nav;
          }} spaceBetween={20} freeMode={true} slidesPerView="auto" className={styles.swiper} breakpoints={{768: {enabled: false,allowTouchMove: false,pagination: { enabled: false }}}}>
            <SwiperSlide className={styles.swiperCellItem}>
                <HowWeWorkCell number="01." title="You tell us the idea" text="Tell us what you want to build, your goals, your audience, and what success looks like."/>
            </SwiperSlide>    
            <SwiperSlide className={styles.swiperCellItem}>
                <HowWeWorkCell number="02." title="We pick the solution" text="Together we decide: MVP from scratch or a ready white-label base — lean and focused."/>  
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCellItem}>
                <HowWeWorkCell number="03." title="We design & build" text="We handle UI/UX, development, testing, and iteration — in weekly sprints with full transparency."/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCellItem}>
                <HowWeWorkCell number="04." title="You launch & get first clients" text="We deploy your product, support the release, set up marketing and stay in touch for scaling."/>
            </SwiperSlide>
            <SwiperSlide className={styles.swiperCellItem}>
                <HowWeWorkCell number="05." title="We grow your business" text="From scaling to improvements — we stay by your side to put your business on solid ground."/>
            </SwiperSlide>
        </Swiper>

        <div className={styles.sliderControls}>
            <button aria-label="Previous" ref={navigationPrevRef} type="button" className="controlLeft">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_94_564" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                    <rect width="18" height="18" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 18 18)" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_94_564)">
                    <path d="M14.625 9.5625L5.52975 9.5625L9.80194 13.8347L9 14.625L3.375 9L9 3.375L9.80194 4.16531L5.52975 8.4375L14.625 8.4375L14.625 9.5625Z" fill="white"/>
                    </g>
                </svg>   
            </button>
            <button aria-label="Next" ref={navigationNextRef} type="button" className="controlNext">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_94_559" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
                    <rect x="7.86806e-07" y="18" width="18" height="18" transform="rotate(-90 7.86806e-07 18)" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_94_559)">
                    <path d="M3.375 9.5625L12.4703 9.5625L8.19806 13.8347L9 14.625L14.625 9L9 3.375L8.19806 4.16531L12.4703 8.4375L3.375 8.4375L3.375 9.5625Z" fill="white"/>
                    </g>
                </svg>
            </button>
        </div>
        </>
    );
}