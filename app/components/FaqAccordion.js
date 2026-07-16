import { ChevronDown } from "lucide-react"

export default function FaqAccordion({ items }) {
  return (
    <div className="flex flex-col gap-2.5">
      {items.map((item, i) => (
        <details
          key={i}
          className="group rounded-[8px] border border-hairline bg-white px-5 py-4"
        >
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-[15px] text-deep">
            <span>{item.q}</span>
            <ChevronDown
              size={18}
              className="shrink-0 text-body2 transition-transform group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="text-[14px] text-body leading-relaxed mt-3">{item.a}</p>
        </details>
      ))}
    </div>
  )
}
