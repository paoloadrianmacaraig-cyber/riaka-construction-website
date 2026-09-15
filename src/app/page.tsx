import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MissionVisionSection from '@/components/MissionVisionSection';
import StatsSection from '@/components/StatsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import WorkflowSection from '@/components/WorkflowSection';
import WhyChooseSection from '@/components/WhyChooseSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionVisionSection />
        <StatsSection />
        <ProjectsSection />
        <ServicesSection />
        <WorkflowSection />
        <WhyChooseSection />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
      <ScrollReveal />
    </>
  );
}
