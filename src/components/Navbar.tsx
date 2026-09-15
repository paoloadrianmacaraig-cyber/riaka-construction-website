'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) {
      const handleScroll = () => {
        setIsPastHero(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPastHero(!entry.isIntersecting);
      },
      { rootMargin: '-76px 0px 0px 0px', threshold: 0 }
    );

    observer.observe(heroSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        id="navbar"
        className={`flex items-center px-6 lg:px-16${isPastHero ? ' is-past-hero' : ''}`}
      >
        <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/branding/riaka-logo.png"
              alt="RIAKA Logo"
              width={64}
              height={64}
              className="h-14 lg:h-16 w-14 lg:w-16 object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
            {['About', 'Services', 'Projects', 'Process'].map((item) => (
              <li key={item}>
                <Link
                  href={`/#${item.toLowerCase()}`}
                  className="nav-link font-bold text-navy text-[15px] tracking-wide"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/#contact"
            className="hidden lg:flex items-center justify-center bg-navy text-white font-bold text-sm tracking-wide rounded-full px-6 py-2.5 hover:opacity-80 transition-all duration-200 shadow-sm hover:shadow"
          >
            Get in Touch
          </Link>

          {/* Hamburger */}
          <button
            id="menu-btn"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden flex flex-col gap-[5px] cursor-pointer p-1"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span
              id="bar1"
              className="block w-6 h-0.5 bg-navy transition-all duration-300"
              style={{
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : '',
              }}
            />
            <span
              id="bar2"
              className="block w-6 h-0.5 bg-navy transition-all duration-300"
              style={{ opacity: menuOpen ? '0' : '' }}
            />
            <span
              id="bar3"
              className="block w-6 h-0.5 bg-navy transition-all duration-300"
              style={{
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : '',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      <div
        className={`fixed inset-0 top-[68px] bg-black/30 backdrop-blur-xs z-30 lg:hidden transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu Dropdown Panel */}
      <div
        id="mobile-menu"
        className={`fixed top-[68px] left-0 right-0 z-40 bg-white/98 backdrop-blur-2xl shadow-2xl lg:hidden border-b border-gray-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto visible'
            : 'opacity-0 -translate-y-3 pointer-events-none invisible'
        }`}
      >
        <ul className="flex flex-col px-7 py-5 gap-1.5">
          {['About', 'Services', 'Projects', 'Process'].map((item, index) => (
            <li
              key={item}
              style={{
                transitionDelay: menuOpen ? `${index * 40 + 40}ms` : '0ms',
              }}
              className={`transform transition-all duration-300 ease-out ${
                menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
              }`}
            >
              <Link
                href={`/#${item.toLowerCase()}`}
                className="group flex items-center justify-between py-2.5 px-3.5 rounded-xl font-bold text-navy text-[16px] tracking-wide hover:bg-navy/5 hover:text-blue hover:translate-x-1 active:scale-[0.99] transition-all duration-200"
                onClick={closeMobileMenu}
              >
                <span className="nav-link">{item}</span>
                <svg
                  className="w-4 h-4 text-navy/30 group-hover:text-blue transition-colors duration-200 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </li>
          ))}
          <li
            style={{
              transitionDelay: menuOpen ? '200ms' : '0ms',
            }}
            className={`pt-2.5 transform transition-all duration-300 ease-out ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-2 font-bold text-white bg-navy rounded-full py-3.5 px-6 text-sm tracking-wide shadow-md hover:opacity-90 active:scale-[0.98] transition-all duration-200"
              onClick={closeMobileMenu}
            >
              <span>Get in Touch</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
