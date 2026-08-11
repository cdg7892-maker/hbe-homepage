import Image from "next/image"
import Link from "next/link"
import Cta from "../../components/Cta"
import { SITE } from "../../lib/site"
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react"

export const metadata = {
  title: "인사말",
  description:
    "한국방역환경의 인사말. 보이는 해충 제거를 넘어 원인 진단과 재발 관리까지 책임지는 지역 방역 전문업체입니다.",
}

const promises = [
  "보이는 문제보다 원인을 먼저 확인하겠습니다.",
  "현장에 맞지 않는 과한 시공을 권하지 않겠습니다.",
  "상담부터 사후 안내까지 같은 기준으로 책임지겠습니다.",
]

export default function GreetingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#07142a] text-white">
        <Image
          src="/images/home/hero-science-control.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-46"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,42,0.97),rgba(7,20,42,0.76)_54%,rgba(7,20,42,0.24))]" />
        <div className="relative mx-auto min-h-[520px] max-w-[1180px] px-5 py-20 md:px-0">
          <div className="max-w-[760px]">
            <Link href="/about" className="inline-flex items-center gap-2 text-[14px] font-bold text-white/70 transition hover:text-white">
              회사소개
              <ArrowRight size={15} aria-hidden="true" />
              인사말
            </Link>
            <h1 className="mt-8 text-[36px] font-extrabold leading-[1.18] md:text-[64px]">
              해충의 근원을 줄이고,
              <br />
              안심할 수 있는 공간을 지키겠습니다.
            </h1>
            <p className="mt-6 max-w-[650px] text-[16px] leading-[1.85] text-white/78 md:text-[19px]">
              눈앞의 해충을 없애는 일은 시작일 뿐입니다. 한국방역환경은 고객이 다시 불안해하지 않도록 원인을 찾고,
              현장에 맞는 방법으로 꾸준히 관리하는 방역 서비스를 약속드립니다.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="sticky top-28 hidden rounded-[8px] border border-hairline bg-offwhite p-7 lg:block">
            <p className="text-[14px] font-extrabold text-primary">Greeting</p>
            <h2 className="mt-3 text-[32px] font-extrabold leading-[1.22] text-deep">
              고객의 공간을
              <br />
              내 공간처럼 살피겠습니다.
            </h2>
            <a href={SITE.phoneHref} className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-[14px] font-extrabold text-white">
              상담 {SITE.phoneDisplay}
            </a>
          </div>

          <article className="rounded-[8px] border border-hairline bg-white p-6 shadow-xl shadow-deep/5 md:p-10">
            <p className="text-[15px] font-extrabold text-primary">안녕하십니까. {SITE.companyName}입니다.</p>
            <h2 className="mt-4 text-[29px] font-extrabold leading-[1.32] text-deep md:text-[44px]">
              방역은 단순한 처리보다
              <br />
              생활의 안심을 만드는 일입니다.
            </h2>
            <div className="mt-8 space-y-5 text-[16px] leading-[1.95] text-body3">
              <p>
                바퀴벌레, 쥐, 날벌레, 세균 오염 문제는 어느 날 갑자기 보이는 것처럼 느껴지지만 대부분은 보이지 않는 곳에서
                이미 원인이 만들어지고 있습니다. 그래서 저희는 현장에 도착하면 먼저 어디에서 들어왔는지, 왜 반복되는지,
                어떤 방식으로 관리해야 하는지를 차분히 확인합니다.
              </p>
              <p>
                한국방역환경은 강진군을 중심으로 가정, 식당, 사무실, 창고, 시설 현장을 방문하며 지역 고객의 생활과 영업을
                가까이에서 지켜왔습니다. 작은 문의라도 가볍게 넘기지 않고, 고객이 이해할 수 있는 말로 현장 상태와 필요한
                조치를 안내하겠습니다.
              </p>
              <p>
                빠르게 처리하는 것도 중요하지만, 더 중요한 것은 고객이 다시 불안해하지 않는 것입니다. 보이는 해충을 줄이는
                것에서 멈추지 않고, 위생 습관과 재발 방지 포인트까지 함께 안내하는 방역 파트너가 되겠습니다.
              </p>
            </div>
            <div className="mt-9 grid gap-3">
              {promises.map((item) => (
                <div key={item} className="flex gap-3 rounded-[8px] bg-tint p-4">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={21} aria-hidden="true" />
                  <strong className="text-[15px] leading-relaxed text-deep">{item}</strong>
                </div>
              ))}
            </div>
            <footer className="mt-10 border-t border-hairline pt-7">
              <p className="text-[14px] font-bold text-body2">한국방역환경 대표</p>
              <p className="mt-2 text-[28px] font-extrabold text-deep">{SITE.ceoName}</p>
            </footer>
          </article>
        </div>
      </section>

      <section className="bg-offwhite px-5 py-14 md:px-14 md:py-20">
        <div className="mx-auto grid max-w-[1180px] gap-8 md:grid-cols-3">
          {[
            ["01", "원인 진단", "침입 경로와 서식 환경을 확인해 재발 가능성을 줄입니다."],
            ["02", "맞춤 방제", "공간의 용도와 생활 동선을 고려해 필요한 범위만 시공합니다."],
            ["03", "사후 안내", "청소, 보관, 틈새 관리처럼 고객이 실천할 수 있는 기준을 안내합니다."],
          ].map(([no, title, desc]) => (
            <article key={no} className="rounded-[8px] border border-hairline bg-white p-7">
              <span className="text-[36px] font-extrabold text-primary/24">{no}</span>
              <h3 className="mt-4 flex items-center gap-2 text-[22px] font-extrabold text-deep">
                <ShieldCheck size={21} className="text-primary" aria-hidden="true" />
                {title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-body3">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <Cta />
    </>
  )
}
