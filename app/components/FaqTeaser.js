import Link from "next/link"
import FaqAccordion from "./FaqAccordion"
import { FAQ_DATA } from "../lib/faq-data"

const bubbles = [
  { text: "가정집 비용은 얼마인가요?", className: "left-[43%] top-[24%] bg-red-500 text-white" },
  { text: "우리 집에 나타난 해충은 어떤 문제일까요?", className: "left-[58%] top-[16%] bg-white text-primary" },
  { text: "집에 먹을 거리가 없는데 왜 생기나요?", className: "left-[67%] top-[38%] bg-white text-primary" },
  { text: "아파트와 단독주택 비용은 다른가요?", className: "right-[7%] top-[12%] bg-primary text-white" },
  { text: "문제의 원인은 어떻게 찾나요?", className: "right-[14%] bottom-[25%] bg-primary text-white" },
]

export default function FaqTeaser() {
  const items = FAQ_DATA.slice(0, 4)
  return (
    <section className="relative overflow-hidden bg-[#07142a] px-5 py-16 text-white md:px-14 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_56%_48%,rgba(0,124,198,0.34),transparent_24%),linear-gradient(90deg,rgba(7,20,42,1),rgba(7,20,42,0.82))]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:56px_56px]" />

      {bubbles.map((bubble) => (
        <div
          key={bubble.text}
          className={`absolute hidden max-w-[270px] rounded-[28px_28px_6px_28px] px-6 py-4 text-center text-[14px] font-extrabold shadow-xl md:block ${bubble.className}`}
        >
          {bubble.text}
        </div>
      ))}

      <div className="relative mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.72fr_1fr]">
        <div>
          <p className="text-[13px] font-bold uppercase tracking-[0.28em] text-white/70">HBE FAQ</p>
          <h2 className="mt-3 text-[32px] font-extrabold leading-[1.25] tracking-[-0.02em] md:text-[46px]">
            많이 찾는
            <br />
            <span className="text-red-400">질문</span>
          </h2>
          <p className="mt-5 max-w-[360px] text-[15px] leading-relaxed text-white/60">
            해충 질문부터 서비스 문의까지, 상담 전에 궁금한 내용을 먼저 확인하세요.
          </p>
          <Link href="/support" className="mt-8 inline-flex rounded-[8px] border-2 border-red-500 px-7 py-3.5 text-[14px] font-extrabold text-white transition hover:bg-red-500">
            FAQ 바로가기
          </Link>
        </div>

        <div className="rounded-[8px] border border-white/12 bg-white/10 p-4 backdrop-blur-md md:p-6 lg:mt-40">
          <FaqAccordion items={items} />
        </div>
      </div>
    </section>
  )
}
