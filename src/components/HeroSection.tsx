'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Swiper as SwiperType } from 'swiper';

const heroSlides = [
  { src: '/hero/hero-1.jpg', alt: 'RIAKA Landmark Residence' },
  { src: '/hero/hero-2.jpg', alt: 'Modern Multi-Level Residence' },
  { src: '/hero/hero-3.jpg', alt: 'Contemporary Custom Home' },
  { src: '/hero/hero-4.jpg', alt: 'Luxury Architectural Villa' },
  { src: '/hero/hero-5.jpg', alt: 'Executive Modern Residence' },
  { src: '/hero/hero-6.jpg', alt: 'High-End Turnkey Build' },
];

export default function HeroSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    // Dynamically import Swiper to avoid SSR issues
    const initSwiper = async () => {
      const { Swiper } = await import('swiper');
      const { Autoplay, EffectFade, Navigation } = await import('swiper/modules');

      if (swiperRef.current) return; // already initialized

      swiperRef.current = new Swiper('.hero-swiper', {
        modules: [Autoplay, EffectFade, Navigation],
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        speed: 1500,
        autoplay: {
          delay: 10000,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        },
        navigation: {
          nextEl: '#hero-next',
          prevEl: '#hero-prev',
        },
        observer: true,
        observeParents: true,
        grabCursor: false,
        allowTouchMove: true,
      });

      if (swiperRef.current?.autoplay && !swiperRef.current.autoplay.running) {
        swiperRef.current.autoplay.start();
      }
    };

    initSwiper();

    // Tab visibility — resume autoplay on return
    const onVisibility = () => {
      if (
        document.visibilityState === 'visible' &&
        swiperRef.current?.autoplay
      ) {
        swiperRef.current.autoplay.start();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      swiperRef.current?.destroy(true, true);
      swiperRef.current = null;
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden pt-[68px] lg:pt-[76px] select-none"
    >
      {/* Swiper Slideshow */}
      <div className="swiper hero-swiper">
        <div className="swiper-wrapper">
          {heroSlides.map((slide, i) => (
            <div className="swiper-slide" key={i}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="hero-img"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority={i <= 1}
                quality={90}
                sizes="(max-width: 768px) 180vh, (max-width: 1200px) 100vw, 100vw"
              />
              <div className="absolute inset-0 hero-overlay pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-20 xl:px-24 py-16 lg:py-24 pointer-events-none">
        <div className="max-w-xl text-left pointer-events-auto">
          <div className="flex items-center gap-2.5 mb-3.5">
            <div className="w-6 sm:w-8 h-px bg-white/60" />
            <p className="text-white/70 font-semibold text-xs sm:text-sm uppercase tracking-[1.4px]">
              High-caliber construction solutions
            </p>
          </div>
          <h1 className="font-extrabold text-white text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] leading-[1.12] tracking-tight mb-4 sm:mb-5">
            Quality You
            <br />
            Can Trust
          </h1>
          <p className="text-[#d1d5db] font-normal text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-lg">
            RIAKA focuses on building{' '}
            <strong className="text-white font-semibold">safe, durable homes</strong>{' '}
            alongside general construction for{' '}
            <span className="text-white">multi-storey developments</span>.
          </p>
          <div className="flex flex-wrap items-center gap-3.5">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 bg-navy/90 text-white font-extrabold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-white hover:text-navy transition-all duration-200 shadow-xl hover:-translate-y-0.5"
            >
              <span>Start Your Project</span>
              <svg
                className="w-4 h-4 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-white text-white font-extrabold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              <span>View Projects</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 lg:right-20 z-20 flex items-center gap-3">
        <button
          id="hero-prev"
          type="button"
          aria-label="Previous Slide"
          className="group w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full bg-black/40 hover:bg-black/60 active:scale-95 border border-white/20 text-white flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-sm"
        >
          <svg
            className="w-6 h-6 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          id="hero-next"
          type="button"
          aria-label="Next Slide"
          className="group w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] rounded-full bg-black/40 hover:bg-black/60 active:scale-95 border border-white/20 text-white flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-sm"
        >
          <svg
            className="w-6 h-6 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
