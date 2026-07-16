import { SITE } from "../lib/site"
import { SITE_URL } from "../lib/config"

export default function JsonLd() {
  const phone = SITE.phoneHref.replace("tel:", "")

  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.companyName,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address,
      addressRegion: "전남",
      addressCountry: "KR",
    },
    areaServed: ["강진읍", "군동면", "칠량면", "병영면"],
    ...(phone ? { telephone: phone } : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
