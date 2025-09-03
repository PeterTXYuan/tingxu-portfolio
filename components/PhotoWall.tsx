"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function PhotoWall() {
  const photos = [
    "/images/selfie1.jpg",
    "/images/selfie2.jpg",
    "/images/selfie3.jpg",
    "/images/selfie4.jpg",
    "/images/selfie5.jpg",
    "/images/selfie6.jpg",
    "/images/selfie7.jpg",
  ];

  const [previewIndex, setPreviewIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreviewIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">My Photo Wall</h2>

      <div
        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4
                   scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
      >
        {photos.map((src, idx) => (
          <div
            key={idx}
            className="snap-center flex-shrink-0 w-64 h-40 relative rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => setPreviewIndex(idx)}
          >
            <Image
              src={src}
              alt={`Photo ${idx + 1}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {previewIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setPreviewIndex(null)}
        >
          <div className="relative max-w-3xl max-h-[80vh] w-full h-full flex items-center justify-center">
            <Image
              src={photos[previewIndex]}
              alt="Preview"
              fill
              className="object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded shadow"
              onClick={() => setPreviewIndex(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
