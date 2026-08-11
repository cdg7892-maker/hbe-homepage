import Link from "next/link"
import { SITE } from "../lib/site"

export default function StickyDiagnosisCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 pb-[env(safe-area-inset-bottom)] text-center text-white shadow-[0_-10px_30px_rgba(0,0,0,0.16)] md:inset-x-auto md:right-6 md:bottom-6 md:w-[260px] md:grid-cols-1 md:overflow-hidden md:rounded-[8px] md:pb-0 md:shadow-2xl md:shadow-deep/20">
      <Link href="/contact" className="bg-primary px-3 py-2.5 text-[12.5px] font-extrabold md:px-5 md:py-4 md:text-[15px]">
        무료진단 신청
        <span className="ml-1 hidden font-semibold text-white/78 sm:inline">(전체)</span>
      </Link>
      <a href={SITE.phoneHref} className="bg-red-500 px-3 py-2.5 text-[12.5px] font-extrabold md:px-5 md:py-4 md:text-[15px]">
        긴급 전화 상담
        <span className="ml-1 hidden font-semibold text-white/78 sm:inline">{SITE.phoneDisplay}</span>
      </a>
    </div>
  )
}
