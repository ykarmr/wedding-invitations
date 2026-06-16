"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export function InvitationDebugMenu() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || undefined;

  return (
    <div className="mt-6 max-w-md mx-auto p-4 border border-dashed border-[var(--color-border)] rounded-xl bg-[var(--color-white)]/50">
      <p className="text-[10px] font-bold text-[var(--color-text-light)] uppercase tracking-wider mb-2 font-mincho">
        【動作確認用】ゲストの役割を選択して付箋表示をテストできます
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <Link
          href="/invitation"
          className={`px-2.5 py-1 text-[10px] rounded border transition-colors font-mincho ${
            !role
              ? "bg-[var(--color-text-dark)] text-white border-[var(--color-text-dark)]"
              : "bg-white text-[var(--color-text-light)] border-[var(--color-border)] hover:border-[var(--color-text-light)]"
          }`}
        >
          通常ゲスト
        </Link>
        <Link
          href="/invitation?role=reception"
          className={`px-2.5 py-1 text-[10px] rounded border transition-colors font-mincho ${
            role === "reception"
              ? "bg-[var(--color-text-dark)] text-white border-[var(--color-text-dark)]"
              : "bg-white text-[var(--color-text-light)] border-[var(--color-border)] hover:border-[var(--color-text-light)]"
          }`}
        >
          受付係 (reception)
        </Link>
        <Link
          href="/invitation?role=speech"
          className={`px-2.5 py-1 text-[10px] rounded border transition-colors font-mincho ${
            role === "speech"
              ? "bg-[var(--color-text-dark)] text-white border-[var(--color-text-dark)]"
              : "bg-white text-[var(--color-text-light)] border-[var(--color-border)] hover:border-[var(--color-text-light)]"
          }`}
        >
          祝辞 (speech)
        </Link>
        <Link
          href="/invitation?role=dry"
          className={`px-2.5 py-1 text-[10px] rounded border transition-colors font-mincho ${
            role === "dry"
              ? "bg-[var(--color-text-dark)] text-white border-[var(--color-text-dark)]"
              : "bg-white text-[var(--color-text-light)] border-[var(--color-border)] hover:border-[var(--color-text-light)]"
          }`}
        >
          乾杯 (dry)
        </Link>
        <Link
          href="/invitation?role=family"
          className={`px-2.5 py-1 text-[10px] rounded border transition-colors font-mincho ${
            role === "family"
              ? "bg-[var(--color-text-dark)] text-white border-[var(--color-text-dark)]"
              : "bg-white text-[var(--color-text-light)] border-[var(--color-border)] hover:border-[var(--color-text-light)]"
          }`}
        >
          親族紹介 (family)
        </Link>
      </div>
    </div>
  );
}
