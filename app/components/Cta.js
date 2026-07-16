import { SITE } from "../lib/site"

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-tint2 px-5 md:px-14 py-14 md:py-[64px] text-center">
      <div className="blob-decoration w-[300px] h-[300px] bg-primary/10 -top-20 left-1/4" />
      <div className="relative">
        <h2 className="text-[22px] md:text-[26px] font-extrabold text-deep tracking-[-0.02em]">
          지금 전화 한 통이면 충분해요
        </h2>
        <p className="text-[15px] text-body3 mt-2.5 mb-7">
          당일 방문 상담도 가능합니다. 편하게 연락주세요.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={SITE.phoneHref}
            className="btn-signature btn-primary font-bold text-base px-7 py-4"
          >
            📞 전화상담 {SITE.phoneDisplay}
          </a>
          <a
            href="/contact"
            className="btn-signature border border-hairline-soft2 text-deep font-semibold text-base px-7 py-4 hover:bg-white transition"
          >
            온라인 문의하기
          </a>
        </div>
      </div>
    </section>
  )
}
