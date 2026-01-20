'use client';

import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';
import { number } from 'mathjs';

type LottieProps = {
  path?: string;
  loop?: boolean;
  autoplay?: boolean;
  renderer?: 'svg' | 'canvas' | 'html';
  speed?: number;
  className?: string;
};

export default function BodymovinPlayer({
  path = '',
  loop = true,
  autoplay = true,
  renderer = 'svg',
  speed = 0,
  className,
}: LottieProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current || !path) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer,
      loop,
      autoplay,
      path,
    });

    animRef.current = anim;

    if(speed > 0) {
      anim.addEventListener('DOMLoaded', () => {
        anim.playSegments([0, speed], true);
      });
    }

    

    return () => {
      anim.destroy();
      animRef.current = null;
    };
  }, [path, loop, autoplay, renderer]);

  return <div><div ref={containerRef} className={className}></div></div>;
}