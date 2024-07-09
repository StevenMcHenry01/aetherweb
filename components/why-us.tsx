import { theme } from "../theme.config";
import { SectionTitle } from "./section-title";
import { SectionWrapper } from "./section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordian";

const accordionItems = [
  {
    value: "item-1",
    title: "SETTING YOU APART",
    index: "[01]",
    content:
      "We build 100% custom websites, no templates, no CMS limitations. This gives us boundless creative freedom to make sure you truly stand out in competitive markets.",
  },
  {
    value: "item-2",
    title: "PEAK PERFORMANCE",
    index: "[02]",
    content:
      "Our clients receive only incredibly fast, accessible web solutions that are fully optimized and favored by search engines. With a focus on staying ahead of digital trends, we ensure your project will not only meet but exceed industry standards.",
  },
  {
    value: "item-3",
    title: "AFFORDABILITY & FLEXIBILITY",
    index: "[03]",
    content:
      "Professional builds are delivered without the high costs and lengthy project timelines of larger agencies. Every effort is made to work within your budget and ensure a quick return on investment.",
  },
];

const stats = [
  {
    percentage: "80%",
    text: "of consumers research online before buying",
  },
  {
    percentage: "82%",
    text: "of consumers are less likely to buy something from an outdated website",
  },
  {
    percentage: "92%",
    text: "of SMBs know their website affects their sales but only 26% seek help",
  },
];

export const WhyUs = () => {
  return (
    <SectionWrapper id="why-us" className="!pb-20">
      <SectionTitle title="Why Us" color={theme.tertiary} />
      <Accordion
        type="single"
        collapsible
        className="p-3 sm:p-8 my-5 sm:my-10 text-tertiary"
      >
        {accordionItems.map((item) => (
          <AccordionItem
            key={item.value}
            value={item.value}
            className="border-none"
          >
            <AccordionTrigger
              className="flex justify-between hover:text-tertiary-dark hover:no-underline border-b-2 border-tertiary mb-4"
              hideArrow
            >
              <h2 className="text-lg sm:text-3xl">{item.title}</h2>
              <h2 className="text-lg sm:text-3xl font-consolas">
                {item.index}
              </h2>
            </AccordionTrigger>
            <AccordionContent className="py-5 text-base sm:text-2xl font-light">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="pt-10 w-full flex flex-wrap gap-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-tertiary flex justify-center flex-col items-center p-6 sm:p-10 border-2 border-tertiary rounded-xl flex-1 text-center h-[225px] min-w-[240px] sm:min-w-[290px] transition-all hover:bg-tertiary hover:text-background duration-500"
          >
            <h2 className="text-4xl sm:text-5xl font-consolas">
              {stat.percentage}
            </h2>
            <p className="text-xl sm:text-2xl font-light">{stat.text}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
