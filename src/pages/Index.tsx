import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ManagersSection from "@/components/ManagersSection";
import InfoSections from "@/components/InfoSections";
import GuaranteesSection from "@/components/GuaranteesSection";
import FAQSection from "@/components/FAQSection";
import DocumentsSection from "@/components/DocumentsSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBadges />
      <AboutSection />
      <ServicesSection />
      <ManagersSection />
      <InfoSections />
      <GuaranteesSection />
      <FAQSection />
      <DocumentsSection />
      <ReviewsSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
