"use client";

import { useInView } from "@/hooks/useInView";
import updateEnvPath from "@/utils/updateEnvPath";

export function InvitationCover() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center bg-[var(--color-cream)] overflow-hidden"
    >
      {/* 紙のテクスチャ背景 */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* エレガントな2重枠線 */}
      <div className="absolute inset-4 md:inset-8 border-[1px] border-[var(--color-text)] opacity-20 pointer-events-none" />
      <div className="absolute inset-5 md:inset-9 border-[1px] border-[var(--color-text)] opacity-10 pointer-events-none" />

      {/* トップヘッダー */}
      <div className="absolute top-6 md:top-12 w-full px-4 sm:px-8 md:px-16 flex justify-between items-end z-10">
        <div className="flex flex-col items-start gap-0.5">
          <span className="text-[9px] sm:text-xs md:text-sm tracking-[0.2em] font-serif uppercase text-[var(--color-text-light)]">
            Our Wedding
          </span>
          <span className="text-xs sm:text-sm md:text-base font-bold font-serif tracking-widest border-b border-[var(--color-text)] pb-0.5">
            2026.10.24
          </span>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <span className="text-[9px] sm:text-xs md:text-sm tracking-[0.2em] font-serif text-[var(--color-text-light)]">
            Invitation
          </span>
          <span className="text-xs sm:text-sm md:text-base font-bold font-serif tracking-widest text-[var(--color-text-dark)]">
            Yuki & Sayaka
          </span>
        </div>
      </div>

      {/* タイトルエリア */}
      <div
        className={`relative z-10 text-center mb-6 md:mb-10 transition-all duration-1000 transform ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1
          className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-[0.2em] text-[var(--color-text-dark)] mb-4"
          style={{ fontFamily: "var(--font-yomogi)" }}
        >
          結婚式のご案内
        </h1>
        <div className="mt-4 sm:mt-6 md:mt-8 flex justify-center items-center gap-3">
          <div className="h-[1px] w-8 sm:w-12 bg-[var(--color-text-light)] opacity-50"></div>
          <span className="font-serif italic text-base sm:text-xl md:text-2xl text-[var(--color-sage-dark)]">
            Wedding Invitation
          </span>
          <div className="h-[1px] w-8 sm:w-12 bg-[var(--color-text-light)] opacity-50"></div>
        </div>
      </div>

      {/* メインの装飾付き画像フレーム */}
      <div
        className={`relative w-full max-w-[260px] sm:max-w-md px-2 transition-all duration-1000 delay-300 transform ${
          isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {/* ふわふわ浮かぶアニメーションクラス (animate-float) を付与 */}
        <div className="relative aspect-square shadow-2xl bg-[#EFEBE4] p-2 sm:p-3 md:p-4 rotate-[-1deg] animate-float">
          {/* 写真フレーム */}
          <div className="relative w-full h-full overflow-hidden border border-[var(--color-border)] bg-gray-100">
            <img
              src={updateEnvPath("/images/invitation_cover.jpg")}
              alt="Wedding Invitation Cover"
              className="w-full h-full object-cover grayscale-[10%] sepia-[5%] contrast-[0.98] transition-transform duration-10000 hover:scale-105"
            />
            {/* フィルムノイズや揺らぎを再現するためのオーバーレイ */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cream)]/10 to-transparent mix-blend-overlay pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* スクロール促し */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 opacity-70">
        <span className="text-[10px] tracking-[0.4em] uppercase font-serif animate-shimmer">
          Scroll Down
        </span>
        <div className="w-[1px] h-10 bg-[var(--color-text)] origin-top animate-pulse-soft"></div>
      </div>
    </section>
  );
}
