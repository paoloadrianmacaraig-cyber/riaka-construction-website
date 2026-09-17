import type { Metadata } from 'next';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import BackToTop from '@/components/BackToTop';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Get in Touch | RIAKA Construction & Development Corp.',
  description:
    'Get in touch with RIAKA Construction & Development Corp. in Lemery, Batangas. Schedule a meeting or consultation for your residential, commercial, or structural needs.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="relative pt-24 lg:pt-28 bg-navy min-h-screen overflow-hidden">
        {/* Background photo with matching CTA blue overlay - hardware accelerated without mix-blend lag */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <Image
            src="/projects/projects-bg.png"
            alt="RIAKA Construction Blueprints & Safety Gear"
            fill
            priority
            className="object-cover opacity-20"
            style={{ objectPosition: 'center 35%' }}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#14233c]/85" />
        </div>

        {/* Breadcrumbs */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-4">
          <Breadcrumb items={[{ label: 'Get in Touch' }]} />
        </div>

        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
