import { Metadata } from "next"
import { useTranslations } from "next-intl"
import { unstable_setRequestLocale } from "next-intl/server"

import { Announcement } from "@/components/announcement"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { Button } from "@/registry/new-york/ui/button"

export const metadata: Metadata = {
  title: "Building Blocks.",
  description:
    "Beautifully designed. Copy and paste into your apps. Open Source.",
}

export default function BlocksLayout({
  children,
  params: { locale },
}: {
  params: { locale: string }
  children: React.ReactNode
}) {
  const $t = useTranslations()

  unstable_setRequestLocale(locale)

  return (
    <div className="container relative">
      <PageHeader className="max-w-3xl">
        <Announcement />
        <PageHeaderHeading className="text-balance">
          {$t("Blocks.building-blocks-for-the-web")}
        </PageHeaderHeading>
        <PageHeaderDescription>{$t("Blocks.desc")}</PageHeaderDescription>
        <PageActions>
          <Button asChild>
            <a href="#blocks">Browse</a>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://github.com/shadcn-ui/ui/discussions/new?category=blocks-request"
              target="_blank"
            >
              Request a block
            </a>
          </Button>
        </PageActions>
      </PageHeader>
      <section id="blocks" className="grid scroll-mt-24 gap-24 lg:gap-48">
        {children}
      </section>
    </div>
  )
}
