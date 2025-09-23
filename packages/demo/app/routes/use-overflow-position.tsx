import type { Route } from '@router/routes/+types/use-overflow-position'

import { UseOverflowPosition } from '$pages'

const useOverflowPosition = () => <UseOverflowPosition />

export const meta: Route.MetaFunction = () => [
  { title: 'Position' },
  { name: 'description', content: 'Track Element scroll position' }
]

export default useOverflowPosition
