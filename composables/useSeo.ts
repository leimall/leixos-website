export interface SeoMeta {
  title: string
  description: string
  image?: string
  type?: string
  canonical?: string
}

const DEFAULT_IMAGE = 'https://leixos.com/og-image.png'
const SITE_URL = 'https://leixos.com'

export const useSeo = () => {
  const route = useRoute()

  const setPageMeta = (seo: SeoMeta) => {
    const { title, description, image = DEFAULT_IMAGE, type = 'website', canonical } = seo

    const canonicalUrl = canonical || `${SITE_URL}${route.path}`

    useHead({
      title,
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: image },
        { property: 'og:type', content: type },
        { property: 'og:url', content: canonicalUrl },
        { property: 'og:site_name', content: 'LeiMall' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: image },
        { rel: 'canonical', href: canonicalUrl },
      ],
    })
  }

  return {
    setPageMeta,
  }
}
