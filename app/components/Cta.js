import { SITE } from "../lib/site"

export default function Cta() {
  return (
    <section className="bg-[#f7faf7] px-5 py-16 text-center md:px-14 md:py-20">
      <div className="mx-auto max-w-[760px]">
        <h2 className="text-[26px] font-extrabold tracking-[-0.02em] text-deep md:text-[36px]">
          방치하지 마세요.
          <br />
          빠른 진단이 비용과 시간을 줄입니다.
        </h2>
        <p className="mt-4 text-[16px] leading-[1.75] text-body3">
          바퀴벌레, 쥐, 소독, 물탱크 청소까지 한국방역환경이 현장에 맞는 답을 안내합니다.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={SITE.phoneHref} className="btn-signature btn-primary px-7 py-4 text-base font-extrabold">
            전화 상담 {SITE.phoneDisplay}
          </a>
          <a href="/contact" className="btn-signature border border-hairline-soft2 bg-white px-7 py-4 text-base font-bold text-deep transition hover:bg-tint">
            온라인 문의
          </a>
        </div>
      </div>
    </section>
  )
}
