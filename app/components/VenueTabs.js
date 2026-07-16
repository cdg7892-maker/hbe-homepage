"use client"

import { useState } from "react"
import Link from "next/link"
import { VENUES } from "../lib/services-data"
import { ICONS } from "../lib/icons"

export default function VenueTabs({ services }) {
  const [active, setActive] = useState(VENUES[0].key)
  const venue = VENUES.find((v) => v.key === active)

  const sorted = [...services].sort((a, b) => {
    const av = a.venues[active]?.relevant ? 0 : 1
    const bv = b.venues[active]?.relevant ? 0 : 1
    return av - bv
  })

  return (
    <div>
      <div role="tablist" aria-label="장소별 서비스 안내" className="flex gap-2 justify-center flex-wrap mb-6">
        {VENUES.map((v) => (
          <button
            key={v.key}
            role="tab"
            aria-selected={active === v.key}
            onClick={() => setActive(v.key)}
            className={`px-5 py-2.5 rounded-full text-[14px] font-semibold transition-colors ${
              active === v.key ? "bg-primary text-white" : "bg-white border border-hairline text-body hover:text-deep"
            }`}
          >
            {v.label}
          </button>
        ))}
      </div>

      <p className="text-center text-[15px] text-body max-w-[560px] mx-auto mb-10 leading-relaxed">{venue.blurb}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {sorted.map((service) => {
          const Icon = ICONS[service.icon]
          const info = service.venues[active]
          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={`bg-white border rounded-[20px] px-[22px] py-7 flex flex-col gap-3.5 transition-colors hover:border-primary ${
                info?.relevant ? "border-hairline" : "border-hairline opacity-70"
              }`}
            >
              <div className="w-11 h-11 rounded-full bg-tint text-primary flex items-center justify-center">
                {Icon && <Icon size={22} strokeWidth={2} aria-hidden="true" />}
              </div>
              <div className="text-[16.5px] font-bold text-deep">{service.title}</div>
              <div className="text-[13.5px] leading-relaxed text-body2">{info?.note || service.shortDesc}</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
