import { SITE_URL } from "./lib/config"
import { COLUMN_DATA } from "./lib/column-data"
import { SERVICES_DATA } from "./lib/services-data"

export default function sitemap() {
  const staticRoutes = ["", "/about", "/about/greeting", "/about/ceo", "/services", "/cases", "/blog", "/support", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }))

  const serviceRoutes = SERVICES_DATA.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: new Date(),
  }))

  const columnRoutes = COLUMN_DATA.map((column) => ({
    url: `${SITE_URL}/blog/${column.slug}`,
    lastModified: new Date(),
  }))

  return [...staticRoutes, ...serviceRoutes, ...columnRoutes]
}
