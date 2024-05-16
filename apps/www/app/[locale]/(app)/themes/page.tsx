import { Metadata } from "next"

import "public/registry/themes.css"
import { Announcement } from "@/components/announcement"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { ThemeCustomizer } from "@/components/theme-customizer"
import { ThemeWrapper } from "@/components/theme-wrapper"
import { ThemesTabs } from "@/app/[locale]/(app)/themes/tabs"
import { useTranslations } from "next-intl"

export const metadata: Metadata = {
  title: "Themes",
  description: "Hand-picked themes that you can copy and paste into your apps.",
}

export default function ThemesPage() {
  const t = useTranslations()

  return (
    <div className="container">
      <ThemeWrapper
        defaultTheme="zinc"
        className="relative flex flex-col items-start md:flex-row md:items-center"
      >
        <PageHeader>
          <Announcement />
          <PageHeaderHeading className="hidden md:block">
            {t('Themes.title')}
          </PageHeaderHeading>
          <PageHeaderHeading className="md:hidden">
            Make it yours
          </PageHeaderHeading>
          <PageHeaderDescription>
            {t('Themes.desc')}
          </PageHeaderDescription>
          <PageActions>
            <ThemeCustomizer />
          </PageActions>
        </PageHeader>
      </ThemeWrapper>
      <ThemesTabs />
    </div>
  )
}
