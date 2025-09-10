import type { Route } from '@router/routes/+types/position'

import { Position } from '$pages'

const position = () => <Position />

export const meta: Route.MetaFunction = () => [
  { title: 'Position' },
  { name: 'description', content: 'Track scroll position' }
]

export default position
