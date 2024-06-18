import { Hero } from "../components/hero";
import { Nav } from "../components/nav/nav";
import { OurProcess } from "../components/our-process";
import { WhatWeDo } from "../components/what-we-do";
import { WhyUs } from "../components/why-us";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      <Hero />
      <WhatWeDo />
      <OurProcess />
      <WhyUs />
    </main>
  );
}
