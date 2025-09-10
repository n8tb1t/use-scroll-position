import { links } from '@config/links'
import {
  ErrorBoundary,
  HydrateFallback,
  Layout
} from '@config/utility-components'
import { Outlet } from 'react-router'

import './root.css'

export { HydrateFallback, Layout, ErrorBoundary, links }

export default Outlet
