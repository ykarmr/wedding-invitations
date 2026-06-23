"use client";

import { useInView } from "@/hooks/useInView";
import updateEnvPath from "@/utils/updateEnvPath";

const photos = [
  { src: "/images/invitation_gallery1.jpg", alt: "Couple photo 1" },
  { src: "/images/invitation_gallery2.jpg", alt: "Couple photo 2" },
  { src: "/images/invitation_gallery3.jpg", alt: "Couple photo 3" },
];

export function InvitationGallery() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden bg-black py-20 md:py-28 px-6 md:px-12"
    >
      {/* ノイズテクスチャ */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* レターボックスバー（上） */}
      <div
        className="absolute top-0 left-0 right-0 z-20 pointer-events-none"
        style={{ height: "clamp(18px, 3vh, 36px)", background: "rgb(6, 4, 2)" }}
      />
      {/* レターボックスバー（下） */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none"
        style={{ height: "clamp(18px, 3vh, 36px)", background: "rgb(6, 4, 2)" }}
      />

      {/* ゴールドフレーム */}
      <div className="absolute inset-4 sm:inset-6 md:inset-8 border border-[var(--color-gold)]/25 z-10 pointer-events-none" />
      <div className="absolute inset-5 sm:inset-7 md:inset-9 border border-double border-[var(--color-gold)]/15 z-10 pointer-events-none" />

      {/* セクションヘッダー */}
      <div
        className="relative z-10 text-center mb-12 md:mb-16 transition-all duration-700"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(16px)",
        }}
      >
        <div className="decorative-line mb-4">
          <span
            className="text-xs tracking-[0.4em] uppercase text-white/60"
            style={{ fontFamily: "var(--font-vintage-serif)" }}
          >
            Gallery
          </span>
        </div>
        <div
          className="text-xl text-[var(--color-gold-light)] mb-4"
          style={{
            fontFamily: "var(--font-vintage-serif)",
            letterSpacing: "0.3em",
          }}
        >
          ❦
        </div>
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.2em] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
          style={{ fontFamily: "var(--font-vintage-serif)" }}
        >
          Photo Gallery
        </h2>
        <p
          className="mt-4 text-xs tracking-[0.38em] text-white/45"
          style={{ fontFamily: "var(--font-vintage-serif)" }}
        >
          Our Precious Moments
        </p>
      </div>

      {/* 写真グリッド */}
      <div
        className={`relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto transition-all duration-1000 transform ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
        style={{ transitionDelay: "150ms" }}
      >
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="relative aspect-[4/5] overflow-hidden bg-black/40"
          >
            <img
              src={updateEnvPath(photo.src)}
              alt={photo.alt}
              className="w-full h-full object-cover absolute inset-0 vintage-photo hover:scale-105 transition-transform duration-700"
            />
            {/* 個別ヴィネット */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
          </div>
        ))}
      </div>
    </section>
  );
}
