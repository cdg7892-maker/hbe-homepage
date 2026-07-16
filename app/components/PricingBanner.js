import Link from "next/link"
import { ICONS } from "../lib/icons"

export default function PricingBanner() {
  return (
    <section className="bg-white px-5 py-10 md:px-14 md:py-14">
      <div className="mx-auto grid max-w-[1180px] items-center gap-6 rounded-[8px] border border-hairline bg-offwhite p-7 md:grid-cols-[1fr_auto] md:p-10">
        <div>
          <span className="text-[13px] font-bold text-primary">견적은 현장을 보고 정확하게</span>
          <h2 className="mt-2 text-[24px] font-extrabold tracking-[-0.02em] text-deep md:text-[32px]">
            같은 바퀴벌레 방제라도 공간과 발생 정도에 따라 비용은 달라집니다.
          </h2>
          <p className="mt-4 max-w-[700px] text-[15px] leading-relaxed text-body3">
            전화 상담으로 기본 범위를 먼저 확인하고, 방문 진단 후 필요한 관리만 견적에 반영합니다.
          </p>
        </div>
        <Link href="/support" className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-primary px-6 py-3.5 text-[14.5px] font-extrabold text-white transition hover:brightness-95">
          비용 문의하기 <ICONS.ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
