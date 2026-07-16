import { Resend } from "resend"
import { SERVICES_DATA } from "../../lib/services-data"

function findServiceLabel(slug) {
  return SERVICES_DATA.find((s) => s.slug === slug)?.title || slug || "미선택"
}

export async function POST(request) {
  let body
  try {
    body = await request.json()
  } catch {
    return Response.json({ ok: false, error: "잘못된 요청입니다." }, { status: 400 })
  }

  const { name, phone, service, area, preferredTime, message, urgent, company } = body || {}

  // honeypot: 봇이 채우는 숨은 필드. 값이 있으면 조용히 성공 처리하고 실제 발송은 하지 않는다.
  if (company) {
    return Response.json({ ok: true })
  }

  if (!name || !phone) {
    return Response.json({ ok: false, error: "이름과 전화번호를 입력해주세요." }, { status: 400 })
  }

  const subject = `${urgent ? "[긴급] " : ""}한국방역환경 문의 — ${findServiceLabel(service)}`

  const html = `
    <h2>${urgent ? "🚨 긴급 문의" : "새 문의"}</h2>
    <p><b>이름:</b> ${escapeHtml(name)}</p>
    <p><b>전화번호:</b> ${escapeHtml(phone)}</p>
    <p><b>서비스:</b> ${escapeHtml(findServiceLabel(service))}</p>
    <p><b>지역:</b> ${escapeHtml(area || "-")}</p>
    <p><b>희망 연락시간:</b> ${escapeHtml(preferredTime || "-")}</p>
    <p><b>메시지:</b><br/>${escapeHtml(message || "-").replace(/\n/g, "<br/>")}</p>
  `

  try {
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
      console.error("RESEND_API_KEY 또는 CONTACT_TO_EMAIL 환경변수가 설정되지 않았습니다.")
      return Response.json({ ok: false, error: "문의 접수가 일시적으로 불가합니다. 전화로 문의해주세요." }, { status: 500 })
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: "한국방역환경 웹사이트 <onboarding@resend.dev>", // TODO: 발신 도메인 인증 후 실제 도메인 주소로 교체
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: undefined,
      subject,
      html,
    })

    return Response.json({ ok: true })
  } catch (err) {
    console.error("Resend 발송 실패:", err)
    return Response.json({ ok: false, error: "전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요." }, { status: 500 })
  }
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}
