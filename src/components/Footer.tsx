import Image from 'next/image';

const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const EmailIcon = () => (
  <svg className="w-4 h-4 text-navy mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-4 h-4 text-navy mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="w-4 h-4 text-navy mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const quickLinks = [
  { href: '#about', label: 'About RIAKA' },
  { href: '#services', label: 'Our Services' },
  { href: '#projects', label: 'Featured Projects' },
  { href: '#process', label: 'Our Workflow' },
  { href: '#contact', label: 'Get in Touch' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-white py-16 lg:py-20 px-6 lg:px-16 border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-12 items-start">

          {/* Col 1: Brand */}
          <div className="flex flex-col items-start">
            <a href="#" className="inline-block mb-4">
              <Image
                src="/branding/riaka-logo.png"
                alt="RIAKA Logo"
                width={80}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </a>
            <p className="text-[#5c5b5b] text-sm leading-relaxed mb-4">
              Focused mainly on building safe, durable and high-quality homes; general construction
              of multi-storey buildings; and complete architectural solutions.
            </p>
            <span className="inline-block bg-gray-100 text-navy text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-md">
              Licensed Construction Contractor
            </span>
          </div>

          {/* Col 2: Contact Info + Facebook */}
          <div>
            <p className="text-navy font-extrabold text-sm uppercase tracking-[1.4px] mb-5">
              Contact Info
            </p>
            <ul className="text-[#5c5b5b] text-sm space-y-3.5">
              <li className="flex items-start gap-2.5">
                <EmailIcon />
                <a href="mailto:riaka.construction@yahoo.com" className="hover:text-blue transition-colors">
                  riaka.construction@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneIcon />
                <a href="tel:+639184080396" className="hover:text-blue transition-colors">
                  0918 408 0396
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon />
                <span>M.H. Del Pilar St., Lemery, Philippines, 4209</span>
              </li>
            </ul>
            <div className="mt-5">
              <a
                href="https://www.facebook.com/RIAKAconstruction"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit RIAKA Construction Facebook Page"
                className="inline-flex items-center gap-2.5 bg-[#4b5563] hover:bg-[#1f2937] text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <FacebookIcon />
                <span>Follow us on Facebook</span>
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
                  <a
                    href={link.href}
                    className="hover:text-blue hover:translate-x-1 transition-all inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 mt-12 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5c5b5b] gap-4">
          <p>&copy; Riaka Construction and Development Corporation. All Rights Reserved 2026.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-navy transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-navy transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
