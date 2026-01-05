/**
 * HOME PAGE
 * Página de composición.
 * No contiene lógica ni markup complejo.
 */

import Demos from "@/components/home/Demos";
import Hero from "@/components/home/Hero";
import PriceCard from "@/components/prices/PriceCard";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";



export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Problems />
      <Solution />
      <Demos />
      {/*       <PriceCard />
      <FinalCTA /> */}
    </main>
  );
}
