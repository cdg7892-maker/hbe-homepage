import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { SITE } from "./lib/site"

export const metadata = {
  title: {
    default: `${SITE.companyName} | 강진군 방역·해충방제 전문업체`,
    template: `%s | ${SITE.companyName}`,
  },
  description:
    "전남 강진군 강진읍 소재 한국방역환경. 바퀴벌레·쥐·모기파리 방제, 소독·방역, 실내공기질, 물탱크 청소까지 강진군 전 지역 출동.",
  openGraph: {
    type: "website",
    title: `${SITE.companyName} | 강진군 방역·해충방제 전문업체`,
    description: "이웃처럼 빠른 출동, 안심 약제. 강진군 주민이 먼저 찾는 방역업체.",
    siteName: SITE.companyName,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css"
        />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
