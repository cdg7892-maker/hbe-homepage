import Link from "next/link"
import FaqAccordion from "./FaqAccordion"
import { FAQ_DATA } from "../lib/faq-data"
import { ICONS } from "../lib/icons"

export default function FaqTeaser() {
  const items = FAQ_DATA.slice(0, 4)
  return (
    <section className="bg-offwhite px-5 py-16 md:px-14 md:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[0.75fr_1fr]">
        <div>
          <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-primary">FAQ</span>
          <h2 className="mt-2 text-[26px] font-extrabold tracking-[-0.02em] text-deep md:text-[36px]">
            상담 전에 자주 묻는 질문
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-body3">
            방문 가능 지역, 안전성, 준비사항처럼 상담 전에 궁금한 내용을 먼저 확인하세요.
          </p>
          <Link href="/support" className="mt-7 inline-flex items-center gap-2 text-[14.5px] font-extrabold text-primary">
            질문 더보기 <ICONS.ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <FaqAccordion items={items} />
      </div>
    </section>
  )
}
