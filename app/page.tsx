import { Hero } from "../components/hero";
import { Nav } from "../components/nav";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Nav />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
      <Hero />
    </main>
  );
}
