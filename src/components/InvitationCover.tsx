"use client";

import { useInView } from "@/hooks/useInView";
import updateEnvPath from "@/utils/updateEnvPath";

export function InvitationCover() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[var(--color-cream)] overflow-hidden py-16 px-4"
    >
      {/* 紙のテクスチャ背景 */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* エレガントな2重枠線と四隅の木の葉のあしらい */}
      <div className="absolute inset-3 sm:inset-6 md:inset-10 border-[1px] border-[var(--color-border)] opacity-60 pointer-events-none" />
      <div className="absolute inset-4 sm:inset-7 md:inset-11 border-[1px] border-[var(--color-border)] opacity-30 pointer-events-none" />
      
      {/* 四隅の装飾葉っぱ風テキスト */}
      <div className="absolute top-6 left-6 text-xs text-[var(--color-sage-light)] opacity-60 pointer-events-none select-none font-serif">🌿</div>
      <div className="absolute top-6 right-6 text-xs text-[var(--color-sage-light)] opacity-60 pointer-events-none select-none font-serif">🌿</div>
      <div className="absolute bottom-6 left-6 text-xs text-[var(--color-sage-light)] opacity-60 pointer-events-none select-none font-serif">🌿</div>
      <div className="absolute bottom-6 right-6 text-xs text-[var(--color-sage-light)] opacity-60 pointer-events-none select-none font-serif">🌿</div>

      {/* トップヘッダー */}
      <div className="absolute top-8 md:top-16 w-full px-6 sm:px-12 md:px-24 flex justify-between items-end z-10">
        <div className="flex flex-col items-start gap-1">
          <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.25em] font-serif uppercase text-[var(--color-text-light)]">
            Our Wedding
          </span>
          <span className="text-xs sm:text-sm md:text-base font-bold font-serif tracking-widest border-b border-[var(--color-text-light)] pb-0.5 text-[var(--color-text-dark)]">
            2026.10.24
          </span>
        </div>
        <div className="flex flex-col items-end gap-1">
          <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.25em] font-serif text-[var(--color-text-light)] uppercase">
            Invitation
          </span>
          <span className="text-xs sm:text-sm md:text-base font-bold font-serif tracking-widest text-[var(--color-text-dark)]">
            Yuki & Sayaka
          </span>
        </div>
      </div>

      {/* タイトルエリア */}
      <div
        className={`relative z-10 text-center mt-12 mb-6 transition-all duration-1000 transform ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.25em] text-[var(--color-text-dark)] mb-3"
          style={{ fontFamily: "var(--font-mincho)" }}
        >
          結婚式のご案内
        </h1>
        <div className="mt-4 flex justify-center items-center gap-3">
          <span className="text-[10px] tracking-[0.3em] font-serif uppercase text-[var(--color-sage-dark)] font-bold">
            Welcome to Our Special Day
          </span>
        </div>
      </div>

      {/* メインの装飾付き画像フレーム（PIARY風のアーチ窓型） */}
      <div
        className={`relative w-full max-w-[270px] sm:max-w-xs md:max-w-sm px-2 transition-all duration-1000 delay-300 transform ${
          isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* アーチフレーム */}
        <div className="arch-frame shadow-xl rotate-[-0.5deg] animate-float">
          <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-t-[140px]">
            <img
              src={updateEnvPath("/images/invitation_cover.jpg")}
              alt="Wedding Invitation Cover"
              className="w-full h-full object-cover grayscale-[8%] sepia-[6%] contrast-[0.98] transition-transform duration-10000 hover:scale-105"
            />
            {/* 柔らかなオーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)]/20 to-transparent mix-blend-overlay pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* ボトムメッセージ */}
      <div className="text-center mt-6 z-10">
        <span className="font-serif italic text-sm sm:text-base md:text-lg text-[var(--color-text-light)]">
          ~ Yuki & Sayaka ~
        </span>
      </div>

      {/* スクロール促し */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 opacity-70">
        <span className="text-[9px] tracking-[0.4em] uppercase font-serif animate-shimmer text-[var(--color-text-light)] font-bold">
          Scroll Down
        </span>
        <div className="w-[1px] h-8 bg-[var(--color-border)] origin-top animate-pulse-soft"></div>
      </div>
    </section>
  );
}
