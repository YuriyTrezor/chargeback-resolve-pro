import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import InfoSections from "@/components/InfoSections";
import DocumentsSection from "@/components/DocumentsSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <InfoSections />
      <DocumentsSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
