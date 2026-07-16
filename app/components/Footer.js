import Link from "next/link"
import { SITE, NAV_ITEMS } from "../lib/site"

const footerLinks = ["개인정보처리방침", "서비스 리포트 발급", "많이 찾는 질문", "무료진단 신청", "회사개요", "공지사항"]

export default function Footer() {
  return (
    <footer className="bg-[#e9e9e9] px-5 py-12 text-[#6e6e6e] md:px-14 md:py-16">
      <div className="mx-auto max-w-[1180px]">
        <div className="flex items-center justify-between border-b border-[#8b8b8b] pb-7">
          <div className="text-[22px] font-extrabold tracking-[-0.02em] text-[#8b8b8b]">{SITE.companyName}</div>
          <div className="hidden text-[13px] font-bold text-[#8b8b8b] md:block">CLEAN · SAFE · LOCAL CARE</div>
        </div>

        <div className="grid gap-10 py-8 md:grid-cols-[1.5fr_1fr_260px]">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-[14px] font-bold md:grid-cols-3">
            {footerLinks.map((item) => (
              <Link key={item} href={item === "무료진단 신청" ? "/contact" : "/support"} className="transition hover:text-deep">
                {item}
              </Link>
            ))}
            {NAV_ITEMS.slice(0, 4).map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-deep">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="text-[13px] leading-[1.9]">
            <strong className="mb-2 block text-deep">사업장 정보</strong>
            {SITE.address}
            <br />
            대표 {SITE.ceoName}
            <br />
            사업자등록번호 {SITE.bizRegNo}
            <br />
            방역업 등록번호 {SITE.pestRegNo}
          </div>

          <div className="rounded-[8px] bg-[#d7d7d7] p-5">
            <p className="text-[15px] font-extrabold text-[#777]">한국방역환경 고객센터</p>
            <a href={SITE.mobileHref} className="mt-2 block text-[30px] font-extrabold text-[#777]">
              {SITE.mobileDisplay}
            </a>
            <div className="mt-4 border-t border-[#a9a9a9] pt-4 text-[12px] leading-relaxed">
              평일 09:00-18:00
              <br />
              토요일 09:00-13:00
              <br />
              일요일/공휴일 휴무
            </div>
          </div>
        </div>

        <div className="border-t border-[#8b8b8b] pt-7 text-[12px] leading-relaxed">
          전화{" "}
          <a href={SITE.phoneHref} className="hover:underline">
            {SITE.phoneDisplay}
          </a>{" "}
          · 이메일{" "}
          <a href={SITE.emailHref} className="hover:underline">
            {SITE.emailDisplay}
          </a>
          <br />
          Copyright © {new Date().getFullYear()} {SITE.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
