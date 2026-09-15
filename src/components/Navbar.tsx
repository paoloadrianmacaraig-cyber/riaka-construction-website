'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);

  const updateNavbar = useCallback(() => {
    const heroSection = document.getElementById('hero');
    const heroThreshold = heroSection ? heroSection.offsetHeight - 80 : 550;
    setIsPastHero(window.scrollY >= heroThreshold);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateNavbar, { passive: true });
    window.addEventListener('resize', updateNavbar, { passive: true });
    updateNavbar();
    return () => {
      window.removeEventListener('scroll', updateNavbar);
      window.removeEventListener('resize', updateNavbar);
    };
  }, [updateNavbar]);

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        id="navbar"
        className={`flex items-center px-6 lg:px-16${isPastHero ? ' is-past-hero' : ''}`}
      >
        <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/branding/riaka-logo.png"
              alt="RIAKA Logo"
              width={64}
              height={64}
              className="h-14 lg:h-16 w-14 lg:w-16 object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10">
            {['About', 'Services', 'Projects', 'Process'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="nav-link font-bold text-navy text-[15px] tracking-wide"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden lg:flex items-center justify-center bg-navy text-white font-bold text-sm tracking-wide rounded-full px-6 py-2.5 hover:bg-blue transition-colors duration-200 shadow-sm hover:shadow"
          >
            Get in Touch
          </a>

          {/* Hamburger */}
          <button
            id="menu-btn"
            type="button"
            aria-label="Toggle menu"
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

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`${menuOpen ? 'block' : 'hidden'} fixed top-[68px] left-0 right-0 z-40 bg-white/95 backdrop-blur-xl shadow-xl lg:hidden border-b border-gray-100`}
      >
        <ul className="flex flex-col px-8 py-5 gap-4">
          {['About', 'Services', 'Projects', 'Process'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="font-bold text-navy text-base tracking-wide block"
                onClick={closeMobileMenu}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="font-bold text-white bg-navy rounded-full px-5 py-2 text-sm inline-block"
              onClick={closeMobileMenu}
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
