"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

export function InvitationEventInfo() {
  const { ref, isInView } = useInView();
  const [activeTab, setActiveTab] = useState<"train" | "taxi" | "car">("train");

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 relative"
      style={{
        background:
          "linear-gradient(180deg, #faf8f4 0%, #f7f5f0 30%, #f5f3ee 60%, #f8f6f2 100%)",
      }}
    >
      {/* フルール・ド・リス調パターン */}
      <div className="pattern-fleur" />
      {/* コーナーオーナメント */}
      <div className="corner-ornament" />
      {/* ゴールドインナーフレーム */}
      <div className="luxury-inner-frame" />

      {/* 上部より流れる細線（Greetingと同一パターン） */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-12 bg-[var(--color-text-light)] opacity-30"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="section-header text-center mb-14">
          <div className="decorative-line mb-4">
            <span
              className="text-sm tracking-[0.25em] uppercase text-[var(--color-text-light)] font-medium"
              style={{ fontFamily: "var(--font-vintage-serif)" }}
            >
              Information
            </span>
          </div>
          <div className="vintage-flourish mb-4">❦</div>
          <h2
            className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-[var(--color-text-dark)] mt-2"
            style={{ fontFamily: "var(--font-vintage-serif)" }}
          >
            Schedule & Venue
          </h2>
        </div>

        {/* 2カラム構成（日時＆場所） */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 transition-all duration-1000 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* 日時情報 */}
          <div className="border-t-4 border-double border-[var(--color-border)] pt-8 sm:pt-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 justify-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-rose)]"></span>
                <span className="text-xs tracking-[0.2em] font-bold text-[var(--color-rose-dark)] uppercase" style={{ fontFamily: "var(--font-vintage-serif)" }}>WHEN</span>
              </div>
              <h3
                className="text-xl font-bold text-[var(--color-text-dark)] mb-6"
                style={{ fontFamily: "var(--font-vintage-serif)" }}
              >
                Date & Time
              </h3>
              <div className="space-y-6 font-mincho text-[var(--color-text)] tracking-wider">
                <div>
                  <p className="text-xs text-[var(--color-text-light)]">
                    挙式日
                  </p>
                  <p className="text-lg sm:text-xl font-bold text-[var(--color-text-dark)] mt-1">
                    2026年 10月 24日{" "}
                    <span className="text-xs sm:text-sm">（土）</span>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-[var(--color-text-light)]">
                      挙式
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-bold mt-1">
                      午後 2:30 <span className="text-xs">開始</span>
                    </p>
                    <p className="text-[10px] sm:text-xs text-[var(--color-text-light)] mt-0.5">
                      （受付 1:30〜）
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-light)]">
                      披露宴
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-bold mt-1">
                      午後 3:15 <span className="text-xs">開始</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[var(--color-border-light)] text-[10px] sm:text-xs text-[var(--color-text-light)] leading-relaxed">
              ※受付のお願いや親族紹介のある方は、別途付箋に記載されたお時間までにお越しいただけますようお願い申し上げます。
            </div>
          </div>

          {/* 会場情報 */}
          <div className="border-t-4 border-double border-[var(--color-border)] pt-8 sm:pt-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 justify-start">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-sage-dark)]"></span>
                <span className="text-xs tracking-[0.2em] font-bold text-[var(--color-sage-dark)] uppercase" style={{ fontFamily: "var(--font-vintage-serif)" }}>WHERE</span>
              </div>
              <h3
                className="text-xl font-bold text-[var(--color-text-dark)] mb-6"
                style={{ fontFamily: "var(--font-vintage-serif)" }}
              >
                Venue
              </h3>
              <div className="space-y-6 font-mincho text-[var(--color-text)] tracking-wider">
                <div>
                  <p className="text-xs text-[var(--color-text-light)]">
                    会場名
                  </p>
                  <p className="text-base sm:text-lg font-bold text-[var(--color-text-dark)] mt-1">
                    アプローズスクエア 東京迎賓館
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-light)]">住所</p>
                  <p className="text-xs sm:text-sm mt-1 leading-relaxed">
                    〒162-0064 <br />
                    東京都新宿区市谷仲之町3-5
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-light)]">
                    電話番号
                  </p>
                  <p className="text-xs sm:text-sm mt-1">03-5368-4700</p>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-[var(--color-border-light)] flex">
              <a
                href="https://www.bestbridal.co.jp/tokyo/applause_ichigaya/access/"
                target="_blank"
                rel="noopener noreferrer"
                className="link-outline-btn w-full sm:w-auto"
              >
                <span className="flex items-center gap-1.5">
                  <span>式場公式アクセスページへ</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
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
            </div>
          </div>
        </div>

        {/* アクセスタブ */}
        <div className="mt-16 border-t-4 border-double border-[var(--color-border)] pt-10">
          <h3
            className="text-center font-bold text-[var(--color-text-dark)] mb-6 text-sm sm:text-base md:text-lg tracking-widest"
            style={{ fontFamily: "var(--font-vintage-serif)" }}
          >
            — Access —
          </h3>

          {/* タブ切り替えボタン */}
          <div className="flex justify-center mb-8">
            <div className="access-tabs-container">
              <button
                onClick={() => setActiveTab("train")}
                className={`access-tab-btn font-mincho ${
                  activeTab === "train" ? "active" : "inactive"
                }`}
              >
                電車
              </button>
              <button
                onClick={() => setActiveTab("taxi")}
                className={`access-tab-btn font-mincho ${
                  activeTab === "taxi" ? "active" : "inactive"
                }`}
              >
                タクシー
              </button>
              <button
                onClick={() => setActiveTab("car")}
                className={`access-tab-btn font-mincho ${
                  activeTab === "car" ? "active" : "inactive"
                }`}
              >
                お車
              </button>
            </div>
          </div>

          {/* タブ詳細コンテンツ (アコーディオン風アニメーション付き) */}
          <div className="font-mincho text-sm md:text-base text-[var(--color-text)] leading-relaxed min-h-[120px]">
            {activeTab === "train" && (
              <div className="space-y-3 animate-fade-in">
                <p className="font-bold text-[var(--color-text-dark)]">
                  ● 最寄り駅からのアクセス
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-[var(--color-text-light)]">
                  <li>
                    都営新宿線{" "}
                    <span className="font-bold text-[var(--color-text-dark)]">
                      「曙橋駅」A2出口
                    </span>{" "}
                    より徒歩3分 /{" "}
                    <span className="font-bold text-[var(--color-text-dark)]">
                      A3出口
                    </span>{" "}
                    より徒歩2分
                  </li>
                  <li>
                    都営大江戸線{" "}
                    <span className="font-bold text-[var(--color-text-dark)]">
                      「牛込柳町駅」南東出口
                    </span>{" "}
                    より徒歩7分
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "taxi" && (
              <div className="space-y-3 animate-fade-in">
                <p className="font-bold text-[var(--color-text-dark)]">
                  ● タクシーでのアクセス
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-[var(--color-text-light)]">
                  <li>
                    JR{" "}
                    <span className="font-bold text-[var(--color-text-dark)]">
                      「新宿駅」
                    </span>{" "}
                    南口または西口より乗車、車で約10分。
                  </li>
                  <li>
                    運転手の方へ「市谷仲之町（いちがやなかのちょう）のアプローズスクエアまで」とお伝えいただくとスムーズです。
                  </li>
                </ul>
              </div>
            )}

            {activeTab === "car" && (
              <div className="space-y-3 animate-fade-in">
                <p className="font-bold text-[var(--color-text-dark)]">
                  ● お車でお越しの方へ
                </p>
                <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-[var(--color-text-light)]">
                  <li>
                    首都高速4号新宿線{" "}
                    <span className="font-bold text-[var(--color-text-dark)]">
                      「外苑出口」
                    </span>{" "}
                    より約10分。
                  </li>
                  <li>
                    式場専用の駐車場スペースが限られておりますので、できる限り公共交通機関のご利用をお願いいたします。お車でお越しいただく場合は、事前にお問い合わせください。
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Google Map 埋め込み (スクロールフェードイン) */}
        <div className="mt-14 overflow-hidden shadow-lg border border-[var(--color-border)] rounded-xl relative aspect-[16/9]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.2945910855424!2d139.72381339999998!3d35.6943676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cf04d9a4da3%3A0xdcfb22b832132324!2z44Ki44OX44Ot44O844K644K544Kv44Ko44KiIOadseS6rOi_juizk-mkqA!5e0!3m2!1sja!2sjp!4v1780656639251!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[30%] sepia-[20%] contrast-[0.93] brightness-[0.97]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
