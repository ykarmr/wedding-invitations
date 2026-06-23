"use client";

import { useInView } from "@/hooks/useInView";
import updateEnvPath from "@/utils/updateEnvPath";

const messages = [
  {
    role: "新郎",
    name: "勇樹",
    nameRomaji: "Yuki",
    image: updateEnvPath("/images/groom.jpg"),
    alt: "新郎 有村 勇樹",
    text: "これからどうぞよろしくお願いいたします。",
  },
  {
    role: "新婦",
    name: "紗弥香",
    nameRomaji: "Sayaka",
    image: updateEnvPath("/images/bride.jpg"),
    alt: "新婦 池上 紗弥香",
    text: "温かい家庭を築いていきたいと思います。",
  },
];

export function InvitationMessage() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #fdf9f7 35%, #faf5f2 65%, #ffffff 100%)',
      }}
    >
      {/* アール・デコ調パターン */}
      <div className="pattern-art-deco" />

      {/* セクションヘッダー */}
      <div
        className="py-16 md:py-20 px-6 text-center relative z-10"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.7s ease",
        }}
      >
        <div className="decorative-line mb-4">
          <span
            className="text-sm tracking-[0.25em] uppercase text-[var(--color-text-light)]"
            style={{ fontFamily: "var(--font-vintage-serif)" }}
          >
            Message from Us
          </span>
        </div>
        <div className="vintage-flourish mb-4">❦</div>
        <h2
          className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-[var(--color-text-dark)]"
          style={{ fontFamily: "var(--font-mincho)" }}
        >
          ふたりより
        </h2>
      </div>

      {/* エディトリアルレイアウト */}
      {messages.map((msg, i) => {
        const isEven = i % 2 === 0;
        return (
          <div
            key={msg.role}
            className={`relative flex flex-col ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            } border-t border-[var(--color-border-light)]`}
            style={{
              minHeight: "60vh",
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(32px)",
              transition: `all 0.9s ease ${300 + i * 250}ms`,
            }}
          >
            {/* 写真 - スマホ横撮り 4:3 比率 */}
            <div
              className="relative w-full md:w-1/2 overflow-hidden bg-black flex-shrink-0 aspect-[4/3]"
            >
              <img
                src={msg.image}
                alt={msg.alt}
                className="w-full h-full object-cover object-top absolute inset-0 vintage-photo hover:scale-[1.04] transition-transform duration-[2500ms]"
              />
              <div
                className={`absolute inset-0 ${
                  isEven
                    ? "bg-gradient-to-r from-transparent to-black/20"
                    : "bg-gradient-to-l from-transparent to-black/20"
                }`}
              />
            </div>

            {/* テキストエリア */}
            <div className="flex-1 flex flex-col justify-center px-8 sm:px-12 md:px-14 lg:px-20 py-12 md:py-0 relative z-10" style={{ background: 'inherit' }}>
              {/* ロールラベル */}
              <p
                className="text-[10px] tracking-[0.52em] uppercase text-[var(--color-gold)] mb-5 font-bold"
                style={{ fontFamily: "var(--font-vintage-serif)" }}
              >
                {msg.role}
              </p>

              {/* スクリプトフォント名（ローマ字） */}
              <h3
                className="text-6xl sm:text-7xl leading-none text-[var(--color-text-dark)] mb-1"
                style={{ fontFamily: "var(--font-vintage-script)", fontWeight: 400 }}
              >
                {msg.nameRomaji}
              </h3>

              {/* 日本語名 */}
              <p
                className="text-lg sm:text-xl font-bold tracking-[0.3em] text-[var(--color-text-dark)] mb-8"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                {msg.name}
              </p>

              {/* ゴールドライン */}
              <div className="w-10 h-px bg-[var(--color-gold)] mb-8 opacity-70" />

              {/* メッセージ */}
              <p className="text-sm sm:text-base leading-[3] tracking-wider text-[var(--color-text)] font-mincho max-w-[300px]">
                {msg.text}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
