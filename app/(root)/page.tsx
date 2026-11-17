import React from "react";
import { Hero } from "@/modules/home/components/Hero";
import { ProductShowcase } from "@/modules/home/components/ProductShowcase";
import { FeatureGrid } from "@/modules/home/components/FeatureGrid";
import { HowItWorks } from "@/modules/home/components/HowItWorks";
import { FrameworkGrid } from "@/modules/home/components/FrameworkGrid";
import { AIShowcase } from "@/modules/home/components/AIShowcase";
import { FAQSection } from "@/modules/home/components/FAQSection";
import { FinalCTA } from "@/modules/home/components/FinalCTA";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* 2. Hero */}
      <Hero />

      {/* 3. Product Showcase */}
      <ProductShowcase />

      {/* 4. Core Features */}
      <FeatureGrid />

      {/* 5. How It Works */}
      <HowItWorks />

      {/* 6. Supported Frameworks */}
      <FrameworkGrid />

      {/* 7. AI Capabilities */}
      <AIShowcase />

      {/* 8. FAQ */}
      <FAQSection />

      {/* 9. Final CTA */}
      <FinalCTA />
    </div>
  );
}
