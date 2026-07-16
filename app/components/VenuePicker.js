import Link from "next/link"
import { VENUES } from "../lib/services-data"
import { ICONS } from "../lib/icons"

export default function VenuePicker() {
  return (
    <section className="bg-offwhite px-5 md:px-14 py-16 md:py-20">
      <div className="text-center mb-10 md:mb-12">
        <span className="text-primary text-[13px] font-extrabold tracking-[0.08em] uppercase">Where</span>
        <h2 className="text-[26px] md:text-[32px] font-extrabold text-deep tracking-[-0.02em] mt-2">
          어느 공간이신가요?
        </h2>
        <p className="text-[15px] text-body2 mt-3">공간에 따라 우선순위가 다릅니다. 맞춤 방역을 안내해드려요.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[880px] mx-auto">
        {VENUES.map((v) => {
          const Icon = ICONS[v.icon]
          return (
            <Link
              key={v.key}
              href="/services"
              className="card-elevated bg-white border border-hairline rounded-[20px] p-7 flex flex-col items-center text-center gap-3 hover:border-primary transition-colors"
            >
              <span className="w-14 h-14 rounded-full bg-tint text-primary flex items-center justify-center">
                {Icon && <Icon size={26} strokeWidth={2} aria-hidden="true" />}
              </span>
              <span className="text-[17px] font-bold text-deep">{v.label}</span>
              <span className="text-[13.5px] text-body2 leading-relaxed">{v.blurb}</span>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
