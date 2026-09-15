import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Terms & Conditions | RIAKA Construction & Development Corp.',
  description:
    'Review the terms of engagement, construction warranties, project payment terms, and legal conditions governing RIAKA Construction & Development Corp. contracts.',
};

const terms = [
  {
    number: '1',
    title: 'Acceptance of Terms',
    content: (
      <p>
        By accessing our website, requesting site surveys, reviewing preliminary architectural proposals, or entering into
        a project agreement with Riaka Construction and Development Corporation (&ldquo;RIAKA,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;),
        you agree to be bound by these Terms &amp; Conditions and all applicable laws and regulations of the Republic of the Philippines.
        If you do not agree with any part of these terms, you should discontinue use of our site and services.
      </p>
    ),
  },
  {
    number: '2',
    title: 'Scope of Services',
    content: (
      <div className="space-y-3">
        <p>
          RIAKA provides general construction, turnkey contracting, and architectural design solutions for:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
          <li>Residential homes and custom single-family dwellings</li>
          <li>Commercial multi-storey developments and retail spaces</li>
          <li>Complete architectural, structural, electrical, and sanitary blueprints</li>
          <li>Civil works, structural retrofitting, and property renovations</li>
        </ul>
        <p>
          Project-specific scopes, deliverables, timelines, and material specifications are formally finalized within a signed
          Construction Agreement between RIAKA and the client.
        </p>
      </div>
    ),
  },
  {
    number: '3',
    title: 'Quotations & Binding Agreements',
    content: (
      <div className="space-y-3">
        <p>
          All preliminary cost estimates, project calculators, and verbal advice provided via our website or consultations
          are informational and non-binding.
        </p>
        <p>
          Official project quotations and Bills of Quantities (BOQ) remain valid for thirty (30) calendar days from issuance.
          Binding agreements only occur upon the mutual execution of a formal Owner-Contractor Agreement.
        </p>
      </div>
    ),
  },
  {
    number: '4',
    title: 'Milestone Payments & Disbursements',
    content: (
      <div className="space-y-3">
        <p>
          Project billings follow structured milestone disbursements based on verified on-site construction progress:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
          <li><strong>Mobilization Deposit:</strong> Required prior to site preparation and material procurement.</li>
          <li><strong>Progress Billings:</strong> Billed in phases (e.g., foundation, structural frame, roof, rough-ins, finishes).</li>
          <li><strong>Retention Fee:</strong> Released upon successful joint inspection and project turnover.</li>
        </ul>
        <p>
          Payments must be remitted within the timeframe specified in the project contract to ensure continuous material supply and crew scheduling.
        </p>
      </div>
    ),
  },
  {
    number: '5',
    title: 'Client Responsibilities & Site Access',
    content: (
      <div className="space-y-3">
        <p>
          To ensure timely and safe project execution, the project owner shall:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
          <li>Provide proof of lawful property ownership and verified boundary monuments (mohon).</li>
          <li>Ensure unobstructed right-of-way access for construction machinery, delivery trucks, and workers.</li>
          <li>Authorize or assist in securing temporary electrical power and water connections for the job site.</li>
          <li>Review and approve change orders, material options, and blueprint revisions without unreasonable delay.</li>
        </ul>
      </div>
    ),
  },
  {
    number: '6',
    title: 'Building Codes & Regulatory Compliance',
    content: (
      <p>
        All design and construction work executed by RIAKA complies strictly with Presidential Decree No. 1096
        (National Building Code of the Philippines), the National Structural Code of the Philippines (NSCP), and local
        municipal ordinances. We assist clients with the submission of signed and sealed blueprints to the relevant Local
        Government Units (LGU) and the Bureau of Fire Protection (BFP).
      </p>
    ),
  },
  {
    number: '7',
    title: 'Warranties & Defects Liability',
    content: (
      <div className="space-y-3">
        <p>
          RIAKA stands firmly behind the structural integrity and quality of its craftsmanship:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
          <li><strong>15-Year Structural Warranty:</strong> In compliance with Article 1723 of the Civil Code of the Philippines, covering structural collapse or significant failure due to construction defects.</li>
          <li><strong>Defects Liability Period:</strong> A standard one-year warranty covering architectural finishes, waterproofing, and fixture workmanship from the Certificate of Completion date.</li>
        </ul>
      </div>
    ),
  },
  {
    number: '8',
    title: 'Intellectual Property',
    content: (
      <p>
        All architectural perspectives, working drawings, 3D renderings, and structural calculations created by RIAKA
        remain the intellectual property of our licensed design professionals under Philippine copyright and architecture
        laws (R.A. 9266 and R.A. 8293). Clients receive a license to construct the building exclusively at the agreed property site.
      </p>
    ),
  },
  {
    number: '9',
    title: 'Weather Delays & Force Majeure',
    content: (
      <p>
        RIAKA shall not be held liable for construction delays caused by events outside reasonable control, including severe
        tropical cyclones (typhoon signal advisories by PAGASA), earthquakes, volcanic activity, or statutory municipal halts.
        Project timelines shall be adjusted accordingly to account for documented lost working days and required site drying periods.
      </p>
    ),
  },
  {
    number: '10',
    title: 'Governing Law & Inquiries',
    content: (
      <div className="space-y-3">
        <p>
          These Terms &amp; Conditions are governed by and construed in accordance with the laws of the Republic of the Philippines.
          Any dispute arising from our services shall first be submitted to mutual discussion or the Construction Industry
          Arbitration Commission (CIAC) before formal legal action.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200/80 text-xs text-gray-700 space-y-1">
          <p className="font-bold text-navy text-sm">Riaka Construction and Development Corporation</p>
          <p>M.H. Del Pilar St., Lemery, Batangas, Philippines, 4209</p>
          <p>Email: <a href="mailto:riaka.construction@yahoo.com" className="text-navy underline">riaka.construction@yahoo.com</a></p>
          <p>Phone: <a href="tel:+639184080396" className="text-navy font-semibold">0918 408 0396</a></p>
        </div>
      </div>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#f8fafc]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy via-[#1b2f4f] to-[#142338] text-white pt-28 pb-16 md:pt-36 md:pb-20 px-6 lg:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb Back Link */}
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-semibold text-skyblue hover:text-white transition-colors"
              >
                <span>&larr;</span> Back to Home
              </Link>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 uppercase tracking-tight text-white">
              Terms &amp; Conditions
            </h1>
            <p className="text-base sm:text-lg text-gray-300 font-medium">
              Effective Date: January 6, 2026
            </p>
          </div>
        </section>

        {/* Content Section with Card Flow */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {terms.map((item) => (
              <div
                key={item.number}
                className="bg-white rounded-xl border border-gray-200/80 mb-6 sm:mb-8 shadow-sm overflow-hidden"
              >
                <div className="px-6 py-4 sm:px-8 sm:py-5 border-b border-gray-100 bg-gray-50/50">
                  <h2 className="text-xl sm:text-2xl font-bold text-navy">
                    {item.number}. {item.title}
                  </h2>
                </div>
                <div className="px-6 py-5 sm:px-8 sm:py-6 text-[#5c5b5b] text-sm sm:text-[15px] leading-relaxed">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Homepage Format CTA Section */}
        <CTASection />
      </main>

      <Footer />
      <BackToTop />
      <ScrollReveal />
    </>
  );
}
