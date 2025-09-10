import { useEffect, useLayoutEffect } from 'react'

import { HAS_BROWSER } from '$constants'

export const useIsomorphicLayoutEffect = HAS_BROWSER
  ? useLayoutEffect
  : useEffect
