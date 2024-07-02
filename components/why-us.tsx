import { theme } from "../theme.config";
import { SectionTitle } from "./section-title";
import { SectionWrapper } from "./section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordian";

export const WhyUs = () => {
  return (
    <SectionWrapper id="why-us" className="!pb-20">
      <SectionTitle title="Why Us" color={theme.tertiary} />
      <Accordion
        type="single"
        collapsible
        className="p-3 sm:p-8 my-5 sm:my-10 text-tertiary"
      >
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger
            className="flex justify-between hover:text-tertiary-dark hover:no-underline border-b-2 border-tertiary mb-4"
            hideArrow
          >
            <h2 className="text-lg sm:text-3xl">SETTING YOU APART</h2>
            <h2 className="text-lg sm:text-3xl font-consolas">[01]</h2>
          </AccordionTrigger>
          <AccordionContent className="py-5 text-base sm:text-2xl font-light">
            We build 100% custom websites, no templates, no CMS limitations.
            This gives us boundless creative freedom to make sure you truly
            stand out in competitive markets.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-none">
          <AccordionTrigger
            className="flex justify-between hover:text-tertiary-dark hover:no-underline border-b-2 border-tertiary mb-4"
            hideArrow
          >
            <h2 className="text-lg sm:text-3xl">PEAK PERFORMANCE</h2>
            <h2 className="text-lg sm:text-3xl font-consolas">[02]</h2>
          </AccordionTrigger>
          <AccordionContent className="py-5 text-base sm:text-2xl font-light">
            We only deliver incredibly fast, accessible websites, all of which
            are fully optimized and favored by search engines. Our commitment to
            staying ahead of digital trends ensures your project not only meets
            but surpasses industry standards.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger
            className="flex justify-between hover:text-tertiary-dark hover:no-underline border-b-2 border-tertiary text-left"
            hideArrow
          >
            <h2 className="text-lg sm:text-3xl">AFFORDABILITY & FLEXIBILITY</h2>
            <h2 className="text-lg sm:text-3xl font-consolas">[03]</h2>
          </AccordionTrigger>
          <AccordionContent className="py-5 text-base sm:text-2xl font-light">
            We pride ourselves in our ability to deliver professional builds
            without the insane costs and project calendars you&apos;ll get with
            larger agencies. We&apos;ll do our best to work within your budget
            and make sure you get your return on investment ASAP.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="pt-12 w-full flex flex-wrap gap-10">
        <div className="text-tertiary flex justify-center flex-col items-center  p-6 sm:p-10 border-2 border-tertiary rounded-xl flex-1 text-center h-[225px] min-w-[240px] sm:min-w-[290px]">
          <h2 className="text-4xl sm:text-5xl font-consolas">80%</h2>
          <p className="text-xl sm:text-2xl font-light">
            of consumers research online before buying
          </p>
        </div>
        <div className="text-tertiary flex justify-center flex-col items-center  p-6 sm:p-10 border-2 border-tertiary rounded-xl flex-1 text-center h-[225px] min-w-[240px] sm:min-w-[290px]">
          <h2 className="text-4xl sm:text-5xl font-consolas">82%</h2>
          <p className="text-xl sm:text-2xl font-light">
            of consumers are less likely to buy something from an outdated
            website
          </p>
        </div>
        <div className="text-tertiary flex justify-center flex-col items-center  p-6 sm:p-10 border-2 border-tertiary rounded-xl flex-1 text-center h-[225px] min-w-[240px] sm:min-w-[290px]">
          <h2 className="text-4xl sm:text-5xl font-consolas">92%</h2>
          <p className="text-xl sm:text-2xl font-light">
            of SMBs know their website affects their sales but only 26% seek
            help
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};
