import Image from "next/image"
import Link from "next/link"
import { SITE } from "../lib/site"
import { ICONS } from "../lib/icons"

const quickLinks = ["바퀴벌레", "쥐 방제", "코로나 소독", "물탱크 청소"]

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-deep text-white">
      <Image
        src="/images/home/hero-sanitation-tech.png"
        alt="전문 방역 기사가 깨끗한 매장 내부를 점검하는 모습"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,35,27,0.86)_0%,rgba(20,57,43,0.68)_39%,rgba(20,57,43,0.16)_72%,rgba(20,57,43,0.04)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-deep/75 to-transparent" />

      <div className="relative flex min-h-[calc(100vh-80px)] flex-col justify-center px-5 py-14 md:px-14">
        <div className="max-w-[760px]">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-4 py-2 text-[13px] font-bold text-white backdrop-blur">
            <ICONS.ShieldCheck size={16} aria-hidden="true" />
            감염병 예방 교육 이수 · 방역소독 전문 서비스
          </span>
          <h1 className="mt-6 text-[40px] font-extrabold leading-[1.16] tracking-[-0.02em] md:text-[68px]">
            강진의 공간을
            <br />
            과학적으로 관리합니다
          </h1>
          <p className="mt-6 max-w-[560px] text-[16.5px] leading-[1.8] text-white/82 md:text-[19px]">
            {SITE.companyName}은 해충 방제, 소독, 물탱크 청소까지 현장 진단을 바탕으로 필요한 관리만 정확하게 제안합니다.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-signature bg-white px-7 py-4 text-[15.5px] font-extrabold text-deep shadow-xl shadow-black/15 transition hover:brightness-95">
              무료 진단 신청
            </Link>
            <a href={SITE.mobileHref} className="btn-signature border border-white/35 bg-white/10 px-7 py-4 text-[15.5px] font-bold text-white backdrop-blur transition hover:bg-white/18">
              전화 상담 {SITE.mobileDisplay}
            </a>
          </div>
        </div>

        <div className="mt-12 grid max-w-[920px] gap-3 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="rounded-[8px] border border-white/16 bg-white/12 p-4 backdrop-blur-md">
            <p className="text-[13px] font-bold text-white/60">지금 어떤 문제가 있나요?</p>
            <div className="mt-2 flex items-center gap-3 text-white">
              <ICONS.Search size={20} aria-hidden="true" />
              <span className="text-[18px] font-extrabold">맞춤 솔루션 바로 찾기</span>
            </div>
          </div>
          {quickLinks.map((item) => (
            <Link
              key={item}
              href="/services"
              className="flex min-h-[82px] items-center justify-between rounded-[8px] border border-white/14 bg-white/10 px-4 text-[14px] font-bold text-white backdrop-blur transition hover:bg-white/18"
            >
              {item}
              <ICONS.ArrowRight size={17} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
