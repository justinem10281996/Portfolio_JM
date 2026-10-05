import { useEffect, useRef, useState } from 'react';

/**
 * Mounts only the images the viewer can actually reach soon: the active index
 * plus a small window either side. Every other screenshot is never put in the
 * DOM, so the browser has nothing to download until it is needed.
 *
 * Neighbours are requested ahead of time so the crossfade never waits on the
 * network, and the caller gets `loaded` to hold a placeholder until pixels
 * arrive.
 */
export function useProgressiveImages<T extends { src: string }>(items: T[], stepMs: number) {
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const preloader = useRef<HTMLImageElement[]>([]);

  const total = items.length;

  useEffect(() => {
    if (!total) return;
    setIndex((prev) => (prev >= total ? 0 : prev));
  }, [total]);

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % total), stepMs);
    return () => clearInterval(timer);
  }, [total, stepMs]);

  // Warm the browser cache for the slides just outside the window.
  useEffect(() => {
    if (total <= 1) return;
    const next = [1, 2].map((offset) => items[(index + offset) % total]?.src).filter(Boolean) as string[];
    preloader.current = next.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });
    return () => {
      preloader.current = [];
    };
  }, [index, items, total]);

  const visible = new Set<number>();
  for (let offset = -1; offset <= 2; offset++) {
    const target = index + offset;
    if (target >= 0 && target < total) visible.add(target);
  }

  return { index, setIndex, loaded, setLoaded, visible };
}