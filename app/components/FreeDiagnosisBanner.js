import Image from "next/image"
import Link from "next/link"
import { ICONS } from "../lib/icons"

export default function FreeDiagnosisBanner() {
  return (
    <section className="bg-white px-5 py-8 md:px-14 md:py-10">
      <div className="relative mx-auto min-h-[290px] max-w-[1280px] overflow-hidden bg-[#eef8fb]">
        <Image
          src="/images/home/inspection-checklist.png"
          alt="방역 전문가가 체크리스트로 현장 진단 내용을 확인하는 모습"
          fill
          sizes="100vw"
          className="object-cover object-[76%_50%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(239,249,252,0.98)_0%,rgba(239,249,252,0.88)_42%,rgba(16,26,53,0.38)_100%)]" />
        <div className="relative px-6 py-12 md:px-28">
          <p className="text-[14px] leading-relaxed text-body3">
            해충방제부터 위생 환경 솔루션까지
            <br />
            우리집, 우리 사업장으로 찾아오는 전문 진단
          </p>
          <h2 className="mt-3 text-[30px] font-extrabold tracking-[-0.02em] text-deep md:text-[42px]">
            무료진단으로 먼저 확인하세요.
          </h2>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-[8px] bg-[#08153a] px-6 py-3.5 text-[14px] font-extrabold text-white transition hover:bg-primary">
            무료진단 신청하기 <ICONS.ArrowRight size={17} aria-hidden="true" />
          </Link>
          <div className="mt-8 flex gap-3 text-deep">
            <ICONS.ChevronLeft size={20} aria-hidden="true" />
            <span className="h-5 w-px bg-deep/20" />
            <ICONS.ChevronRight size={20} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
