import { createContentlayerPlugin } from "next-contentlayer"
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
export const locales = ["en", "zh", 'ja']

const localeRedirects = (redirects) => {
  // 默认路由不需要加 locale
  return locales.reduce((cur, locale) => {
    const isDefault = locale === 'zh'
    return [...cur, ...redirects.map(redirect => ({
      ...redirect,
      source: isDefault ? redirect.source : `/${locale}${redirect.source}`,
      destination: isDefault ? redirect.destination : `/${locale}${redirect.destination}`,
    }))]
  }, [])
}


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  redirects() {
    const r = localeRedirects([
      {
        source: "/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
      {
        source: "/docs/components",
        destination: "/docs/components/accordion",
        permanent: true,
      },
      {
        source: "/examples",
        destination: "/examples/mail",
        permanent: false,
      },
      {
        source: "/docs/primitives/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
      {
        source: "/figma",
        destination: "/docs/figma",
        permanent: true,
      },
      {
        source: "/docs/forms",
        destination: "/docs/components/form",
        permanent: false,
      },
      {
        source: "/docs/forms/react-hook-form",
        destination: "/docs/components/form",
        permanent: false,
      },
    ])
    return r
  },
}

const withContentlayer = createContentlayerPlugin({
  // Additional Contentlayer config options
})

export default withNextIntl(withContentlayer(nextConfig))
