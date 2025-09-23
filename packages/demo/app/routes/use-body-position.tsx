import type { Route } from '@router/routes/+types/use-body-position'

import { UseBodyPosition } from '$pages'

const useBodyPosition = () => <UseBodyPosition />

export const meta: Route.MetaFunction = () => [
  { title: 'Position' },
  { name: 'description', content: 'Track Element scroll position' }
]

export default useBodyPosition
