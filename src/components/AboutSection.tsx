import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="bg-navy py-16 lg:py-24 px-6 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-skyblue font-extrabold text-xs sm:text-sm uppercase tracking-[1.4px] mb-3">
          Get to Know Us
        </p>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start">
          <div className="flex-1">
            <h2 className="font-extrabold text-white text-3xl sm:text-4xl lg:text-[42px] leading-[1.2] tracking-tight mb-5">
              Full-Service Construction, Design &amp; Development
            </h2>
            <p className="text-white/90 font-normal text-base lg:text-lg leading-relaxed">
              Here at RIAKA, we unify design, contracting, and development under one roof.
              We manage every phase from concept to final build, ensuring your project is delivered
              with high-precision craftsmanship, on schedule, and within budget.
            </p>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 mt-6 text-skyblue font-medium uppercase tracking-[1.4px] text-sm hover:underline"
            >
              <span>Learn more</span>
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
          </div>
          <div className="flex-shrink-0 w-full lg:w-[42%] rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
            <Image
              src="/about/about-project.png"
              alt="RIAKA project"
              width={700}
              height={450}
              className="w-full h-64 lg:h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
