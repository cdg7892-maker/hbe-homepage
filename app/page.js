import Hero from "./components/Hero"
import TrustStrip from "./components/TrustStrip"
import ProblemVenueSplit from "./components/ProblemVenueSplit"
import PricingBanner from "./components/PricingBanner"
import FreeDiagnosisBanner from "./components/FreeDiagnosisBanner"
import SolutionCarousel from "./components/SolutionCarousel"
import FaqTeaser from "./components/FaqTeaser"
import ColumnTeaser from "./components/ColumnTeaser"
import ReviewsSection from "./components/ReviewsSection"
import ServiceArea from "./components/ServiceArea"
import Cta from "./components/Cta"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProblemVenueSplit />
      <PricingBanner />
      <FreeDiagnosisBanner />
      <SolutionCarousel />
      <FaqTeaser />
      <ColumnTeaser />
      <ReviewsSection />
      <ServiceArea />
      <Cta />
    </>
  )
}
