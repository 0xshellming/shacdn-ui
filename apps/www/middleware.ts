import createMiddleware from "next-intl/middleware"

import { defaultLocale, locales } from "./i18n"
import { localePrefix } from "./navigation"

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  defaultLocale,
  localePrefix,
})

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
