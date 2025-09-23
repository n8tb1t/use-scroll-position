import type { Route } from '@router/routes/+types/use-window-position'

import { UseWindowPosition } from '$pages'

const useWindowPosition = () => <UseWindowPosition />

export const meta: Route.MetaFunction = () => [
  { title: 'Position' },
  { name: 'description', content: 'Track Element scroll position' }
]

export default useWindowPosition
