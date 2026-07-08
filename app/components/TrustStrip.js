import { TRUST_ITEMS } from "../lib/site"

export default function TrustStrip() {
  return (
    <section className="bg-white grid grid-cols-2 md:grid-cols-4 gap-5 px-5 md:px-14 py-8">
      {TRUST_ITEMS.map((label) => (
        <div key={label} className="flex flex-col items-center text-center gap-2.5">
          <div className="w-[52px] h-[52px] rounded-2xl bg-tint" />
          <div className="text-sm font-bold text-deep">{label}</div>
        </div>
      ))}
    </section>
  )
}
