import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import BackToTop from '@/components/BackToTop';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceAnchorScroll from '@/components/ServiceAnchorScroll';

export const metadata: Metadata = {
  title: 'Our Services | RIAKA Construction & Development Corp.',
  description:
    'Complete construction and architectural solutions: Design & Planning, Construction & Structural, Specialized Works & Finishes, and Permits & Assistance.',
};

interface PlaceholderProps {
  label: string;
  recommendedSize?: string;
}

function ImagePlaceholder({ label, recommendedSize = '1200 × 1500px' }: PlaceholderProps) {
  return (
    <div className="relative w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-slate-100 via-slate-200/60 to-slate-100 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-8 text-center group hover:border-navy/40 transition-all duration-300 shadow-inner overflow-hidden">
      {/* Background blueprint subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#23395d 1px, transparent 1px), linear-gradient(90deg, #23395d 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-sm">
        <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-navy group-hover:scale-105 transition-all duration-300 mb-4">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500 mb-1.5">
          Image Placeholder
        </span>
        <p className="text-base font-bold text-navy leading-snug mb-2">
          {label}
        </p>
        <span className="text-xs font-medium text-slate-500 bg-white/90 px-3 py-1 rounded-full border border-slate-200 shadow-sm">
          Recommended: {recommendedSize}
        </span>
      </div>
    </div>
  );
}

const serviceCategories = [
  {
    id: 'design-planning',
    title: 'Design and Planning',
    description:
      'Comprehensive architectural, interior, and visualization services that transform your initial ideas into detailed, build-ready blueprints.',
    imageSrc: '/services/design-and-planning.jpg',
    imageObjectPosition: 'center 20%',
    imageLabel: 'Design & Planning Visual',
    imagePosition: 'left' as const,
    subcategories: [
      {
        title: 'Architectural Design & 3D Visualization',
        description:
          'We map out your entire project from concept to final layout, bringing ideas together through functional architectural design alongside rendered 3D perspective views. It gives you a clear visual direction and a solid plan before any construction begins, making decisions simple and stress-free.',
      },
      {
        title: 'Construction Plans',
        description:
          'We draft clear, complete architectural and engineering blueprints that are fully ready for permits and site work. These detailed guides keep the entire build accurate, safe, and on track from day one.',
      },
      {
        title: 'Interior Design Services and Fitouts',
        description:
          'We transform empty spaces into stylish, comfortable rooms that match your vibe and daily routine. From lighting and color palettes to custom cabinetry, we handle the details so you can move right in.',
      },
    ],
  },
  {
    id: 'construction-building',
    aliasId: 'construction-structural',
    title: 'Construction & Structural',
    description:
      'End-to-end structural construction and renovation solutions tailored for durable, high-quality residential and commercial properties.',
    imageSrc: '/services/construction-structural-site-hd.jpg',
    imageObjectPosition: 'center 40%',
    imageLabel: 'Construction & Structural Visual',
    imagePosition: 'right' as const,
    subcategories: [
      {
        title: 'General Construction',
        description:
          'We handle the heavy lifting, daily site coordination, and material sourcing to take your project from ground zero to final turnover. You can sit back and watch your project rise knowing our team has every detail covered.',
      },
      {
        title: 'Residential Builds',
        description:
          'Building a home is personal, so we craft houses tailored to how you and your family actually live. Expect solid foundations, quality materials, and a smooth build process that makes moving day unforgettable.',
      },
      {
        title: 'Commercial Buildings',
        description:
          'Whether it’s a retail shop, office space, or rental unit, we build spaces that help your business thrive and attract foot traffic. We focus on durable, practical builds delivered on time so you can start operating sooner.',
      },
      {
        title: 'Roofing Services',
        description:
          'Protect your investment with tough, precision-welded steel trusses and quality roofing made to weather strong storms. We ensure clean, leak-free installation so you stay dry and worry-free year-round.',
      },
      {
        title: 'Renovation',
        description:
          'Ready to give your old space a fresh look, extra room, or a total modern upgrade? We breathe new life into existing structures, fixing wear and tear while boosting your property’s curb appeal and value.',
      },
    ],
  },
  {
    id: 'specialized-works',
    title: 'Specialized Works & Finishes',
    description:
      'Skilled trade, fabrication, and custom finishing solutions that deliver the essential technical details and final aesthetic touches.',
    imageSrc: '/services/specialized-works-and-finishes.jpg',
    imageObjectPosition: 'center 30%',
    imageLabel: 'Specialized Works & Finishes Visual',
    imagePosition: 'left' as const,
    subcategories: [
      {
        title: 'Electrical Works',
        description:
          'From tidy wiring runs to stylish lighting and breaker setups, we keep your home or building powered safely. Our team makes sure every switch, outlet, and fixture is installed right without cutting corners.',
      },
      {
        title: 'Plumbing Works',
        description:
          'Reliable water pressure and clean drainage shouldn\'t be a gamble. We install leak-resistant pipes, dependable drainage lines, and quality fixtures that keep water flowing smoothly without hidden surprises.',
      },
      {
        title: 'Glass and Aluminum Works',
        description:
          'Modernize your facade with sleek aluminum frames, sliding panels, and sturdy glass windows. They let in plenty of natural sunlight, look great, and keep outdoor dust and noise where they belong.',
      },
      {
        title: 'Paint Works',
        description:
          'A great paint job does more than look sharp—it shields your walls from heat, rain, and humidity. We prep every surface thoroughly to give you smooth, vibrant colors that won\'t easily peel or fade.',
      },
      {
        title: 'Metal Fabrications',
        description:
          'Keep your property secure without sacrificing curb appeal through custom-made gates, fences, and window grills. Built tough with weather-resistant finishes, our metalwork adds both character and peace of mind.',
      },
      {
        title: 'Swimming Pool Construction',
        description:
          'Turn your backyard or resort space into an everyday oasis with a custom concrete swimming pool. We take care of everything from excavation and leak-proof sealing to filtration systems and deck finishes.',
      },
      {
        title: 'Landscaping',
        description:
          'Complete your property’s look with fresh grass, handpicked plants, and functional outdoor walkways. We shape outdoor spaces where you’ll actually want to hang out, relax, and entertain guests.',
      },
    ],
  },
  {
    id: 'permits-financing',
    aliasId: 'permits-assistance',
    title: 'Permits & Assistance',
    description:
      'Hands-on support to handle your building permits, paperwork, and bank loan applications without the hassle.',
    imageSrc: '/services/permits-assistance-billboard-hd.jpg',
    imageObjectPosition: 'center 35%',
    imageLabel: 'Permits & Assistance Visual',
    imagePosition: 'right' as const,
    subcategories: [
      {
        title: 'Building Permit Processing Assistance',
        description:
          'Skip the headache of navigating city hall paperwork and municipal red tape on your own. We organize your signed plans and permits to help you clear approvals fast and get straight to building.',
      },
      {
        title: 'Bank Financing Processing Assistance',
        description:
          'Sorting out home loan paperwork can feel overwhelming, so we help you gather the exact estimates, plans, and contracts banks ask for. We make the loan approval process a whole lot smoother so your funding gets greenlit with ease.',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8fafc] pt-28 sm:pt-32 lg:pt-36 pb-16 lg:pb-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {serviceCategories.map((category, index) => {
            const isImageLeft = category.imagePosition === 'left';

            return (
              <div key={category.id}>
                {/* Title & Gray Description */}
                <div
                  id={category.id}
                  className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 mb-10 lg:mb-14"
                >
                  {category.aliasId && (
                    <div
                      id={category.aliasId}
                      className="scroll-mt-28 sm:scroll-mt-32 lg:scroll-mt-36 -mt-28 sm:-mt-32 lg:-mt-36"
                    />
                  )}
                  {index === 0 ? (
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-3">
                      {category.title}
                    </h1>
                  ) : (
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-3">
                      {category.title}
                    </h2>
                  )}
                  <p className="text-[#5c5b5b] text-base sm:text-lg max-w-3xl leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Alternating Image and Subcategories */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Image Column */}
                  <div
                    className={`lg:col-span-5 flex flex-col lg:sticky lg:top-32 self-start ${
                      isImageLeft ? 'order-1' : 'order-1 lg:order-2'
                    }`}
                  >
                    {category.imageSrc ? (
                      <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200/80 group">
                        <Image
                          src={category.imageSrc}
                          alt={category.title}
                          fill
                          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          style={{ objectPosition: category.imageObjectPosition || 'center' }}
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          priority={index === 0}
                        />
                      </div>
                    ) : (
                      <ImagePlaceholder
                        label={category.imageLabel}
                        recommendedSize="1200 × 1500px"
                      />
                    )}
                  </div>

                  {/* Subcategories Column */}
                  <div
                    className={`lg:col-span-7 flex flex-col divide-y divide-slate-200/90 ${
                      isImageLeft ? 'order-2' : 'order-2 lg:order-1'
                    }`}
                  >
                    {category.subcategories.map((sub, subIndex) => (
                      <div
                        key={sub.title}
                        className="group py-6 sm:py-7 first:pt-0 last:pb-0 transition-all duration-200"
                      >
                        <div className="flex items-baseline gap-3.5 mb-2">
                          <span className="text-xs font-mono font-bold text-blue-600 tracking-wider select-none">
                            {String(subIndex + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-xl sm:text-2xl font-bold text-navy tracking-tight group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200">
                            {sub.title}
                          </h3>
                        </div>
                        <p className="text-[#5c5b5b] text-sm sm:text-[15px] lg:text-base leading-relaxed pl-7 sm:pl-8 font-normal">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Elegant separator between categories */}
                {index < serviceCategories.length - 1 && (
                  <hr className="border-t border-gray-200/80 my-16 lg:my-24" />
                )}
              </div>
            );
          })}
        </div>
      </main>

      {/* Global CTA Section */}
      <CTASection />
      <Footer />
      <BackToTop />
      <ScrollReveal />
      <ServiceAnchorScroll />
    </>
  );
}
