import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Privacy Policy | RIAKA Construction & Development Corp.',
  description:
    'Learn how RIAKA Construction & Development Corp. handles your personal data, architectural plans, and project inquiries in accordance with RA 10173 (Data Privacy Act of 2012).',
};

const policySections = [
  {
    number: '1',
    title: 'Introduction & Overview',
    content: (
      <p>
        Riaka Construction and Development Corporation (&ldquo;RIAKA,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;) is committed
        to respecting and protecting your privacy. This Privacy Policy explains how we collect, process, and safeguard your
        personal identifiable information, architectural drawings, and project details in compliance with Republic Act No. 10173,
        otherwise known as the Data Privacy Act of 2012 of the Philippines.
      </p>
    ),
  },
  {
    number: '2',
    title: 'Information We Collect',
    content: (
      <div className="space-y-3">
        <p>
          Depending on your engagement with our contracting and design services, we may collect:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
          <li><strong>Personal Contact Details:</strong> Full name, email address, telephone numbers, and residential or office address.</li>
          <li><strong>Property &amp; Project Information:</strong> Construction site location, lot boundaries, land title copies (TCT/OCT), tax declarations, and zoning information necessary for permit assessments.</li>
          <li><strong>Technical Documents:</strong> Preliminary floor plans, architectural preferences, engineering specifications, and structural requirements.</li>
          <li><strong>Digital Website Logs:</strong> Standard server data such as IP address and browser type, used strictly to ensure site security and optimal performance.</li>
        </ul>
      </div>
    ),
  },
  {
    number: '3',
    title: 'How We Use Your Data',
    content: (
      <div className="space-y-3">
        <p>
          We use your collected information strictly for legitimate construction and contracting operations:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
          <li>Developing customized Bills of Quantities (BOQ), architectural blueprints, and structural estimates.</li>
          <li>Filing building permit documents with local City or Municipal Engineering Offices and the Bureau of Fire Protection (BFP).</li>
          <li>Communicating milestone progress reports, site schedules, and formal invoicing.</li>
          <li>Answering inquiries submitted through our website, social media channels, or direct phone calls.</li>
        </ul>
      </div>
    ),
  },
  {
    number: '4',
    title: 'Philippine Data Privacy Act (RA 10173) Compliance',
    content: (
      <p>
        We adhere to the core principles of transparency, legitimate purpose, and proportionality under the Data Privacy Act of 2012.
        Your data is processed solely with your explicit consent or under lawful civil contracts, and only to the extent necessary
        to fulfill contracted architectural and civil construction deliverables.
      </p>
    ),
  },
  {
    number: '5',
    title: 'Technical Plans & Blueprints Protection',
    content: (
      <p>
        We recognize the sensitive nature of architectural floor plans, engineering calculations, and property boundary records.
        All client drawings are treated as confidential proprietary records and stored in secure digital vaults. They are only
        shared with licensed project engineers and authorized building regulatory authorities.
      </p>
    ),
  },
  {
    number: '6',
    title: 'Third-Party Sharing & Subcontractors',
    content: (
      <p>
        RIAKA does not sell, trade, or rent personal data to third-party marketing companies. Data is disclosed only to vetted
        trade partners (such as licensed geotechnical soil testers, master plumbers, or structural consultants) who are bound by
        strict confidentiality agreements, or when required by lawful governmental orders.
      </p>
    ),
  },
  {
    number: '7',
    title: 'Data Security & Storage',
    content: (
      <p>
        We implement technical, organizational, and physical safeguards against unauthorized disclosure, alteration, or accidental loss.
        As-built structural calculations and project agreements are archived for 15 years in compliance with Article 1723 of the
        Civil Code of the Philippines regarding contractor and architect liability.
      </p>
    ),
  },
  {
    number: '8',
    title: 'Your Rights as a Data Subject',
    content: (
      <div className="space-y-3">
        <p>
          Under Republic Act No. 10173, you hold the following statutory rights:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
          <li><strong>Right to be Informed:</strong> Understand how your personal records are handled.</li>
          <li><strong>Right to Access:</strong> Request reasonable access to your personal information on file.</li>
          <li><strong>Right to Rectification:</strong> Dispute inaccuracies and request prompt corrections.</li>
          <li><strong>Right to Erasure or Blocking:</strong> Request removal of your data, subject to legal building record retention laws.</li>
        </ul>
      </div>
    ),
  },
  {
    number: '9',
    title: 'Contact Our Data Protection Officer',
    content: (
      <div className="space-y-3">
        <p>
          If you have questions, feedback, or requests regarding your personal records or this Privacy Policy, please contact
          our compliance team:
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

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-gray-300 font-medium">
              Effective Date: January 6, 2026
            </p>
          </div>
        </section>

        {/* Content Section with Card Flow */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {policySections.map((item) => (
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
