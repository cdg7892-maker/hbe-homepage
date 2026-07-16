import { ICONS } from "../lib/icons"
import { COLUMN_DATA } from "../lib/column-data"

export default function ColumnTeaser() {
  return (
    <section className="bg-white px-5 md:px-14 py-16 md:py-20">
      <div className="text-center mb-10">
        <span className="text-primary text-[13px] font-extrabold tracking-[0.08em] uppercase">Column</span>
        <h2 className="text-[24px] md:text-[30px] font-extrabold text-deep tracking-[-0.02em] mt-2">
          한국방역환경 칼럼
        </h2>
        <p className="text-[15px] text-body2 mt-3">해충 없이 사는 법, 궁금한 이야기를 전해드려요</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[960px] mx-auto">
        {COLUMN_DATA.map((c, i) => (
          <div key={i} className="card-elevated bg-offwhite border border-hairline rounded-2xl p-6 flex flex-col gap-3">
            <span className="w-10 h-10 rounded-full bg-tint text-primary flex items-center justify-center">
              <ICONS.Newspaper size={18} strokeWidth={2} aria-hidden="true" />
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-badge-text bg-badge-bg px-2 py-0.5 rounded-full">
                {c.category}
              </span>
              {c.isPlaceholder && (
                <span className="text-[11px] font-bold text-body2 bg-hairline px-2 py-0.5 rounded-full">예시</span>
              )}
            </div>
            <div className="text-[15px] font-bold text-deep leading-snug">{c.title}</div>
            <div className="text-[13px] text-body2 leading-relaxed">{c.excerpt}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
