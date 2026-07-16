import PageHeader from "../components/PageHeader"
import TrustBadges from "../components/TrustBadges"
import ContactForm from "./ContactForm"
import { SITE } from "../lib/site"

export const metadata = {
  title: "문의하기",
  description: "한국방역환경에 방역·해충방제 상담을 신청하세요. 전화 또는 온라인 문의가 가능합니다.",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="문의하기"
        title="무료 상담을 신청하세요"
        desc="아래 폼을 남겨주시면 확인 후 연락드립니다. 급하신 경우 전화 주시는 게 더 빠릅니다."
      />

      <section className="bg-white px-5 md:px-14 py-14 md:py-16 grid md:grid-cols-2 gap-12">
        <div>
          <ContactForm />
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-[16px] font-bold text-deep mb-3">전화로 문의하기</h2>
            <a
              href={SITE.phoneHref}
              className="inline-block bg-tint2 text-deep font-bold text-[16px] px-6 py-3 rounded-full"
            >
              📞 {SITE.phoneDisplay}
            </a>
          </div>

          <div>
            <h2 className="text-[16px] font-bold text-deep mb-3">영업시간</h2>
            <ul className="text-[13.5px] text-body2 leading-relaxed">
              {SITE.businessHours.map((h) => (
                <li key={h.day}>
                  {h.day} {h.time}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[16px] font-bold text-deep mb-3">등록 정보</h2>
            <TrustBadges />
          </div>
        </div>
      </section>
    </>
  )
}
