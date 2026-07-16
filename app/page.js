import Hero from "./components/Hero"
import TrustStrip from "./components/TrustStrip"
import Services from "./components/Services"
import VenuePicker from "./components/VenuePicker"
import Testimonial from "./components/Testimonial"
import ServiceArea from "./components/ServiceArea"
import Cta from "./components/Cta"

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <VenuePicker />
      <Testimonial />
      <ServiceArea />
      <Cta />
    </>
  )
}
