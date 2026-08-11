import Image from "next/image"
import Link from "next/link"
import { SITE } from "../lib/site"
import { ICONS } from "../lib/icons"

const pestStats = [
  {
    icon: ICONS.Bug,
    title: "바퀴벌레",
    headline: "한 마리 발견은 서식지 신호일 수 있습니다.",
    desc: "습한 틈새와 배수 라인을 중심으로 숨어 있다가 야간에 활동하는 경우가 많습니다.",
  },
  {
    icon: ICONS.Rat,
    title: "쥐",
    headline: "흔적을 본 순간 유입 경로 확인이 먼저입니다.",
    desc: "배관, 환기구, 외벽 틈처럼 작은 통로를 통해 반복적으로 들어올 수 있습니다.",
  },
  {
    icon: ICONS.Wind,
    title: "비래해충",
    headline: "문을 닫아도 발생원은 실내에 남을 수 있습니다.",
    desc: "배수구, 음식물, 조명 주변처럼 생활 동선 가까운 곳에서 다시 발생합니다.",
  },
]

const entryRoutes = [
  "싱크대·화장실 배수구",
  "에어컨·환풍기 배관",
  "택배박스·식자재 포장재",
  "출입문·창문 틈새",
  "쓰레기장·보일러실",
  "같은 건물 내 층간 이동",
]

const recurrenceReasons = [
  "정확한 진단 없이 보이는 곳만 처리",
  "침입 경로를 막지 않은 일회성 시공",
  "서식 환경을 그대로 둔 생활 동선",
]

const processSteps = [
  ["01", "현장 진단", "해충 흔적, 침입 경로, 습도와 배수 라인을 확인합니다."],
  ["02", "원인 분류", "가정·매장·창고 등 공간별 발생 원인을 나눠 봅니다."],
  ["03", "맞춤 방제", "필요 지점에만 안전하게 시공하고 재발 가능 지점을 함께 관리합니다."],
  ["04", "사후 안내", "청소, 보관, 틈새 관리처럼 고객이 바로 할 수 있는 방법을 안내합니다."],
]

export default function IntegratedPestSolution() {
  return (
    <section className="bg-white">
      <div className="relative overflow-hidden bg-[#07142a] px-5 py-16 text-white md:px-14 md:py-24">
        <Image
          src="/images/home/hero-science-inspection.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-24"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,20,42,0.86),rgba(7,20,42,0.98))]" />
        <div className="relative mx-auto max-w-[1180px] text-center">
          <p className="text-[15px] font-extrabold text-red-400">오늘, 지금 확인해야 하는 이유</p>
          <h2 className="mt-4 text-[34px] font-extrabold leading-[1.22] tracking-normal md:text-[56px]">
            해충은 보이는 순간보다
            <br />
            숨어 번식하는 시간이 더 위험합니다.
          </h2>
          <p className="mx-auto mt-6 max-w-[720px] text-[17px] leading-[1.8] text-white/74">
            한 번 나타난 해충은 단순 퇴치보다 원인 진단이 중요합니다. 한국방역환경은 침입 경로와 서식 환경을 먼저 확인해
            재발 가능성을 줄이는 통합 방제 솔루션을 제안합니다.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pestStats.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="rounded-[8px] border border-white/12 bg-black/32 p-7 text-left shadow-2xl shadow-black/20 backdrop-blur-sm">
                  <span className="flex h-14 w-14 items-center justify-center rounded-[8px] border border-white/20 bg-white/10 text-white">
                    <Icon size={29} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <p className="mt-6 text-[15px] font-extrabold text-red-300">{item.title}</p>
                  <h3 className="mt-2 text-[22px] font-extrabold leading-snug text-white">{item.headline}</h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-white/64">{item.desc}</p>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      <div className="bg-[#eef6fb] px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <h2 className="text-[31px] font-extrabold leading-[1.28] text-deep md:text-[46px]">
              문제 해충은 어디에서 들어올까요?
            </h2>
            <p className="mx-auto mt-4 max-w-[760px] text-[16px] leading-[1.8] text-body3">
              주방과 배수구만 보는 것으로는 부족합니다. 외부 유입, 포장재, 배관, 생활 동선까지 함께 봐야 반복 발생을 줄일 수 있습니다.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {entryRoutes.map((route) => (
              <div key={route} className="flex items-center gap-3 rounded-[8px] border border-white bg-white p-5 shadow-lg shadow-deep/5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <ICONS.CheckCircle2 size={20} aria-hidden="true" />
                </span>
                <strong className="text-[16px] text-deep">{route}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-[14px] font-extrabold text-primary">왜 다시 생길까요?</p>
            <h2 className="mt-3 text-[31px] font-extrabold leading-[1.25] text-deep md:text-[46px]">
              한 번 없앴는데도
              <br />
              다시 보인다면 원인은 남아 있습니다.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.8] text-body3">
              약제만 뿌리는 방식은 눈앞의 불편함을 줄일 수 있지만, 침입 경로와 서식 환경이 그대로라면 같은 문제가 반복될 수 있습니다.
            </p>
            <div className="mt-8 grid gap-3">
              {recurrenceReasons.map((reason) => (
                <div key={reason} className="rounded-[8px] border border-hairline bg-tint p-5 text-[17px] font-extrabold text-deep">
                  {reason}
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[430px] overflow-hidden rounded-[8px] bg-deep">
            <Image
              src="/images/home/premium-kitchen-inspection.png"
              alt="방역 전문가가 주방 하부의 해충 침입 가능 지점을 점검하는 모습"
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/86 via-deep/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
              <p className="text-[14px] font-bold text-white/70">HBE Integrated Pest Control</p>
              <h3 className="mt-2 text-[26px] font-extrabold leading-tight">보이는 해충보다 원인을 먼저 봅니다.</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f7faf7] px-5 py-16 md:px-14 md:py-24">
        <div className="mx-auto max-w-[1180px]">
          <div className="text-center">
            <p className="text-[14px] font-extrabold text-primary">한국방역환경의 통합 방제</p>
            <h2 className="mt-3 text-[31px] font-extrabold leading-[1.28] text-deep md:text-[46px]">
              상담부터 사후 안내까지
              <br />
              한 흐름으로 관리합니다.
            </h2>
          </div>
          <div className="relative mt-12 grid gap-5 md:grid-cols-4">
            {processSteps.map(([no, title, desc]) => (
              <article key={no} className="rounded-[8px] border border-hairline bg-white p-6 shadow-xl shadow-deep/5">
                <span className="text-[38px] font-extrabold text-primary/22">{no}</span>
                <h3 className="mt-4 text-[22px] font-extrabold text-deep">{title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-body3">{desc}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-signature btn-primary px-7 py-4 text-[15px] font-extrabold">
              무료진단 신청
            </Link>
            <a href={SITE.phoneHref} className="btn-signature border border-hairline-soft2 bg-white px-7 py-4 text-[15px] font-extrabold text-deep transition hover:bg-tint">
              전화 상담 {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
