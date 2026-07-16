import Link from "next/link"
import { SERVICES_DATA, VENUES } from "../lib/services-data"
import { ICONS } from "../lib/icons"

export default function ProblemVenueSplit() {
  return (
    <section id="problems" className="scroll-mt-20 bg-white px-5 py-16 md:px-14 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-primary">Solution Finder</span>
            <h2 className="mt-3 text-[30px] font-extrabold leading-[1.28] tracking-[-0.02em] text-deep md:text-[44px]">
              어떤 문제를
              <br />
              해결하고 싶나요?
            </h2>
            <p className="mt-4 text-[16px] leading-[1.75] text-body3">
              해충, 소독, 수질, 공기질까지 공간의 상태를 먼저 보고 가장 필요한 관리부터 제안합니다.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {SERVICES_DATA.slice(0, 8).map((s) => {
              const Icon = ICONS[s.icon]
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group rounded-[8px] border border-hairline bg-offwhite p-4 transition hover:-translate-y-1 hover:border-primary hover:bg-white hover:shadow-lg hover:shadow-deep/5"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-tint text-primary transition group-hover:bg-primary group-hover:text-white">
                    {Icon && <Icon size={23} strokeWidth={2} aria-hidden="true" />}
                  </span>
                  <strong className="mt-4 block text-[15.5px] text-deep">{s.title}</strong>
                  <span className="mt-2 block text-[13px] leading-relaxed text-body2">{s.shortDesc}</span>
                </Link>
              )
            })}
          </div>
        </div>

        <div className="mt-14 border-t border-hairline pt-10">
          <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-primary">By Space</span>
              <h3 className="mt-2 text-[24px] font-extrabold tracking-[-0.02em] text-deep md:text-[32px]">
                장소별로 필요한 방역은 다릅니다
              </h3>
            </div>
            <Link href="/services" className="inline-flex items-center gap-2 text-[14px] font-extrabold text-primary">
              전체 서비스 보기 <ICONS.ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-3 md:grid-cols-5">
            {VENUES.map((v) => {
              const Icon = ICONS[v.icon]
              return (
                <Link
                  key={v.key}
                  href="/services"
                  className="rounded-[8px] bg-deep p-5 text-white transition hover:-translate-y-1 hover:bg-primary"
                >
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-[8px] bg-white/12">
                    {Icon && <Icon size={22} strokeWidth={2} aria-hidden="true" />}
                  </span>
                  <strong className="text-[17px]">{v.label}</strong>
                  <span className="mt-3 block text-[13px] leading-relaxed text-white/72">{v.blurb}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
