import { SERVICE_AREAS } from "../lib/site"

export default function ServiceArea() {
  return (
    <section className="bg-offwhite px-5 md:px-14 py-14 md:py-[70px] text-center">
      <h2 className="text-[22px] md:text-[26px] font-extrabold text-deep tracking-[-0.02em] mb-4">
        강진읍 동성로에서 강진군 전역으로
      </h2>
      <p className="text-[15px] text-body max-w-[560px] mx-auto mb-7 leading-[1.7]">
        전남 강진군 강진읍 동성로 27 본사를 중심으로 군동면, 칠량면, 병영면 등 강진군 전 지역에 출동합니다.
      </p>
      <div className="flex gap-2.5 justify-center flex-wrap">
        {SERVICE_AREAS.map((area) => (
          <span
            key={area}
            className="bg-white border border-hairline text-deep text-[13.5px] font-semibold px-4 py-[9px] rounded-full"
          >
            {area}
          </span>
        ))}
      </div>
    </section>
  )
}
