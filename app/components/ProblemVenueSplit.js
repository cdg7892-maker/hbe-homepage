import Link from "next/link"
import { SERVICES_DATA, VENUES } from "../lib/services-data"
import { ICONS } from "../lib/icons"

export default function ProblemVenueSplit() {
  return (
    <section id="problems" className="grid md:grid-cols-2 scroll-mt-20">
      <div className="bg-primary px-5 md:px-12 py-14 md:py-16">
        <h2 className="text-white text-[24px] md:text-[28px] font-extrabold leading-[1.35] tracking-[-0.02em]">
          어떤 문제를
          <br />
          해결하고 싶나요?
        </h2>
        <p className="text-on-primary-muted text-[14px] mt-3 mb-8">
          최적의 서비스로 우리 집·매장의 고민을 해결합니다.
        </p>
        <div className="grid grid-cols-4 gap-3 max-w-[420px]">
          {SERVICES_DATA.map((s) => {
            const Icon = ICONS[s.icon]
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex flex-col items-center gap-2 text-center group"
              >
                <span className="w-full aspect-square rounded-2xl bg-white/15 flex items-center justify-center group-hover:bg-white/25 transition-colors">
                  {Icon && <Icon size={22} strokeWidth={2} color="#fff" aria-hidden="true" />}
                </span>
                <span className="text-white text-[11.5px] font-semibold leading-tight">{s.title}</span>
              </Link>
            )
          })}
        </div>
        <Link
          href="/services"
          className="inline-block mt-8 text-white font-bold text-[14px] border-b-2 border-white/60 pb-0.5 hover:opacity-80 transition"
        >
          전체보기 →
        </Link>
      </div>

      <div className="bg-deep px-5 md:px-12 py-14 md:py-16">
        <h2 className="text-white text-[24px] md:text-[28px] font-extrabold leading-[1.35] tracking-[-0.02em]">
          어느 곳에
          <br />
          한국방역환경이 필요한가요?
        </h2>
        <p className="text-footer-text text-[14px] mt-3 mb-8">장소별 최적의 서비스를 제안합니다.</p>
        <div className="grid grid-cols-3 gap-3 max-w-[420px]">
          {VENUES.map((v) => {
            const Icon = ICONS[v.icon]
            return (
              <Link key={v.key} href="/services" className="flex flex-col items-center gap-2 text-center group">
                <span className="w-full aspect-square rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  {Icon && <Icon size={22} strokeWidth={2} color="#fff" aria-hidden="true" />}
                </span>
                <span className="text-white text-[11.5px] font-semibold leading-tight">{v.label}</span>
              </Link>
            )
          })}
        </div>
        <Link
          href="/services"
          className="inline-block mt-8 text-white font-bold text-[14px] border-b-2 border-white/60 pb-0.5 hover:opacity-80 transition"
        >
          전체보기 →
        </Link>
      </div>
    </section>
  )
}
