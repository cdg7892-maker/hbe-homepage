"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { SERVICES_DATA } from "../lib/services-data"
import { ICONS } from "../lib/icons"

const serviceImages = {
  roach: "/images/home/flyer-roach.png",
  rat: "/images/home/flyer-rat.png",
  "flying-insect": "/images/home/hero-sanitation-tech.png",
  disinfection: "/images/home/flyer-disinfection.png",
  "air-quality": "/images/home/inspection-checklist.png",
  mattress: "/images/home/home-bedroom-inspection.png",
  "water-tank": "/images/home/flyer-water-tank.png",
}

export default function SolutionCarousel() {
  const scrollRef = useRef(null)

  function scrollBy(amount) {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section className="bg-white px-5 py-18 md:px-14 md:py-24">
      <div className="mx-auto grid max-w-[1180px] gap-9 lg:grid-cols-[280px_1fr]">
        <div>
          <h2 className="text-[31px] font-extrabold leading-[1.25] tracking-[-0.02em] text-deep md:text-[42px]">
            전단 속 서비스,
            <br />
            홈페이지에서 바로
            <br />
            확인하세요.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-body3">
            바퀴벌레, 쥐, 소독, 물탱크 청소까지 사진과 함께 확인하고 바로 상담으로 이어집니다.
          </p>
          <div className="mt-9 flex gap-3 text-deep">
            <button type="button" onClick={() => scrollBy(-340)} aria-label="이전 솔루션" className="transition hover:text-primary">
              <ICONS.ChevronLeft size={22} aria-hidden="true" />
            </button>
            <span className="h-6 w-px bg-hairline-soft2" />
            <button type="button" onClick={() => scrollBy(340)} aria-label="다음 솔루션" className="transition hover:text-primary">
              <ICONS.ChevronRight size={22} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scroll-smooth">
          {SERVICES_DATA.map((s, index) => {
            const Icon = ICONS[s.icon]
            const featured = index === 0
            const imageSrc = serviceImages[s.slug] || "/images/home/hero-sanitation-tech.png"
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`relative min-h-[330px] w-[270px] shrink-0 snap-start overflow-hidden rounded-[48px_8px_48px_8px] border-2 bg-white transition hover:-translate-y-1 md:w-[300px] ${
                  featured ? "border-primary shadow-2xl shadow-primary/20" : "border-primary/80"
                }`}
              >
                <div className="relative h-36 overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={`${s.title} 서비스 사진`}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 ${featured ? "bg-primary/42" : "bg-deep/12"}`} />
                </div>
                <div className="p-7">
                  <span className={`mb-6 flex h-13 w-13 items-center justify-center rounded-[8px] ${featured ? "bg-primary text-white" : "bg-tint text-primary"}`}>
                    {Icon && <Icon size={26} strokeWidth={1.8} aria-hidden="true" />}
                  </span>
                  <h3 className="text-[22px] font-extrabold leading-snug text-primary">{s.title}</h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-body3">{s.shortDesc}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
