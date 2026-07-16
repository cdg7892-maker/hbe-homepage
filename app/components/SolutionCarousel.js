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
    <section className="bg-white px-5 md:px-14 py-16 md:py-20">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
        <div>
          <span className="text-primary text-[13px] font-extrabold tracking-[0.08em] uppercase">Solutions</span>
          <h2 className="text-[24px] md:text-[30px] font-extrabold text-deep tracking-[-0.02em] mt-2">
            한국방역환경의 다양한 솔루션을
            <br className="hidden md:block" /> 만나보세요!
          </h2>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scrollBy(-280)}
            aria-label="이전"
            className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-body hover:text-deep hover:border-primary transition-colors"
          >
            <ICONS.ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(280)}
            aria-label="다음"
            className="w-10 h-10 rounded-full border border-hairline flex items-center justify-center text-body hover:text-deep hover:border-primary transition-colors"
          >
            <ICONS.ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth">
        {SERVICES_DATA.map((s, i) => {
          const Icon = ICONS[s.icon]
          const highlighted = i === 0
          return (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={`card-elevated shrink-0 snap-start w-[240px] rounded-2xl p-6 flex flex-col gap-4 border transition-colors ${
                highlighted
                  ? "bg-primary border-primary text-white"
                  : "bg-white border-hairline hover:border-primary"
              }`}
            >
              <span
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  highlighted ? "bg-white/20" : "bg-tint text-primary"
                }`}
              >
                {Icon && <Icon size={22} strokeWidth={2} color={highlighted ? "#fff" : undefined} aria-hidden="true" />}
              </span>
              <div>
                <div className={`text-[16px] font-bold mb-2 ${highlighted ? "text-white" : "text-deep"}`}>
                  {s.title}
                </div>
                <div className={`text-[13px] leading-relaxed ${highlighted ? "text-on-primary-muted" : "text-body2"}`}>
                  {s.shortDesc}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
