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
      <div className="max-w-2xl mx-auto">
        {/* ヘッダー */}
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div className="decorative-line mb-6">
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ color: "var(--color-text-light)", fontFamily: "var(--font-rounded)" }}
            >
              Message
            </span>
          </div>
          <h2
            className="text-2xl md:text-4xl font-bold tracking-[0.15em]"
            style={{ fontFamily: "var(--font-yomogi)", color: "var(--color-text-dark)" }}
          >
            ふたりより
          </h2>
        </div>

        {/* メッセージカード */}
        <div className="space-y-12">
          {messages.map((msg, i) => (
            <div
              key={msg.role}
              className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start transition-all duration-700"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${200 + i * 150}ms`,
              }}
            >
              {/* 写真 */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden"
                  style={{
                    border: "3px solid var(--color-border)",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  }}
                >
                  <img
                    src={msg.image}
                    alt={msg.alt}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* テキスト */}
              <div className="flex-1 text-center sm:text-left">
                {/* ロール */}
                <p
                  className="text-xs tracking-[0.25em] mb-3"
                  style={{ color: "var(--color-text-light)", fontFamily: "var(--font-rounded)" }}
                >
                  {msg.icon} {msg.role} {msg.name} より
                </p>

                {/* 本文 */}
                <p
                  className="text-sm sm:text-base leading-[2.4] tracking-wider sm:pl-4 sm:border-l-2"
                  style={{
                    color: "var(--color-text)",
                    fontFamily: "var(--font-mincho)",
                    borderColor: "var(--color-border)",
                  }}
                >
                  {msg.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
