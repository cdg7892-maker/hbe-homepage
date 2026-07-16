"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { SITE, NAV_ITEMS } from "../lib/site"

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-white/92 backdrop-blur">
      <div className="flex h-20 items-center justify-between px-5 md:px-14">
        <Link href="/" className="flex shrink-0 items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-primary text-base font-extrabold text-white">
            {SITE.logoInitial}
          </span>
          <span className="text-[19px] font-extrabold tracking-[-0.02em] text-deep">{SITE.companyName}</span>
        </Link>

        <nav aria-label="주요 메뉴" className="hidden items-center gap-9 text-[14.5px] font-semibold text-body md:flex">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-deep">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden rounded-[8px] bg-tint2 px-[18px] py-[10px] text-[14.5px] font-bold text-deep transition hover:brightness-95 sm:flex"
          >
            전화 {SITE.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span className={`block h-[2px] w-5 bg-deep transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-[2px] w-5 bg-deep transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-5 bg-deep transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="모바일 메뉴" className="flex flex-col gap-1 border-t border-hairline bg-white px-5 py-4 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-hairline py-3 text-[15px] font-semibold text-deep last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
          <a href={SITE.phoneHref} className="mt-3 rounded-[8px] bg-tint2 px-[18px] py-3 text-center text-[14.5px] font-bold text-deep">
            전화 {SITE.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  )
}
