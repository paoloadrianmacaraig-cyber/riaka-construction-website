import Image from 'next/image';
import Link from 'next/link';

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-4 h-4 text-navy flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4 text-navy flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4 text-navy flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const quickLinks = [
  { href: '/#about', label: 'About RIAKA' },
  { href: '/#services', label: 'Our Services' },
  { href: '/#projects', label: 'Featured Projects' },
  { href: '/#process', label: 'Our Workflow' },
  { href: '/contact', label: 'Get in Touch' },
];

export default function Footer() {
  return (
    <footer className="bg-white py-16 lg:py-20 px-6 lg:px-16 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12 items-start">

          {/* Col 1: Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/branding/riaka-logo.png"
                alt="RIAKA Logo"
                width={80}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-[#5c5b5b] text-sm leading-relaxed mb-4">
              Focused mainly on building safe, durable and high-quality homes; general construction
              of multi-storey buildings; and complete architectural solutions.
            </p>
            <span className="inline-flex items-center gap-1.5 bg-navy/5 text-navy text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-navy/10">
              <svg className="w-3.5 h-3.5 text-navy flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Licensed Construction Contractor
            </span>
          </div>

          {/* Col 2: Contact Info + Facebook */}
          <div>
            <p className="text-navy font-extrabold text-sm uppercase tracking-[1.4px] mb-5">
              Contact Info
            </p>
            <ul className="text-[#5c5b5b] text-sm space-y-3.5">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0">
                  <EmailIcon />
                </span>
                <a href="mailto:riaka.construction@yahoo.com" className="footer-link hover:text-gray-900 transition-colors">
                  riaka.construction@yahoo.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0">
                  <PhoneIcon />
                </span>
                <a href="tel:+639184080396" className="footer-link hover:text-gray-900 transition-colors">
                  0918 408 0396
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPinIcon />
                </span>
                <span className="leading-relaxed pt-1">M.H. Del Pilar St., Lemery, Philippines, 4209</span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href="https://www.facebook.com/RIAKAconstruction"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit RIAKA Construction Facebook Page"
                className="inline-flex items-center gap-2 bg-navy/85 hover:bg-navy text-white px-4 py-2.5 rounded-full font-bold text-xs shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
              >
                <FacebookIcon />
                <span>Facebook Page</span>
              </a>
              <a
                href={`https://m.me/RIAKAconstruction?text=${encodeURIComponent('Hello! I would like to inquire about your services and schedule a meeting to discuss our project. Please let me know your available schedule. Thank you!')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with RIAKA Construction on Facebook Messenger"
                className="inline-flex items-center gap-2 bg-[#0084FF]/85 hover:bg-[#0084FF] text-white px-4 py-2.5 rounded-full font-bold text-xs shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.145 2 11.258c0 2.91 1.455 5.512 3.735 7.205V22l3.39-1.86c.92.255 1.89.39 2.875.39 5.523 0 10-4.145 10-9.258C22 6.145 17.523 2 12 2zm1.06 12.443-2.715-2.895-5.3 2.895 5.828-6.19 2.784 2.895 5.231-2.895-5.828 6.19z" />
                </svg>
                <span>Chat on Messenger</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <p className="text-navy font-extrabold text-sm uppercase tracking-[1.4px] mb-5">
              Quick Links
            </p>
            <ul className="text-[#5c5b5b] text-sm space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="footer-link hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5c5b5b] gap-4">
          <p>&copy; Riaka Construction and Development Corporation. All Rights Reserved 2026.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="footer-link hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <span>&bull;</span>
            <Link href="/terms-and-conditions" className="footer-link hover:text-gray-900 transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
