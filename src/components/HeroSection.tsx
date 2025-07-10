"use client";

import React from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "../contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BoxReveal } from "@/components/magicui/box-reveal";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

interface HeroSectionProps {
  setActiveSection: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setActiveSection }) => {
  const { t } = useLanguage();

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

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="animate-slide-in-left">
          <BoxReveal boxColor={"#EA3D3D"} duration={0.5}>
            <h1 className="text-6xl md:text-8xl font-bold elegant-font">
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

          <div className="flex flex-col sm:flex-row gap-6">
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
                onClick={() => scrollToSection("contact")}
                variant="outline"
                className="px-8 py-4 border-2 h-16 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 text-lg"
              >
                {safeTranslate("hero.contact")}
              </Button>
            </BoxReveal>
          </div>
        </div>
        <Card className="bg-foreground border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Impaxion</CardTitle>
            <CardDescription>@impaxionteam</CardDescription>
            <CardDescription className="text-slate-300">
              {safeTranslate("hero.subtitle")}
            </CardDescription>
          </CardHeader>
          <CardContent className="relative h-[300px] lg:h-[400px] animate-fade-in border border-slate-700 rounded-lg p-0 mx-6 mb-6">
            <Spline scene="https://prod.spline.design/Mr0SeX4k7SfO4xNl/scene.splinecode" />
          </CardContent>
        </Card>
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
