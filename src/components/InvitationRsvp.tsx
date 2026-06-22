"use client";

import { useInView } from "@/hooks/useInView";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSc6Ev_QS6TdrTPtCFPGcqB__bv3nu1ts2ike1n0mFjorbLkkQ/viewform";

export function InvitationRsvp() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 px-6 bg-[var(--color-cream)] relative overflow-hidden"
    >
      {/* 上部より流れる細線 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-[var(--color-text-light)] opacity-30"></div>
      <div className="max-w-xl mx-auto relative z-10">
        {/* セクションヘッダー */}
        <div className="section-header">
          <span className="magazine-label">RSVP</span>
          <div className="vintage-flourish text-xl my-1" style={{ opacity: 0.75 }}>❦</div>
          <h2
            className="section-title text-2xl md:text-4xl"
            style={{ fontFamily: "var(--font-yomogi)" }}
          >
            ご出欠のご回答
          </h2>
        </div>

        {/* 回答締め切り */}
        <div className="text-center mb-12 font-mincho">
          <p className="text-xs sm:text-sm md:text-base text-[var(--color-text-dark)] tracking-wider leading-loose">
            お手数ではございますが 準備の都合上
            <br />
            <span className="inline-block whitespace-nowrap text-sm sm:text-lg md:text-xl font-bold border-b-2 border-[var(--color-gold)] pb-0.5 px-1.5 sm:px-2 mx-0.5 sm:mx-1">
              2026年9月1日（火）
            </span>
            までに
            <br />
            ご回答いただけますようお願い申し上げます
          </p>
        </div>

        {/* オープンレイアウト（カードなし）+ ビンテージ二重罫線 */}
        <div
          className={`py-8 text-center space-y-8 transition-all duration-1000 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* 上部ビンテージ罫線 */}
          <div className="vintage-double-rule mb-10" />
          {/* アイコン */}
          <div className="text-5xl">🕊️</div>

          {/* 本文 */}
          <div className="font-mincho space-y-3 text-[var(--color-text)] leading-relaxed text-sm sm:text-base">
            <p className="font-bold">
              以下のボタンよりご回答フォームへお進みください。
            </p>
            <p className="text-xs text-[var(--color-text-light)]">
              ご回答はGoogle フォームにて承っております。
            </p>
          </div>

          {/* リンクボタン */}
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-xs py-4 px-8 rounded-xl font-bold tracking-widest text-white bg-[var(--color-sage-dark)] hover:bg-[var(--color-forest)] shadow-md border-2 border-[var(--color-border)] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 font-mincho"
          >
            <span className="flex items-center justify-center gap-2">
              <span>ご回答はこちら</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </a>

          {/* 補足 */}
          <p className="text-[10px] sm:text-xs text-[var(--color-text-light)] font-mincho">
            ※ 別ウィンドウでGoogle フォームが開きます
          </p>

          {/* 下部ビンテージ罫線 */}
          <div className="vintage-double-rule mt-10" />
        </div>
      </div>
    </section>
  );
}
