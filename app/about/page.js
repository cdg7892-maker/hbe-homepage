import Image from "next/image"
import Link from "next/link"
import Cta from "../components/Cta"
import TrustBadges from "../components/TrustBadges"
import { SITE } from "../lib/site"
import { Award, Building2, ClipboardCheck, MapPin, ShieldCheck, Sparkles } from "lucide-react"

export const metadata = {
  title: "회사소개",
  description:
    "한국방역환경은 강진군을 중심으로 해충방제, 방역소독, 물탱크 청소를 수행하는 지역 밀착 방역 전문업체입니다.",
}

const aboutLinks = [
  { label: "회사소개", href: "/about", active: true },
  { label: "인사말", href: "/about/greeting" },
  { label: "대표 소개", href: "/about/ceo" },
]

const metrics = [
  { label: "방역업 경력", value: "20년+", desc: "현장 중심 방역 노하우" },
  { label: "상담 전화", value: SITE.phoneDisplay, desc: "강진권 빠른 상담" },
  { label: "주요 서비스", value: "4대 영역", desc: "해충방제·쥐방제·소독·물탱크" },
]

const strengths = [
  {
    icon: ShieldCheck,
    title: "근원부터 확인하는 방제",
    desc: "보이는 해충만 처리하지 않고 침입 경로, 서식 환경, 재발 가능성을 먼저 확인합니다.",
  },
  {
    icon: ClipboardCheck,
    title: "현장에 맞춘 관리 계획",
    desc: "가정, 식당, 사업장, 창고 등 공간별 사용 패턴에 맞춰 필요한 범위만 정확히 안내합니다.",
  },
  {
    icon: MapPin,
    title: "지역 밀착 빠른 대응",
    desc: "강진군 생활권을 기반으로 문의부터 방문 상담까지 빠르고 책임 있게 움직입니다.",
  },
  {
    icon: Award,
    title: "자격과 교육 기반 운영",
    desc: "방역업 등록과 법정 교육 이수 기반으로 위생과 안전 기준을 지키며 관리합니다.",
  },
]

const servicePillars = ["바퀴벌레 박멸", "쥐 방제", "방역 소독", "물탱크 청소"]

function AboutNav() {
  return (
    <nav aria-label="회사소개 메뉴" className="mx-auto flex max-w-[1180px] flex-wrap gap-2 px-5 pt-8 md:px-14">
      {aboutLinks.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`rounded-full border px-5 py-2.5 text-[14px] font-extrabold transition ${
            item.active ? "border-primary bg-primary text-white" : "border-hairline-soft2 bg-white text-body3 hover:border-primary hover:text-primary"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07142a] text-white">
        <Image
          src="/images/home/hero-science-dispatch.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,42,0.96)_0%,rgba(7,20,42,0.78)_48%,rgba(7,20,42,0.30)_100%)]" />
        <div className="relative mx-auto grid min-h-[560px] max-w-[1180px] items-center px-5 py-20 md:px-0">
          <div className="max-w-[720px]">
            <p className="text-[14px] font-extrabold uppercase tracking-[0.18em] text-white/70">About HBE</p>
            <h1 className="mt-5 text-[38px] font-extrabold leading-[1.16] md:text-[68px]">
              공간의 문제를 먼저 읽고,
              <br />
              다시 생기지 않게 관리합니다.
            </h1>
            <p className="mt-6 max-w-[620px] text-[16px] leading-[1.85] text-white/78 md:text-[19px]">
              {SITE.companyName}은 강진군을 중심으로 해충방제와 방역 소독, 물탱크 청소를 수행하는 지역 밀착 위생관리
              전문업체입니다. 상담부터 현장 진단, 시공, 사후 안내까지 한 흐름으로 책임 있게 관리합니다.
            </p>
            <div className="mt-9 grid max-w-[360px] gap-3 sm:flex sm:max-w-none sm:flex-wrap">
              <Link href="/about/greeting" className="rounded-full bg-white px-7 py-3.5 text-center text-[15px] font-extrabold text-deep">
                인사말 보기
              </Link>
              <a href={SITE.phoneHref} className="rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-center text-[15px] font-extrabold text-white backdrop-blur">
                상담 {SITE.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <AboutNav />

      <section className="bg-white px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[14px] font-extrabold text-primary">Place Hygiene Care</p>
            <h2 className="mt-4 text-[31px] font-extrabold leading-[1.25] text-deep md:text-[48px]">
              사람이 머무는 공간의
              <br />
              위생 품질을 지킵니다.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.85] text-body3">
              해충은 단순히 불쾌한 문제가 아니라 위생, 건강, 영업 환경에 직접 영향을 줍니다. 한국방역환경은 문제의
              원인을 먼저 찾고, 공간 특성에 맞는 방식으로 안전하고 깨끗한 환경을 회복하도록 돕습니다.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((item) => (
              <div key={item.label} className="rounded-[8px] border border-hairline bg-tint p-6">
                <p className="text-[13px] font-bold text-body2">{item.label}</p>
                <strong className="mt-3 block text-[30px] font-extrabold leading-none text-deep">{item.value}</strong>
                <span className="mt-3 block text-[13px] font-semibold leading-relaxed text-body3">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef6fb] px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative min-h-[420px] overflow-hidden rounded-[8px] bg-deep">
              <Image
                src="/images/home/premium-consultation.png"
                alt="방역 전문가가 현장 상담을 진행하는 모습"
                fill
                sizes="(min-width: 1024px) 540px, 92vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/78 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                <p className="text-[14px] font-bold text-white/70">Consulting to Care</p>
                <h3 className="mt-2 text-[26px] font-extrabold leading-tight">현장에 맞는 방역 계획을 먼저 세웁니다.</h3>
              </div>
            </div>
            <div>
              <p className="text-[14px] font-extrabold text-primary">Our Standard</p>
              <h2 className="mt-3 text-[30px] font-extrabold leading-[1.3] text-deep md:text-[46px]">
                방제의 기준은
                <br />
                빠른 처리보다 정확한 진단입니다.
              </h2>
              <div className="mt-8 grid gap-4">
                {strengths.map((item) => {
                  const Icon = item.icon
                  return (
                    <article key={item.title} className="rounded-[8px] border border-white bg-white p-5 shadow-lg shadow-deep/5">
                      <div className="flex gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[8px] bg-primary text-white">
                          <Icon size={22} aria-hidden="true" />
                        </span>
                        <div>
                          <h3 className="text-[18px] font-extrabold text-deep">{item.title}</h3>
                          <p className="mt-2 text-[14px] leading-relaxed text-body3">{item.desc}</p>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="text-[14px] font-extrabold text-primary">Service Scope</p>
              <h2 className="mt-3 text-[30px] font-extrabold leading-[1.28] text-deep md:text-[44px]">
                생활 공간부터 사업장까지,
                <br />
                필요한 방역을 한 번에 상담합니다.
              </h2>
              <p className="mt-5 text-[15.5px] leading-[1.85] text-body3">
                해충, 쥐, 소독, 물탱크 위생처럼 따로 보이던 문제도 실제 현장에서는 연결되어 있는 경우가 많습니다.
                한국방역환경은 공간 전체를 보고 우선순위를 잡아드립니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {servicePillars.map((item, index) => (
                <div key={item} className="rounded-[8px] border border-hairline bg-offwhite p-6">
                  <span className="text-[32px] font-extrabold text-primary/24">0{index + 1}</span>
                  <h3 className="mt-3 text-[20px] font-extrabold text-deep">{item}</h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-body3">현장 상태를 확인한 뒤 필요한 범위와 관리 방식을 안내합니다.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-offwhite px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-[14px] font-extrabold text-primary">Credential</p>
            <h2 className="mt-3 text-[30px] font-extrabold leading-[1.28] text-deep md:text-[44px]">믿고 문의할 수 있는 등록 방역업체</h2>
            <p className="mt-5 text-[15.5px] leading-[1.85] text-body3">
              업체의 신뢰는 말보다 확인 가능한 자격과 현장 대응에서 시작됩니다. 한국방역환경은 등록 정보와 교육 이수 기반으로
              가정과 사업장의 위생 환경을 책임 있게 관리합니다.
            </p>
            <div className="mt-7">
              <TrustBadges />
            </div>
          </div>
          <div className="rounded-[8px] border border-hairline bg-white p-6 shadow-xl shadow-deep/5">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[8px] bg-primary text-white">
                <Building2 size={24} aria-hidden="true" />
              </span>
              <div className="text-[14px] leading-[1.9] text-body3">
                <strong className="mb-2 block text-[18px] text-deep">{SITE.companyName}</strong>
                주소: {SITE.address}
                <br />
                대표: {SITE.ceoName}
                <br />
                사업자등록번호: {SITE.bizRegNo}
                <br />
                방역업 등록번호: {SITE.pestRegNo}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#07142a] px-5 py-14 text-white md:px-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="flex items-center gap-2 text-[14px] font-extrabold text-white/62">
              <Sparkles size={17} aria-hidden="true" />
              더 나은 공간을 위한 첫 상담
            </p>
            <h2 className="mt-4 text-[30px] font-extrabold leading-[1.28] md:text-[46px]">
              지금 한국방역환경과
              <br />
              공간 위생을 점검해보세요.
            </h2>
          </div>
          <div className="grid gap-3 sm:flex">
            <Link href="/about/greeting" className="rounded-full bg-white px-7 py-3.5 text-center text-[15px] font-extrabold text-deep">
              인사말 보기
            </Link>
            <Link href="/contact" className="rounded-full bg-primary px-7 py-3.5 text-center text-[15px] font-extrabold text-white">
              무료진단 문의
            </Link>
          </div>
        </div>
      </section>

      <Cta />
    </>
  )
}
