import { SITE } from "../lib/site"
import { SERVICES_DATA } from "../lib/services-data"
import ServiceCard from "./ServiceCard"

export default function Services() {
  return (
    <section id="services" className="bg-offwhite px-5 md:px-14 py-16 md:py-20 scroll-mt-20">
      <div className="text-center mb-10 md:mb-12">
        <h2 className="text-[26px] md:text-[32px] font-extrabold text-deep tracking-[-0.02em]">
          이런 고민, 저희가 해결해드려요
        </h2>
        <p className="text-[15px] text-body2 mt-3">
          강진군 가정과 매장에서 가장 많이 찾는 서비스입니다
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES_DATA.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
        <div className="bg-primary rounded-[20px] px-[22px] py-7 flex flex-col justify-center gap-2.5">
          <div className="text-[15.5px] font-bold text-white">어떤 서비스가 필요한지 모르겠다면?</div>
          <div className="text-[13px] leading-relaxed text-on-primary-muted">
            전화 한 통이면 딱 맞는 서비스를 안내해드려요.
          </div>
          <a
            href={SITE.phoneHref}
            className="mt-1 inline-block w-fit bg-white text-primary font-bold text-[13px] px-[15px] py-[9px] rounded-full hover:brightness-95 transition"
          >
            전화로 물어보기
          </a>
        </div>
      </div>
    </section>
  )
}
