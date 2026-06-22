"use client";

import { useInView } from "@/hooks/useInView";

export function InvitationGreeting() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 px-6 bg-[var(--color-cream)] text-center relative"
    >
      {/* 雑誌風装飾ライン */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-[var(--color-text-light)] opacity-30"></div>

      <div
        className={`max-w-2xl mx-auto transition-all duration-1000 transform ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* 外枠をカードから解放、ビンテージ二重罫線でフレームに */}
        <div className="relative py-4">
          {/* 上部の二重罫線 */}
          <div className="vintage-double-rule mb-12" />

          <div className="decorative-line mb-4">
            <span 
              className="text-sm tracking-[0.25em] uppercase text-[var(--color-text-light)] font-medium"
              style={{ fontFamily: "var(--font-vintage-serif)" }}
            >
              Greeting
            </span>
          </div>

          <div className="vintage-flourish mb-6">❦</div>

          <h2
            className="text-2xl md:text-3xl font-bold text-[var(--color-text-dark)] mb-10 tracking-[0.2em]"
            style={{ fontFamily: "var(--font-mincho)" }}
          >
            ご挨拶
          </h2>

          {/* 招待状本文 (句読点なし、忌み言葉なしマナー準守) */}
          <div className="space-y-6 text-xs sm:text-sm md:text-base text-[var(--color-text)] leading-[2.6] tracking-widest font-mincho md:px-4">
            <p>
              謹啓　盛夏の候　皆様には益々ご清祥のことと
              <br />
              お慶び申し上げます
            </p>
            <p>
              このたび　私たちは結婚式を挙げることになりました
            </p>
            <p>
              つきましては　日頃お世話になっている皆様に
              <br />
              私たちの門出を見守っていただきたく
              <br />
              ささやかながら　小宴をもうけました
            </p>
            <p>
              ご多用の折　誠に恐縮ではございますが
              <br />
              何卒ご出席くださいますよう　ご案内申し上げます
            </p>
            <p className="pt-4 text-right pr-4 opacity-80 text-xs sm:text-sm">
              敬白
            </p>
          </div>

          {/* 差出日と差出人 */}
          <div className="mt-12 pt-8 border-t border-[var(--color-border-light)] max-w-sm mx-auto space-y-4">
            <p className="text-xs tracking-[0.2em] text-[var(--color-text-light)]">
              令和八年 七月吉日
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center sm:items-baseline gap-2 sm:gap-6 mt-4">
              <div className="text-base sm:text-lg md:text-xl font-bold tracking-widest text-[var(--color-text-dark)] font-mincho">
                有村 勇樹
              </div>
              <div 
                className="text-lg text-[var(--color-gold)] font-medium select-none"
                style={{ fontFamily: "var(--font-vintage-script)" }}
              >
                and
              </div>
              <div className="text-base sm:text-lg md:text-xl font-bold tracking-widest text-[var(--color-text-dark)] font-mincho">
                池上 紗弥香
              </div>
            </div>
          </div>

          {/* 下部の二重罫線 */}
          <div className="vintage-double-rule mt-12" />
        </div>
      </div>
    </section>
  );
}
