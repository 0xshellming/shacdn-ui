import createMiddleware from "next-intl/middleware"
import { locales } from "./i18n"
import { localePrefix } from "./navigation"

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  defaultLocale: "en",
  localePrefix,
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(cn|en)/:path*"],
}
