import Image from "next/image"
import { TRUST_ITEMS } from "../lib/site"
import { ICONS } from "../lib/icons"

export default function TrustStrip() {
  return (
    <section className="bg-[#f7faf7] px-5 py-14 md:px-14 md:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-primary">Certified Care</span>
          <h2 className="mt-3 text-[28px] font-extrabold leading-[1.3] tracking-[-0.02em] text-deep md:text-[40px]">
            방역은 빠르게,
            <br />
            증명은 분명하게.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.8] text-body3">
            한국방역환경은 감염병 예방 및 관리 법정교육 이수 기반으로 현장별 방역 계획을 세웁니다.
            강진 지역의 가정, 매장, 창고, 공공시설까지 목적에 맞는 관리를 제공합니다.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {TRUST_ITEMS.map((item) => {
              const Icon = ICONS[item.icon]
              return (
                <div key={item.label} className="rounded-[8px] border border-hairline bg-white p-4">
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-[8px] bg-tint text-primary">
                    {Icon && <Icon size={21} strokeWidth={2} aria-hidden="true" />}
                  </span>
                  <strong className="text-[14px] leading-snug text-deep">{item.label}</strong>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-[8px] border border-hairline bg-white shadow-xl shadow-deep/5">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/home/certificate-education.png"
                alt="한국방역환경 감염병 예방 교육 이수증"
                fill
                sizes="(min-width: 768px) 320px, 45vw"
                className="object-cover object-[50%_38%]"
              />
            </div>
            <div className="p-4">
              <p className="text-[13px] font-bold text-primary">법정교육 이수</p>
              <p className="mt-1 text-[15px] font-extrabold text-deep">감염병 예방 및 관리 교육 수료</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[8px] border border-hairline bg-white shadow-xl shadow-deep/5 sm:translate-y-8">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/home/service-flyer.png"
                alt="한국방역환경 해충 박멸 및 방역 소독 안내 자료"
                fill
                sizes="(min-width: 768px) 320px, 45vw"
                className="object-cover object-[50%_42%]"
              />
            </div>
            <div className="p-4">
              <p className="text-[13px] font-bold text-primary">현장 서비스</p>
              <p className="mt-1 text-[15px] font-extrabold text-deep">바퀴벌레, 쥐, 소독, 물탱크 청소</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
