export const siteHost = "https://www.shadcn.net"
export const siteConfig = {
  name: "shadcn/ui",
  url: "https://www.shadcn.net",
  ogImage: "https://www.shadcn.net/og.jpg",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  links: {
    twitter: "https://twitter.com/shellming_dev",
    github: "https://github.com/shadcn-ui/ui",
  },
  keywords: ["shadcn ui"],
}
export const cnSiteConfig = {
  name: "shadcn/ui 中文站",
  url: "https://www.shadcn.net/cn",
  ogImage: "https://www.shadcn.net/og.jpg",
  description:
    "设计精美的组件，您可以复制并粘贴到您的应用程序中。可访问、可定制、开源。",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn-ui/ui",
  },
  keywords: ["shadcn ui 中文"],
}

export const jaSiteConfig = {
  name: "shadcn/ui 日本語サイト",
  url: "https://www.shadcn.net/ja",
  ogImage: "https://www.shadcn.net/og.jpg",
  description:
    "美しいコンポーネントを設計して、あなたのアプリケーションにコピーして貼り付けることができます。 アクセス可能でカスタマイズ可能でオープンソースです",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn-ui/ui",
  },
  keywords: ["shadcn ui 日本語"],
}

export const siteConfigs: { [key: string]: typeof siteConfig } = {
  en: siteConfig,
  zh: cnSiteConfig,
  ja: jaSiteConfig,
}

export type SiteConfig = typeof siteConfig
