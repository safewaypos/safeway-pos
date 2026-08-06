import React from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Features from "../components/Features";
import WhyChooseUs from "../components/WhyChooseUs";
import ERPModules from "../components/ERPModules";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AnimatedBackground from "../components/AnimatedBackground";
import AnimatedSection from "../components/AnimatedSection";
import WhatsAppFloat from "../components/WhatsAppFloat";
import Trusted from "@/components/Trusted";

export default function Page()  {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-900 text-white antialiased">
      <AnimatedBackground />

      <Navigation />

      <main className="relative z-10">
  <Hero />

  <AnimatedSection>
    <Features />
  </AnimatedSection>

  <WhyChooseUs />
  <ERPModules />
  <Trusted />
  <Pricing />
  <Testimonials />
  <FAQ />
  <Contact />
</main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}