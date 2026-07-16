import Link from "next/link"
import { ICONS } from "../lib/icons"

export default function FreeDiagnosisBanner() {
  return (
    <section className="relative overflow-hidden bg-deep px-5 md:px-14 py-14 md:py-16">
      <div className="blob-decoration w-[320px] h-[320px] bg-primary/20 -bottom-32 -right-20" />
      <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-8">
        <div>
          <p className="text-footer-text text-[14px] mb-2">해충방제부터 위생 환경 관리까지</p>
          <h2 className="text-white text-[24px] md:text-[28px] font-extrabold leading-[1.4] tracking-[-0.02em] mb-6">
            우리 집, 우리 매장으로 찾아가는
            <br />한국방역환경 무료진단으로 확인하세요.
          </h2>
          <Link
            href="/contact"
            className="btn-signature bg-white text-deep font-bold text-[14.5px] px-6 py-3.5 inline-block hover:brightness-95 transition"
          >
            무료진단 신청하기
          </Link>
        </div>
        <span className="hidden md:flex w-28 h-28 rounded-full bg-white/10 text-white items-center justify-center shrink-0">
          <ICONS.ClipboardList size={48} strokeWidth={1.5} aria-hidden="true" />
        </span>
      </div>
    </section>
  )
}
