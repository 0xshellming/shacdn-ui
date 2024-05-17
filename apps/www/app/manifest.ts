import { MetadataRoute } from "next"
import { defaultLocale } from "@/i18n"
// import { getTranslations } from "next-intl/server"

import { siteConfigs } from "@/config/site"

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = defaultLocale

  // const t = await getTranslations({
  //   namespace: "Manifest",
  //   locale,
  // })
  const config = siteConfigs[locale]
  return {
    name: config.name,
    description: config.description,
    start_url: "/",
  }
}
