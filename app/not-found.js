import Link from "next/link"
import { SITE } from "./lib/site"

export default function NotFound() {
  return (
    <section className="bg-offwhite px-5 md:px-14 py-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
      <span className="inline-block bg-badge-bg text-badge-text text-[13px] font-bold px-3.5 py-1.5 rounded-full mb-5">
        404
      </span>
      <h1 className="text-[26px] md:text-[32px] font-extrabold text-deep tracking-[-0.02em] mb-3">
        페이지를 찾을 수 없어요
      </h1>
      <p className="text-[15px] text-body mb-8 max-w-[440px]">
        요청하신 페이지가 없거나 이동되었습니다. 아래에서 원하시는 페이지를 찾아보세요.
      </p>
      <div className="flex flex-wrap gap-3 justify-center">
        <Link href="/" className="bg-primary text-white font-bold text-[15px] px-6 py-3 rounded-full hover:brightness-95 transition">
          홈으로 가기
        </Link>
        <a
          href={SITE.phoneHref}
          className="border border-hairline-soft2 text-deep font-semibold text-[15px] px-6 py-3 rounded-full hover:bg-white transition"
        >
          전화로 문의하기
        </a>
      </div>
    </section>
  )
}
