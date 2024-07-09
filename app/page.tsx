import { AboutUs } from "../components/about-us";
import { FinalCta } from "../components/final-cta";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Nav } from "../components/nav/nav";
import { OurProcess } from "../components/our-process";
import { Background } from "../components/ui/background";
import { WhatWeDo } from "../components/what_we_do/what-we-do";
import { WhyUs } from "../components/why-us";

export default function Home() {
  return (
    <Background>
      <Nav />
      <Hero />
      <WhatWeDo />
      <OurProcess />
      <WhyUs />
      <AboutUs />
      <FinalCta />
      <Footer />
    </Background>
  );
}
