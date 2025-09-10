import type { Config } from '@react-router/dev/config'

export default {
  buildDirectory: '.build',
  ssr: false,
  prerender: async () => ['/', 'sidebar', 'position']
} satisfies Config
