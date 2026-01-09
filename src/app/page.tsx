import Hero from "@/components/home/Hero"
import Problems from "@/components/Problems"
import Solution from "@/components/Solution"
import Demos from "@/components/home/Demos"
import Pricing from "@/components/home/Pricing"
import FinalCTA from "@/components/home/FinalCTA"

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Problems />
      <Solution />
      <Demos />
      <Pricing />
      <FinalCTA />
    </main>
  )
}
