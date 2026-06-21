"use client";

import { useInView } from "@/hooks/useInView";
import updateEnvPath from "@/utils/updateEnvPath";

const messages = [
  {
    role: "新郎",
    name: "勇樹",
    icon: "🌿",
    image: updateEnvPath("/images/groom.jpg"),
    alt: "新郎 有村 勇樹",
    text: "これからどうぞよろしくお願いいたします。",
  },
  {
    role: "新婦",
    name: "紗弥香",
    icon: "🌸",
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
      className="py-20 md:py-28 px-6 relative"
      style={{ background: "var(--color-beige-light)" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* ヘッダー */}
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div className="decorative-line mb-4">
            <span
              className="text-sm tracking-[0.25em] uppercase text-[var(--color-text-light)]"
              style={{ fontFamily: "var(--font-vintage-serif)" }}
            >
              Message
            </span>
          </div>
          <div className="vintage-flourish mb-6">❦</div>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-[0.15em] text-[var(--color-text-dark)]"
            style={{ fontFamily: "var(--font-mincho)" }}
          >
            ふたりより
          </h2>
        </div>

        {/* メッセージカード - 左右アシンメトリー構成 */}
        <div className="space-y-16">
          {messages.map((msg, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={msg.role}
                className={`flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-12 items-center md:items-start transition-all duration-700`}
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${200 + i * 150}ms`,
                }}
              >
                {/* 写真：アンティーク調ウッド/額縁フレーム + ビンテージフォトフィルター */}
                <div className="flex-shrink-0 w-full max-w-[200px] sm:max-w-[220px]">
                  <div className="antique-border rounded-lg overflow-hidden shadow-lg transform rotate-[-1deg] hover:rotate-[1deg] transition-transform duration-500">
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded">
                      <img
                        src={msg.image}
                        alt={msg.alt}
                        className="w-full h-full object-cover object-center vintage-photo hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>

                {/* テキストエリア */}
                <div className={`flex-1 text-center md:text-left ${!isEven ? "md:text-right" : ""} pt-4`}>
                  {/* ロール見出し */}
                  <div className={`flex items-center justify-center md:justify-start ${!isEven ? "md:justify-end" : ""} gap-2 mb-4`}>
                    <span className="text-lg">{msg.icon}</span>
                    <span
                      className="text-xs tracking-[0.3em] uppercase font-bold text-[var(--color-text-light)]"
                      style={{ fontFamily: "var(--font-vintage-serif)" }}
                    >
                      {msg.role}
                    </span>
                    <span className="text-base font-bold text-[var(--color-text-dark)] font-mincho">
                      {msg.name}
                    </span>
                  </div>

                  {/* 本文 - 羊皮紙風（parchment-card）に */}
                  <p
                    className={`text-sm sm:text-base leading-[2.6] tracking-wider text-[var(--color-text)] font-mincho py-4 ${
                      isEven ? "md:pl-6 md:border-l" : "md:pr-6 md:border-r"
                    } border-[var(--color-border-light)] parchment-card p-6 rounded-lg shadow-sm`}
                  >
                    {msg.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
