import Image from "next/image"
import Link from "next/link"
import { CalendarDays, ChevronLeft, ChevronRight, Clock3, Search, ShieldCheck } from "lucide-react"
import { COLUMN_CATEGORIES, COLUMN_DATA } from "../lib/column-data"
import { SITE } from "../lib/site"

export const metadata = {
  title: "방역칼럼",
  description:
    "한국방역환경 방역칼럼. 바퀴벌레, 쥐, 방역소독, 물탱크 청소, 계절 해충 관리 정보를 현장 중심으로 정리합니다.",
}

export default function BlogPage() {
  const featured = COLUMN_DATA[0]
  const restColumns = COLUMN_DATA.slice(1)

  return (
    <>
      <section className="bg-offwhite px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <p className="text-[14px] font-extrabold uppercase tracking-[0.16em] text-primary">HBE Column</p>
              <h1 className="mt-5 text-[40px] font-extrabold leading-[1.12] text-deep md:text-[64px]">방역칼럼</h1>
              <p className="mt-5 max-w-[620px] text-[16px] leading-[1.85] text-body3 md:text-[18px]">
                현장에서 자주 만나는 해충, 위생, 소독, 물탱크 관리 질문을 한국방역환경의 기준으로 정리했습니다. 문제가
                커지기 전에 무엇을 확인해야 하는지 차분히 살펴보세요.
              </p>
            </div>
            <form action="/blog" className="rounded-[8px] border border-hairline bg-white p-4 shadow-xl shadow-deep/5">
              <label htmlFor="blog-search" className="sr-only">
                방역칼럼 검색
              </label>
              <div className="flex items-center gap-3 rounded-[8px] border border-hairline bg-tint px-4 py-3">
                <Search size={20} className="text-primary" aria-hidden="true" />
                <input
                  id="blog-search"
                  name="q"
                  placeholder="궁금한 방역 주제를 검색해 보세요"
                  className="min-w-0 flex-1 bg-transparent text-[15px] font-semibold text-deep placeholder:text-body2 focus:outline-none"
                />
                <button type="submit" className="rounded-[8px] bg-primary px-5 py-2.5 text-[14px] font-extrabold text-white">
                  검색
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {COLUMN_CATEGORIES.map((category, index) => (
                  <Link
                    key={category}
                    href="/blog"
                    className={`rounded-full border px-4 py-2 text-[13px] font-extrabold transition ${
                      index === 0 ? "border-primary bg-primary text-white" : "border-hairline-soft2 bg-white text-body3 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-[8px] border border-hairline bg-[#07142a] shadow-2xl shadow-deep/10 lg:grid-cols-[0.96fr_1.04fr]"
          >
            <div className="relative min-h-[360px] lg:min-h-[520px]">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-[13px] font-extrabold text-primary shadow-lg">
                Featured
              </div>
            </div>
            <div className="flex flex-col justify-center p-7 text-white md:p-10 lg:p-12">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/12 px-3 py-1.5 text-[12px] font-extrabold text-white/78">{featured.category}</span>
                <span className="rounded-full bg-white/12 px-3 py-1.5 text-[12px] font-extrabold text-white/78">방역칼럼</span>
              </div>
              <h2 className="mt-6 text-[30px] font-extrabold leading-[1.28] md:text-[46px]">{featured.title}</h2>
              <p className="mt-5 text-[16px] leading-[1.85] text-white/74">{featured.excerpt}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] font-bold text-white/64">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={17} aria-hidden="true" />
                  {featured.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 size={17} aria-hidden="true" />
                  {featured.readTime}
                </span>
              </div>
              <span className="mt-9 inline-flex w-fit rounded-full bg-primary px-7 py-3.5 text-[15px] font-extrabold text-white">
                자세히 읽기
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-[#f7faf7] px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-9 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[14px] font-extrabold text-primary">Latest Columns</p>
              <h2 className="mt-3 text-[31px] font-extrabold leading-[1.25] text-deep md:text-[46px]">최근 방역칼럼</h2>
            </div>
            <p className="max-w-[480px] text-[15px] leading-relaxed text-body3">
              실제 현장에서 반복되는 질문을 기준으로, 바로 점검할 수 있는 포인트를 정리했습니다.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {restColumns.map((column) => (
              <Link
                key={column.slug}
                href={`/blog/${column.slug}`}
                className="group flex overflow-hidden rounded-[8px] border border-hairline bg-white shadow-xl shadow-deep/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-deep/10"
              >
                <article className="flex w-full flex-col">
                  <div className="relative aspect-[1.18] overflow-hidden bg-deep">
                    <Image
                      src={column.image}
                      alt={column.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 92vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-tint px-3 py-1.5 text-[12px] font-extrabold text-primary">{column.category}</span>
                      <span className="rounded-full bg-offwhite px-3 py-1.5 text-[12px] font-extrabold text-body2">방역칼럼</span>
                    </div>
                    <h3 className="mt-5 text-[22px] font-extrabold leading-[1.35] text-deep">{column.title}</h3>
                    <p className="mt-4 flex-1 text-[14px] leading-relaxed text-body3">{column.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between border-t border-hairline pt-5 text-[13px] font-bold text-body2">
                      <span>{column.author}</span>
                      <span>{column.date}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center gap-2" aria-label="방역칼럼 페이지 이동">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white text-body2">
              <ChevronLeft size={18} aria-hidden="true" />
            </span>
            {[1, 2, 3].map((page) => (
              <span
                key={page}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-extrabold ${
                  page === 1 ? "bg-primary text-white" : "border border-hairline bg-white text-body3"
                }`}
              >
                {page}
              </span>
            ))}
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white text-body2">
              <ChevronRight size={18} aria-hidden="true" />
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 rounded-[8px] border border-hairline bg-offwhite p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="inline-flex items-center gap-2 text-[14px] font-extrabold text-primary">
              <ShieldCheck size={18} aria-hidden="true" />
              현장 상황이 애매하다면
            </p>
            <h2 className="mt-3 text-[29px] font-extrabold leading-[1.3] text-deep md:text-[42px]">
              글만으로 판단하기 어려운 문제는
              <br />
              현장 진단으로 확인하세요.
            </h2>
          </div>
          <div className="grid gap-3 sm:flex">
            <a href={SITE.phoneHref} className="rounded-full bg-primary px-7 py-3.5 text-center text-[15px] font-extrabold text-white">
              전화 상담 {SITE.phoneDisplay}
            </a>
            <Link href="/contact" className="rounded-full border border-hairline-soft2 bg-white px-7 py-3.5 text-center text-[15px] font-extrabold text-deep">
              무료진단 문의
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
