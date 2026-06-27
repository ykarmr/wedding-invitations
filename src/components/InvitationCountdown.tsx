"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";
import updateEnvPath from "@/utils/updateEnvPath";

// 挙式日（2026年10月24日 10:30）
const WEDDING_DATE = new Date("2026-10-24T10:30:00+09:00");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function calcTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function CountCard({
  value,
  label,
  delay,
  isInView,
}: {
  value: number;
  label: string;
  delay: string;
  isInView: boolean;
}) {
  return (
    <div
      className="flex flex-col items-center gap-2 transition-all duration-700"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(24px)",
        transitionDelay: delay,
      }}
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center border-b border-[var(--color-gold)]/60">
        <span
          className="text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums leading-none tracking-wider"
          style={{
            fontFamily: "var(--font-mincho)",
            color: "var(--color-cream)",
            textShadow: "0 0 20px rgba(200,148,28,0.4)",
          }}
        >
          {String(value).padStart(label === "Days" ? 3 : 2, "0")}
        </span>
      </div>
      <span
        className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold"
        style={{
          color: "var(--color-text-light)",
          fontFamily: "var(--font-vintage-serif)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export function InvitationCountdown() {
  const { ref, isInView } = useInView();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const isPast = WEDDING_DATE.getTime() <= Date.now();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <img
          src={updateEnvPath("/images/invitation_cover.jpg")}
          alt="Wedding Backdrop"
          className="w-full h-full object-cover filter sepia-[0.4] contrast-[1.05] brightness-[0.72]"
        />
        {/* シネマティックオーバーレイ */}
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        {/* ヴィネット */}
        <div className="cinema-vignette" />
      </div>
      {/* フィルムストリップバー（上） */}
      <div className="absolute top-0 left-0 right-0 film-strip-bar z-10" />
      {/* フィルムストリップバー（下） */}
      <div className="absolute bottom-0 left-0 right-0 film-strip-bar z-10" />

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        {/* ヘッダー */}
        <div
          className="mb-14 transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div className="decorative-line mb-4">
            <span
              className="text-sm tracking-[0.25em] uppercase text-[var(--color-cream)]"
              style={{ fontFamily: "var(--font-vintage-serif)" }}
            >
              Countdown
            </span>
          </div>
          <div className="vintage-flourish mb-6 text-[var(--color-gold-light)]">
            ❦
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-5 tracking-[0.2em] text-[var(--color-cream)]"
            style={{ fontFamily: "var(--font-vintage-serif)" }}
          >
            Counting Down
          </h2>
          <p
            className="text-xs tracking-[0.2em] text-white/80 font-bold"
            style={{ fontFamily: "var(--font-mincho)" }}
          >
            2026年 10月 24日（土）14:30 挙式
          </p>
        </div>

        {/* カウントダウン */}
        {mounted && (
          <div className="flex justify-center">
            {isPast ? (
              <p
                className="text-xl font-bold tracking-widest text-[var(--color-cream)]"
                style={{ fontFamily: "var(--font-mincho)" }}
              >
                🎊 本日、挙式の日です！
              </p>
            ) : (
              <div className="flex items-start gap-2 sm:gap-4">
                <CountCard
                  value={timeLeft.days}
                  label="Days"
                  delay="0ms"
                  isInView={isInView}
                />
                <span className="text-2xl sm:text-3xl font-bold mt-4 animate-pulse-soft text-white/70">
                  :
                </span>
                <CountCard
                  value={timeLeft.hours}
                  label="Hours"
                  delay="100ms"
                  isInView={isInView}
                />
                <span className="text-2xl sm:text-3xl font-bold mt-4 animate-pulse-soft text-white/70">
                  :
                </span>
                <CountCard
                  value={timeLeft.minutes}
                  label="Mins"
                  delay="200ms"
                  isInView={isInView}
                />
                <span className="text-2xl sm:text-3xl font-bold mt-4 animate-pulse-soft text-white/70">
                  :
                </span>
                <CountCard
                  value={timeLeft.seconds}
                  label="Secs"
                  delay="300ms"
                  isInView={isInView}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
