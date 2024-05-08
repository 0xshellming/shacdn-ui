export const siteConfig = {
  name: "shadcn/ui",
  url: "https://ui.shadcn.com",
  ogImage: "https://ui.shadcn.com/og.jpg",
  description:
    "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn-ui/ui",
  },
}
export const cnSiteConfig = {
  name: "shadcn/ui 中文站",
  url: "https://www.shadcn.net",
  ogImage: "https://www.shadcn.net/og.jpg",
  description:
    "设计精美的组件，您可以复制并粘贴到您的应用程序中。可访问、可定制、开源。",
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn-ui/ui",
  },
}

export const siteConfigs: { [key: string]: typeof siteConfig } = {
  en: siteConfig,
  cn: cnSiteConfig,
}

export type SiteConfig = typeof siteConfig
