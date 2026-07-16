import { COLUMN_DATA } from "../lib/column-data"

export default function ColumnTeaser() {
  return (
    <section className="bg-white px-5 py-16 md:px-14 md:py-24">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[270px_1fr] lg:items-center">
        <div>
          <h2 className="text-[31px] font-extrabold leading-[1.25] tracking-[-0.02em] text-deep md:text-[42px]">
            매거진
            <br />
            해충없이 사는 법부터
            <br />
            위생 관리까지!
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-body3">
            한국방역환경이 현장에서 자주 만나는 질문을 쉽게 정리했습니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {COLUMN_DATA.map((c, index) => (
            <article
              key={c.title}
              className="flex aspect-square flex-col items-center justify-center rounded-full border-2 border-primary bg-white px-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <p className="text-[12px] font-extrabold text-primary">HBE MAGAZINE Vol.0{index + 1}</p>
              <h3 className="mt-5 text-[18px] font-extrabold leading-[1.45] text-deep">{c.title}</h3>
              <span className="mt-5 h-[8px] w-[72%] bg-primary/16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
