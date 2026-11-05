"use client";
import React, { useState, useEffect } from "react";
import { galleryImages } from "@/data/site";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface LightboxGalleryProps {
  images?: typeof galleryImages;
  columns?: 4 | 3;
}

export function LightboxGallery({ images = galleryImages, columns = 4 }: LightboxGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const gridClass = columns === 3 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-2 md:grid-cols-4";

  return (
    <div>
      {/* Lightbox Images Grid - Strict: NO text or title shown on hover */}
      <div className={`grid ${gridClass} gap-4`}>
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => openLightbox(i)}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer border border-slate-200/90 shadow-sm hover:shadow-lg transition-all"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLightbox(i);
              }
            }}
            aria-label={`View full photo: ${img.title}`}
          >
            <img
              src={img.url}
              alt={img.title}
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget;
                if ((img as any).fallbackUrl && target.src !== (img as any).fallbackUrl) {
                  target.src = (img as any).fallbackUrl;
                } else {
                  target.src = "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80";
                }
              }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Subtle Hover Overlay - ONLY icon, NO text/title on hover */}
            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm text-slate-950 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                <ZoomIn className="w-5 h-5 text-amber-700" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Popup Modal - Title & Category are only displayed here on click */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all border border-white/20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 sm:left-8 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all border border-white/20"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Modal Image & Caption */}
          <div
            className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black">
              <img
                src={images[selectedIndex].url}
                alt={images[selectedIndex].title}
                onError={(e) => {
                  const target = e.currentTarget;
                  const item = images[selectedIndex] as any;
                  if (item?.fallbackUrl && target.src !== item.fallbackUrl) {
                    target.src = item.fallbackUrl;
                  } else {
                    target.src = "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80";
                  }
                }}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Caption Strip inside the popup modal */}
            <div className="mt-4 text-center text-white space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15">
                {images[selectedIndex].category} • {selectedIndex + 1} of {images.length}
              </span>
              <h4 className="text-base sm:text-lg font-bold font-serif">
                {images[selectedIndex].title}
              </h4>
            </div>
          </div>

          {/* Navigation Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 sm:right-8 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all border border-white/20"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </div>
  );
}
