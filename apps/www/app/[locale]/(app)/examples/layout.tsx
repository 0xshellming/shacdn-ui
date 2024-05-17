import { Metadata } from "next"
import { Link } from "@/navigation"
import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import { cn } from "@/lib/utils"
import { Announcement } from "@/components/announcement"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { buttonVariants } from "@/registry/new-york/ui/button"

export const metadata: Metadata = {
  title: "Examples",
  description: "Check out some examples app built using the components.",
}

interface ExamplesLayoutProps {
  children: React.ReactNode
}

export default function ExamplesLayout({
  children,
  params: { locale },
}: ExamplesLayoutProps & { params: { locale: string } }) {
  unstable_setRequestLocale(locale)

  const $t = useTranslations("Global")
  const t = useTranslations("Examples.Layout")
  return (
    <div className="container relative">
      <PageHeader>
        <Announcement />
        <PageHeaderHeading className="hidden md:block">
          {t("check-out-some-examples")}
        </PageHeaderHeading>
        <PageHeaderHeading className="md:hidden">
          {t("examples")}
        </PageHeaderHeading>
        <PageHeaderDescription>{t("description")}</PageHeaderDescription>
        <PageActions>
          <Link href="/docs" className={cn(buttonVariants(), "rounded-[6px]")}>
            {$t("get-started")}
          </Link>
          <Link
            href="/components"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "rounded-[6px]"
            )}
          >
            {$t("components")}
          </Link>
        </PageActions>
      </PageHeader>
      <section>
        <ExamplesNav />
        <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
          {children}
        </div>
      </section>
    </div>
  )
}
