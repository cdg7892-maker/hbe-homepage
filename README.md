# 한국방역환경 홈페이지

전남 강진군 방역업체 "한국방역환경" 홈페이지. Next.js (App Router) + Tailwind CSS v4.

디자인 소스: `design_handoff_homepage/한국방역환경_홈페이지_2a.dc.html` (2a안, 화이트+연한 그린 톤).

## 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인.

## 구조

- `app/page.js` — 메인 랜딩 페이지 (Hero, 신뢰스트립, 서비스, 후기, 서비스지역, CTA)
- `app/layout.js` — 공통 레이아웃, 메타데이터, Header/Footer
- `app/components/` — 섹션별 컴포넌트
- `app/lib/site.js` — 전화번호/이메일/등록번호 등 사이트 전역 값 (현재 자리표시자)

## 실제 오픈 전 반드시 교체해야 할 항목 (`app/lib/site.js`)

- `phoneDisplay` / `phoneHref` — 실제 전화번호
- `emailDisplay` / `emailHref` — 실제 이메일
- `bizRegNo` — 사업자등록번호
- `pestRegNo` — 방역업 등록번호

## 아직 없는 서브페이지

헤더 내비게이션과 일부 버튼은 아래 경로로 연결되어 있으나, 아직 페이지가 없어 404가 발생합니다. 페이지 제작 후 자동으로 연결됩니다.

- `/about` (회사소개), `/services` (서비스안내), `/cases` (시공사례), `/support` (고객센터), `/contact` (문의하기)

## 교체 필요한 이미지 (현재 placeholder)

- 히어로 섹션 — 직원 출동 사진 (5:4)
- 고객 후기 섹션 — 후기 관련 사진 (4:3)
- 고객 후기 텍스트 — 실제 후기로 교체
