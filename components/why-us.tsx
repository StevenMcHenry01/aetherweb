import { theme } from "../theme.config";
import { SectionTitle } from "./section-title";
import { SectionWrapper } from "./section-wrapper";

export const WhyUs = () => {
  return (
    <SectionWrapper id="why-us">
      <SectionTitle title="Why Us" color={theme.tertiary} />
    </SectionWrapper>
  );
};
