'use client';

import { useEffect, useMemo, useState } from 'react';
import GradualBlur from '../gradualBlur/GradualBlur';


type Props = {
  footerSelector?: string;
};

export default function GradualBlurHide ({ footerSelector = '#contact' }: Props) {
    const [hide, setHide] = useState(false);

    const observerOptions = useMemo<IntersectionObserverInit>(() => {
        return { root: null, threshold: 0, rootMargin: '0px 0px -20% 0px' };
    }, []);

     useEffect(() => {
        const footer = document.querySelector(footerSelector);
        if (!footer) return;

        const io = new IntersectionObserver(([entry]) => {
            setHide(entry.isIntersecting);
        }, observerOptions);

        io.observe(footer);
        return () => io.disconnect();
    }, [footerSelector, observerOptions]);

    return(
         <div
      style={{
        opacity: hide ? 0 : 1,
        pointerEvents: hide ? 'none' : 'auto',
        transition: 'opacity 200ms ease',
      }}
      aria-hidden={hide}
    >
        <GradualBlur
          target="page"
          position="bottom"
          height="6rem"
          strength={1}
          divCount={5}
          curve="bezier"
          exponential={true}
          opacity={1}
        />
    </div>
    );
}