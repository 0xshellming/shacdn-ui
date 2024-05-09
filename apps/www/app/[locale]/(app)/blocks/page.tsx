import { locales } from "@/i18n"

import { getAllBlockIds } from "@/lib/blocks"
import { BlockDisplay } from "@/components/block-display"

export async function generateStaticParams() {
  const BlocksPage = locales
    .map((locale) => ({
      locale,
    }))
  console.log("DocPage", BlocksPage)
  return BlocksPage
}

export default async function BlocksPage({
  params: { locale },
}: {
  params: { locale: string }
}) {
  const blocks = await getAllBlockIds()

  return blocks.map((name, index) => (
    <BlockDisplay key={`${name}-${index}`} name={name} />
  ))
}
