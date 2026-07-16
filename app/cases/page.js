import PageHeader from "../components/PageHeader"
import Cta from "../components/Cta"
import { ICONS } from "../lib/icons"
import { CASES_DATA } from "../lib/cases-data"
import { getServiceBySlug } from "../lib/services-data"

export const metadata = {
  title: "시공사례",
  description: "한국방역환경이 강진군 곳곳에서 진행한 방역·해충방제 시공사례를 확인하세요.",
}

export default function CasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="시공사례"
        title="강진군 곳곳의 시공사례"
        desc="가정·매장·건물에서 진행한 방역 사례를 소개합니다."
      />
      <section className="bg-white px-5 md:px-14 py-14 md:py-16">
        <div className="flex flex-col gap-4 max-w-[720px] mx-auto">
          {CASES_DATA.map((c, i) => {
            const service = getServiceBySlug(c.serviceSlug)
            const Icon = service ? ICONS[service.icon] : null
            return (
              <details
                key={i}
                className="bg-offwhite border border-hairline rounded-2xl px-6 py-5 group"
              >
                <summary className="flex items-center gap-4 cursor-pointer list-none">
                  <div className="w-11 h-11 rounded-full bg-tint text-primary flex items-center justify-center shrink-0">
                    {Icon && <Icon size={20} strokeWidth={2} aria-hidden="true" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[15px] font-bold text-deep">{c.title}</span>
                      {c.isPlaceholder && (
                        <span className="text-[11px] font-bold text-badge-text bg-badge-bg px-2 py-0.5 rounded-full">
                          예시
                        </span>
                      )}
                    </div>
                    <span className="text-[13px] text-body2">{c.area}</span>
                  </div>
                </summary>
                <p className="text-[14px] text-body leading-relaxed mt-4 pl-15">{c.summary}</p>
              </details>
            )
          })}
        </div>
      </section>
      <Cta />
    </>
  )
}
