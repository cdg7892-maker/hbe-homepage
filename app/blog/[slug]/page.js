import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, CalendarDays, CheckCircle2, Clock3, ExternalLink, HelpCircle, Phone, ShieldCheck } from "lucide-react"
import { COLUMN_DATA, getColumnBySlug, getRelatedColumns } from "../../lib/column-data"
import { SITE } from "../../lib/site"
import { SITE_URL } from "../../lib/config"

export function generateStaticParams() {
  return COLUMN_DATA.map((column) => ({ slug: column.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const column = getColumnBySlug(slug)

  if (!column) {
    return {
      title: "방역칼럼",
    }
  }

  return {
    title: column.title,
    description: column.excerpt,
    alternates: {
      canonical: `/blog/${column.slug}`,
    },
    openGraph: {
      type: "article",
      title: column.title,
      description: column.excerpt,
      url: `${SITE_URL}/blog/${column.slug}`,
      images: [{ url: column.image, alt: column.imageAlt }],
    },
  }
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params
  const column = getColumnBySlug(slug)

  if (!column) {
    notFound()
  }

  const relatedColumns = getRelatedColumns(column.slug, 3)
  const persuasion = column.persuasion
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: column.title,
    description: column.excerpt,
    image: `${SITE_URL}${column.image}`,
    author: {
      "@type": "Organization",
      name: SITE.companyName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.companyName,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${column.slug}`,
  }
  const faqJsonLd = column.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: column.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      {faqJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} /> : null}
      <article>
        <header className="bg-offwhite px-5 py-12 md:px-14 md:py-18">
          <div className="mx-auto max-w-[980px]">
            <Link href="/blog" className="inline-flex items-center gap-2 text-[14px] font-bold text-body2 transition hover:text-primary">
              <ArrowLeft size={16} aria-hidden="true" />
              방역칼럼 목록
            </Link>
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary px-3 py-1.5 text-[12px] font-extrabold text-white">{column.category}</span>
              {column.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-hairline bg-white px-3 py-1.5 text-[12px] font-extrabold text-body3">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-6 text-[34px] font-extrabold leading-[1.24] text-deep md:text-[58px]">{column.title}</h1>
            <p className="mt-6 max-w-[820px] text-[17px] leading-[1.85] text-body3 md:text-[19px]">{column.excerpt}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] font-bold text-body2">
              <span>{column.author}</span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={17} aria-hidden="true" />
                {column.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 size={17} aria-hidden="true" />
                {column.readTime}
              </span>
            </div>
          </div>
        </header>

        <div className="bg-white px-5 pt-8 md:px-14 md:pt-12">
          <div className="mx-auto max-w-[1180px]">
            <div className="relative min-h-[360px] overflow-hidden rounded-[8px] bg-deep shadow-2xl shadow-deep/12 md:min-h-[560px]">
              <Image src={column.image} alt={column.imageAlt} fill priority sizes="(min-width: 1180px) 1180px, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/36 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <section className="bg-white px-5 py-12 md:px-14 md:py-18">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[260px_1fr_280px] lg:items-start">
            <aside className="hidden lg:sticky lg:top-28 lg:block">
              <div className="rounded-[8px] border border-hairline bg-offwhite p-6">
                <h2 className="text-[18px] font-extrabold text-deep">목차</h2>
                <nav className="mt-4 grid gap-3 text-[14px] font-bold leading-relaxed text-body3">
                  {[
                    ["search-worries", "검색자가 느끼는 불안"],
                    ["yes-set", "YES 세트"],
                    ["instinct", "본능 분석"],
                    ["objections", "맡기기 전 의심 제거"],
                    ["proof", "숫자와 근거"],
                    ["field-process", "현장 기준"],
                    ["faq", "자주 묻는 질문"],
                  ].map(([id, label], index) => (
                    <a key={id} href={`#${id}`} className="transition hover:text-primary">
                      {index + 1}. {label}
                    </a>
                  ))}
                  {column.sections.map((section, index) => (
                    <a key={section.heading} href={`#section-${index + 1}`} className="transition hover:text-primary">
                      {index + 8}. {section.heading}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <div>
              <section id="search-worries" className="scroll-mt-28 rounded-[8px] border border-hairline bg-[#07142a] p-6 text-white shadow-2xl shadow-deep/10 md:p-8">
                <p className="text-[14px] font-extrabold uppercase tracking-[0.14em] text-white/58">Search Intent</p>
                <h2 className="mt-3 text-[28px] font-extrabold leading-[1.32] md:text-[38px]">이 글을 찾으셨다면, 아마 이런 생각부터 드셨을 겁니다.</h2>
                <div className="mt-6 grid gap-3">
                  {persuasion.worries.map((item) => (
                    <p key={item} className="rounded-[8px] bg-white/10 p-4 text-[18px] font-extrabold leading-relaxed text-white">
                      "{item}"
                    </p>
                  ))}
                </div>
              </section>

              <section id="yes-set" className="mt-8 scroll-mt-28 rounded-[8px] border border-hairline bg-tint p-6 md:p-8">
                <h2 className="flex items-center gap-2 text-[24px] font-extrabold text-deep">
                  <ShieldCheck size={24} className="text-primary" aria-hidden="true" />
                  먼저 고개가 끄덕여지는 사실
                </h2>
                <div className="mt-5 grid gap-3">
                  {persuasion.yesSet.map((item) => (
                    <div key={item} className="flex gap-3 rounded-[8px] bg-white p-4">
                      <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                      <p className="text-[15px] font-semibold leading-relaxed text-deep">{item}</p>
                    </div>
                  ))}
                </div>
                </section>

              <section id="instinct" className="mt-10 scroll-mt-28">
                <h2 className="text-[28px] font-extrabold leading-[1.3] text-deep md:text-[38px]">왜 이렇게 불안하게 느껴질까요?</h2>
                <p className="mt-5 text-[18px] leading-[1.95] text-body3">{persuasion.instinct}</p>
                <p className="mt-5 rounded-[8px] border-l-4 border-primary bg-offwhite p-5 text-[17px] font-bold leading-[1.85] text-deep">
                  {persuasion.bridge}
                </p>
              </section>

              <section id="objections" className="mt-12 scroll-mt-28 rounded-[8px] border border-hairline bg-white p-6 shadow-xl shadow-deep/5 md:p-8">
                <h2 className="text-[28px] font-extrabold leading-[1.3] text-deep md:text-[38px]">업체에 맡기기 전 생기는 의심을 먼저 지웁니다</h2>
                <div className="mt-6 grid gap-4">
                  {persuasion.objections.map((item) => (
                    <div key={item.concern} className="rounded-[8px] border border-hairline bg-offwhite p-5">
                      <h3 className="text-[19px] font-extrabold text-deep">"{item.concern}"</h3>
                      <p className="mt-3 text-[15.5px] leading-[1.85] text-body3">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="proof" className="mt-12 scroll-mt-28 rounded-[8px] border border-primary/20 bg-tint p-6 md:p-8">
                <h2 className="text-[28px] font-extrabold leading-[1.3] text-deep md:text-[38px]">형용사 대신 확인 가능한 숫자와 근거</h2>
                <div className="mt-6 grid gap-3">
                  {persuasion.proofPoints.map((item) => (
                    <div key={item} className="flex gap-3 rounded-[8px] bg-white p-4">
                      <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                      <p className="text-[15px] font-semibold leading-relaxed text-deep">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="field-process" className="mt-12 scroll-mt-28">
                <h2 className="text-[28px] font-extrabold leading-[1.3] text-deep md:text-[38px]">현장에서는 이 순서로 확인합니다</h2>
                <div className="mt-6 grid gap-3 md:grid-cols-2">
                  {persuasion.fieldProcess.map((item, index) => (
                    <div key={item} className="rounded-[8px] border border-hairline bg-white p-5 shadow-sm shadow-deep/4">
                      <p className="text-[13px] font-extrabold text-primary">STEP {index + 1}</p>
                      <p className="mt-2 text-[17px] font-extrabold leading-[1.55] text-deep">{item}</p>
                    </div>
                  ))}
                </div>
              </section>

              <div className="mt-10 space-y-12">
                {column.sections.map((section, index) => (
                  <section key={section.heading} id={`section-${index + 1}`} className="scroll-mt-28">
                    <h2 className="text-[28px] font-extrabold leading-[1.3] text-deep md:text-[38px]">{section.heading}</h2>
                    <div className="mt-5 space-y-5 text-[17px] leading-[1.95] text-body3">
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {column.faqs?.length ? (
                <section id="faq" className="mt-12 scroll-mt-28 rounded-[8px] border border-hairline bg-offwhite p-6 md:p-8">
                  <h2 className="flex items-center gap-2 text-[26px] font-extrabold text-deep md:text-[34px]">
                    <HelpCircle size={26} className="text-primary" aria-hidden="true" />
                    자주 묻는 질문
                  </h2>
                  <div className="mt-6 grid gap-3">
                    {column.faqs.map((faq, index) => (
                      <details
                        key={faq.question}
                        open={index < 3}
                        className="group rounded-[8px] border border-hairline bg-white p-5 shadow-sm shadow-deep/4"
                      >
                        <summary className="cursor-pointer list-none text-[17px] font-extrabold leading-[1.45] text-deep marker:hidden">
                          <span className="inline-flex min-h-[28px] items-start gap-3">
                            <span className="mt-0.5 shrink-0 text-[13px] font-extrabold text-primary">Q{index + 1}</span>
                            <span>{faq.question}</span>
                          </span>
                        </summary>
                        <p className="mt-4 border-t border-hairline pt-4 text-[15px] leading-[1.85] text-body3">{faq.answer}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}

              <section className="mt-12 overflow-hidden rounded-[8px] bg-[#07142a] text-white">
                <div className="grid gap-6 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-9">
                  <div>
                    <p className="text-[14px] font-extrabold text-white/62">현장 진단이 필요한 순간</p>
                    <h2 className="mt-3 text-[28px] font-extrabold leading-[1.3] md:text-[36px]">
                      사진이나 글만으로 애매하다면
                      <br />
                      직접 확인하는 편이 빠릅니다.
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                      {persuasion.cta}
                    </p>
                  </div>
                  <div className="grid gap-3">
                    <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-extrabold text-white">
                      <Phone size={18} aria-hidden="true" />
                      {SITE.phoneDisplay}
                    </a>
                    <Link href="/contact" className="btn-light-cta rounded-full bg-white px-7 py-3.5 text-center text-[15px] font-extrabold !text-deep">
                      무료진단 문의
                    </Link>
                  </div>
                </div>
              </section>

              <footer className="mt-12 rounded-[8px] border border-hairline bg-offwhite p-6 md:p-8">
                <p className="text-[14px] font-extrabold text-primary">작성자</p>
                <h2 className="mt-2 text-[26px] font-extrabold text-deep">{SITE.companyName}</h2>
                <p className="mt-4 text-[15px] leading-relaxed text-body3">
                  강진군을 중심으로 해충방제, 방역소독, 물탱크 청소를 수행하는 지역 밀착 방역 전문업체입니다. 현장에서 반복되는
                  질문을 기준으로 실질적인 관리 기준을 정리합니다.
                </p>
                {column.sourceLinks?.length ? (
                  <div className="mt-6 border-t border-hairline pt-5">
                    <p className="text-[13px] font-extrabold text-body2">참고한 공공자료</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {column.sourceLinks.map((source) => (
                        <a
                          key={source.href}
                          href={source.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-white px-3 py-2 text-[12px] font-extrabold text-body3 transition hover:border-primary hover:text-primary"
                        >
                          {source.label}
                          <ExternalLink size={13} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </footer>
            </div>

            <aside className="lg:sticky lg:top-28">
              <div className="rounded-[8px] border border-hairline bg-white p-6 shadow-xl shadow-deep/5">
                <h2 className="text-[20px] font-extrabold text-deep">상담 안내</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-body3">
                  바퀴벌레, 쥐, 방역 소독, 물탱크 청소까지 현장 상황을 듣고 필요한 범위를 안내합니다.
                </p>
                <a href={SITE.phoneHref} className="mt-5 block rounded-full bg-primary px-5 py-3 text-center text-[14px] font-extrabold text-white">
                  전화 상담 {SITE.phoneDisplay}
                </a>
              </div>
            </aside>
          </div>
        </section>
      </article>

      <section className="bg-[#f7faf7] px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-[14px] font-extrabold text-primary">Related Columns</p>
              <h2 className="mt-3 text-[30px] font-extrabold text-deep md:text-[42px]">다음으로 보면 좋은 칼럼</h2>
            </div>
            <Link href="/blog" className="hidden rounded-full border border-hairline-soft2 bg-white px-5 py-2.5 text-[14px] font-extrabold text-deep md:block">
              전체 보기
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedColumns.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="group overflow-hidden rounded-[8px] border border-hairline bg-white shadow-xl shadow-deep/5 transition hover:-translate-y-1">
                <article>
                  <div className="relative aspect-[1.25] overflow-hidden bg-deep">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(min-width: 768px) 32vw, 92vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-[12px] font-extrabold text-primary">{item.category}</p>
                    <h3 className="mt-3 text-[20px] font-extrabold leading-[1.35] text-deep">{item.title}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-body3">{item.excerpt}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
