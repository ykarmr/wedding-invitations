import { Suspense } from "react";
import { InvitationCountdown } from "@/components/InvitationCountdown";
import { InvitationCover } from "@/components/InvitationCover";
import { InvitationDebugMenu } from "@/components/InvitationDebugMenu";
import { InvitationEventInfo } from "@/components/InvitationEventInfo";
import { InvitationFusen } from "@/components/InvitationFusen";
import { InvitationGallery } from "@/components/InvitationGallery";
import { InvitationGreeting } from "@/components/InvitationGreeting";
import { InvitationMessage } from "@/components/InvitationMessage";
import { InvitationRsvp } from "@/components/InvitationRsvp";

export default function InvitationPage() {
  return (
    <div className="min-h-screen bg-[var(--color-cream)]">
      <main className="w-full">
        {/* 1. 表紙 */}
        <InvitationCover />

        {/* 2. 招待状の挨拶文 */}
        <InvitationGreeting />

        {/* 3. 新郎新婦からの一言（写真付き・ふたりを紹介） */}
        <InvitationMessage />

        {/* 4. フォトギャラリー（写真で魅せる） */}
        <InvitationGallery />

        {/* 5. カウントダウン（当日への期待感を高める） */}
        <InvitationCountdown />

        {/* 6. 個別付箋（クエリパラメータ role に応じて表示） */}
        <Suspense
          fallback={
            <div className="py-12 text-center text-xs opacity-50 font-mincho">
              Loading...
            </div>
          }
        >
          <InvitationFusen />
        </Suspense>

        {/* 7. 開催概要 & アクセス */}
        <InvitationEventInfo />

        {/* 8. RSVP（出欠フォーム） */}
        <InvitationRsvp />
      </main>

      {/* フッター / テスト・動作確認用エリア */}
      <footer className="py-12 bg-[var(--color-beige-light)] border-t border-[var(--color-border-light)] text-center font-mincho">
        <p className="text-xs text-[var(--color-text-light)]">
          © 2026 Naoto & Yui. All Rights Reserved.
        </p>

        {/* 管理者・動作確認用のパラメータ切り替えメニュー */}
        {process.env.NODE_ENV === "development" && (
          <Suspense fallback={null}>
            <InvitationDebugMenu />
          </Suspense>
        )}
      </footer>
    </div>
  );
}
