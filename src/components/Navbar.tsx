'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const serviceCategories = [
  {
    title: 'Design and Planning',
    href: '/services#design-planning',
  },
  {
    title: 'Construction & Structural',
    href: '/services#construction-building',
  },
  {
    title: 'Specialized Works & Finishes',
    href: '/services#specialized-works',
  },
  {
    title: 'Permits & Assistance',
    href: '/services#permits-financing',
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const menuOpenRef = useRef(menuOpen);
  useEffect(() => {
    menuOpenRef.current = menuOpen;
    if (menuOpen) {
      setIsVisible(true);
    }
  }, [menuOpen]);

  useEffect(() => {
    let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const clampedScrollY = Math.max(0, currentScrollY);

          setIsPastHero(clampedScrollY > 15);

          if (menuOpenRef.current) {
            setIsVisible(true);
            lastScrollY = clampedScrollY;
            ticking = false;
            return;
          }

          // Always show navbar near the top of page
          if (clampedScrollY <= 30) {
            setIsVisible(true);
          } else {
            const diff = clampedScrollY - lastScrollY;
            // Scrolling down -> hide navbar
            if (diff > 6) {
              setIsVisible(false);
            }
            // Scrolling up -> reveal navbar
            else if (diff < -6) {
              setIsVisible(true);
            }
          }

          lastScrollY = clampedScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
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

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const handleCategoryClick = (href: string) => {
    const [path, hash] = href.split('#');
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      if (currentPath === path || (path === '' && currentPath === '/services')) {
        if (hash === 'design-planning' || !hash) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`flex items-center px-6 lg:px-16 backdrop-blur-md lg:backdrop-blur-lg ${
          isPastHero ? 'is-past-hero' : ''
        } ${!isVisible ? 'is-hidden' : ''}`}
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
            <li>
              <Link
                href="/#about"
                className="nav-link font-bold text-navy text-[15px] tracking-wide"
              >
                About
              </Link>
            </li>

            {/* Services with Hover Dropdown (Clean Divided List Style) */}
            <li className="relative group py-2 flex items-center">
              <Link
                href="/#services"
                className="flex items-center gap-1.5 font-bold text-navy text-[15px] tracking-wide cursor-pointer"
              >
                <span className="nav-link">Services</span>
                <svg
                  className="w-3.5 h-3.5 text-navy transition-transform duration-200 group-hover:rotate-180 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>

              {/* Clean Divided Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 min-w-[280px] w-max max-w-[320px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                <div className="bg-white rounded-lg shadow-xl border border-gray-200 divide-y divide-gray-200 overflow-hidden">
                  {serviceCategories.map((cat) => (
                    <Link
                      key={cat.title}
                      href={cat.href}
                      className="block px-5 py-3.5 text-[14px] font-semibold text-gray-800 hover:text-navy hover:bg-gray-50 transition-colors leading-snug"
                      onClick={() => handleCategoryClick(cat.href)}
                    >
                      {cat.title}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li>
              <Link
                href="/#projects"
                className="nav-link font-bold text-navy text-[15px] tracking-wide"
              >
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="/#process"
                className="nav-link font-bold text-navy text-[15px] tracking-wide"
              >
                Process
              </Link>
            </li>
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
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl text-navy hover:bg-navy/5 active:scale-90 transition-all duration-200 border-none bg-transparent cursor-pointer focus:outline-none"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <div className="w-6 h-5 relative flex items-center justify-center pointer-events-none">
              <span
                id="bar1"
                className={`absolute left-0 top-[9px] w-6 h-[2px] bg-navy rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-[7px] rotate-0'
                }`}
              />
              <span
                id="bar2"
                className={`absolute left-0 top-[9px] w-6 h-[2px] bg-navy rounded-full transition-all duration-200 ease-out ${
                  menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}
              />
              <span
                id="bar3"
                className={`absolute left-0 top-[9px] w-6 h-[2px] bg-navy rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-[7px] rotate-0'
                }`}
              />
            </div>
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
          {/* About */}
          <li
            style={{ transitionDelay: menuOpen ? '40ms' : '0ms' }}
            className={`transform transition-all duration-300 ease-out ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <Link
              href="/#about"
              className="group flex items-center py-2.5 px-3.5 rounded-xl font-bold text-navy text-[16px] tracking-wide hover:bg-navy/5 hover:text-blue hover:translate-x-1 active:scale-[0.99] transition-all duration-200"
              onClick={closeMobileMenu}
            >
              <span>About</span>
            </Link>
          </li>

          {/* Services with Expandable Subcategories on Mobile */}
          <li
            style={{ transitionDelay: menuOpen ? '80ms' : '0ms' }}
            className={`transform transition-all duration-300 ease-out ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <div className="flex items-center justify-between py-2.5 px-3.5 rounded-xl font-bold text-navy text-[16px] tracking-wide hover:bg-navy/5">
              <Link
                href="/#services"
                className="flex-1"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <button
                type="button"
                aria-label="Toggle services submenu"
                onClick={() => setMobileServicesOpen((o) => !o)}
                className="p-1 rounded-lg hover:bg-navy/10 text-navy/60 transition-colors border-none bg-transparent cursor-pointer focus:outline-none"
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>

            {/* Mobile Submenu Accordion */}
            {mobileServicesOpen && (
              <ul className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-200 mt-2 mb-1 overflow-hidden shadow-sm">
                {serviceCategories.map((cat) => (
                  <li key={cat.title}>
                    <Link
                      href={cat.href}
                      className="block px-4 py-3 text-[13px] font-semibold text-gray-800 hover:text-navy hover:bg-gray-50 transition-colors"
                      onClick={() => {
                        closeMobileMenu();
                        handleCategoryClick(cat.href);
                      }}
                    >
                      {cat.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Projects */}
          <li
            style={{ transitionDelay: menuOpen ? '120ms' : '0ms' }}
            className={`transform transition-all duration-300 ease-out ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <Link
              href="/#projects"
              className="group flex items-center py-2.5 px-3.5 rounded-xl font-bold text-navy text-[16px] tracking-wide hover:bg-navy/5 hover:text-blue hover:translate-x-1 active:scale-[0.99] transition-all duration-200"
              onClick={closeMobileMenu}
            >
              <span>Projects</span>
            </Link>
          </li>

          {/* Process */}
          <li
            style={{ transitionDelay: menuOpen ? '160ms' : '0ms' }}
            className={`transform transition-all duration-300 ease-out ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <Link
              href="/#process"
              className="group flex items-center py-2.5 px-3.5 rounded-xl font-bold text-navy text-[16px] tracking-wide hover:bg-navy/5 hover:text-blue hover:translate-x-1 active:scale-[0.99] transition-all duration-200"
              onClick={closeMobileMenu}
            >
              <span>Process</span>
            </Link>
          </li>

          {/* CTA */}
          <li
            style={{ transitionDelay: menuOpen ? '200ms' : '0ms' }}
            className={`pt-2.5 transform transition-all duration-300 ease-out ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
            }`}
          >
            <Link
              href="/#contact"
              className="flex items-center justify-center font-bold text-white bg-navy rounded-full py-3.5 px-6 text-sm tracking-wide shadow-md hover:opacity-90 active:scale-[0.98] transition-all duration-200"
              onClick={closeMobileMenu}
            >
              <span>Get in Touch</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
