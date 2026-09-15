import Image from 'next/image';

interface Step {
  num: string;
  label: string;
  src: string;
  alt: string;
  description: string;
  objectPosition?: string;
}

const steps: Step[] = [
  {
    num: '01',
    label: 'Consultation',
    src: '/workflow/step-01-consultation.png',
    alt: '01 Consultation',
    description:
      'In this initial meeting, we discuss your goals, vision, budget, and timeline to ensure complete alignment before starting.',
    objectPosition: 'center 65%',
  },
  {
    num: '02',
    label: 'Site Assessment',
    src: '/workflow/step-02-site-assessment.png',
    alt: '02 Site Assessment',
    description:
      'We inspect the site, take accurate measurements, and evaluate the layout to prepare for design.',
    objectPosition: 'center',
  },
  {
    num: '03',
    label: 'Design & Planning',
    src: '/workflow/step-03-design-planning.png',
    alt: '03 Design & Planning',
    description:
      'We think of detailed design concepts and architectural plans that are carefully planned around your project needs.',
    objectPosition: 'center',
  },
  {
    num: '04',
    label: 'Proposal & Quotation',
    src: '/workflow/step-04-proposal-quotation.png',
    alt: '04 Proposal & Quotation',
    description:
      'Once the design and plans are finalized, we prepare a project proposal and quotation outlining scope of work, estimated costs, and requirements.',
    objectPosition: 'center',
  },
  {
    num: '05',
    label: 'Contract & Permits',
    src: '/workflow/step-05-contract-permits.png',
    alt: '05 Contract & Permits',
    description:
      'We finalize the agreement, secure the necessary permits, and complete the required documents before construction begins.',
    objectPosition: 'center 68%',
  },
  {
    num: '06',
    label: 'Construction',
    src: '/workflow/step-06-construction.png',
    alt: '06 Construction',
    description:
      'Our team brings the approved plans to life, handling the construction process while ensuring the work follows the agreed design and specifications.',
    objectPosition: 'center',
  },
  {
    num: '07',
    label: 'Inspection & Completion',
    src: '/workflow/step-07-inspection-completion.png',
    alt: '07 Inspection & Completion',
    description:
      'We conduct inspections to check the completed work and take care of any remaining issues before turnover.',
    objectPosition: 'center',
  },
  {
    num: '08',
    label: 'Turnover',
    src: '/workflow/step-08-turnover.jpg',
    alt: '08 Turnover',
    description:
      'Your completed project is officially handed over to you, marking the completion of the project and the beginning of your new space.',
    objectPosition: 'center',
  },
];

function StepCard({ step }: { step: Step }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden card-lift border border-gray-100 flex flex-col">
      <div className="h-60 sm:h-64 lg:h-72 w-full overflow-hidden bg-gray-100 relative">
        <Image
          src={step.src}
          alt={step.alt}
          fill
          className="object-cover"
          style={{ objectPosition: step.objectPosition ?? 'center' }}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <p className="text-blue font-extrabold text-xs uppercase tracking-[1.4px] mb-2">
          {step.num} &mdash; {step.label}
        </p>
        <p className="text-[#5c5b5b] font-normal text-sm sm:text-base leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function WorkflowSection() {
  const pairs = Array.from({ length: 4 }, (_, i) => steps.slice(i * 2, i * 2 + 2));

  return (
    <section id="process" className="py-16 lg:py-24 px-6 lg:px-16 bg-[#f8f8f8]">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-extrabold text-navy text-3xl sm:text-4xl leading-tight tracking-tight text-center mb-12">
          Explore Our Workflow
        </h2>
        <div className="flex flex-col gap-8">
          {pairs.map((pair, pi) => (
            <div key={pi} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {pair.map((step) => (
                <StepCard key={step.num} step={step} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
