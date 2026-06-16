"use client";

import { useInView } from "@/hooks/useInView";
import updateEnvPath from "@/utils/updateEnvPath";

export function InvitationGallery() {
  const { ref, isInView } = useInView();

  const photos = [
    { src: "/images/invitation_gallery1.jpg", alt: "Couple walking" },
    { src: "/images/invitation_gallery2.jpg", alt: "Wedding rings" },
    { src: "/images/invitation_gallery3.jpg", alt: "Champagne glasses" },
  ];

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-4 md:px-6 bg-[var(--color-white)] relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="section-header">
          <span className="magazine-label">Gallery</span>
          <h2
            className="section-title text-2xl md:text-4xl"
            style={{ fontFamily: "var(--font-yomogi)" }}
          >
            フォトギャラリー
          </h2>
        </div>

        {/* 320pxなど極小画面では1列(grid-cols-1)、sm(640px)以上で3列(sm:grid-cols-3)に可変 */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 transition-all duration-1000 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              className="bg-[var(--color-white)] p-3 shadow-md border border-[var(--color-border-light)] transform hover:shadow-xl transition-all duration-300 rotate-[-0.5deg] odd:rotate-[0.5deg]"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={updateEnvPath(photo.src)}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 grayscale-[10%] hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
