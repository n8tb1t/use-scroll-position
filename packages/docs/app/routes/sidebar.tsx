import type { Route } from '@router/routes/+types/sidebar'

import { Sidebar } from '$pages'

const sidebar = () => <Sidebar />

export const meta: Route.MetaFunction = () => [
  { title: 'Sidebar' },
  { name: 'description', content: 'Simple Sidebar Example' }
]

export default sidebar
