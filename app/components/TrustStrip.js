import Image from "next/image"
import { TRUST_ITEMS } from "../lib/site"
import { ICONS } from "../lib/icons"

const proofCards = [
  {
    title: "법정교육 이수",
    desc: "감염병 예방 및 관리 교육 수료",
    image: "/images/home/certificate-education.png",
    alt: "한국방역환경 감염병 예방 교육 이수증",
    position: "object-[50%_38%]",
  },
  {
    title: "서비스 범위 확인",
    desc: "바퀴벌레, 쥐, 소독, 물탱크 청소",
    image: "/images/home/flyer-services-strip.png",
    alt: "한국방역환경 서비스 범위 사진",
    position: "object-center",
  },
  {
    title: "전문 이력",
    desc: "지역 기준 방역 전문 경력",
    image: "/images/home/flyer-credentials.png",
    alt: "한국방역환경 방역 전문 경력 안내",
    position: "object-center",
  },
]

export default function TrustStrip() {
  return (
    <section className="bg-[#f7faf7] px-5 py-14 md:px-14 md:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-primary">Verified Local Care</span>
          <h2 className="mt-3 text-[28px] font-extrabold leading-[1.3] tracking-[-0.02em] text-deep md:text-[40px]">
            전단 속 서비스와
            <br />
            실제 이력을 함께 보여드립니다.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.8] text-body3">
            한국방역환경은 단순 홍보가 아니라, 감염병 예방 교육 이수와 현장 경험을 바탕으로
            해충 방제부터 위생 소독, 물탱크 청소까지 한 번에 상담합니다.
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

        <div className="grid gap-4 md:grid-cols-3">
          {proofCards.map((card, index) => (
            <article
              key={card.title}
              className={`overflow-hidden rounded-[8px] border border-hairline bg-white shadow-xl shadow-deep/5 ${
                index === 1 ? "md:translate-y-8" : ""
              }`}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 768px) 260px, 80vw"
                  className={`object-cover ${card.position}`}
                />
              </div>
              <div className="p-4">
                <p className="text-[13px] font-bold text-primary">{card.title}</p>
                <p className="mt-1 text-[15px] font-extrabold text-deep">{card.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
