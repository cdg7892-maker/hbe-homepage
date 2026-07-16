import { SITE } from "../lib/site"
import { ICONS } from "../lib/icons"
import HeroIllustration from "./HeroIllustration"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-offwhite">
      <div className="blob-decoration w-[420px] h-[420px] bg-primary/15 -top-40 -left-32" />
      <div className="blob-decoration w-[360px] h-[360px] bg-badge-bg -bottom-24 right-0" />

      <div className="relative grid md:grid-cols-2 gap-10 px-5 md:px-14 pt-16 md:pt-24 pb-16 md:pb-24 items-center">
        <div>
          <span className="inline-block bg-badge-bg text-badge-text text-[13px] font-bold px-3.5 py-1.5 rounded-full mb-5">
            강진군 주민이 먼저 찾는 방역업체
          </span>
          <h1 className="text-[36px] md:text-[52px] font-extrabold leading-[1.25] tracking-[-0.03em] text-deep">
            우리 동네 방역은
            <br />
            <span className="text-primary">{SITE.companyName}</span>이
            <br />
            책임집니다
          </h1>
          <p className="text-[16.5px] md:text-[17.5px] leading-[1.75] text-body mt-6 max-w-[440px]">
            강진읍 동성로에서 출발해 강진군 곳곳으로 — 이웃처럼 가깝고, 전문가처럼 확실하게 방역합니다.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="/contact"
              className="btn-signature btn-primary font-bold text-[15.5px] px-[28px] py-[16px]"
            >
              무료 상담 신청하기
            </a>
            <a
              href="#problems"
              className="btn-signature border border-hairline-soft text-btn-outline-text font-semibold text-[15.5px] px-[28px] py-[16px] hover:bg-white transition"
            >
              서비스 둘러보기
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="w-full aspect-[5/4] rounded-3xl overflow-hidden card-elevated">
            <HeroIllustration />
          </div>
          <div className="absolute -bottom-5 -left-5 md:-left-8 bg-white card-elevated rounded-2xl px-5 py-4 flex items-center gap-3 max-w-[220px]">
            <span className="w-10 h-10 rounded-full bg-tint text-primary flex items-center justify-center shrink-0">
              <ICONS.Clock size={20} strokeWidth={2} aria-hidden="true" />
            </span>
            <div>
              <div className="text-[13px] font-bold text-deep leading-tight">당일 방문 상담</div>
              <div className="text-[11.5px] text-body2">강진군 전 지역 출동</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
