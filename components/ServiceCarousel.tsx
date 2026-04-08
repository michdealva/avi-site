"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface ServiceCarouselProps {
  services: {
    id: string;
    title: string;
    description: string;
    icon: string;
  }[];
  iconMap: Record<string, LucideIcon>;
  linkPrefix?: string;
  learnMore?: string;
}

export default function ServiceCarousel({
  services,
  iconMap,
  linkPrefix = "",
  learnMore = "Learn more",
}: ServiceCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  // Auto-scroll slowly
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isPaused) return;

    const interval = setInterval(() => {
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 1, behavior: "auto" });
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isPaused]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 320;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Arrow buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-border-light text-machine-black hover:border-signal transition-colors"
          aria-label="Previous services"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-border-light text-machine-black hover:border-signal transition-colors"
          aria-label="Next services"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {/* Edge fades */}
      {canScrollLeft && (
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-workshop to-transparent" />
      )}
      {canScrollRight && (
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-workshop to-transparent" />
      )}

      {/* Scrollable track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {services.map((service) => {
          const Icon = iconMap[service.icon];
          return (
            <Link
              key={service.id}
              href={`${linkPrefix}/services#${service.id}`}
              className="group flex-shrink-0 w-[280px] md:w-[320px] rounded-lg border border-border-light bg-white p-6 hover:border-signal transition-colors duration-300"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-signal/10">
                {Icon && <Icon className="h-5 w-5 text-signal" strokeWidth={2} />}
              </div>
              <h3 className="text-base font-semibold text-machine-black">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-shop-grey line-clamp-3">
                {service.description}
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-signal transition-colors group-hover:text-signal-dark">
                {learnMore} &rarr;
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
