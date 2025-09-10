import type { Config } from '@react-router/dev/config'

export default {
  basename: '/use-scroll-position/',
  buildDirectory: '.build',
  ssr: false,
  prerender: async () => ['/navbar', '/sidebar', '/position']
} satisfies Config
