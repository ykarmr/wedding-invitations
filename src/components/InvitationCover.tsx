"use client";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import updateEnvPath from "@/utils/updateEnvPath";

const slideshowPhotos = [
  "/images/invitation_cover_1.jpg",
  "/images/invitation_cover_2.jpg",
  "/images/invitation_cover_3.jpg",
  "/images/invitation_cover_4.jpg",


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
      <div className="absolute inset-0 w-full h-full z-0 select-none pointer-events-none overflow-hidden [transform:translateZ(0)]">
        {slideshowPhotos.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-[2000ms] ease-in-out [backface-visibility:hidden] [transform:translate3d(0,0,0)] [will-change:opacity] ${
              index === currentIdx ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${updateEnvPath(src)})`,
              transitionProperty: "opacity",
            }}
          />
        ))}
      </div>

      {/* テキスト視認性を高めるためのシネマティックオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/52 via-black/18 to-black/62 z-0 pointer-events-none" />

      {/* シネマ ヴィネット（周辺光量落ち） */}
      <div className="cinema-vignette z-0" />

      {/* 紙のテクスチャ背景をオーバーレイして上品さをプラス */}
      <div
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* シネマ レターボックス バー（上） */}
      <div
        className="absolute top-0 left-0 right-0 z-20 pointer-events-none"
        style={{ height: "clamp(24px, 4vh, 48px)", background: "rgb(6, 4, 2)" }}
      />
      {/* シネマ レターボックス バー（下） */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        style={{ height: "clamp(24px, 4vh, 48px)", background: "rgb(6, 4, 2)" }}
      />

      {/* エレガントなヴィンテージ金枠線 */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-[var(--color-gold)]/30 z-0 pointer-events-none" />
      <div className="absolute inset-5 sm:inset-7 md:inset-9 border-2 border-double border-[var(--color-gold)]/20 z-0 pointer-events-none" />

      {/* トップヘッダー */}
      <div className="w-full max-w-5xl flex justify-between items-end z-10 pt-4 px-2 select-none">
        <div className="flex flex-col items-start gap-1">
          <span
            className="text-xs sm:text-sm tracking-[0.25em] uppercase text-white/80 drop-shadow-md"
            style={{ fontFamily: "var(--font-vintage-serif)" }}
          >
            Our Wedding
          </span>
          <span
            className="text-sm sm:text-base font-medium tracking-widest border-b border-[var(--color-gold)]/60 pb-0.5 text-white drop-shadow-md"
            style={{ fontFamily: "var(--font-vintage-serif)" }}
          >
            2026.10.24
          </span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span
            className="text-xs sm:text-sm tracking-[0.25em] text-white/80 uppercase drop-shadow-md"
            style={{ fontFamily: "var(--font-vintage-serif)" }}
          >
            Invitation
          </span>
          <span
            className="text-sm sm:text-base font-medium tracking-widest text-white drop-shadow-md"
            style={{ fontFamily: "var(--font-vintage-serif)" }}
          >
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
        <div
          className="mb-2 text-3xl sm:text-5xl text-[var(--color-gold-light)] drop-shadow-[0_1.5px_4px_rgba(0,0,0,0.6)]"
          style={{ fontFamily: "var(--font-vintage-script)" }}
        >
          Save the Date
        </div>

        <h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.25em] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] mb-6 select-none leading-snug"
          style={{ fontFamily: "var(--font-mincho)" }}
        >
          Wedding Invitation
        </h1>

        <div className="w-20 h-[1px] bg-[var(--color-gold-light)]/60 mb-6 drop-shadow-md" />

        <div
          className="text-4xl sm:text-6xl text-[var(--color-gold-light)] drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          style={{ fontFamily: "var(--font-vintage-script)" }}
        >
          Yuki & Sayaka
        </div>
      </div>

      {/* ボトムセクションとスクロール促し */}
      <div className="w-full flex flex-row items-end justify-between z-10 pb-4 px-3 select-none">
        {/* 左：ロケーションスタンプ */}
        <div className="location-stamp hidden sm:flex flex-col">
          <span>Ichigaya &middot; Tokyo</span>
          <span className="text-[7px] opacity-50 tracking-[0.22em] mt-0.5">
            Applause Square
          </span>
        </div>

        {/* 中央：スクロール誤導 */}
        <div className="flex flex-col items-center gap-3 flex-1">
          <div
            className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]"
            style={{ fontFamily: "var(--font-vintage-serif)" }}
          >
            Welcome to Our Special Day
          </div>
          <div className="flex flex-col items-center gap-2 opacity-80 mt-2">
            <span
              className="text-[10px] tracking-[0.4em] uppercase font-bold animate-shimmer text-white drop-shadow-[0_1.5px_4px_rgba(0,0,0,0.6)]"
              style={{ fontFamily: "var(--font-vintage-serif)" }}
            >
              Scroll Down
            </span>
            <div className="w-[1px] h-10 bg-[var(--color-gold-light)]/70 origin-top animate-pulse-soft"></div>
          </div>
        </div>

        {/* 右：日付スタンプ */}
        <div className="location-stamp hidden sm:flex flex-col items-end text-right">
          <span>2026 &middot; 10 &middot; 24</span>
          <span className="text-[7px] opacity-50 tracking-[0.22em] mt-0.5">
            挙式 ・ 披露孴
          </span>
        </div>
      </div>
    </section>
  );
}
