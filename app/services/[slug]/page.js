import { notFound } from "next/navigation"
import PageHeader from "../../components/PageHeader"
import FaqAccordion from "../../components/FaqAccordion"
import Cta from "../../components/Cta"
import { ICONS } from "../../lib/icons"
import { SERVICES_DATA, VENUES, getServiceBySlug } from "../../lib/services-data"

export function generateStaticParams() {
  return SERVICES_DATA.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.heroDesc,
  }
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const Icon = ICONS[service.icon]

  return (
    <>
      <PageHeader eyebrow="서비스안내" title={service.title} desc={service.heroDesc} />

      <section className="bg-white px-5 md:px-14 py-14 md:py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-tint text-primary flex items-center justify-center">
            {Icon && <Icon size={24} strokeWidth={2} aria-hidden="true" />}
          </div>
          <h2 className="text-[20px] font-extrabold text-deep">진행 과정</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {service.process.map((step, i) => (
            <div key={step.title} className="bg-offwhite border border-hairline rounded-2xl p-6">
              <div className="text-primary font-extrabold text-[13px] mb-2">STEP {i + 1}</div>
              <div className="text-[15.5px] font-bold text-deep mb-2">{step.title}</div>
              <div className="text-[13.5px] text-body2 leading-relaxed">{step.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-offwhite px-5 md:px-14 py-14 md:py-16">
        <h2 className="text-[20px] font-extrabold text-deep mb-6">장소별 안내</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {VENUES.map((v) => {
            const info = service.venues[v.key]
            return (
              <div key={v.key} className="bg-white border border-hairline rounded-2xl p-6">
                <div className="text-[14px] font-bold text-deep mb-2">{v.label}</div>
                <div className="text-[13.5px] text-body2 leading-relaxed">{info?.note}</div>
              </div>
            )
          })}
        </div>
      </section>

      {service.faq?.length > 0 && (
        <section className="bg-white px-5 md:px-14 py-14 md:py-16">
          <h2 className="text-[20px] font-extrabold text-deep mb-6">자주 묻는 질문</h2>
          <FaqAccordion items={service.faq} />
        </section>
      )}

      <Cta />
    </>
  )
}
