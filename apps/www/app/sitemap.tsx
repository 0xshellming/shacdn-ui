import type { MetadataRoute } from "next"
import { defaultLocale, locales } from "@/i18n"

import { siteHost } from "@/config/site"

declare type Alternates = {
  languages: { [key: string]: string }
}

type SiteMap = Array<
  MetadataRoute.Sitemap[0] & {
    alternates: Alternates
  }
>

const sitemapJson = {
  url: [
    {
      loc: "/examples/cards",
    },
    {
      loc: "/examples/forms/display",
    },
    {
      loc: "/examples/forms/notifications",
    },
    {
      loc: "/examples/forms/account",
    },
    {
      loc: "/examples/forms",
    },
    {
      loc: "/examples/playground",
    },
    {
      loc: "/examples/forms/appearance",
    },
    {
      loc: "/examples/music",
    },
    {
      loc: "/examples/tasks",
    },
    {
      loc: "/sink/new-york",
    },
    {
      loc: "/examples/dashboard",
    },
    {
      loc: "/examples/authentication",
    },
    {
      loc: "/sink",
    },
    {
      loc: "/themes",
    },
    {
      loc: "/docs/about",
    },
    {
      loc: "/docs/changelog",
    },
    {
      loc: "/docs/cli",
    },
    {
      loc: "/docs/components-json",
    },
    {
      loc: "/docs/figma",
    },
    {
      loc: "/docs",
    },
    {
      loc: "/docs/theming",
    },
    {
      loc: "/docs/dark-mode/astro",
    },
    {
      loc: "/docs/dark-mode",
    },
    {
      loc: "/docs/dark-mode/next",
    },
    {
      loc: "/docs/dark-mode/remix",
    },
    {
      loc: "/docs/dark-mode/vite",
    },
    {
      loc: "/docs/installation/astro",
    },
    {
      loc: "/docs/installation/gatsby",
    },
    {
      loc: "/docs/installation",
    },
    {
      loc: "/docs/installation/laravel",
    },
    {
      loc: "/docs/installation/manual",
    },
    {
      loc: "/docs/installation/next",
    },
    {
      loc: "/docs/installation/remix",
    },
    {
      loc: "/docs/installation/vite",
    },
    {
      loc: "/docs/components/accordion",
    },
    {
      loc: "/docs/components/alert-dialog",
    },
    {
      loc: "/docs/components/alert",
    },
    {
      loc: "/docs/components/aspect-ratio",
    },
    {
      loc: "/docs/components/avatar",
    },
    {
      loc: "/docs/components/badge",
    },
    {
      loc: "/docs/components/breadcrumb",
    },
    {
      loc: "/docs/components/button",
    },
    {
      loc: "/docs/components/calendar",
    },
    {
      loc: "/docs/components/card",
    },
    {
      loc: "/docs/components/carousel",
    },
    {
      loc: "/docs/components/checkbox",
    },
    {
      loc: "/docs/components/collapsible",
    },
    {
      loc: "/docs/components/combobox",
    },
    {
      loc: "/docs/components/command",
    },
    {
      loc: "/docs/components/context-menu",
    },
    {
      loc: "/docs/components/data-table",
    },
    {
      loc: "/docs/components/date-picker",
    },
    {
      loc: "/docs/components/dialog",
    },
    {
      loc: "/docs/components/drawer",
    },
    {
      loc: "/docs/components/dropdown-menu",
    },
    {
      loc: "/docs/components/form",
    },
    {
      loc: "/docs/components/hover-card",
    },
    {
      loc: "/docs/components/input-otp",
    },
    {
      loc: "/docs/components/input",
    },
    {
      loc: "/docs/components/label",
    },
    {
      loc: "/docs/components/menubar",
    },
    {
      loc: "/docs/components/navigation-menu",
    },
    {
      loc: "/docs/components/pagination",
    },
    {
      loc: "/docs/components/popover",
    },
    {
      loc: "/docs/components/progress",
    },
    {
      loc: "/docs/components/radio-group",
    },
    {
      loc: "/docs/components/resizable",
    },
    {
      loc: "/docs/components/scroll-area",
    },
    {
      loc: "/docs/components/select",
    },
    {
      loc: "/docs/components/separator",
    },
    {
      loc: "/docs/components/sheet",
    },
    {
      loc: "/docs/components/skeleton",
    },
    {
      loc: "/docs/components/slider",
    },
    {
      loc: "/docs/components/sonner",
    },
    {
      loc: "/docs/components/switch",
    },
    {
      loc: "/docs/components/table",
    },
    {
      loc: "/docs/components/tabs",
    },
    {
      loc: "/docs/components/textarea",
    },
    {
      loc: "/docs/components/toast",
    },
    {
      loc: "/docs/components/toggle-group",
    },
    {
      loc: "/docs/components/toggle",
    },
    {
      loc: "/docs/components/tooltip",
    },
    {
      loc: "/docs/components/typography",
    },
    {
      loc: "/blocks",
    },
    {
      loc: "/blocks/default/dashboard-05",
    },
    {
      loc: "/blocks/default/dashboard-06",
    },
    {
      loc: "/blocks/default/dashboard-07",
    },
    {
      loc: "/blocks/default/dashboard-04",
    },
    {
      loc: "/blocks/default/dashboard-03",
    },
    {
      loc: "/blocks/default/dashboard-02",
    },
    {
      loc: "/blocks/default/dashboard-01",
    },
    {
      loc: "/blocks/default/authentication-01",
    },
    {
      loc: "/blocks/default/authentication-02",
    },
    {
      loc: "/blocks/default/authentication-03",
    },
    {
      loc: "/blocks/default/authentication-04",
    },
    {
      loc: "/blocks/new-york/dashboard-05",
    },
    {
      loc: "/blocks/new-york/dashboard-06",
    },
    {
      loc: "/blocks/new-york/dashboard-07",
    },
    {
      loc: "/blocks/new-york/dashboard-04",
    },
    {
      loc: "/blocks/new-york/dashboard-03",
    },
    {
      loc: "/blocks/new-york/dashboard-02",
    },
    {
      loc: "/blocks/new-york/dashboard-01",
    },
    {
      loc: "/blocks/new-york/authentication-01",
    },
    {
      loc: "/blocks/new-york/authentication-02",
    },
    {
      loc: "/blocks/new-york/authentication-03",
    },
    {
      loc: "/blocks/new-york/authentication-04",
    },
  ],
}

const getPath = (path: string, locale: string = defaultLocale) =>
  `${siteHost}${locale === defaultLocale ? "" : "/" + locale}${path}`

export default function sitemap(...arg: any): SiteMap {
  const getLanguages = (path: string) =>
    locales
      .filter((e) => e !== defaultLocale)
      .reduce(
        (pre, locale) => ({ ...pre, [locale]: getPath(path, locale) }),
        {}
      )

  return [
    {
      url: getPath("/"),
      lastModified: new Date(),
      alternates: {
        languages: getLanguages("/"),
      },
    },
    {
      url: getPath("/examples"),
      lastModified: new Date(),
      alternates: {
        languages: getLanguages("/examples"),
      },
    },
    {
      url: getPath("/examples"),
      lastModified: new Date(),
      alternates: {
        languages: getLanguages("/examples"),
      },
    },
    ...sitemapJson.url.map((e) => ({
      url: getPath(e.loc),
      lastModified: new Date(),
      alternates: {
        languages: getLanguages(e.loc),
      },
    })),
  ]
}
