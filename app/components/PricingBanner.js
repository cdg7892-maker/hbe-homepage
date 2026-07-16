import Image from "next/image"
import Link from "next/link"

export default function PricingBanner() {
  return (
    <section className="bg-white px-5 py-12 md:px-14 md:py-16">
      <div className="relative mx-auto min-h-[240px] max-w-[1180px] overflow-hidden rounded-[28px] bg-[#e9e8e5]">
        <Image
          src="/images/home/hero-sanitation-tech.png"
          alt="깨끗한 상업 공간 방역 점검 이미지"
          fill
          sizes="(min-width: 768px) 1180px, 100vw"
          className="object-cover object-[72%_45%] opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,245,242,0.96)_0%,rgba(245,245,242,0.84)_43%,rgba(245,245,242,0.22)_78%,rgba(245,245,242,0.04)_100%)]" />
        <div className="relative px-6 py-10 md:px-12 md:py-14">
          <p className="text-[14px] font-extrabold text-primary">한국방역환경이 직접 안내하는</p>
          <h2 className="mt-2 text-[28px] font-extrabold tracking-[-0.02em] text-deep md:text-[38px]">
            방역 비용의 기준을
            <span className="text-primary"> 투명하게</span>
          </h2>
          <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-body3">
            같은 해충 문제라도 공간 크기, 발생 정도, 재방문 필요 여부에 따라 견적이 달라집니다.
            전화 상담 후 필요한 항목만 안내합니다.
          </p>
          <Link href="/support" className="mt-7 inline-flex rounded-[8px] bg-primary px-6 py-3.5 text-[14.5px] font-extrabold text-white transition hover:brightness-95">
            비용 확인하기
          </Link>
        </div>
      </div>
    </section>
  )
}
