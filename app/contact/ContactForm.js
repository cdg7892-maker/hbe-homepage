"use client"

import { useState } from "react"
import { SERVICES_DATA } from "../lib/services-data"
import { SERVICE_AREAS, SITE } from "../lib/site"

const initialForm = {
  name: "",
  phone: "",
  service: "",
  area: "",
  preferredTime: "",
  message: "",
  urgent: false,
  company: "", // honeypot
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState("idle") // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("")

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.phone) {
      setStatus("error")
      setErrorMsg("이름과 전화번호를 입력해주세요.")
      return
    }
    setStatus("submitting")
    setErrorMsg("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "전송에 실패했습니다.")
      }
      setStatus("success")
      setForm(initialForm)
    } catch (err) {
      setStatus("error")
      setErrorMsg(err.message || "전송 중 오류가 발생했습니다.")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-tint2 border border-hairline rounded-2xl p-8 text-center">
        <p className="text-[16px] font-bold text-deep mb-2">문의가 접수되었습니다.</p>
        <p className="text-[14px] text-body">빠른 시일 내에 연락드리겠습니다. 긴급하신 경우 전화로도 연락 주세요.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      {/* honeypot: 화면에는 보이지 않지만 봇은 채워 넣는 필드 */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">회사명</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="이름" required>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="input"
          />
        </Field>
        <Field label="전화번호" required>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className="input"
            placeholder="010-0000-0000"
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="서비스 종류">
          <select value={form.service} onChange={(e) => update("service", e.target.value)} className="input">
            <option value="">선택해주세요</option>
            {SERVICES_DATA.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
          </select>
        </Field>
        <Field label="지역">
          <select value={form.area} onChange={(e) => update("area", e.target.value)} className="input">
            <option value="">선택해주세요</option>
            {SERVICE_AREAS.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="희망 연락 시간 (선택)">
        <input
          type="text"
          value={form.preferredTime}
          onChange={(e) => update("preferredTime", e.target.value)}
          className="input"
          placeholder="예: 평일 오후 2시 이후"
        />
      </Field>

      <Field label="문의 내용 (선택)">
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className="input min-h-[100px] resize-y"
        />
      </Field>

      <label className="flex items-center gap-2.5 text-[14px] text-deep">
        <input
          type="checkbox"
          checked={form.urgent}
          onChange={(e) => update("urgent", e.target.checked)}
          className="w-4 h-4 accent-primary"
        />
        긴급하게 처리가 필요해요
      </label>

      {form.urgent && (
        <p className="text-[13px] text-badge-text bg-badge-bg rounded-xl px-4 py-3">
          긴급하신 경우 전화가 더 빠릅니다.{" "}
          <a href={SITE.phoneHref} className="font-bold underline">
            {SITE.phoneDisplay}
          </a>
        </p>
      )}

      {status === "error" && <p className="text-[13px] text-red-600">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-primary text-white font-bold text-[15px] px-7 py-3.5 rounded-full hover:brightness-95 transition disabled:opacity-60"
      >
        {status === "submitting" ? "전송 중..." : "문의 보내기"}
      </button>

      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid var(--color-hairline);
          border-radius: 12px;
          padding: 11px 14px;
          font-size: 14px;
          background: #fff;
          color: var(--color-deep);
        }
        .input:focus {
          outline: 2px solid var(--color-primary);
          outline-offset: 1px;
        }
      `}</style>
    </form>
  )
}

function Field({ label, required, children }) {
  return (
    <label className="flex flex-col gap-1.5 text-[13.5px] font-semibold text-deep">
      {label}
      {required && <span className="text-primary"> *</span>}
      {children}
    </label>
  )
}
