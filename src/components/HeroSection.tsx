"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveSection }) => {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <div
        className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="space-y-8 animate-slide-in-left">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold elegant-font">
              <span className="gradient-text block leading-tight">
                {safeTranslate("hero.title")}
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              {safeTranslate("hero.subtitle")}
            </h2>
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
            {safeTranslate("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => scrollToSection("services")}
              className="cta-button text-lg font-bold tracking-wide"
            >
              {safeTranslate("hero.cta")}
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="px-8 py-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25"
            >
              {safeTranslate("hero.contact")}
            </Button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-red-500 transition-colors duration-300">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
