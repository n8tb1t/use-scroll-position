import { defineConfig } from 'vocs'

import { version } from '../use-scroll-position/package.json'

export default defineConfig({
  title: 'useScrollPosition',
  description: 'Lightweight hooks for scroll position detection',
  aiCta: false,
  rootDir: '.',
  basePath: '/use-scroll-position',
  topNav: [
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/n8tb1t/use-scroll-position/blob/develop/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/n8tb1t/use-scroll-position/blob/develop/CONTRIBUTING.md'
        }
      ]
    }
  ],
  socials: [
    {
      icon: 'github',
      link: 'https://github.com/n8tb1t/use-scroll-position'
    }
  ],
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started'
    },
    {
      text: 'useWindowScrollPosition',
      link: '/use-window-scroll-position'
    },
    {
      text: 'useBodyScrollPosition',
      link: '/use-body-scroll-position'
    },
    {
      text: 'useOverflowScrollPosition',
      link: '/use-overflow-scroll-position'
    }
  ]
})
