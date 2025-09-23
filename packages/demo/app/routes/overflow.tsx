import type { Route } from '@router/routes/+types/position'

import { Overflow } from '$pages'

const overflow = () => <Overflow />

export const meta: Route.MetaFunction = () => [
  { title: 'Overflow' },
  { name: 'description', content: 'Overflow' }
]

export default overflow
