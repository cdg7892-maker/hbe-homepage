import { SITE } from "../lib/site"

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 bg-offwhite px-5 md:px-14 pt-14 md:pt-20 pb-16 md:pb-[90px] items-center">
      <div>
        <span className="inline-block bg-badge-bg text-badge-text text-[13px] font-bold px-3.5 py-1.5 rounded-full mb-5">
          강진군 주민이 먼저 찾는 방역업체
        </span>
        <h1 className="text-[32px] md:text-[44px] font-extrabold leading-[1.32] tracking-[-0.02em] text-deep">
          우리 동네 방역은
          <br />
          <span className="text-primary">{SITE.companyName}</span>이
          <br />
          책임집니다
        </h1>
        <p className="text-[16.5px] leading-[1.75] text-body mt-6 max-w-[440px]">
          강진읍 동성로에서 출발해 강진군 곳곳으로 — 이웃처럼 가깝고, 전문가처럼 확실하게 방역합니다.
        </p>
        <div className="flex flex-wrap gap-3 mt-8">
          <a
            href="/contact"
            className="bg-primary text-white font-bold text-[15.5px] px-[26px] py-[15px] rounded-full hover:brightness-95 transition"
          >
            무료 상담 신청하기
          </a>
          <a
            href="#services"
            className="border border-hairline-soft text-btn-outline-text font-semibold text-[15.5px] px-[26px] py-[15px] rounded-full hover:bg-white transition"
          >
            서비스 둘러보기
          </a>
        </div>
      </div>
      <div
        className="w-full aspect-[5/4] rounded-3xl flex items-center justify-center text-center"
        style={{
          background:
            "repeating-linear-gradient(135deg,#f3f1e7,#f3f1e7 14px,#ece9db 14px,#ece9db 28px)",
        }}
      >
        <span className="text-placeholder-text text-[13px] font-mono leading-relaxed">
          직원 출동 사진
          <br />
          placeholder — 1000×800
        </span>
      </div>
    </section>
  )
}
