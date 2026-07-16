import Link from "next/link"
import { ICONS } from "../lib/icons"

export default function ServiceCard({ service }) {
  const Icon = ICONS[service.icon]
  return (
    <Link
      href={`/services/${service.slug}`}
      className="bg-white border border-hairline rounded-[20px] px-[22px] py-7 flex flex-col gap-3.5 hover:border-primary transition-colors"
    >
      <div className="w-11 h-11 rounded-full bg-tint text-primary flex items-center justify-center">
        {Icon && <Icon size={22} strokeWidth={2} aria-hidden="true" />}
      </div>
      <div className="text-[16.5px] font-bold text-deep">{service.title}</div>
      <div className="text-[13.5px] leading-relaxed text-body2">{service.shortDesc}</div>
    </Link>
  )
}
