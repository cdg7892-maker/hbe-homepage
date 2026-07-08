import { SITE } from "../lib/site"

export default function Footer() {
  return (
    <footer className="bg-deep px-5 md:px-14 py-11 text-footer-text">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div>
          <div className="text-[17px] font-extrabold text-white mb-2.5">{SITE.companyName}</div>
          <div className="text-[13.5px] leading-[1.9]">
            {SITE.address}
            <br />
            전화{" "}
            <a href={SITE.phoneHref} className="hover:underline">
              {SITE.phoneDisplay}
            </a>{" "}
            · 이메일{" "}
            <a href={SITE.emailHref} className="hover:underline">
              {SITE.emailDisplay}
            </a>
            <br />
            사업자등록번호 {SITE.bizRegNo} · 방역업 등록번호 {SITE.pestRegNo}
          </div>
        </div>
        <div className="text-[12.5px] text-footer-copy">
          © {new Date().getFullYear()} {SITE.companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
