import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import CTASection from '@/components/CTASection';
import ScrollReveal from '@/components/ScrollReveal';
import Breadcrumb from '@/components/Breadcrumb';

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
    title: 'Legal Basis for Processing',
    content: (
      <p>
        We process your data primarily for the fulfillment of our construction and design contracts, compliance with legal obligations
        (such as National Building Code requirements and Bureau of Internal Revenue regulations), and legitimate corporate interests
        in executing safe, durable developments.
      </p>
    ),
  },
  {
    number: '5',
    title: 'Data Retention & Safeguards',
    content: (
      <div className="space-y-3">
        <p>
          RIAKA applies physical, technical, and organizational security measures to protect your documents:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
          <li><strong>Digital Security:</strong> Encrypted storage, firewalls, and restricted administrative access to project folders.</li>
          <li><strong>Physical Safety:</strong> Blueprint blue-line prints, contracts, and permits are stored in locked archives within our main Batangas office.</li>
          <li><strong>Retention Period:</strong> In compliance with Article 1723 of the Philippine Civil Code (15-year engineer/architect warranty liability), project drawings, calculation sheets, and contract records are retained for a minimum of 15 years following project completion.</li>
        </ul>
      </div>
    ),
  },
  {
    number: '6',
    title: 'Third-Party Disclosure',
    content: (
      <div className="space-y-3">
        <p>
          We do not sell, trade, or rent personal information to marketing third parties. Data is shared exclusively with:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
          <li><strong>Government Agencies:</strong> Municipal Engineering Offices, BFP, and utility providers (e.g., BATELEC, Meralco) for essential permits and clearances.</li>
          <li><strong>Accredited Subcontractors:</strong> Structural engineers, soil-testing labs, and specialty trades under strict non-disclosure obligations.</li>
          <li><strong>Financial Institutions:</strong> In cases where we assist you with bank loan applications for construction financing, with your explicit authorization.</li>
        </ul>
      </div>
    ),
  },
  {
    number: '7',
    title: 'Your Privacy Rights (RA 10173)',
    content: (
      <div className="space-y-3">
        <p>
          Under the Philippine Data Privacy Act of 2012, you possess the right to:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-700">
          <li>Be informed whether your personal data is being processed.</li>
          <li>Request reasonable access to your personal files and project records held by RIAKA.</li>
          <li>Request correction or rectification of any erroneous or outdated information.</li>
          <li>Object to certain processing activities, subject to ongoing statutory and contractual requirements.</li>
        </ul>
      </div>
    ),
  },
  {
    number: '8',
    title: 'Contact Our Data Protection Officer',
    content: (
      <div className="space-y-3">
        <p>
          If you have questions, clarifications, or requests regarding this Privacy Policy or how your personal information is handled, please contact
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
        {/* Page Header / Breadcrumb Hero Banner */}
        <section className="bg-navy text-white pt-24 lg:pt-28 pb-10 sm:pb-12 px-6 lg:px-16 border-b border-white/10">
          <div className="max-w-4xl mx-auto pt-4">
            <Breadcrumb items={[{ label: 'Privacy Policy' }]} className="mb-5" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-3 uppercase tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-gray-300 font-medium">
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
