import { ICONS } from "../lib/icons"
import { REVIEWS_DATA } from "../lib/reviews-data"

export default function ReviewsSection() {
  return (
    <section className="overflow-hidden bg-white px-5 py-16 md:px-14 md:py-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-[28px] font-extrabold tracking-[-0.02em] text-deep md:text-[36px]">
            이용후기 <span className="ml-2 text-primary">+</span>
          </h2>
          <div className="hidden gap-3 text-deep md:flex">
            <ICONS.ChevronLeft size={21} aria-hidden="true" />
            <span className="h-6 w-px bg-hairline-soft2" />
            <ICONS.ChevronRight size={21} aria-hidden="true" />
          </div>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-3">
          {[...REVIEWS_DATA, ...REVIEWS_DATA].map((r, index) => (
            <article
              key={`${r.author}-${index}`}
              className="min-h-[290px] w-[260px] shrink-0 rounded-[36px_8px_36px_8px] border border-hairline bg-white p-6 shadow-sm"
            >
              <h3 className="text-[18px] font-extrabold text-deep">{r.author}</h3>
              <div className="mt-5 flex text-[#ff8a00]" aria-label="별점 5점">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <span key={starIndex}>★</span>
                ))}
              </div>
              <p className="mt-8 text-[14px] leading-[1.75] text-body3">{r.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
