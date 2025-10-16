"use client"
import CallToAction from "@/components/call-to-action";
import FAQsTwo from "@/components/faqs-2";
import FeaturesSection from "@/components/features-seven";
import FooterSection from "@/components/footer-one";
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
      <TeamSection/>
      <Pricing/>
      <CallToAction />
      <FooterSection/>
    </div>
  );
}
