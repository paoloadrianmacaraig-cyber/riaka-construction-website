import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import BackToTop from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Get a Quote | RIAKA Construction & Development Corp.',
  description:
    'Request a quotation for your construction project in Lemery, Batangas and beyond. Tell us about your residential, commercial, or structural needs.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 lg:pt-28 bg-navy min-h-screen">
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <span className="text-sky-400 font-bold">Get a Quote</span>
          </nav>
        </div>
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
