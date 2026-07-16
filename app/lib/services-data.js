// 서비스별 상세 콘텐츠. 홈 티저 카드와 /services, /services/[slug] 페이지가 이 데이터를 공유합니다.

export const VENUES = [
  {
    key: "home",
    label: "가정집",
    blurb: "아이와 반려동물이 함께 지내는 공간인 만큼 안전한 약제와 꼼꼼한 마감 처리를 우선합니다.",
  },
  {
    key: "store",
    label: "매장·상가",
    blurb: "영업 중 방해가 적은 시간대 방문, 손님 눈에 띄지 않는 시공을 우선합니다.",
  },
  {
    key: "office",
    label: "사무실",
    blurb: "근무 시간 외 방문이 가능하며, 여러 층·구역을 한 번에 관리해드립니다.",
  },
]

export const SERVICES_DATA = [
  {
    slug: "roach",
    icon: "Bug",
    initial: "바",
    title: "바퀴벌레 방제",
    shortDesc: "숨은 서식지까지 찾아 확실히 없애드려요.",
    heroDesc:
      "배관·틈새에 숨은 서식지까지 직접 확인하고, 알까지 관리해 재발을 줄이는 바퀴벌레 방제입니다.",
    process: [
      { title: "현장 확인", desc: "서식 흔적과 침입 경로를 먼저 확인합니다." },
      { title: "약제 시공", desc: "틈새·배관 등 서식지 중심으로 안전 약제를 시공합니다." },
      { title: "사후 점검", desc: "일정 기간 후 재발 여부를 확인해드립니다." },
    ],
    venues: {
      home: { relevant: true, note: "주방·화장실 배관 틈새를 중심으로 아이도 안심할 수 있는 약제로 시공합니다." },
      store: { relevant: true, note: "주방·창고 등 위생이 중요한 공간은 영업시간 외 방문으로 조율 가능합니다." },
      office: { relevant: true, note: "탕비실·창고 위주로 점검하며, 여러 층을 한 번에 관리해드립니다." },
    },
    faq: [
      { q: "약제 냄새가 많이 나나요?", a: "저자극 약제를 사용하며, 시공 후 환기를 안내해드립니다." },
      { q: "한 번 방문으로 끝나나요?", a: "서식 정도에 따라 다르며, 필요 시 사후관리 방문을 안내해드립니다." },
    ],
  },
  {
    slug: "rat",
    icon: "Rat",
    initial: "쥐",
    title: "쥐 방제",
    shortDesc: "침입로를 막고 트랩으로 재발을 방지해요.",
    heroDesc: "쥐의 침입 경로를 찾아 막고, 트랩과 약제를 병행해 재발까지 관리하는 쥐 방제입니다.",
    process: [
      { title: "침입 경로 확인", desc: "외벽·배관·환풍구 등 침입 가능 지점을 점검합니다." },
      { title: "차단·트랩 설치", desc: "침입로를 막고, 활동 흔적이 있는 곳에 트랩을 설치합니다." },
      { title: "재점검", desc: "일정 기간 후 트랩 확인 및 추가 조치를 안내합니다." },
    ],
    venues: {
      home: { relevant: true, note: "아이·반려동물 안전을 위해 노출형 독먹이보다 트랩·차단 위주로 진행합니다." },
      store: { relevant: true, note: "창고·물류 공간의 침입 경로를 우선 점검합니다." },
      office: { relevant: false, note: "사무 공간에서는 드물지만 창고·탕비실 침입 흔적이 있다면 점검해드립니다." },
    },
    faq: [
      { q: "쥐가 다시 들어올 수도 있나요?", a: "침입로를 물리적으로 막는 작업을 함께 진행해 재발 가능성을 낮춥니다." },
    ],
  },
  {
    slug: "flying-insect",
    icon: "Wind",
    initial: "해",
    title: "모기·파리 방제",
    shortDesc: "여름철 골칫거리를 정기 방문으로 관리해요.",
    heroDesc: "발생원을 찾아 없애고, 정기 방문으로 여름철 모기·파리를 지속적으로 관리해드립니다.",
    process: [
      { title: "발생원 확인", desc: "고인 물, 배수구 등 발생 가능 지점을 확인합니다." },
      { title: "방역 시공", desc: "실내외 방역과 유충 서식지 처리를 진행합니다." },
      { title: "정기 관리", desc: "필요 시 정기 방문 일정을 제안해드립니다." },
    ],
    venues: {
      home: { relevant: true, note: "베란다·화단 등 발생원 위주로 관리합니다." },
      store: { relevant: true, note: "야외 테이블이 있는 매장은 영업 전 시간대 방문을 권장합니다." },
      office: { relevant: false, note: "옥상·화단이 있는 건물은 발생원 점검을 함께 진행합니다." },
    },
    faq: [
      { q: "여름 한 철만 관리하면 되나요?", a: "발생 시기 전 미리 방문하면 더 효과적입니다. 정기 방문도 안내해드립니다." },
    ],
  },
  {
    slug: "disinfection",
    icon: "SprayCan",
    initial: "소",
    title: "소독·방역",
    shortDesc: "감염병 예방을 위한 전문 소독을 진행해요.",
    heroDesc: "감염병 예방 및 위생 관리를 위한 전문 소독 서비스입니다.",
    process: [
      { title: "공간 점검", desc: "소독이 필요한 공간과 동선을 확인합니다." },
      { title: "소독 시공", desc: "전문 장비와 소독제로 구석구석 시공합니다." },
      { title: "결과 안내", desc: "시공 내역과 다음 소독 권장 시기를 안내합니다." },
    ],
    venues: {
      home: { relevant: true, note: "출산·감염병 이후 등 가정 위생 관리가 필요한 시점에 특히 권장합니다." },
      store: { relevant: true, note: "위생 점검이 잦은 식당·매장은 정기 소독 이력 관리를 도와드립니다." },
      office: { relevant: true, note: "다수 인원이 근무하는 사무 공간의 정기 소독을 지원합니다." },
    },
    faq: [
      { q: "소독 증명서 발급이 되나요?", a: "네, 시공 확인서를 발급해드립니다." },
    ],
  },
  {
    slug: "air-quality",
    icon: "AirVent",
    initial: "공",
    title: "실내공기질·곰팡이",
    shortDesc: "눅눅한 곰팡이 원인을 찾아 관리해드려요.",
    heroDesc: "곰팡이와 눅눅함의 원인을 진단하고, 제거 후 재발을 줄이는 관리까지 함께합니다.",
    process: [
      { title: "원인 진단", desc: "결로·환기 등 곰팡이 발생 원인을 확인합니다." },
      { title: "제거·처리", desc: "곰팡이 제거 및 항균 처리를 진행합니다." },
      { title: "재발 방지 안내", desc: "환기·습도 관리 등 생활 관리법을 안내합니다." },
    ],
    venues: {
      home: { relevant: true, note: "욕실·베란다·붙박이장 등 결로가 잦은 공간을 우선 확인합니다." },
      store: { relevant: false, note: "지하 매장 등 습도가 높은 공간은 별도 진단을 안내해드립니다." },
      office: { relevant: false, note: "환기가 어려운 공간 위주로 점검이 필요할 수 있습니다." },
    },
    faq: [
      { q: "곰팡이가 금방 다시 생기지 않나요?", a: "원인(환기·결로 등)을 함께 안내해드려 재발 가능성을 낮출 수 있습니다." },
    ],
  },
  {
    slug: "mattress",
    icon: "BedDouble",
    initial: "매",
    title: "매트리스 청소",
    shortDesc: "보이지 않는 진드기·먼지까지 제거해요.",
    heroDesc: "전문 장비로 매트리스 속 진드기와 먼지를 제거하는 위생 관리 서비스입니다.",
    process: [
      { title: "매트리스 점검", desc: "오염도와 상태를 확인합니다." },
      { title: "전문 세척", desc: "전문 장비로 진드기·먼지를 제거합니다." },
      { title: "건조·마감", desc: "충분히 건조 후 마무리합니다." },
    ],
    venues: {
      home: { relevant: true, note: "아이 방·안방 매트리스를 중심으로 위생 관리를 도와드립니다." },
      store: { relevant: false, note: "숙박업 등 매트리스가 많은 경우 별도 견적을 안내해드립니다." },
      office: { relevant: false, note: "숙직실 등 매트리스가 있는 경우 문의해주세요." },
    },
    faq: [
      { q: "매트리스가 젖은 채로 남지 않나요?", a: "충분히 건조시키는 과정을 거쳐 마무리해드립니다." },
    ],
  },
  {
    slug: "water-tank",
    icon: "Droplets",
    initial: "물",
    title: "물탱크 청소",
    shortDesc: "저수조를 세척·소독해 깨끗한 물을 지켜요.",
    heroDesc: "저수조 내부를 세척·소독해 깨끗한 물 사용 환경을 지켜드립니다.",
    process: [
      { title: "저수조 점검", desc: "내부 오염 상태를 확인합니다." },
      { title: "세척·소독", desc: "전문 장비로 세척 후 소독을 진행합니다." },
      { title: "수질 확인", desc: "작업 완료 후 상태를 확인하고 안내합니다." },
    ],
    venues: {
      home: { relevant: false, note: "공동주택은 관리사무소를 통한 일정 조율이 필요할 수 있습니다." },
      store: { relevant: true, note: "정기 저수조 청소 의무가 있는 업종은 이력 관리를 도와드립니다." },
      office: { relevant: true, note: "건물 저수조 정기 청소 일정을 관리해드립니다." },
    },
    faq: [
      { q: "청소 주기는 어떻게 되나요?", a: "법정 청소 주기 안내를 도와드리며, 정기 일정 관리도 가능합니다." },
    ],
  },
]

export function getServiceBySlug(slug) {
  return SERVICES_DATA.find((s) => s.slug === slug)
}
