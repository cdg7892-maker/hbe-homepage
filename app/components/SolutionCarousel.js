"use client"

import { useRef } from "react"
import Link from "next/link"
import { SERVICES_DATA } from "../lib/services-data"
import { ICONS } from "../lib/icons"

export default function SolutionCarousel() {
  const scrollRef = useRef(null)

  function scrollBy(amount) {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" })
  }

  return (
    <section className="bg-white px-5 py-16 md:px-14 md:py-22">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-primary">Programs</span>
            <h2 className="mt-2 text-[26px] font-extrabold tracking-[-0.02em] text-deep md:text-[36px]">
              생활과 영업을 멈추지 않는 방역 프로그램
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollBy(-320)}
              aria-label="이전 서비스 보기"
              className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-hairline text-body transition hover:border-primary hover:text-deep"
            >
              <ICONS.ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(320)}
              aria-label="다음 서비스 보기"
              className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-hairline text-body transition hover:border-primary hover:text-deep"
            >
              <ICONS.ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 scroll-smooth">
          {SERVICES_DATA.map((s, i) => {
            const Icon = ICONS[s.icon]
            const highlighted = i === 0
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`min-h-[260px] w-[280px] shrink-0 snap-start rounded-[8px] border p-6 transition hover:-translate-y-1 ${
                  highlighted
                    ? "border-primary bg-primary text-white shadow-xl shadow-primary/20"
                    : "border-hairline bg-offwhite hover:border-primary hover:bg-white"
                }`}
              >
                <span
                  className={`mb-8 flex h-14 w-14 items-center justify-center rounded-[8px] ${
                    highlighted ? "bg-white/16" : "bg-white text-primary"
                  }`}
                >
                  {Icon && <Icon size={25} strokeWidth={2} color={highlighted ? "#fff" : undefined} aria-hidden="true" />}
                </span>
                <div className={`text-[19px] font-extrabold ${highlighted ? "text-white" : "text-deep"}`}>{s.title}</div>
                <p className={`mt-3 text-[14px] leading-relaxed ${highlighted ? "text-white/75" : "text-body3"}`}>{s.heroDesc}</p>
                <span className={`mt-7 inline-flex items-center gap-2 text-[13px] font-extrabold ${highlighted ? "text-white" : "text-primary"}`}>
                  자세히 보기 <ICONS.ArrowRight size={16} aria-hidden="true" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
