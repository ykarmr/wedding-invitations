"use client";

import { useState } from "react";
import { useInView } from "@/hooks/useInView";

export function InvitationEventInfo() {
  const { ref, isInView } = useInView();
  const [activeTab, setActiveTab] = useState<"train" | "taxi" | "car">("train");

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 px-6 bg-[var(--color-white)] relative"
    >
      <div className="max-w-4xl mx-auto">
        <div className="section-header">
          <span className="magazine-label">Information</span>
          <h2
            className="section-title text-2xl md:text-4xl"
            style={{ fontFamily: "var(--font-yomogi)" }}
          >
            日時と場所
          </h2>
        </div>

        {/* 2カラム構成（日時＆場所） */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 transition-all duration-1000 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* 日時情報カード */}
          <div className="magazine-card !p-5 sm:!p-10 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div>
              <span className="pink-tag mb-4 inline-block">WHEN</span>
              <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-6 font-mincho">
                日時
              </h3>
              <div className="space-y-6 font-mincho text-[var(--color-text)] tracking-wider">
                <div>
                  <p className="text-xs text-[var(--color-text-light)]">
                    挙式日
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[var(--color-text-dark)] mt-1">
                    2026年 10月 10日{" "}
                    <span className="text-xs sm:text-sm">（土）</span>
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-[var(--color-text-light)]">
                      挙式
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-bold mt-1">
                      午前 10:30 <span className="text-xs">開始</span>
                    </p>
                    <p className="text-[10px] sm:text-xs text-[var(--color-text-light)] mt-0.5">
                      （受付 10:00〜）
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-light)]">
                      披露宴
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-bold mt-1">
                      午前 11:15 <span className="text-xs">開始</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-[var(--color-border-light)] text-[10px] sm:text-xs text-[var(--color-text-light)] leading-relaxed">
              ※受付のお願いや親族紹介のある方は、別途付箋に記載されたお時間までにお越しいただけますようお願い申し上げます。
            </div>
          </div>

          {/* 会場情報カード */}
          <div className="magazine-card !p-5 sm:!p-10 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div>
              <span className="elegant-tag mb-4 inline-block">WHERE</span>
              <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-6 font-mincho">
                場所
              </h3>
              <div className="space-y-6 font-mincho text-[var(--color-text)] tracking-wider">
                <div>
                  <p className="text-xs text-[var(--color-text-light)]">
                    会場名
                  </p>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-[var(--color-text-dark)] mt-1">
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
            <div className="mt-8 pt-4 border-t border-[var(--color-border-light)] flex gap-4">
              <a
                href="https://www.bestbridal.co.jp/tokyo/applause_ichigaya/access/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--color-sage-dark)] border-b border-[var(--color-sage-dark)] pb-0.5 hover:text-[var(--color-text-dark)] transition-colors"
              >
                式場公式アクセスページへ
              </a>
            </div>
          </div>
        </div>

        {/* アクセスタブ（少しの動きとインタラクティブ要素） */}
        <div className="mt-16 bg-[var(--color-beige-light)] rounded-2xl p-4 sm:p-8">
          <h3 className="text-center font-bold font-mincho text-[var(--color-text-dark)] mb-6 text-sm sm:text-base md:text-lg">
            アクセス方法
          </h3>

          {/* タブ切り替えボタン */}
          <div className="flex justify-center border-b border-[var(--color-border)] mb-6">
            <button
              onClick={() => setActiveTab("train")}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold font-mincho transition-all border-b-2 -mb-[2px] ${
                activeTab === "train"
                  ? "border-[var(--color-sage)] text-[var(--color-text-dark)]"
                  : "border-transparent text-[var(--color-text-light)] hover:text-[var(--color-text-dark)]"
              }`}
            >
              電車
            </button>
            <button
              onClick={() => setActiveTab("taxi")}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold font-mincho transition-all border-b-2 -mb-[2px] ${
                activeTab === "taxi"
                  ? "border-[var(--color-sage)] text-[var(--color-text-dark)]"
                  : "border-transparent text-[var(--color-text-light)] hover:text-[var(--color-text-dark)]"
              }`}
            >
              タクシー
            </button>
            <button
              onClick={() => setActiveTab("car")}
              className={`px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold font-mincho transition-all border-b-2 -mb-[2px] ${
                activeTab === "car"
                  ? "border-[var(--color-sage)] text-[var(--color-text-dark)]"
                  : "border-transparent text-[var(--color-text-light)] hover:text-[var(--color-text-dark)]"
              }`}
            >
              お車
            </button>
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
        <div className="mt-12 overflow-hidden shadow-md border border-[var(--color-border)] rounded-2xl relative aspect-[16/9]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.2945910855424!2d139.72381339999998!3d35.6943676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cf04d9a4da3%3A0xdcfb22b832132324!2z44Ki44OX44Ot44O844K644K544Kv44Ko44KiIOadseS6rOi_juizk-mkqA!5e0!3m2!1sja!2sjp!4v1780656639251!5m2!1sja!2sjp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[20%] sepia-[10%] contrast-[0.95]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
