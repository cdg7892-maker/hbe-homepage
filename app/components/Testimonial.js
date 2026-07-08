export default function Testimonial() {
  return (
    <section className="bg-white px-5 md:px-14 py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
      <div
        className="w-full aspect-[4/3] rounded-3xl flex items-center justify-center text-center order-2 md:order-1"
        style={{
          background:
            "repeating-linear-gradient(45deg,#f4f5ee,#f4f5ee 14px,#ecefe3 14px,#ecefe3 28px)",
        }}
      >
        <span className="text-[#a3a08c] text-[13px] font-mono leading-relaxed">
          고객 후기 사진
          <br />
          placeholder
        </span>
      </div>
      <div className="order-1 md:order-2">
        <p className="text-[22px] md:text-[28px] font-extrabold text-deep leading-[1.5] tracking-[-0.02em]">
          &ldquo;연락드린 당일 바로 오셔서
          <br />
          꼼꼼하게 봐주셨어요&rdquo;
        </p>
        <p className="text-[15px] leading-[1.8] text-body mt-5">
          강진읍 상가 손님들이 남겨주신 이야기를 소개할 공간입니다. 실제 이용 후기가 준비되면 이 자리에 채워주세요.
        </p>
        <p className="text-sm font-bold text-deep mt-[22px]">— 강진읍 OO식당 사장님 (예시)</p>
      </div>
    </section>
  )
}
