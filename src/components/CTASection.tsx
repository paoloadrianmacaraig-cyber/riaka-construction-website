import Image from 'next/image';

const CheckIcon = () => (
  <span className="w-5 h-5 rounded-full bg-skyblue/15 border border-skyblue/30 text-skyblue flex items-center justify-center flex-shrink-0">
    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M5 13l4 4L19 7" />
    </svg>
  </span>
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
        <div className="absolute inset-0 bg-[#0b1424]/65 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1424]/85 via-[#162744]/70 to-[#0b1424]/78" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p className="text-skyblue font-extrabold text-xs sm:text-sm uppercase tracking-[2.5px] mb-3 drop-shadow-sm">
          Build With Confidence
        </p>
        <h2 className="font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.2] mb-5 drop-shadow-md">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="text-white/90 font-medium text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-9 drop-shadow-sm">
          Let&apos;s build something exceptional together. Tell us about your next project, and our
          team will provide a transparent quotation and timeline to get started.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white text-navy hover:bg-gray-100 hover:text-navy font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
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
            <svg className="w-4 h-4 text-skyblue" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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
