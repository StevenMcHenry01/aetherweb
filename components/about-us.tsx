import Image from "next/image";
import Dude from "../public/dude.jpeg";
import { theme } from "../theme.config";
import { SectionTitle } from "./section-title";
import { SectionWrapper } from "./section-wrapper";

export const AboutUs = () => {
  return (
    <SectionWrapper id="about-us">
      <SectionTitle title="About Us" color={theme.secondary} />
      <div className="flex flex-wrap justify-center gap-6 pt-16 sm:pt-28">
        <div className="flex flex-col items-center gap-8">
          <Image
            src={Dude}
            alt="Dude"
            width={400}
            height={600}
            className="rounded-xl"
          />
          <h2 className="text-xl sm:text-3xl text-secondary font-medium">
            ROBERT GREGG
          </h2>
        </div>
        <div className="flex flex-col items-center gap-8">
          <Image
            src={Dude}
            alt="Dude"
            width={400}
            height={600}
            className="rounded-xl"
          />
          <h2 className="text-xl sm:text-3xl text-secondary font-medium">
            STEVEN MCHENRY
          </h2>
        </div>
      </div>

      <div className="w-full border-2 border-secondary text-secondary rounded-xl flex justify-center text-center py-10 px-10 sm:px-32 mt-16 sm:mt-24">
        <p className="text-lg sm:text-2xl font-light">
          Aether Web is a small yet skilled ensemble of designers, marketers,
          and developers. We&apos;ve turned our passion for tech and creative
          marketing into a dynamic web services agency supporting the backbone
          of America: small businesses.{" "}
        </p>
      </div>
    </SectionWrapper>
  );
};
