import { ICONS } from "../lib/icons"
import { REVIEWS_DATA } from "../lib/reviews-data"

export default function ReviewsSection() {
  return (
    <section className="bg-offwhite px-5 md:px-14 py-16 md:py-20">
      <div className="text-center mb-10">
        <span className="text-primary text-[13px] font-extrabold tracking-[0.08em] uppercase">Reviews</span>
        <h2 className="text-[24px] md:text-[30px] font-extrabold text-deep tracking-[-0.02em] mt-2">이용후기</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[960px] mx-auto">
        {REVIEWS_DATA.map((r, i) => (
          <div key={i} className="card-elevated bg-white border border-hairline rounded-2xl p-7 flex flex-col gap-4">
            <span className="w-10 h-10 rounded-full bg-tint text-primary flex items-center justify-center">
              <ICONS.Quote size={18} strokeWidth={2} aria-hidden="true" />
            </span>
            <p className="text-[15.5px] font-bold text-deep leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
            <p className="text-[13px] font-semibold text-body2 mt-auto">— {r.author}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
