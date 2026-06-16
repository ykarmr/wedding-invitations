"use client";

import { useInView } from "@/hooks/useInView";

export function InvitationGreeting() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 px-6 bg-[var(--color-cream)] text-center relative"
    >
      {/* 雑誌風装飾 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-[var(--color-text-light)] opacity-30"></div>

      <div
        className={`max-w-2xl mx-auto transition-all duration-1000 transform ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="decorative-line mb-8">
          <span className="text-xs tracking-[0.2em] font-serif uppercase text-[var(--color-text-light)]">
            Greeting
          </span>
        </div>

        <h2
          className="text-2xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-12 tracking-[0.15em]"
          style={{ fontFamily: "var(--font-yomogi)" }}
        >
          ご挨拶
        </h2>

        {/* 招待状本文 (句読点なし、忌み言葉なしマナー準守) */}
        <div className="space-y-6 text-xs sm:text-sm md:text-base text-[var(--color-text)] leading-[2.5] tracking-widest font-mincho md:px-8">
          <p>
            謹啓　初秋の候　皆様には益々ご清祥のことと
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
        <div className="mt-16 pt-8 border-t border-[var(--color-border)] max-w-sm mx-auto space-y-4">
          <p className="text-xs tracking-[0.2em] text-[var(--color-text-light)]">
            令和八年 八月吉日
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-baseline gap-3 sm:gap-6 mt-4">
            <div className="text-base sm:text-lg md:text-xl font-bold tracking-widest text-[var(--color-text-dark)]">
              有村 勇樹
            </div>
            <div className="text-base sm:text-lg md:text-xl font-bold tracking-widest text-[var(--color-text-dark)]">
              池上 紗弥香
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
