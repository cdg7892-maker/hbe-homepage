import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { COLUMN_DATA } from "../lib/column-data"

export default function ColumnTeaser() {
  const featuredColumns = COLUMN_DATA.slice(0, 3)

  return (
    <section className="bg-white px-5 py-14 md:px-14 md:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-9 grid gap-5 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="inline-flex items-center gap-2 text-[14px] font-extrabold text-primary">
              <BookOpen size={18} aria-hidden="true" />
              HBE Column
            </p>
            <h2 className="mt-3 text-[31px] font-extrabold leading-[1.25] text-deep md:text-[46px]">
              현장에서 자주 묻는 질문을
              <br />
              칼럼으로 정리했습니다.
            </h2>
            <p className="mt-4 max-w-[650px] text-[15.5px] leading-[1.8] text-body3">
              바퀴벌레, 쥐, 소독, 물탱크 청소처럼 판단이 어려운 문제를 실제 현장 기준으로 설명합니다.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-hairline-soft2 bg-white px-5 py-3 text-[14px] font-extrabold text-deep transition hover:border-primary hover:text-primary"
          >
            방역칼럼 전체보기
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredColumns.map((column) => (
            <Link
              key={column.slug}
              href={`/blog/${column.slug}`}
              className="group overflow-hidden rounded-[8px] border border-hairline bg-white shadow-xl shadow-deep/5 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-deep/10"
            >
              <article>
                <div className="relative aspect-[1.2] overflow-hidden bg-deep">
                  <Image
                    src={column.image}
                    alt={column.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 32vw, 92vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[12px] font-extrabold text-primary shadow-md">
                    {column.category}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-body2">방역칼럼</p>
                  <h3 className="mt-3 text-[21px] font-extrabold leading-[1.35] text-deep">{column.title}</h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-body3">{column.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-hairline pt-5 text-[13px] font-bold text-body2">
                    <span>{column.date}</span>
                    <span className="text-primary">읽기</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
