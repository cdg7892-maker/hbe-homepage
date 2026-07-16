import Link from "next/link"
import { SERVICES_DATA, VENUES } from "../lib/services-data"
import { ICONS } from "../lib/icons"

export default function ProblemVenueSplit() {
  return (
    <section id="problems" className="scroll-mt-20 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative bg-primary px-5 py-16 text-white md:px-14 md:py-24 lg:pr-24">
          <div className="absolute inset-y-0 right-[-86px] z-10 hidden w-40 skew-x-[-8deg] bg-primary lg:block" />
          <div className="relative z-20 mx-auto max-w-[520px] lg:ml-auto">
            <h2 className="text-[31px] font-extrabold leading-[1.3] tracking-[-0.02em] md:text-[42px]">
              어떤 문제를
              <br />
              해결하고 싶나요?
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/70">
              생활 속 불편부터 매장 위생까지, 증상에 맞는 최적의 솔루션을 찾아드립니다.
            </p>
            <div className="mt-9 grid grid-cols-2 border border-white/25 sm:grid-cols-4">
              {SERVICES_DATA.slice(0, 8).map((s) => {
                const Icon = ICONS[s.icon]
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex aspect-square flex-col items-center justify-center gap-3 border-b border-r border-white/25 p-3 text-center transition hover:bg-white/12"
                  >
                    {Icon && <Icon size={28} strokeWidth={1.7} aria-hidden="true" />}
                    <span className="text-[12px] font-extrabold leading-tight">{s.title}</span>
                  </Link>
                )
              })}
            </div>
            <Link href="/services" className="mt-9 inline-flex items-center gap-3 text-[14px] font-extrabold text-white">
              펼쳐보기 <ICONS.ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="bg-[#101a35] px-5 py-16 text-white md:px-14 md:py-24 lg:pl-28">
          <div className="mx-auto max-w-[520px] lg:mr-auto">
            <h2 className="text-right text-[31px] font-extrabold leading-[1.3] tracking-[-0.02em] md:text-[42px]">
              어느 곳에
              <br />
              방역이 필요한가요?
            </h2>
            <p className="mt-5 text-right text-[15px] leading-relaxed text-white/60">
              장소별 사용 동선과 위생 기준에 맞춰 솔루션을 제안합니다.
            </p>
            <div className="mt-9 grid grid-cols-2 border border-white/25 sm:grid-cols-3">
              {VENUES.map((v) => {
                const Icon = ICONS[v.icon]
                return (
                  <Link
                    key={v.key}
                    href="/services"
                    className="group flex aspect-square flex-col items-center justify-center gap-3 border-b border-r border-white/25 p-3 text-center transition hover:bg-white/10"
                  >
                    {Icon && <Icon size={28} strokeWidth={1.7} aria-hidden="true" />}
                    <span className="text-[12px] font-extrabold leading-tight">{v.label}</span>
                  </Link>
                )
              })}
            </div>
            <Link href="/services" className="mt-9 inline-flex items-center gap-3 text-[14px] font-extrabold text-white">
              <ICONS.ChevronLeft size={18} aria-hidden="true" /> 펼쳐보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
