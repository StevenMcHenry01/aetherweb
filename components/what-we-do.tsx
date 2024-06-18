import Image from "next/image";
import HalfCircle from "../public/half-circle.svg";
import { theme } from "../theme.config";
import { SectionTitle } from "./section-title";
import { SectionWrapper } from "./section-wrapper";

export const WhatWeDo = () => {
  return (
    <SectionWrapper id="what-we-do">
      <SectionTitle title="What We Do" color={theme.secondary} />
      <div className="flex justify-between pt-9 items-center sm:gap-48 md:gap-72">
        <p className="text-secondary text-xl">
          Whatever the purpose or industry, we develop high performance websites
          for all businesses. All projects include secure SSL, SEO, conversion
          rate optimization, lead capture configuration, and a real time KPI
          reporting.
        </p>
        <div className="flex-col hidden sm:flex flex-shrink-0">
          <Image
            src={HalfCircle}
            alt="half circle decoration"
            width={180}
            height={88}
          />
          <Image
            src={HalfCircle}
            alt="half circle decoration"
            width={180}
            height={88}
          />
        </div>
      </div>
      <div className="pt-10 sm:pt-20 flex flex-col sm:flex-row gap-10">
        <div className="border-2 border-secondary rounded-2xl p-10 bg-background flex-1 min-h-[200px] sm:min-h-[320px] flex flex-col justify-end items-start">
          <h2 className="text-xl sm:text-3xl text-secondary sm:pb-3 font-medium">
            DIGITAL FACE-LIFT
          </h2>
          <p className="text-secondary text-lg sm:text-2xl font-light">
            For existing businesses
          </p>
        </div>
        <div className="border-2 border-secondary rounded-2xl p-10 bg-background flex-1 min-h-[200px] sm:min-h-[320px] flex flex-col justify-end items-start">
          <h2 className="text-xl sm:text-3xl text-secondary sm:pb-3 font-medium">
            MAKE IT ETHEREAL
          </h2>
          <p className="text-secondary text-lg sm:text-2xl font-light">
            Startups & cusom applications
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
