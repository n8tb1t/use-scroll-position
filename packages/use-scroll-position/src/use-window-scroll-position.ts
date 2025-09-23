import { type RefObject, useCallback, useRef } from 'react'
import {
  scrollPositionFactory,
  type UseScrollPositionCallbackOptions
} from 'scroll-position-factory'

import { HAS_BROWSER } from '$constants'
import type { Combine } from '$types'

const get = (
  root: RefObject<Window | null>,
  target: RefObject<HTMLElement | null>
) => {
  if (!HAS_BROWSER || !root.current) {
    return {
      position: { x: 0, y: 0 },
      properties: { top: false, bottom: false }
    }
  }

  const viewH = root.current.innerHeight

  if (target.current) {
    const { x, y, height } = target.current.getBoundingClientRect()

    return {
      position: { x, y },
      properties: {
        top: y <= 0,
        bottom: y + height >= viewH
      }
    }
  }

  const top = root.current.scrollY <= 0

  const bottom =
    document.documentElement.scrollHeight - viewH - root.current.scrollY <= 0

  return {
    position: { x: root.current.scrollX, y: root.current.scrollY },
    properties: {
      top,
      bottom
    }
  }
}

export const useRefs = () => {
  const rootRef = useRef<Window>(HAS_BROWSER ? window : null)
  const targetRef = useRef<HTMLElement | null>(null)

  const setTargetRef = useCallback((targetNode: HTMLElement | null) => {
    targetRef.current = targetNode
  }, [])

  return { rootRef, targetRef, setRefs: setTargetRef }
}

export type UseWindowScrollPositionCallbackOptions =
  UseScrollPositionCallbackOptions &
    Combine<ReturnType<typeof get>['properties']>

/**
 * Tracks the window’s scroll position or, when given a ref, the scroll position of a specific child element.
 *
 * You can use this hook to:
 * - Track global window scroll position.
 * - Track the scroll position of a specific element by passing the returned callback as a ref.
 * - Detect when the scroll reaches the top or bottom of the viewport.
 *
 * @param callback {(options: UseWindowScrollPositionCallbackOptions) => void} updates delay.
 * @param options.await {number} updates delay.
 *
 * @example
 * ```ts
 * import { useWindowScrollPosition } from '@n8tb1t/use-scroll-position'
 *
 * useWindowScrollPosition(
 *   ({ prevPos, currPos, top, bottom }) => {
 *     console.log(prevPos, currPos, top, bottom)
 *   },
 *   { await: 100 }
 * )
 * ```
 * @returns setTarget - allows to track a specific element position within document
 */
export const useWindowScrollPosition = scrollPositionFactory(get, useRefs)
