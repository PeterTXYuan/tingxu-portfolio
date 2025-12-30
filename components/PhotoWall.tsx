"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const SCROLL_SPEED = 0.2; // px per frame – 控制动画速度

export default function PhotoWall() {
  const photos = [
    "/images/selfie1.jpg",
    "/images/selfie2.jpg",
    "/images/selfie3.jpg",
    "/images/selfie4.jpg",
    "/images/selfie5.jpg",
    "/images/selfie6.jpg",
    "/images/selfie7.jpg",
    "/images/selfie8.jpg",
  ];

  // 只在内部做两套，用于无缝循环（屏幕上始终主要看到一套）
  const extendedPhotos = [...photos, ...photos];

  const [previewIndex, setPreviewIndex] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offsetRef = useRef(0);

  // Close preview on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Auto-scrolling using translateX（不再依赖 scrollLeft）
  useEffect(() => {
    let animationFrame: number;

    const step = () => {
      const track = trackRef.current;
      if (!track) return;

      if (!isHovered) {
        offsetRef.current -= SCROLL_SPEED;

        // 一套照片的宽度 = 总宽度的一半
        const totalWidth = track.scrollWidth / 2;

        // 当已经完全滚完一整套后，从头再来
        if (Math.abs(offsetRef.current) >= totalWidth) {
          offsetRef.current = 0;
        }

        track.style.transform = `translateX(${offsetRef.current}px)`;
      }

      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [isHovered]);

  return (
    <section className="mt-10">
      {/* Section Header */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Featured Moments</h2>
        <p className="mt-2 text-sm text-gray-500">A glimpse into my life</p>
      </div>

      {/* Scrollable Photo Strip */}
      <div className="relative -mx-6 md:-mx-10 overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6 pb-6 px-6 md:px-10 will-change-transform"
          onWheel={(e) => {
            // 支持鼠标滚轮横向滚动：用垂直滚轮控制横向位移
            e.preventDefault();
            offsetRef.current -= e.deltaY * 0.5;
            const track = trackRef.current;
            if (!track) return;
            const totalWidth = track.scrollWidth / 2;
            if (offsetRef.current <= -totalWidth) offsetRef.current = 0;
            if (offsetRef.current >= 0) offsetRef.current = 0;
            track.style.transform = `translateX(${offsetRef.current}px)`;
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {extendedPhotos.map((src, idx) => (
            <div
              key={idx}
              onClick={() => setPreviewIndex(idx % photos.length)}
              className="
                flex-shrink-0
                relative
                w-[420px] h-[260px]
                rounded-2xl
                overflow-hidden
                shadow-md
                cursor-pointer
                transition-all
                duration-300
                hover:scale-[1.03]
                hover:shadow-xl
              "
            >
              <Image
                src={src}
                alt={`Moment ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Subtle hint */}
        <p className="mt-2 text-center text-xs text-gray-400">
          Auto-scrolling · You can also mouse scroll or tap to preview
        </p>
      </div>

      {/* Fullscreen Preview */}
      {previewIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setPreviewIndex(null)}
        >
          <div
            className="relative h-full max-h-[85vh] w-full max-w-5xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[previewIndex]}
              alt="Preview"
              fill
              className="rounded-xl object-contain"
            />

            <button
              className="
                absolute
                top-4 right-4
                rounded-full
                bg-white/90
                px-4 py-1
                text-sm
                font-medium
                shadow
                hover:bg-white
              "
              onClick={() => setPreviewIndex(null)}
            >
              Close ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
