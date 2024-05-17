import { unstable_setRequestLocale } from "next-intl/server"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({
  children,
  params: { locale },
}: AppLayoutProps & { params: { locale: string } }) {
  unstable_setRequestLocale(locale)
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  )
}
