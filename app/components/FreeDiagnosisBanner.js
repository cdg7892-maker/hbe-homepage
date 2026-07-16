import Link from "next/link"
import { ICONS } from "../lib/icons"

export default function FreeDiagnosisBanner() {
  return (
    <section className="bg-deep px-5 py-14 text-white md:px-14 md:py-16">
      <div className="mx-auto grid max-w-[1180px] items-center gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-[14px] font-bold text-white/55">현장 진단부터 사후 관리까지</p>
          <h2 className="mt-2 text-[25px] font-extrabold leading-[1.38] tracking-[-0.02em] md:text-[34px]">
            우리 집, 우리 매장에 필요한 방역을
            <br />
            무료 상담으로 먼저 확인하세요.
          </h2>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-white px-7 py-4 text-[15px] font-extrabold text-deep transition hover:brightness-95"
        >
          무료 진단 신청 <ICONS.ArrowRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
