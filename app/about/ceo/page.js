import Image from "next/image"
import Link from "next/link"
import Cta from "../../components/Cta"
import { SITE } from "../../lib/site"
import { ArrowRight, ClipboardCheck, MapPin, Phone, ShieldCheck, Star } from "lucide-react"

export const metadata = {
  title: "대표 소개",
  description:
    "한국방역환경 대표 소개. 강진군 지역 현장을 직접 확인하며 해충방제, 방역소독, 물탱크 청소를 책임 있게 안내합니다.",
}

const profile = [
  { label: "대표", value: SITE.ceoName },
  { label: "주요 분야", value: "해충방제 · 방역소독 · 물탱크 청소" },
  { label: "상담 지역", value: "강진군 및 인근 생활권" },
  { label: "상담 전화", value: SITE.phoneDisplay },
]

const principles = [
  {
    icon: ClipboardCheck,
    title: "현장을 직접 보고 판단",
    desc: "사진과 설명만으로 단정하지 않고, 가능한 현장 상태를 기준으로 범위와 방식을 안내합니다.",
  },
  {
    icon: ShieldCheck,
    title: "안전한 시공과 설명",
    desc: "가정과 사업장의 이용 환경을 고려해 고객이 이해할 수 있는 방식으로 작업 내용을 설명합니다.",
  },
  {
    icon: Star,
    title: "다시 문의하고 싶은 응대",
    desc: "작은 불편도 편하게 말할 수 있도록 상담부터 마무리 안내까지 차분하게 대응합니다.",
  },
]

export default function CeoPage() {
  return (
    <>
      <section className="bg-white px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Link href="/about" className="inline-flex items-center gap-2 text-[14px] font-bold text-body2 transition hover:text-primary">
              회사소개
              <ArrowRight size={15} aria-hidden="true" />
              대표 소개
            </Link>
            <p className="mt-9 text-[14px] font-extrabold text-primary">CEO Profile</p>
            <h1 className="mt-4 text-[38px] font-extrabold leading-[1.16] text-deep md:text-[64px]">
              고객이 안심할 때까지
              <br />
              현장을 책임지는 대표
            </h1>
            <p className="mt-6 max-w-[620px] text-[16px] leading-[1.85] text-body3 md:text-[18px]">
              한국방역환경은 대표가 현장의 기준을 직접 세우고 확인하는 방역업체입니다. 빠른 처리뿐 아니라 왜 발생했는지,
              어떻게 다시 줄일 수 있는지까지 고객에게 명확히 안내하는 것을 중요하게 생각합니다.
            </p>
            <div className="mt-8 grid max-w-[420px] gap-3 sm:flex sm:max-w-none sm:flex-wrap">
              <a href={SITE.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-extrabold text-white">
                <Phone size={18} aria-hidden="true" />
                대표 상담 {SITE.phoneDisplay}
              </a>
              <Link href="/about/greeting" className="rounded-full border border-hairline-soft2 bg-white px-7 py-3.5 text-center text-[15px] font-extrabold text-deep">
                인사말 보기
              </Link>
            </div>
          </div>

          <div className="relative min-h-[560px] overflow-hidden rounded-[8px] bg-deep shadow-2xl shadow-deep/12">
            <Image
              src="/images/home/hero-science-inspection.png"
              alt="방역 전문가가 현장을 진단하는 모습"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 92vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/92 via-deep/28 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-9">
              <p className="text-[14px] font-bold text-white/65">Representative</p>
              <h2 className="mt-2 text-[34px] font-extrabold">{SITE.ceoName}</h2>
              <p className="mt-3 max-w-[440px] text-[15px] leading-relaxed text-white/72">
                보이지 않는 위생 문제까지 먼저 살피고, 고객이 납득할 수 있는 방역 계획을 제안합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07142a] px-5 py-14 text-white md:px-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-4">
          {profile.map((item) => (
            <div key={item.label} className="rounded-[8px] border border-white/12 bg-white/8 p-6 backdrop-blur">
              <p className="text-[13px] font-bold text-white/54">{item.label}</p>
              <strong className="mt-3 block text-[20px] font-extrabold leading-snug text-white">{item.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-offwhite px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-[720px]">
            <p className="text-[14px] font-extrabold text-primary">Field Principle</p>
            <h2 className="mt-3 text-[31px] font-extrabold leading-[1.28] text-deep md:text-[48px]">
              대표의 기준이
              <br />
              현장 서비스의 기준입니다.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {principles.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="rounded-[8px] border border-hairline bg-white p-7 shadow-xl shadow-deep/5">
                  <span className="flex h-13 w-13 items-center justify-center rounded-[8px] bg-primary text-white">
                    <Icon size={25} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-[22px] font-extrabold text-deep">{item.title}</h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-body3">{item.desc}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="rounded-[8px] border border-hairline bg-tint p-7 md:p-10">
            <p className="text-[14px] font-extrabold text-primary">Message</p>
            <blockquote className="mt-5 text-[26px] font-extrabold leading-[1.45] text-deep md:text-[38px]">
              “보이는 해충을 없애는 것보다 중요한 일은,
              <br />
              고객이 다시 불안해하지 않도록 원인을 줄이는 것입니다.”
            </blockquote>
            <p className="mt-6 text-[15.5px] leading-[1.85] text-body3">
              한국방역환경은 문의 한 통에도 현장의 사정을 먼저 듣습니다. 가정의 불안, 식당의 위생 걱정, 사업장의 운영
              부담을 이해하고 필요한 조치를 정직하게 안내하겠습니다.
            </p>
          </div>
          <div className="rounded-[8px] border border-hairline bg-white p-7 shadow-xl shadow-deep/5">
            <MapPin className="text-primary" size={30} aria-hidden="true" />
            <h3 className="mt-5 text-[24px] font-extrabold text-deep">강진군 현장 상담</h3>
            <p className="mt-4 text-[15px] leading-[1.8] text-body3">
              바퀴벌레, 쥐, 날벌레, 방역 소독, 물탱크 청소까지 현장 상태에 맞춰 상담합니다.
            </p>
            <a href={SITE.phoneHref} className="mt-7 inline-flex rounded-full bg-primary px-7 py-3.5 text-[15px] font-extrabold text-white">
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}
