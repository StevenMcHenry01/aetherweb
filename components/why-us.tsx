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
    <SectionWrapper id="why-us">
      <SectionTitle title="Why Us" color={theme.tertiary} />
      <Accordion type="single" collapsible className="p-10 my-10 text-tertiary">
        <AccordionItem value="item-1" className="border-tertiary">
          <AccordionTrigger
            className="flex justify-between hover:text-tertiary-dark hover:no-underline"
            hideArrow
          >
            <h2>SETTING YOU APART</h2>
            <h2 className="text-3xl font-consolas">[01]</h2>
          </AccordionTrigger>
          <AccordionContent>
            We build 100% custom websites, no templates, no CMS limitations.
            This gives us boundless creative freedom to make sure you truly
            stand out in competitive markets.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </SectionWrapper>
  );
};
