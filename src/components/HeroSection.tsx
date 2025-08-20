"use client";

import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { BoxReveal } from "@/components/magicui/box-reveal";

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveSection }) => {
  const { t } = useLanguage();
  const whatsappUrl =
    "https://wa.me/6282295775007?text=Hello%2C%20I%27d%20like%20to%20inquire%20about%20digital%20services.";

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const safeTranslate = (key: string) => {
    try {
      return t(key) || key;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="animate-slide-in-left flex flex-col items-center text-center">
          <BoxReveal boxColor={"#EA3D3D"} duration={0.5}>
            <h1 className="text-4xl md:text-6xl font-bold brand-font mb-4">
              <span className="gradient-text block leading-tight">
                {safeTranslate("hero.title")}
              </span>
            </h1>
          </BoxReveal>

          <BoxReveal boxColor={"#EA3D3D"} duration={0.5}>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-8">
              {safeTranslate("hero.description")}
            </p>
          </BoxReveal>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <BoxReveal boxColor={"#EA3D3D"} duration={0.5}>
              <button
                onClick={() => scrollToSection("services")}
                className="cta-button text-lg font-bold tracking-wide"
              >
                {safeTranslate("hero.cta")}
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </BoxReveal>

            <BoxReveal boxColor={"#EA3D3D"} duration={0.5}>
              <Button
                asChild
                variant="outline"
                className="px-12 py-7 text-lg border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {safeTranslate("hero.contact")}
                </a>
              </Button>
            </BoxReveal>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-red-500 transition-colors duration-300">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
