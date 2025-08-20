"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "../contexts/LanguageContext";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Timeline } from "./ui/timeline";

import {
  CodeXml,
  TabletSmartphone,
  Camera,
  CircuitBoard,
  Tangent,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

const ServicesSection: React.FC = () => {
  const { t } = useLanguage();

  const safeTranslate = (key: string) => {
    try {
      return t(key) || key;
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return key;
    }
  };

  const features = [
    {
      Icon: CodeXml,
      name: safeTranslate("services.web.title"),
      description: safeTranslate("services.web.description"),
      href: "/",
      cta: "Learn more",
      background: (
        <Image
          src="/images/web-dev.jpg"
          alt="Web Development"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="absolute h-full w-full opacity-50"
        />
      ),
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: Camera,
      name: safeTranslate("services.photo.title"),
      description: safeTranslate("services.photo.description"),
      href: "/",
      cta: "Learn more",
      background: (
        <Image
          src="/images/photo.jpg"
          alt="Photography"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="absolute h-full w-full opacity-50"
        />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: TabletSmartphone,
      name: safeTranslate("services.mobile.title"),
      description: safeTranslate("services.mobile.description"),
      href: "/",
      cta: "Learn more",
      background: (
        <Image
          src="/images/mob-dev.jpg"
          alt="Mobile Development"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="absolute h-full w-full opacity-50"
        />
      ),
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CircuitBoard,
      name: safeTranslate("services.pcb.title"),
      description: safeTranslate("services.pcb.description"),
      href: "/",
      cta: "Learn more",
      background: (
        <Image
          src="/images/pcb.jpg"
          alt="PCB Design"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="absolute h-full w-full opacity-50"
        />
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: Tangent,
      name: safeTranslate("services.ui.title"),
      description: safeTranslate("services.ui.description"),
      href: "/",
      cta: "Learn more",
      background: (
        <Image
          src="/images/ui-design.png"
          alt="UI/UX Design"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: "cover" }}
          className="absolute h-full w-full opacity-50"
        />
      ),
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  const data = [
    {
      title: safeTranslate("process.consultation.title"),
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-sm text-neutral-200">
            {safeTranslate("process.consultation.desc")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/consultation.jpg"
              alt="Consultation Step"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/consultation-1.jpg"
              alt="Consultation Step"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: safeTranslate("process.planning.title"),
      content: (
        <div>
          <p className="mb-8 text-xs font-normal md:text-sm text-neutral-200">
            {safeTranslate("process.planning.desc")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/planning.jpg"
              alt="Planning Step"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/planning-1.jpg"
              alt="Planning Step"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: safeTranslate("process.execution.title"),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal md:text-sm text-neutral-200">
            {safeTranslate("process.execution.desc")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/execution.jpg"
              alt="Execution Step"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/execution-1.jpg"
              alt="Execution Step"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: safeTranslate("process.post-prod.title"),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-200 md:text-sm text-neutral-200">
            {safeTranslate("process.post-prod.desc")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/post-production.jpg"
              alt="Post Production Step"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/post-production-1.jpg"
              alt="Post Production Step"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: safeTranslate("process.delivery.title"),
      content: (
        <div>
          <p className="mb-4 text-xs font-normal md:text-sm text-neutral-200">
            {safeTranslate("process.delivery.desc")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/delivery.jpg"
              alt="Delivery Step"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/delivery-1.jpg"
              alt="Delivery Step"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6 elegant-font">
            {safeTranslate("services.title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {safeTranslate("services.subtitle")}
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>

        <div className="text-center mt-24 -mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6 elegant-font">
            {safeTranslate("process.title")}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-16 xl:mb-0">
            {safeTranslate("process.subtitle")}
          </p>
        </div>

        <div className="relative w-full">
          <Timeline data={data} />
        </div>

        {/* CTA Section */}
        <div className="mt-40 -mb-32 h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
          <Spotlight />
          <div className="text-center p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
            <h1
              className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
              dangerouslySetInnerHTML={{
                __html: t("services.cta.title").replace(
                  "Amazing?",
                  "Amazing?<br/>"
                ),
              }}
            />
            <p className="mt-4 mb-8 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
              {t("services.cta.description")}
            </p>
            <button className="cta-button text-lg group">
              {t("services.cta.button")}
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
