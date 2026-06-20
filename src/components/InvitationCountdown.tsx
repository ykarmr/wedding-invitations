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
      <div
        className="glass-card relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center rounded-2xl overflow-hidden border border-[var(--color-border-light)]"
        style={{
          boxShadow:
            "0 10px 25px rgba(95, 75, 61, 0.08), inset 0 2px 4px rgba(255,255,255,0.6)",
        }}
      >
        <div
          className="absolute left-0 right-0 h-[1px] top-1/2 -translate-y-1/2 opacity-25"
          style={{ background: "var(--color-border)" }}
        />
        <span
          className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold tabular-nums leading-none"
          style={{
            fontFamily: "var(--font-mincho)",
            color: "var(--color-text-dark)",
          }}
        >
          {String(value).padStart(label === "Days" ? 3 : 2, "0")}
        </span>
      </div>
      <span
        className="text-[10px] sm:text-xs tracking-[0.2em] uppercase font-bold"
        style={{ color: "var(--color-text-light)", fontFamily: "var(--font-mincho)" }}
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
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 relative overflow-hidden"
    >
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <img
          src={updateEnvPath("/images/invitation_cover.jpg")}
          alt="Wedding Backdrop"
          className="w-full h-full object-cover grayscale-[15%] sepia-[10%] contrast-[0.9]"
        />
        {/* ダークシネマティックオーバーレイ */}
        <div className="absolute inset-0 bg-black/55 mix-blend-multiply"></div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        {/* ヘッダー */}
        <div
          className="mb-12 transition-all duration-700"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <div className="decorative-line mb-6">
            <span
              className="text-xs tracking-[0.25em] uppercase font-bold text-[var(--color-cream)]"
              style={{ fontFamily: "var(--font-mincho)" }}
            >
              Countdown
            </span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 tracking-[0.2em] text-[var(--color-cream)]"
            style={{ fontFamily: "var(--font-mincho)" }}
          >
            挙式まであと
          </h2>
          <p
            className="text-xs tracking-[0.2em] text-white/80 font-bold"
            style={{ fontFamily: "var(--font-mincho)" }}
          >
            2026年 10月 24日（土）10:30 挙式
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
                <CountCard value={timeLeft.days}    label="Days"  delay="0ms"   isInView={isInView} />
                <span className="text-2xl sm:text-3xl font-bold mt-4 animate-pulse-soft text-white/70">:</span>
                <CountCard value={timeLeft.hours}   label="Hours" delay="100ms" isInView={isInView} />
                <span className="text-2xl sm:text-3xl font-bold mt-4 animate-pulse-soft text-white/70">:</span>
                <CountCard value={timeLeft.minutes} label="Mins"  delay="200ms" isInView={isInView} />
                <span className="text-2xl sm:text-3xl font-bold mt-4 animate-pulse-soft text-white/70">:</span>
                <CountCard value={timeLeft.seconds} label="Secs"  delay="300ms" isInView={isInView} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
