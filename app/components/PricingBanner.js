import Image from "next/image"
import Link from "next/link"

export default function PricingBanner() {
  return (
    <section className="bg-white px-5 py-12 md:px-14 md:py-16">
      <div className="relative mx-auto min-h-[250px] max-w-[1180px] overflow-hidden rounded-[28px] bg-[#ecebea]">
        <Image
          src="/images/home/home-bedroom-inspection.png"
          alt="전문 방역 기사가 침실 매트리스 주변을 점검하는 모습"
          fill
          sizes="(min-width: 768px) 1180px, 100vw"
          className="object-cover object-[72%_48%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,245,242,0.98)_0%,rgba(245,245,242,0.84)_45%,rgba(245,245,242,0.18)_78%,rgba(245,245,242,0.02)_100%)]" />
        <div className="relative px-6 py-10 md:px-12 md:py-14">
          <p className="text-[14px] font-extrabold text-primary">한국방역환경이 직접 안내하는</p>
          <h2 className="mt-2 text-[28px] font-extrabold tracking-[-0.02em] text-deep md:text-[38px]">
            가정집 방역 비용의
            <span className="text-primary"> 현실적인 기준</span>
          </h2>
          <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-body3">
            침실, 주방, 욕실처럼 생활 공간마다 필요한 관리가 다릅니다.
            현장 상태를 먼저 확인하고 필요한 항목만 견적에 반영합니다.
          </p>
          <Link href="/support" className="mt-7 inline-flex rounded-[8px] bg-primary px-6 py-3.5 text-[14.5px] font-extrabold text-white transition hover:brightness-95">
            비용 확인하기
          </Link>
        </div>
      </div>
    </section>
  )
}
