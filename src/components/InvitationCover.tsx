"use client";
import { useState, useEffect } from "react";
import { useInView } from "@/hooks/useInView";
import updateEnvPath from "@/utils/updateEnvPath";

const slideshowPhotos = [
  "/images/invitation_cover.jpg",
  "/images/invitation_gallery1.jpg",
  "/images/invitation_gallery2.jpg",
  "/images/invitation_gallery3.jpg",
];

export function InvitationCover() {
  const { ref, isInView } = useInView();
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slideshowPhotos.length);
    }, 5000); // 5秒ごとに画像を切り替える
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full flex flex-col items-center justify-between bg-black overflow-hidden py-16 px-6 text-white"
    >
      {/* 背景写真のスライドショー（フェードイン・フェードアウト＆ゆっくりとしたズーム） */}
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none overflow-hidden">
        {slideshowPhotos.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out ${
              index === currentIdx ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `url(${updateEnvPath(src)})`,
              transitionProperty: "opacity, transform",
            }}
          />
        ))}
      </div>

      {/* テキスト視認性を高めるための上品なオーバーレイレイヤー */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55 z-0 pointer-events-none" />

      {/* 紙のテクスチャ背景をオーバーレイして上品さをプラス */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* エレガントな白枠線 */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-white/20 z-0 pointer-events-none" />
      <div className="absolute inset-5 sm:inset-7 md:inset-9 border border-white/10 z-0 pointer-events-none" />

      {/* トップヘッダー */}
      <div className="w-full max-w-5xl flex justify-between items-end z-10 pt-4 px-2 select-none">
        <div className="flex flex-col items-start gap-1">
          <span className="text-[10px] sm:text-xs tracking-[0.25em] font-serif uppercase text-white/80 drop-shadow-md">
            Our Wedding
          </span>
          <span className="text-xs sm:text-sm font-bold font-serif tracking-widest border-b border-white/60 pb-0.5 text-white drop-shadow-md">
            2026.10.24
          </span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] sm:text-xs tracking-[0.25em] font-serif text-white/80 uppercase drop-shadow-md">
            Invitation
          </span>
          <span className="text-xs sm:text-sm font-bold font-serif tracking-widest text-white drop-shadow-md">
            Yuki & Sayaka
          </span>
        </div>
      </div>

      {/* タイトル & メインメッセージエリア */}
      <div
        className={`flex-1 flex flex-col justify-center items-center text-center z-10 select-none transition-all duration-1000 transform ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-4 text-[10px] sm:text-xs tracking-[0.45em] uppercase text-white/95 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)] font-serif font-semibold">
          Save the Date
        </div>
        
        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.25em] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] mb-6 select-none leading-snug"
          style={{ fontFamily: "var(--font-mincho)" }}
        >
          結婚式のご案内
        </h1>

        <div className="w-16 h-[1px] bg-white/60 mb-6 drop-shadow-md" />

        <div className="text-xl sm:text-3xl md:text-4xl font-serif italic text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] tracking-widest">
          Yuki & Sayaka
        </div>
      </div>

      {/* ボトムセクションとスクロール促し */}
      <div className="w-full flex flex-col items-center gap-3 z-10 pb-4 select-none">
        <div className="text-[10px] tracking-[0.3em] font-serif uppercase text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
          Welcome to Our Special Day
        </div>
        <div className="flex flex-col items-center gap-2 opacity-80 mt-2">
          <span className="text-[9px] tracking-[0.4em] uppercase font-serif animate-shimmer text-white drop-shadow-[0_1.5px_4px_rgba(0,0,0,0.6)] font-bold">
            Scroll Down
          </span>
          <div className="w-[1px] h-10 bg-white/70 origin-top animate-pulse-soft"></div>
        </div>
      </div>
    </section>
  );
}
