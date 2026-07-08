"use client"

import { useState } from "react"
import Link from "next/link"
import { SITE, NAV_ITEMS } from "../lib/site"

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-hairline">
      <div className="flex items-center justify-between h-20 px-5 md:px-14">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="w-9 h-9 rounded-full bg-primary text-white font-extrabold text-base flex items-center justify-center">
            {SITE.logoInitial}
          </span>
          <span className="text-[19px] font-extrabold text-deep tracking-[-0.02em]">
            {SITE.companyName}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9 text-[14.5px] font-semibold text-body">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-deep transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden sm:flex items-center gap-2 bg-tint2 text-deep font-bold text-[14.5px] px-[18px] py-[10px] rounded-full hover:brightness-95 transition"
          >
            📞 {SITE.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="메뉴 열기"
            aria-expanded={open}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
          >
            <span className={`block w-5 h-[2px] bg-deep transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-5 h-[2px] bg-deep transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-deep transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline bg-white px-5 py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3 text-[15px] font-semibold text-deep border-b border-hairline last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={SITE.phoneHref}
            className="mt-3 text-center bg-tint2 text-deep font-bold text-[14.5px] px-[18px] py-3 rounded-full"
          >
            📞 {SITE.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  )
}
