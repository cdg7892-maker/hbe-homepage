import { ICONS } from "../lib/icons"
import { REVIEWS_DATA } from "../lib/reviews-data"

export default function ReviewsSection() {
  return (
    <section className="bg-deep px-5 py-16 text-white md:px-14 md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-9">
          <span className="text-[13px] font-extrabold uppercase tracking-[0.08em] text-white/55">Reviews</span>
          <h2 className="mt-2 text-[26px] font-extrabold tracking-[-0.02em] md:text-[36px]">
            현장에서 신뢰를 쌓는 방식
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {REVIEWS_DATA.map((r) => (
            <article key={r.author} className="rounded-[8px] border border-white/12 bg-white/8 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-white/12">
                <ICONS.Quote size={18} strokeWidth={2} aria-hidden="true" />
              </span>
              <p className="mt-5 text-[16px] font-bold leading-relaxed">&ldquo;{r.quote}&rdquo;</p>
              <p className="mt-6 text-[13px] font-semibold text-white/55">{r.author}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
