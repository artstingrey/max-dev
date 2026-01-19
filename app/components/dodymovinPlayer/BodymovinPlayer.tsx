'use client';

import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

type LottieProps = {
  path?: string;
  loop?: boolean;
  autoplay?: boolean;
  renderer?: 'svg' | 'canvas' | 'html';
  className?: string;
};

export default function BodymovinPlayer({
  path = '',
  loop = true,
  autoplay = true,
  renderer = 'svg',
  className,
}: LottieProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current || !path) return;

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer,
      loop,
      autoplay,
      path,
    });

    return () => {
      animRef.current?.destroy();
      animRef.current = null;
    };
  }, [path, loop, autoplay, renderer]);

  return <div ref={containerRef} className={className} />;
}