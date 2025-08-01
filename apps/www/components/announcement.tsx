import { Link } from "@/navigation"
import { Separator } from "@/registry/default/ui/separator"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Zap } from "lucide-react"

import { useTranslations } from "next-intl"

export function Announcement() {
  const t = useTranslations("announcement")
  return (
    <Link
      href="https://mksaas.com?atp=shellming"
      className="mb-2 inline-flex animate-pulse items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
    >
      <Zap className="h-4 w-4" />{" "}
      <Separator className="mx-2 h-4" orientation="vertical" />{" "}
      <span>{t("title")}</span>
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  )
}
