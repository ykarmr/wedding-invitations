"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

export function InvitationFusen() {
  const { ref, isInView } = useInView();
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || undefined;
  const [activeRole, setActiveRole] = useState<string | undefined>(role);

  useEffect(() => {
    setActiveRole(role);
  }, [role]);

  // 各付箋データの定義
  const fusenData: Record<
    string,
    { title: string; text: string; note?: string }
  > = {
    dry: {
      title: "乾杯のご発声のご依頼",
      text: "誠に恐れ入りますが当日乾杯のご発声を賜りたく\nお願い申し上げます",
    },
    speech: {
      title: "主賓ご祝辞のご依頼",
      text: "誠に恐れ入りますが当日ご祝辞を賜りますよう\nお願い申し上げます",
    },
    reception: {
      title: "受付係のご依頼",
      text: "誠に恐れ入りますが私共の受付係をお願い致したく\n当日は 午前10時00分 までにお越しくださいますよう\nよろしくお願い申し上げます",
      note: "※挙式は午前10時30分からとなります",
    },
    family: {
      title: "親族紹介のご案内",
      text: "尚ご多用中恐縮に存じますが親族紹介にも\nご列席賜りたく当日 午前10時00分 までに\nお越しくださいますようお願い申し上げます",
      note: "※挙式に先立ち親族控室にて親族紹介を行います",
    },
  };

  // 該当する付箋がない場合は非表示
  if (!activeRole || !fusenData[activeRole]) {
    return null;
  }

  const currentFusen = fusenData[activeRole];

  return (
    <section
      ref={ref}
      className="py-12 px-6 bg-[var(--color-beige-light)] relative overflow-hidden"
    >
      <div className="max-w-md mx-auto">
        {/* 滑り出すような紙風のアニメーションカード */}
        <div
          className={`bg-[var(--color-white)] border border-[var(--color-gold-light)] p-5 sm:p-8 shadow-xl relative transition-all duration-1000 transform ${
            isInView
              ? "opacity-100 translate-y-0 rotate-[0.5deg]"
              : "opacity-0 translate-y-16 rotate-[-2deg]"
          }`}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          }}
        >
          {/* 金色の飾りピン風デザイン */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[var(--color-gold)] opacity-70 shadow-inner flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[var(--color-white)]"></div>
          </div>

          <div className="text-center space-y-6 pt-4">
            <span className="text-[10px] tracking-[0.3em] font-serif uppercase text-[var(--color-gold)] font-bold">
              Special Message
            </span>

            <h3
              className="text-base sm:text-lg font-bold text-[var(--color-text-dark)] pb-3 border-b border-dashed border-[var(--color-border)]"
              style={{ fontFamily: "var(--font-yomogi)" }}
            >
              {currentFusen.title}
            </h3>

            {/* 改行を反映して表示 */}
            <p className="text-xs sm:text-sm md:text-base text-[var(--color-text)] leading-[2.2] tracking-widest font-mincho whitespace-pre-line">
              {currentFusen.text}
            </p>

            {currentFusen.note && (
              <p className="text-xs text-[var(--color-text-light)] pt-2">
                {currentFusen.note}
              </p>
            )}
          </div>

          {/* 付箋の下に引くアンティーク風レースシャドウイメージ */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--color-gold-light)]/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
