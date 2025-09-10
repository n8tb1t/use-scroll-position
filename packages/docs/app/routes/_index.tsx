import type { Route } from '@router/routes/+types/_index'

import { Navbar } from '$pages'

const navbar = () => <Navbar />

export const meta: Route.MetaFunction = () => [
  { title: 'Navbar' },
  { name: 'description', content: 'Simple Navbar Example' }
]

export default navbar
