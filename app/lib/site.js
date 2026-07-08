// 확정 전 자리표시자(placeholder) 값 — 실제 정보 확정 후 교체 필요
export const SITE = {
  companyName: "한국방역환경",
  logoInitial: "한",
  address: "전남 강진군 강진읍 동성로 27",
  phoneDisplay: "[번호 입력]",
  phoneHref: "tel:", // TODO: 실제 번호로 교체 (예: tel:0611234567)
  emailDisplay: "[이메일 입력]",
  emailHref: "mailto:", // TODO: 실제 이메일로 교체
  bizRegNo: "[입력]",
  pestRegNo: "[입력]",
}

export const NAV_ITEMS = [
  { label: "회사소개", href: "/about" },
  { label: "서비스안내", href: "/services" },
  { label: "시공사례", href: "/cases" },
  { label: "고객센터", href: "/support" },
  { label: "문의하기", href: "/contact" },
]

export const TRUST_ITEMS = [
  "이웃처럼 빠른 출동",
  "아이·반려동물 안심 약제",
  "친절한 방역 기사",
  "꼼꼼한 사후관리",
]

export const SERVICES = [
  { initial: "바", title: "바퀴벌레 방제", desc: "숨은 서식지까지 찾아 확실히 없애드려요." },
  { initial: "쥐", title: "쥐 방제", desc: "침입로를 막고 트랩으로 재발을 방지해요." },
  { initial: "해", title: "모기·파리 방제", desc: "여름철 골칫거리를 정기 방문으로 관리해요." },
  { initial: "소", title: "소독·방역", desc: "감염병 예방을 위한 전문 소독을 진행해요." },
  { initial: "공", title: "실내공기질·곰팡이", desc: "눅눅한 곰팡이 원인을 찾아 관리해드려요." },
  { initial: "매", title: "매트리스 청소", desc: "보이지 않는 진드기·먼지까지 제거해요." },
  { initial: "물", title: "물탱크 청소", desc: "저수조를 세척·소독해 깨끗한 물을 지켜요." },
]

export const SERVICE_AREAS = ["강진읍", "군동면", "칠량면", "병영면", "외 강진군 전체"]
