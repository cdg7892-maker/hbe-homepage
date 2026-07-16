import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import JsonLd from "./components/JsonLd"
import { SITE } from "./lib/site"
import { SITE_URL } from "./lib/config"

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  weight: "45 920",
  display: "swap",
})

export const metadata = {
  metadataBase: new URL(SITE_URL),
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
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.companyName} | 강진군 방역·해충방제 전문업체`,
    description: "이웃처럼 빠른 출동, 안심 약제. 강진군 주민이 먼저 찾는 방역업체.",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={pretendard.variable}>
      <body className="antialiased">
        <JsonLd />
        <a href="#main-content" className="skip-link">
          본문 바로가기
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
