import { theme } from "../theme.config";
import { SectionTitle } from "./section-title";
import { SectionWrapper } from "./section-wrapper";

export const OurProcess = () => {
  const connect = (
    <div className="pt-7 sm:pt-10 pb-7 sm:pb-20 sm:text-right">
      <h2 className="text-3xl sm:text-4xl font-bold font-consolas pb-3">
        [01]
      </h2>
      <h2 className="text-3xl sm:text-4xl font-medium">CONNECT</h2>
      <p className="text-lg sm:text-2xl">
        To succeed we need to understand what exists today and your goals for
        tomorrow. We&apos;ll grab the requirements for your project and quickly
        turn around a proposal.
      </p>
    </div>
  );

  const research = (
    <div className="pt-7 sm:pt-56 pb-7 sm:pb-20 text-right sm:text-left">
      <h2 className="text-3xl sm:text-4xl font-bold font-consolas pb-3">
        [02]
      </h2>
      <h2 className="text-3xl sm:text-4xl font-medium">RESEARCH</h2>
      <p className="text-lg sm:text-2xl">
        We dive into your industry and competition. We unpack your target
        audience to make sure what we design is what they crave.
      </p>
    </div>
  );

  const design = (
    <div className="pt-7 sm:pt-10 pb-7 sm:pb-20 sm:text-right">
      <h2 className="text-3xl sm:text-4xl font-bold font-consolas pb-3">
        [03]
      </h2>
      <h2 className="text-3xl sm:text-4xl font-medium">DESIGN</h2>
      <p className="text-lg sm:text-2xl">
        We&apos;ll send you a high fidelity look and feel of your finished
        product for you to review. We aim to get as close as possible to your
        desired outcome in the first go, keeping timeline top of mind.
      </p>
    </div>
  );

  const develop = (
    <div className="pt-7 sm:pt-10 pb-7 sm:pb-20 text-right sm:text-left">
      <h2 className="text-3xl sm:text-4xl font-bold font-consolas pb-3">
        [04]
      </h2>
      <h2 className="text-3xl sm:text-4xl font-medium">DEVELOP</h2>
      <p className="text-lg sm:text-2xl">
        When it&apos;s right, we build it, test, and publish.
      </p>
    </div>
  );

  return (
    <div
      className="bg-primary flex flex-row justify-center min-w-screen"
      id="our-process"
    >
      <SectionWrapper>
        <SectionTitle title="Our Process" color={theme.background} />
        <div className="flex pt-10 sm:pt-20 text-background flex-col sm:flex-row">
          <div className="flex-1 flex-col items-end gap-3 hidden sm:flex">
            {connect}
            {design}
          </div>
          <div className="flex-1 flex-col items-end gap-3 sm:hidden flex">
            {connect}
            {research}
          </div>
          <div className="hidden sm:block w-[3px] bg-background mx-20" />
          <div className="flex-1 flex-col items-end sm:items-start text-left gap-3 hidden sm:flex">
            {research}
            {develop}
          </div>
          <div className="flex-1 flex-col items-end text-left gap-3 sm:hidden flex">
            {design}
            {develop}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};
