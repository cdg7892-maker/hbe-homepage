import { TRUST_ITEMS } from "../lib/site"
import { ICONS } from "../lib/icons"

export default function TrustStrip() {
  return (
    <section className="bg-white px-5 md:px-14 py-14 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
        {TRUST_ITEMS.map((item) => {
          const Icon = ICONS[item.icon]
          return (
            <div
              key={item.label}
              className="card-elevated flex flex-col items-center text-center gap-3 bg-offwhite border border-hairline rounded-2xl px-4 py-7"
            >
              <div className="w-14 h-14 rounded-full bg-tint text-primary flex items-center justify-center">
                {Icon && <Icon size={26} strokeWidth={2} aria-hidden="true" />}
              </div>
              <div className="text-[14px] font-bold text-deep leading-snug">{item.label}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
