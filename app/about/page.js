import PageHeader from "../components/PageHeader"
import TrustBadges from "../components/TrustBadges"
import Cta from "../components/Cta"
import { SITE } from "../lib/site"

export const metadata = {
  title: "회사소개",
  description: "한국방역환경 회사소개 — 강진군 강진읍을 기반으로 강진군 전 지역에 출동하는 방역업체입니다.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="회사소개"
        title="한국방역환경을 소개합니다"
        desc="강진읍 동성로를 기반으로, 강진군 곳곳을 이웃처럼 가깝게 찾아가는 방역업체입니다."
      />

      <section className="bg-white px-5 md:px-14 py-14 md:py-16">
        <h2 className="text-[22px] font-extrabold text-deep mb-4">회사개요</h2>
        <p className="text-[15px] text-body leading-[1.8] max-w-[680px]">
          한국방역환경은 전남 강진군 강진읍에 자리한 방역·해충방제 전문업체입니다. 강진읍을 중심으로
          군동면·칠량면·병영면 등 강진군 전 지역에 출동하며, 가정·매장·사무실 등 공간의 특성에 맞춘
          맞춤 방역을 진행합니다.
        </p>
        <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-[680px]">
          <div>
            <dt className="text-[12px] text-body2 mb-1">설립</dt>
            <dd className="text-[15px] font-bold text-deep">{SITE.foundedYear}</dd>
          </div>
          <div>
            <dt className="text-[12px] text-body2 mb-1">대표자</dt>
            <dd className="text-[15px] font-bold text-deep">{SITE.ceoName}</dd>
          </div>
          <div>
            <dt className="text-[12px] text-body2 mb-1">사업자등록번호</dt>
            <dd className="text-[15px] font-bold text-deep">{SITE.bizRegNo}</dd>
          </div>
          <div>
            <dt className="text-[12px] text-body2 mb-1">방역업 등록번호</dt>
            <dd className="text-[15px] font-bold text-deep">{SITE.pestRegNo}</dd>
          </div>
        </dl>
      </section>

      <section className="bg-offwhite px-5 md:px-14 py-14 md:py-16">
        <h2 className="text-[22px] font-extrabold text-deep mb-4">대표인사말</h2>
        <blockquote className="text-[15px] text-body leading-[1.8] max-w-[680px] border-l-4 border-primary pl-5">
          안녕하세요, 한국방역환경입니다. 강진군 주민 여러분께 이웃처럼 빠르고 믿을 수 있는 방역
          서비스를 드리기 위해 노력하고 있습니다. 아이와 반려동물이 함께하는 공간이라면 안전한
          약제를, 매장이라면 영업에 방해되지 않는 시공을 우선합니다. 궁금한 점이 있다면 언제든
          편하게 연락 주세요.
          <footer className="mt-4 text-[14px] font-bold text-deep not-italic">
            — {SITE.companyName} 대표 {SITE.ceoName}
          </footer>
        </blockquote>
      </section>

      <section className="bg-white px-5 md:px-14 py-14 md:py-16">
        <h2 className="text-[22px] font-extrabold text-deep mb-4">인증·자격</h2>
        <p className="text-[14px] text-body2 mb-5">등록된 방역업체로서 아래 자격을 갖추고 있습니다.</p>
        <TrustBadges />
      </section>

      <section className="bg-offwhite px-5 md:px-14 py-14 md:py-16">
        <h2 className="text-[22px] font-extrabold text-deep mb-4">오시는 길</h2>
        <p className="text-[15px] text-body mb-5">{SITE.address}</p>
        {SITE.mapEmbedUrl ? (
          <iframe
            src={SITE.mapEmbedUrl}
            className="w-full h-[320px] rounded-2xl border border-hairline"
            loading="lazy"
            title="한국방역환경 위치 지도"
          />
        ) : (
          <div className="w-full h-[240px] rounded-2xl border border-hairline bg-white flex items-center justify-center text-placeholder-text text-[13px] font-mono">
            지도 임베드 — 네이버/카카오 지도 URL 준비되는 대로 연결
          </div>
        )}
      </section>

      <Cta />
    </>
  )
}
