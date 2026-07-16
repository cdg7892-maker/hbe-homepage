import PageHeader from "../components/PageHeader"
import FaqAccordion from "../components/FaqAccordion"
import Cta from "../components/Cta"
import { ICONS } from "../lib/icons"
import { FAQ_DATA } from "../lib/faq-data"
import { SITE } from "../lib/site"

export const metadata = {
  title: "고객센터",
  description: "한국방역환경 자주 묻는 질문과 영업시간, 서비스 안내를 확인하세요.",
}

export default function SupportPage() {
  const Clock = ICONS.Clock
  return (
    <>
      <PageHeader eyebrow="고객센터" title="궁금하신 점을 확인해보세요" />

      <section className="bg-white px-5 md:px-14 py-12 md:py-14">
        <div className="max-w-[560px] mx-auto bg-offwhite border border-hairline rounded-2xl p-6 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-tint text-primary flex items-center justify-center shrink-0">
            <Clock size={20} strokeWidth={2} aria-hidden="true" />
          </div>
          <div>
            <div className="text-[14px] font-bold text-deep mb-2">영업시간</div>
            <ul className="text-[13.5px] text-body2 leading-relaxed">
              {SITE.businessHours.map((h) => (
                <li key={h.day}>
                  {h.day} {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 md:px-14 py-6 md:py-10">
        <div className="max-w-[720px] mx-auto">
          <FaqAccordion items={FAQ_DATA} />
        </div>
      </section>

      <Cta />
    </>
  )
}
