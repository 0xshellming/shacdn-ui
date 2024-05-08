"use client"

import * as React from "react"
import { getLocaleName, locales } from "@/i18n"
import { usePathname, useRouter } from "@/navigation"
import { GlobeIcon } from "@radix-ui/react-icons"
import { useLocale, useTranslations } from "next-intl"
import { useTheme } from "next-themes"

import { Button } from "@/registry/new-york/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/registry/new-york/ui/dropdown-menu"

export function LocaleToggle() {
  const t = useTranslations()
  const locale = useLocale()
  const path = usePathname()
  const router = useRouter()

  const changeLocales = (locale: string) => {
    router.push(path, { locale })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-9 px-0">
          <GlobeIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Toggle Language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((lang) => (
          <DropdownMenuCheckboxItem
            key={lang}
            checked={lang === locale}
            onClick={() => changeLocales(lang)}
          >
            {getLocaleName(lang)}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
