import Image from "next/image"
import { SERVICE_AREAS, SITE } from "../lib/site"
import { ICONS } from "../lib/icons"

export default function ServiceArea() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 text-center md:px-14 md:py-20">
      <Image
        src="/images/home/water-tank-inspection.png"
        alt="물탱크와 시설 위생 점검 현장"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-16"
      />
      <div className="absolute inset-0 bg-white/82" />
      <div className="relative mx-auto max-w-[820px]">
        <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-[8px] bg-tint text-primary">
          <ICONS.MapPinned size={26} strokeWidth={2} aria-hidden="true" />
        </span>
        <h2 className="text-[25px] font-extrabold tracking-[-0.02em] text-deep md:text-[32px]">
          강진읍에서 강진군 전역으로 빠르게 방문합니다
        </h2>
        <p className="mx-auto mt-4 max-w-[620px] text-[15px] leading-[1.75] text-body3">
          {SITE.address}을 중심으로 가정, 매장, 사무실, 창고와 공공시설의 방역 상담을 진행합니다.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2.5">
          {SERVICE_AREAS.map((area) => (
            <span key={area} className="rounded-[8px] border border-hairline bg-white px-4 py-[10px] text-[13.5px] font-bold text-deep shadow-sm">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
