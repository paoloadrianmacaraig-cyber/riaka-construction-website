const services = [
  {
    title: 'Design & Planning',
    description:
      'Comprehensive architectural, interior, and visualization services that transform your initial ideas into detailed, build-ready blueprints.',
  },
  {
    title: 'Construction & Building',
    description:
      'End-to-end structural construction and renovation solutions tailored for durable, high-quality residential and commercial properties.',
  },
  {
    title: 'Specialized Works & Finishes',
    description:
      'Skilled trade, fabrication, and custom finishing solutions that deliver the essential technical details and final aesthetic touches.',
  },
  {
    title: 'Permits & Financing Assistance',
    description:
      'Hands-on support to handle your building permits, paperwork, and bank loan applications without the hassle.',
  },
];

const ArrowRight = () => (
  <svg
    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 lg:py-24 px-6 lg:px-16 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-extrabold text-navy text-3xl sm:text-4xl leading-tight tracking-tight mb-2">
          What We Have To Offer
        </h2>
        <p className="text-[#5c5b5b] text-sm sm:text-base mb-8">
          See what we have to offer and what makes our work a step above the rest.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-navy rounded-2xl shadow-md p-7 lg:p-9 card-lift flex flex-col justify-between"
            >
              <div>
                <h3 className="text-white font-extrabold text-lg lg:text-xl uppercase tracking-[1.4px] mb-2.5">
                  {svc.title}
                </h3>
                <p className="text-white/85 font-normal text-sm sm:text-base leading-relaxed mb-5">
                  {svc.description}
                </p>
              </div>
              <a
                href="#contact"
                className="group text-skyblue font-medium text-xs uppercase tracking-[1.4px] hover:underline inline-flex items-center gap-1.5"
              >
                <span>View details</span>
                <ArrowRight />
              </a>
            </div>
          ))}
        </div>

        {/* Inquire Button */}
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-navy hover:bg-[#1a2b47] text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 border border-white/20"
          >
            <span>Inquire About Our Services</span>
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
      </div>
    </section>
  );
}
