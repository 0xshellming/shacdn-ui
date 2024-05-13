import NextLink from "next/link"
import { createSharedPathnamesNavigation } from "next-intl/navigation"

import { defaultLocale, locales } from "./i18n"
import { useLocale } from "next-intl"

export const localePrefix = "as-needed" // Default


export const {
  Link: IntlLink,
  redirect,
  usePathname,
  useRouter,
} = createSharedPathnamesNavigation({ locales, localePrefix })
declare type LinkProps = Parameters<typeof IntlLink>[0]

export const Link = (props: LinkProps) => {
  const locale = useLocale()
  return locale !== defaultLocale ? <IntlLink {...props} /> : <NextLink {...props} />
}
