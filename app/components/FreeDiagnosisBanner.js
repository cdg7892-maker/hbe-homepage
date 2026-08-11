import Image from "next/image"
import Link from "next/link"
import { ICONS } from "../lib/icons"

export default function FreeDiagnosisBanner() {
  return (
    <section className="bg-white px-5 py-8 md:px-14 md:py-12">
      <div className="relative mx-auto grid max-w-[1280px] overflow-hidden bg-[#eef8fb] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[330px]">
          <Image
            src="/images/home/inspection-checklist.png"
            alt="방역 전문가가 체크리스트로 현장 진단 내용을 확인하는 모습"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[72%_50%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(239,249,252,0.98),rgba(239,249,252,0.34))]" />
          <div className="relative px-6 py-12 md:px-12">
            <p className="text-[14px] leading-relaxed text-body3">
              해충방제부터 위생 환경 솔루션까지
              <br />
              우리집, 우리 사업장으로 찾아오는 전문 진단
            </p>
            <h2 className="mt-3 text-[30px] font-extrabold tracking-[-0.02em] text-deep md:text-[42px]">
              무료진단으로 먼저 확인하세요.
            </h2>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-[8px] bg-[#08153a] px-6 py-3.5 text-[14px] font-extrabold text-white transition hover:bg-primary">
              무료진단 신청하기 <ICONS.ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-white px-6 py-10 md:px-12">
          <p className="text-[13px] font-extrabold text-primary">방치하면 커지는 위생 리스크</p>
          <div className="relative mt-4 aspect-[16/9] overflow-hidden rounded-[8px] border border-hairline bg-white">
            <Image
              src="/images/home/premium-kitchen-inspection.png"
              alt="방역 전문가가 주방의 해충 침입 가능 지점을 점검하는 모습"
              fill
              sizes="(min-width: 1024px) 520px, 90vw"
              className="object-cover object-[35%_50%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/82 to-transparent p-5">
              <p className="max-w-[430px] text-[18px] font-extrabold leading-snug text-white">
                바퀴벌레와 쥐는 보이는 순간보다, 숨어 번식하는 시간이 더 위험합니다.
              </p>
            </div>
          </div>
          <p className="mt-5 text-[16px] font-extrabold leading-relaxed text-deep">
            보이는 해충만 없애는 것이 아니라, 번식 원인과 침입 경로까지 확인해야 재발을 줄일 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
