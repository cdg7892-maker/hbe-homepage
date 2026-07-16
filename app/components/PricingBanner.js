import Link from "next/link"
import { ICONS } from "../lib/icons"

export default function PricingBanner() {
  return (
    <section className="bg-white px-5 md:px-14 py-10 md:py-14">
      <div className="card-elevated grid md:grid-cols-2 items-center bg-offwhite border border-hairline rounded-3xl overflow-hidden">
        <div className="p-8 md:p-12">
          <span className="text-primary text-[13px] font-bold">한국방역환경이 솔직하게 알려드리는</span>
          <h2 className="text-[22px] md:text-[26px] font-extrabold text-deep tracking-[-0.02em] mt-1 mb-4">
            &lsquo;가정집 방역 비용&rsquo;의 진실
          </h2>
          <p className="text-[14.5px] text-body leading-relaxed mb-6 max-w-[420px]">
            비용은 공간 크기와 서식 정도에 따라 달라집니다. 방문 전 전화로 대략적인 비용을 안내해드리고,
            현장 확인 후 정확한 견적을 말씀드립니다 — 숨겨진 추가 비용은 없습니다.
          </p>
          <Link href="/support" className="btn-signature btn-primary inline-block font-bold text-[14.5px] px-6 py-3.5">
            가정집 비용 확인하기
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center p-12">
          <span className="w-40 h-40 rounded-full bg-tint2 text-primary flex items-center justify-center">
            <ICONS.Search size={56} strokeWidth={1.5} aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  )
}
