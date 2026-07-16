import { TRUST_ITEMS } from "../lib/site"
import { ICONS } from "../lib/icons"

export default function TrustStrip() {
  return (
    <section className="bg-white grid grid-cols-2 md:grid-cols-4 gap-5 px-5 md:px-14 py-8">
      {TRUST_ITEMS.map((item) => {
        const Icon = ICONS[item.icon]
        return (
          <div key={item.label} className="flex flex-col items-center text-center gap-2.5">
            <div className="w-[52px] h-[52px] rounded-2xl bg-tint text-primary flex items-center justify-center">
              {Icon && <Icon size={24} strokeWidth={2} aria-hidden="true" />}
            </div>
            <div className="text-sm font-bold text-deep">{item.label}</div>
          </div>
        )
      })}
    </section>
  )
}
