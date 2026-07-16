// 확정 전 자리표시자(placeholder) 값 — 실제 정보 확정 후 교체 필요
export const SITE = {
  companyName: "한국방역환경",
  logoInitial: "한",
  address: "전남 강진군 강진읍 동성로 27",
  phoneDisplay: "061-432-1580",
  phoneHref: "tel:0614321580",
  emailDisplay: "[이메일 입력]",
  emailHref: "mailto:", // TODO: 실제 이메일로 교체
  bizRegNo: "[입력]",
  pestRegNo: "[입력]",
  foundedYear: "2006",
  ceoName: "차창길",
  mapEmbedUrl: "", // TODO: 네이버/카카오 지도 임베드 URL
  businessHours: [
    { day: "평일", time: "09:00 – 18:00" },
    { day: "토요일", time: "09:00 – 13:00" },
    { day: "일요일·공휴일", time: "휴무 (긴급 출동은 전화 문의)" },
  ],
}

export const NAV_ITEMS = [
  { label: "회사소개", href: "/about" },
  { label: "서비스안내", href: "/services" },
  { label: "시공사례", href: "/cases" },
  { label: "고객센터", href: "/support" },
  { label: "문의하기", href: "/contact" },
]

export const TRUST_ITEMS = [
  { icon: "Clock", label: "이웃처럼 빠른 출동" },
  { icon: "ShieldCheck", label: "아이·반려동물 안심 약제" },
  { icon: "Smile", label: "친절한 방역 기사" },
  { icon: "ClipboardCheck", label: "꼼꼼한 사후관리" },
]

export const SERVICE_AREAS = ["강진읍", "군동면", "칠량면", "병영면", "외 강진군 전체"]
