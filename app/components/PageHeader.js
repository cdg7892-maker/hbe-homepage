import Link from "next/link"

export default function PageHeader({ eyebrow, title, desc }) {
  return (
    <section className="bg-offwhite px-5 md:px-14 pt-12 pb-10 md:pt-16 md:pb-12">
      <nav aria-label="현재 위치" className="text-[13px] text-body2 mb-4">
        <Link href="/" className="hover:text-deep transition-colors">
          홈
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-deep font-medium">{eyebrow}</span>
      </nav>
      <h1 className="text-[28px] md:text-[36px] font-extrabold text-deep tracking-[-0.02em]">{title}</h1>
      {desc && <p className="text-[15px] md:text-[16px] text-body mt-3 max-w-[560px] leading-relaxed">{desc}</p>}
    </section>
  )
}
