import Link from "next/link"
import FaqAccordion from "./FaqAccordion"
import { FAQ_DATA } from "../lib/faq-data"

export default function FaqTeaser() {
  const items = FAQ_DATA.slice(0, 4)
  return (
    <section className="bg-offwhite px-5 md:px-14 py-16 md:py-20">
      <div className="text-center mb-10">
        <span className="text-primary text-[13px] font-extrabold tracking-[0.08em] uppercase">FAQ</span>
        <h2 className="text-[24px] md:text-[30px] font-extrabold text-deep tracking-[-0.02em] mt-2">
          많이 찾는 질문
        </h2>
      </div>
      <div className="max-w-[680px] mx-auto">
        <FaqAccordion items={items} />
        <div className="text-center mt-8">
          <Link
            href="/support"
            className="inline-block text-primary font-bold text-[14.5px] border-b-2 border-primary pb-0.5 hover:opacity-75 transition"
          >
            질문 더보기 →
          </Link>
        </div>
      </div>
    </section>
  )
}
