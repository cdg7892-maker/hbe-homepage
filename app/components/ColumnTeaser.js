import { ICONS } from "../lib/icons"
import { COLUMN_DATA } from "../lib/column-data"

export default function ColumnTeaser() {
  return (
    <section className="bg-white px-5 py-16 md:px-14 md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-9">
          <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-primary">Insight</span>
          <h2 className="mt-2 text-[26px] font-extrabold tracking-[-0.02em] text-deep md:text-[36px]">
            방역 전 알아두면 좋은 기준
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {COLUMN_DATA.map((c) => (
            <article key={c.title} className="rounded-[8px] border border-hairline bg-offwhite p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white text-primary">
                <ICONS.Newspaper size={19} strokeWidth={2} aria-hidden="true" />
              </span>
              <p className="mt-5 text-[12px] font-extrabold text-primary">{c.category}</p>
              <h3 className="mt-2 text-[17px] font-extrabold leading-snug text-deep">{c.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-body3">{c.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
