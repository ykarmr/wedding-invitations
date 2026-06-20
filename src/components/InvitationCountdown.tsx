"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

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
      className="py-20 md:py-28 px-6 relative overflow-hidden"
      style={{ background: "var(--color-cream)" }}
    >
      {/* 背景装飾 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 60%, rgba(157,179,136,0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, rgba(231,168,158,0.06) 0%, transparent 50%)
          `,
        }}
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 opacity-30"
        style={{ background: "var(--color-text-light)" }}
      />

      <div className="max-w-2xl mx-auto relative z-10 text-center">
        {/* ヘッダー */}
        <div
          className="mb-10 transition-all duration-700"
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
              Countdown
            </span>
          </div>
          <h2
            className="text-2xl md:text-4xl font-bold mb-3 tracking-[0.15em]"
            style={{ fontFamily: "var(--font-yomogi)", color: "var(--color-text-dark)" }}
          >
            挙式まであと
          </h2>
          <p
            className="text-xs tracking-widest"
            style={{ color: "var(--color-text-light)", fontFamily: "var(--font-mincho)" }}
          >
            2026年 10月 10日（土）
          </p>
        </div>

        {/* カウントダウン */}
        {mounted && (
          <div className="flex justify-center">
            {isPast ? (
              <p
                className="text-xl font-bold tracking-widest"
                style={{ color: "var(--color-sage)", fontFamily: "var(--font-yomogi)" }}
              >
                🎊 本日、挙式の日です！
              </p>
            ) : (
              <div className="flex items-start gap-2 sm:gap-4">
                <CountCard value={timeLeft.days}    label="Days"  delay="0ms"   isInView={isInView} />
                <span className="text-2xl sm:text-3xl font-bold mt-4 animate-pulse-soft" style={{ color: "var(--color-text-light)" }}>:</span>
                <CountCard value={timeLeft.hours}   label="Hours" delay="100ms" isInView={isInView} />
                <span className="text-2xl sm:text-3xl font-bold mt-4 animate-pulse-soft" style={{ color: "var(--color-text-light)" }}>:</span>
                <CountCard value={timeLeft.minutes} label="Mins"  delay="200ms" isInView={isInView} />
                <span className="text-2xl sm:text-3xl font-bold mt-4 animate-pulse-soft" style={{ color: "var(--color-text-light)" }}>:</span>
                <CountCard value={timeLeft.seconds} label="Secs"  delay="300ms" isInView={isInView} />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
