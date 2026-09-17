import Image from 'next/image';
import Link from 'next/link';

const projects = [
  { src: '/projects/project-1.png', alt: 'Project 1' },
  { src: '/projects/project-2.png', alt: 'Project 2' },
  { src: '/projects/project-3.png', alt: 'Project 3' },
  { src: '/projects/project-4.png', alt: 'Project 4' },
  { src: '/projects/project-5.png', alt: 'Project 5' },
  { src: '/projects/project-6.png', alt: 'Project 6' },
];

const ArrowRight = () => (
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
);

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 lg:py-24 px-6 lg:px-16 bg-white">
      <div className="max-w-screen-xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-navy font-extrabold text-3xl sm:text-4xl tracking-tight uppercase tracking-[1.4px]">
              Featured Projects
            </h2>
            <p className="text-[#5c5b5b] text-sm sm:text-base mt-2 max-w-2xl">
              Explore our completed projects and see how we turn each client&apos;s vision into a
              well-built and thoughtfully designed space.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 text-[#5c5b5b] font-extrabold text-xs sm:text-sm uppercase tracking-[1.4px] hover:text-gray-900 transition-colors duration-200 self-start md:self-auto"
          >
            <span>Inquire about custom projects</span>
            <span className="w-7 h-7 rounded-full bg-[#5c5b5b]/10 group-hover:bg-gray-900 group-hover:text-white flex items-center justify-center transition-all duration-200">
              <svg
                className="w-3.5 h-3.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Black container with background photo */}
        <div className="relative rounded-[25px] overflow-hidden bg-black p-5 sm:p-7 lg:p-10 shadow-2xl reveal-up">
          {/* Background photo + gradient */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Image
              src="/projects/projects-bg.png"
              alt=""
              fill
              className="object-cover opacity-40"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </div>

          {/* 6 project cards */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((proj) => (
              <div
                key={proj.alt}
                className="proj-card relative rounded-[20px] overflow-hidden h-56 sm:h-64 lg:h-72 shadow-lg"
              >
                <Image
                  src={proj.src}
                  alt={proj.alt}
                  fill
                  className="main-proj object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute left-3.5 bottom-3.5 w-11 h-11 rounded-xl bg-white/95 p-1 shadow-md flex items-center justify-center pointer-events-none">
                  <Image
                    src="/branding/riaka-logo.png"
                    alt="RIAKA"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Button outside the box */}
        <div className="mt-10 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 bg-navy/90 hover:bg-navy text-white font-extrabold text-sm sm:text-base px-6 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-200 shadow-xl hover:-translate-y-0.5"
          >
            <span>See More Completed Projects</span>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
