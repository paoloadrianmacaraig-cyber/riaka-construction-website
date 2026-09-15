import Image from 'next/image';

const CheckIcon = () => (
  <svg className="w-4 h-4 text-skyblue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-28 px-6 lg:px-16 text-white overflow-hidden">
      {/* Background photo with navy overlay */}
      <div className="absolute inset-0">
        <Image
          src="/cta/cta-bg.jpg"
          alt="RIAKA Hard Hats & Project Site"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 55%' }}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0b1424]/85 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1424]/95 via-[#132137]/80 to-[#0b1424]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-skyblue font-extrabold text-xs sm:text-sm uppercase tracking-[2.5px] mb-3">
          Build With Confidence
        </p>
        <h2 className="font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.2] mb-5">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="text-white/85 font-normal text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-9">
          Let&apos;s build something exceptional together. Tell us about your next project, and our
          team will provide a transparent quotation and timeline to get started.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-navy hover:bg-skyblue hover:text-navy font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>Request a Project Quotation</span>
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="tel:+639184080396"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-sm sm:text-base px-7 py-4 rounded-full backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 fill-current text-skyblue" viewBox="0 0 24 24">
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.29 21 3 13.71 3 4.5a1 1 0 011-1H7.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
            </svg>
            <span>0918 408 0396</span>
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white/70 text-xs sm:text-sm font-semibold">
          {['Licensed Contractor', 'Accurate Transparent Quotations', 'Full Architectural & Engineering'].map(
            (badge) => (
              <span key={badge} className="inline-flex items-center gap-2">
                <CheckIcon />
                {badge}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
