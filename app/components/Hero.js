import Image from "next/image"
import Link from "next/link"
import { SITE } from "../lib/site"
import { ICONS } from "../lib/icons"

const keywordLinks = ["바퀴벌레", "쥐 방제", "소독", "물탱크 청소", "가정집 비용"]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="border-b border-hairline bg-white px-5 py-5 md:px-14">
        <div className="mx-auto grid max-w-[1180px] gap-4 md:grid-cols-[1fr_500px] md:items-center">
          <p className="text-[18px] font-extrabold tracking-[-0.02em] text-deep md:text-[22px]">
            지금 <span className="text-red-500">당신의 고민</span>은 무엇인가요?
            <span className="ml-1 text-primary">맞춤 솔루션</span>을 추천해 드릴게요.
          </p>
          <div>
            <Link
              href="/services"
              className="flex h-12 items-center justify-between rounded-full border-2 border-primary bg-white px-5 text-[14px] font-semibold text-body2 shadow-sm"
            >
              고민을 검색해 보세요
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
                <ICONS.Search size={19} aria-hidden="true" />
              </span>
            </Link>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 px-5 text-[12px] font-bold">
              {keywordLinks.map((item, index) => (
                <Link key={item} href="/services" className={index === 0 ? "text-red-500" : "text-body2"}>
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[720px] bg-deep text-white">
        <Image
          src="/images/home/hero-sanitation-tech.png"
          alt="전문 방역 기사가 깨끗한 매장 내부를 점검하는 모습"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,49,0.94)_0%,rgba(7,24,49,0.78)_38%,rgba(0,119,198,0.22)_66%,rgba(255,255,255,0.03)_100%)]" />
        <div className="absolute inset-y-0 left-0 hidden w-[54%] bg-primary/80 [clip-path:polygon(0_0,86%_0,100%_100%,0_100%)] lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[720px] max-w-[1180px] items-center px-5 py-16 md:px-0">
          <div className="max-w-[650px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-[13px] font-bold backdrop-blur">
              <ICONS.ShieldCheck size={16} aria-hidden="true" />
              해충 박멸 · 방역 소독 · 물탱크 청소 전문
            </span>
            <h1 className="mt-7 text-[42px] font-extrabold leading-[1.12] tracking-[-0.02em] md:text-[70px]">
              보이지 않는 문제까지
              <br />
              먼저 찾아냅니다
            </h1>
            <p className="mt-6 max-w-[560px] text-[17px] leading-[1.78] text-white/82 md:text-[19px]">
              {SITE.companyName}은 바퀴벌레, 쥐, 소독, 물탱크 청소까지 현장 진단을 바탕으로 공간에 맞는 해결책을 제안합니다.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full border border-[#63a87f] bg-[#4a8a68] px-7 py-4 text-[15.5px] font-extrabold text-white shadow-xl shadow-black/20 transition hover:bg-[#3f775a]">
                무료 진단 신청
              </Link>
              <a href={SITE.phoneHref} className="rounded-full border border-white/40 bg-white/10 px-7 py-4 text-[15.5px] font-bold text-white backdrop-blur transition hover:bg-white/20">
                전화 상담 {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
