"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SITE } from "../lib/site"
import { ICONS } from "../lib/icons"

const keywordLinks = ["바퀴벌레", "쥐 방제", "소독", "물탱크 청소", "가정집 비용"]

const heroSlides = [
  {
    image: "/images/home/hero-science-inspection.png",
    alt: "방역 전문가가 어두운 공간에서 과학 장비로 해충 흔적을 점검하는 모습",
    eyebrow: "정밀 진단",
    title: "보이지 않는 문제까지\n먼저 찾아냅니다",
    desc: `${SITE.companyName}은 해충의 침입 경로와 번식 원인을 먼저 확인한 뒤 공간에 맞는 해결책을 제안합니다.`,
  },
  {
    image: "/images/home/hero-science-control.png",
    alt: "방역 관제 전문가들이 모니터링 화면으로 위생 데이터를 확인하는 모습",
    eyebrow: "과학적 관리",
    title: "감으로 하지 않고\n데이터로 관리합니다",
    desc: "가정, 매장, 시설별 환경을 진단하고 방역 소독부터 사후 관리까지 체계적으로 안내합니다.",
  },
  {
    image: "/images/home/hero-science-dispatch.png",
    alt: "방역 전문가가 서비스 차량 옆에서 장비를 준비하는 모습",
    eyebrow: "빠른 방문 상담",
    title: "강진권 현장으로\n빠르게 찾아갑니다",
    desc: `바퀴벌레, 쥐, 소독, 물탱크 청소 상담은 ${SITE.phoneDisplay}으로 바로 연결됩니다.`,
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5200)

    return () => window.clearInterval(timer)
  }, [])

  const slide = heroSlides[activeSlide]

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="border-b border-hairline bg-white px-5 py-5 md:px-14">
        <div className="mx-auto grid max-w-[1180px] gap-4 md:grid-cols-[1fr_500px] md:items-center">
          <p className="text-[18px] font-extrabold leading-snug text-deep md:text-[22px]">
            <span className="inline-block">
              지금 <span className="text-red-500">당신의 고민</span>은 무엇인가요?
            </span>
            <span className="mt-1 block md:mt-0 md:inline md:ml-1">
              <span className="text-primary">맞춤 솔루션</span>을 추천해 드릴게요.
            </span>
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

      <div className="relative min-h-[660px] bg-deep text-white md:min-h-[720px]">
        {heroSlides.map((item, index) => (
          <Image
            key={item.image}
            src={item.image}
            alt={index === activeSlide ? item.alt : ""}
            aria-hidden={index !== activeSlide}
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-1000 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,18,35,0.96)_0%,rgba(6,18,35,0.88)_33%,rgba(6,18,35,0.34)_64%,rgba(6,18,35,0.08)_100%)]" />
        <div className="absolute inset-y-0 left-0 hidden w-[58%] bg-primary/58 [clip-path:polygon(0_0,80%_0,100%_100%,0_100%)] lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-black/10" />

        <div className="relative mx-auto flex min-h-[660px] max-w-[1180px] items-center px-5 pt-14 pb-24 md:min-h-[720px] md:px-0 md:py-16">
          <div className="max-w-[650px]">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-4 py-2 text-[13px] font-bold backdrop-blur">
              <ICONS.ShieldCheck size={16} aria-hidden="true" />
              {slide.eyebrow} · 해충 박멸 · 방역 소독 · 물탱크 청소
            </span>
            <h1 className="mt-6 whitespace-pre-line text-[36px] font-extrabold leading-[1.14] tracking-normal sm:text-[42px] md:mt-7 md:text-[70px]">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-[560px] text-[15.5px] leading-[1.76] text-white/84 md:mt-6 md:text-[19px]">
              {slide.desc}
            </p>
            <div className="mt-7 grid max-w-[340px] gap-3 sm:flex sm:max-w-none sm:flex-wrap md:mt-9">
              <Link href="/contact" className="rounded-full border border-[#63a87f] bg-[#4a8a68] px-7 py-3.5 text-center text-[15px] font-extrabold text-white shadow-xl shadow-black/20 transition hover:bg-[#3f775a] md:py-4 md:text-[15.5px]">
                무료 진단 신청
              </Link>
              <a href={SITE.phoneHref} className="rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-center text-[15px] font-bold text-white backdrop-blur transition hover:bg-white/20 md:py-4 md:text-[15.5px]">
                전화 상담 {SITE.phoneDisplay}
              </a>
            </div>
            <div className="mt-8 flex gap-3 md:mt-10" aria-label="메인 히어로 슬라이드 선택">
              {heroSlides.map((item, index) => (
                <button
                  key={item.image}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`${index + 1}번 히어로 이미지 보기`}
                  aria-pressed={index === activeSlide}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeSlide ? "w-12 bg-white" : "w-2.5 bg-white/38 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
