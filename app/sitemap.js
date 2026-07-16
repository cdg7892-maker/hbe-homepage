import { SITE_URL } from "./lib/config"
import { SERVICES_DATA } from "./lib/services-data"

export default function sitemap() {
  const staticRoutes = ["", "/about", "/services", "/cases", "/support", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }))

  const serviceRoutes = SERVICES_DATA.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...serviceRoutes]
}
