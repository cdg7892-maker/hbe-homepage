import PageHeader from "../components/PageHeader"
import VenueTabs from "../components/VenueTabs"
import Cta from "../components/Cta"
import { SERVICES_DATA } from "../lib/services-data"

export const metadata = {
  title: "서비스안내",
  description: "바퀴벌레·쥐·모기파리 방제부터 소독·실내공기질·매트리스·물탱크 청소까지, 한국방역환경 서비스를 장소별로 확인하세요.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="서비스안내"
        title="어떤 공간이신가요?"
        desc="가정집·매장·사무실, 공간에 따라 우선순위가 다릅니다. 우리 공간에 맞는 서비스를 확인해보세요."
      />
      <section className="bg-white px-5 md:px-14 py-14 md:py-16">
        <VenueTabs services={SERVICES_DATA} />
      </section>
      <Cta />
    </>
  )
}
