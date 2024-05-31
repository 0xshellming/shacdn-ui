import { notFound } from "next/navigation"
import { getRequestConfig } from "next-intl/server"

export const locales = ["en", "zh"] as const

export const localeNames: { [key: string]: string } = {
  en: "English",
  zh: "简体中文",
  // ja: "日本語",
  // id: "Bahasa Indonesia",
}

export const defaultLocale = "zh"

export const getLocaleName = (locale: string) => localeNames[locale] || locale

const i18n: any = getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
  }
})
export default i18n
