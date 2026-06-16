"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Intersection Observer フック
 * Web表示用のスクロールアニメーションに使用
 */
export function useInView(threshold = 0.2) {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // 一度表示されたら監視を停止
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return { ref, isInView };
}
