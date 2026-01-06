import { toHTML, type PortableTextOptions } from '@portabletext/to-html'
import type { PortableTextBlock } from '@portabletext/types'
import { urlForImage } from './sanity.image'

const components: PortableTextOptions['components'] = {
  types: {
    image: ({ value }) => {
      const src = urlForImage(value)?.width(1200).height(0).fit('max').url()
      const alt = value?.alt ?? ''
      return src
        ? `<figure class="pt-image"><img src="${src}" alt="${alt}" loading="lazy" decoding="async"/></figure>`
        : ''
    },
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href || '#'
      const rel = href.startsWith('/') ? '' : ' rel="noopener noreferrer"'
      const target = href.startsWith('/') ? '' : ' target="_blank"'
      return `<a href="${href}"${rel}${target}>${children}</a>`
    },
  },
}

export function portableBlocksToHtml(blocks: PortableTextBlock[] = []): string {
  return toHTML(blocks, { components })
}
