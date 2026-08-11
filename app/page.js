import Hero from "./components/Hero"
import IntegratedPestSolution from "./components/IntegratedPestSolution"
import TrustStrip from "./components/TrustStrip"
import ProblemVenueSplit from "./components/ProblemVenueSplit"
import FreeDiagnosisBanner from "./components/FreeDiagnosisBanner"
import SolutionCarousel from "./components/SolutionCarousel"
import ColumnTeaser from "./components/ColumnTeaser"
import FaqTeaser from "./components/FaqTeaser"
import ServiceArea from "./components/ServiceArea"
import Cta from "./components/Cta"
import StickyDiagnosisCta from "./components/StickyDiagnosisCta"

export default function Home() {
  return (
    <>
      <Hero />
      <IntegratedPestSolution />
      <TrustStrip />
      <ProblemVenueSplit />
      <FreeDiagnosisBanner />
      <SolutionCarousel />
      <ColumnTeaser />
      <FaqTeaser />
      <ServiceArea />
      <Cta />
      <StickyDiagnosisCta />
    </>
  )
}
