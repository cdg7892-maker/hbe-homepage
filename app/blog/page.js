import Image from "next/image"
import Link from "next/link"
import { CalendarDays, ChevronLeft, ChevronRight, Clock3, Search, ShieldCheck } from "lucide-react"
import { COLUMN_DATA } from "../lib/column-data"
import { SITE } from "../lib/site"

export const metadata = {
  title: "방역칼럼",
  description:
    "한국방역환경 방역칼럼. 매트리스 청소, 바퀴벌레 방역, 쥐 방제, 소독, 물탱크 청소 정보를 주제별로 정리합니다.",
}

const PAGE_SIZE = 18

const COLUMN_GROUPS = [
  { key: "all", label: "전체", desc: "전체 칼럼" },
  { key: "mattress", label: "매트리스 청소", desc: "침대 살균·진드기·숙박시설" },
  { key: "cockroach", label: "바퀴벌레", desc: "가정집·식당·상가 퇴치" },
  { key: "rodent", label: "쥐 방제", desc: "창고·주택·식당 유입 차단" },
  { key: "water", label: "물탱크 청소", desc: "저수조·건물·시설 위생" },
  { key: "disinfection", label: "소독/방역", desc: "시설·어린이집·사무실" },
  { key: "flying", label: "날벌레", desc: "모기·파리·초파리·배수구" },
  { key: "local", label: "지역 종합", desc: "강진·장흥·완도·해남·목포" },
]

function getColumnGroup(column) {
  const slug = column.slug.toLowerCase()
  const text = `${column.title} ${column.excerpt} ${column.tags?.join(" ") ?? ""}`
  if (slug.includes("mattress") || slug.includes("bed-")) return "mattress"
  if (slug.includes("cockroach") || slug.includes("roach")) return "cockroach"
  if (slug.includes("rat") || slug.includes("rodent")) return "rodent"
  if (slug.includes("water-tank")) return "water"
  if (slug.includes("fly") || slug.includes("flying-insect") || slug.includes("fruit-fly")) return "flying"
  if (slug.includes("disinfection")) return "disinfection"
  if (text.includes("매트리스") || text.includes("침대 살균") || text.includes("진드기 청소")) return "mattress"
  if (text.includes("바퀴벌레")) return "cockroach"
  if (text.includes("쥐")) return "rodent"
  if (text.includes("물탱크") || text.includes("저수조")) return "water"
  if (text.includes("날벌레") || text.includes("초파리") || text.includes("모기") || text.includes("파리")) return "flying"
  if (text.includes("소독") || text.includes("방역")) return "disinfection"
  return "local"
}

function getGroupCounts(columns) {
  return COLUMN_GROUPS.map((group) => ({
    ...group,
    count: group.key === "all" ? columns.length : columns.filter((column) => getColumnGroup(column) === group.key).length,
  }))
}

function getPageHref({ group, page, q }) {
  const params = new URLSearchParams()
  if (group && group !== "all") params.set("group", group)
  if (page > 1) params.set("page", String(page))
  if (q) params.set("q", q)
  const query = params.toString()
  return query ? `/blog?${query}` : "/blog"
}

function normalizePage(value, totalPages) {
  const page = Number.parseInt(value ?? "1", 10)
  if (!Number.isFinite(page) || page < 1) return 1
  return Math.min(page, totalPages)
}

export default async function BlogPage({ searchParams }) {
  const resolvedSearchParams = await searchParams
  const activeGroup = COLUMN_GROUPS.some((group) => group.key === resolvedSearchParams?.group) ? resolvedSearchParams.group : "all"
  const q = typeof resolvedSearchParams?.q === "string" ? resolvedSearchParams.q.trim() : ""

  const featured = COLUMN_DATA[0]
  const groupCounts = getGroupCounts(COLUMN_DATA)
  const filteredColumns = COLUMN_DATA.filter((column) => {
    const matchesGroup = activeGroup === "all" || getColumnGroup(column) === activeGroup
    if (!matchesGroup) return false
    if (!q) return true
    const haystack = `${column.title} ${column.excerpt} ${column.tags?.join(" ") ?? ""} ${column.category}`.toLowerCase()
    return haystack.includes(q.toLowerCase())
  })

  const totalPages = Math.max(1, Math.ceil(filteredColumns.length / PAGE_SIZE))
  const currentPage = normalizePage(resolvedSearchParams?.page, totalPages)
  const start = (currentPage - 1) * PAGE_SIZE
  const visibleColumns = filteredColumns.slice(start, start + PAGE_SIZE)
  const activeGroupLabel = COLUMN_GROUPS.find((group) => group.key === activeGroup)?.label ?? "전체"

  return (
    <>
      <section className="bg-offwhite px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div>
              <p className="text-[14px] font-extrabold uppercase tracking-[0.16em] text-primary">HBE Column</p>
              <h1 className="mt-5 text-[40px] font-extrabold leading-[1.12] text-deep md:text-[64px]">방역칼럼</h1>
              <p className="mt-5 max-w-[620px] text-[16px] leading-[1.85] text-body3 md:text-[18px]">
                매트리스 청소, 바퀴벌레 방역, 쥐 방제, 물탱크 청소처럼 문의가 많은 주제를 묶어서 정리했습니다. 필요한 주제부터 고르고, 지역명이나 증상으로
                한 번 더 검색해보세요.
              </p>
            </div>
            <form action="/blog" className="rounded-[8px] border border-hairline bg-white p-4 shadow-xl shadow-deep/5">
              <input type="hidden" name="group" value={activeGroup} />
              <label htmlFor="blog-search" className="sr-only">
                방역칼럼 검색
              </label>
              <div className="flex items-center gap-3 rounded-[8px] border border-hairline bg-tint px-4 py-3">
                <Search size={20} className="text-primary" aria-hidden="true" />
                <input
                  id="blog-search"
                  name="q"
                  defaultValue={q}
                  placeholder="예: 목포 매트리스, 바퀴벌레 퇴치"
                  className="min-w-0 flex-1 bg-transparent text-[15px] font-semibold text-deep placeholder:text-body2 focus:outline-none"
                />
                <button type="submit" className="rounded-[8px] bg-primary px-5 py-2.5 text-[14px] font-extrabold text-white">
                  검색
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {groupCounts.map((group) => (
                  <Link
                    key={group.key}
                    href={getPageHref({ group: group.key, page: 1, q })}
                    className={`rounded-full border px-4 py-2 text-[13px] font-extrabold transition ${
                      group.key === activeGroup
                        ? "border-primary bg-primary text-white"
                        : "border-hairline-soft2 bg-white text-body3 hover:border-primary hover:text-primary"
                    }`}
                  >
                    {group.label} <span className="ml-1 opacity-70">{group.count}</span>
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
          <div className="mb-8">
            <p className="text-[14px] font-extrabold text-primary">Grouped Columns</p>
            <h2 className="mt-3 text-[31px] font-extrabold leading-[1.25] text-deep md:text-[46px]">주제별 칼럼 모아보기</h2>
            <p className="mt-4 max-w-[720px] text-[15px] leading-relaxed text-body3">
              현재 <b className="text-deep">{activeGroupLabel}</b> 묶음에서 {filteredColumns.length}개 칼럼을 보여주고 있습니다. 페이지당 {PAGE_SIZE}개씩 나누어
              표시합니다.
            </p>
          </div>

          <div className="mb-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {groupCounts.map((group) => (
              <Link
                key={group.key}
                href={getPageHref({ group: group.key, page: 1, q })}
                className={`rounded-[8px] border p-5 transition hover:-translate-y-0.5 ${
                  group.key === activeGroup ? "border-primary bg-white shadow-xl shadow-primary/10" : "border-hairline bg-white/70 hover:border-primary"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-[18px] font-extrabold text-deep">{group.label}</h3>
                  <span className="rounded-full bg-tint px-3 py-1 text-[12px] font-extrabold text-primary">{group.count}</span>
                </div>
                <p className="mt-3 text-[13px] font-semibold leading-relaxed text-body3">{group.desc}</p>
              </Link>
            ))}
          </div>

          {visibleColumns.length ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {visibleColumns.map((column) => (
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
                        <span className="rounded-full bg-offwhite px-3 py-1.5 text-[12px] font-extrabold text-body2">
                          {COLUMN_GROUPS.find((group) => group.key === getColumnGroup(column))?.label ?? "칼럼"}
                        </span>
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
          ) : (
            <div className="rounded-[8px] border border-hairline bg-white p-10 text-center">
              <h3 className="text-[24px] font-extrabold text-deep">검색 결과가 없습니다</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-body3">다른 지역명이나 서비스명으로 다시 검색해보세요.</p>
              <Link href="/blog" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-[14px] font-extrabold text-white">
                전체 칼럼 보기
              </Link>
            </div>
          )}

          {totalPages > 1 ? (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2" aria-label="방역칼럼 페이지 이동">
              <Link
                href={getPageHref({ group: activeGroup, page: Math.max(1, currentPage - 1), q })}
                aria-disabled={currentPage === 1}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white text-body2 ${
                  currentPage === 1 ? "pointer-events-none opacity-40" : "transition hover:border-primary hover:text-primary"
                }`}
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </Link>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <Link
                  key={page}
                  href={getPageHref({ group: activeGroup, page, q })}
                  className={`flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-[14px] font-extrabold ${
                    page === currentPage ? "bg-primary text-white" : "border border-hairline bg-white text-body3 transition hover:border-primary hover:text-primary"
                  }`}
                >
                  {page}
                </Link>
              ))}
              <Link
                href={getPageHref({ group: activeGroup, page: Math.min(totalPages, currentPage + 1), q })}
                aria-disabled={currentPage === totalPages}
                className={`flex h-10 w-10 items-center justify-center rounded-full border border-hairline bg-white text-body2 ${
                  currentPage === totalPages ? "pointer-events-none opacity-40" : "transition hover:border-primary hover:text-primary"
                }`}
              >
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </div>
          ) : null}
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
              전화 상담으로 먼저 범위를 좁혀보세요.
            </h2>
          </div>
          <div className="grid gap-3 sm:flex">
            <a href={SITE.phoneHref} className="rounded-full bg-primary px-7 py-3.5 text-center text-[15px] font-extrabold text-white">
              전화 상담 {SITE.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-light-cta rounded-full bg-white px-7 py-3.5 text-center text-[15px] font-extrabold !text-deep">
              무료진단 문의
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
