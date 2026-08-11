import Image from "next/image"
import Link from "next/link"
import { SERVICES_DATA, VENUES } from "../lib/services-data"
import { ICONS } from "../lib/icons"

const featuredServices = [
  { label: "바퀴벌레 박멸", image: "/images/home/premium-kitchen-inspection.png", href: "/services/roach" },
  { label: "쥐 방제", image: "/images/home/premium-rodent-control.png", href: "/services/rat" },
  { label: "공간 소독", image: "/images/home/premium-disinfection-service.png", href: "/services/disinfection" },
  { label: "물탱크 청소", image: "/images/home/premium-water-tank-service.png", href: "/services/water-tank" },
]

export default function ProblemVenueSplit() {
  return (
    <section id="problems" className="scroll-mt-20 overflow-hidden bg-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative bg-primary px-5 py-16 text-white md:px-14 md:py-24 lg:pr-24">
          <div className="absolute inset-y-0 right-[-86px] z-10 hidden w-40 skew-x-[-8deg] bg-primary lg:block" />
          <div className="relative z-20 mx-auto max-w-[540px] lg:ml-auto">
            <h2 className="text-[31px] font-extrabold leading-[1.3] tracking-[-0.02em] md:text-[42px]">
              지금 필요한 방역을
              <br />
              바로 찾아보세요.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-white/74">
              대표 서비스부터 현장 맞춤 관리까지, 증상에 맞는 상담으로 연결합니다.
            </p>

            <div className="mt-9 grid grid-cols-2 gap-3">
              {featuredServices.map((service) => (
                <Link key={service.label} href={service.href} className="group overflow-hidden rounded-[8px] border border-white/24 bg-white/10">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={`${service.label} 현장 서비스 사진`}
                      fill
                      sizes="260px"
                      className="object-cover transition group-hover:scale-105"
                    />
                  </div>
                  <div className="px-3 py-3 text-center text-[13px] font-extrabold">{service.label}</div>
                </Link>
              ))}
            </div>

            <div className="mt-9 grid grid-cols-4 border border-white/25">
              {SERVICES_DATA.slice(0, 8).map((s) => {
                const Icon = ICONS[s.icon]
                return (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex aspect-square flex-col items-center justify-center gap-2 border-b border-r border-white/25 p-2 text-center transition hover:bg-white/12"
                  >
                    {Icon && <Icon size={23} strokeWidth={1.7} aria-hidden="true" />}
                    <span className="text-[11px] font-extrabold leading-tight">{s.title}</span>
                  </Link>
                )
              })}
            </div>
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
              가정, 외식매장, 창고, 공공시설까지 공간별 위생 기준에 맞춰 제안합니다.
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
            <Link href="/contact" className="mt-9 inline-flex items-center gap-3 text-[14px] font-extrabold text-white">
              무료진단 문의하기 <ICONS.ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
