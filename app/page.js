"use client"
import FAQsTwo from "@/components/faqs-2";
import FeaturesSection from "@/components/features-seven";
import FooterSection from "@/components/footer-one";
import { ContactForm } from "@/components/formComponent";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-7";
import LogoCloud from "@/components/logo-cloud";
import Pricing from "@/components/pricing";
import StatsSection from "@/components/stats";
import TeamSection from "@/components/team-section-one";
import TestimonialSection from "@/components/testimonials-two";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <LogoCloud/>
      <StatsSection />
      <FeaturesSection />
      <IntegrationsSection />
      <FAQsTwo/>
      <TestimonialSection />
      {/* <CallToAction /> */}
      <TeamSection/>
      <Pricing/>
      <ContactForm/>
      <FooterSection/>
    </div>
  );
}
