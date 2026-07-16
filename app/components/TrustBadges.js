import { ShieldCheck } from "lucide-react"
import { SITE } from "../lib/site"

const BADGES = [
  { label: "사업자등록증", value: SITE.bizRegNo },
  { label: "방역업 등록증", value: SITE.pestRegNo },
]

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap gap-3">
      {BADGES.map((b) => (
        <div
          key={b.label}
          className="flex items-center gap-2.5 bg-white border border-hairline rounded-full pl-3 pr-4 py-2"
        >
          <span className="w-8 h-8 rounded-full bg-tint text-primary flex items-center justify-center shrink-0">
            <ShieldCheck size={16} strokeWidth={2} aria-hidden="true" />
          </span>
          <span className="text-[13px] leading-tight">
            <span className="block font-semibold text-deep">{b.label}</span>
            <span className="block text-body2">{b.value}</span>
          </span>
        </div>
      ))}
    </div>
  )
}
