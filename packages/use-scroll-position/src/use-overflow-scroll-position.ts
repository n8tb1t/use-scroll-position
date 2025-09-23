import { type RefObject, useCallback, useRef } from 'react'
import {
  scrollPositionFactory,
  type UseScrollPositionCallbackOptions
} from 'scroll-position-factory'

import { HAS_BROWSER } from '$constants'
import type { Combine } from '$types'

const get = (
  root: RefObject<HTMLElement | null>,
  target: RefObject<HTMLElement | null>
) => {
  if (!HAS_BROWSER || !root.current) {
    return {
      position: { x: 0, y: 0 },
      properties: { top: false, bottom: false }
    }
  }

  const { scrollTop, scrollLeft, offsetHeight, scrollHeight } = root.current

  const rootRect = root.current.getBoundingClientRect()

  if (target.current) {
    const { x, y, height, top } = target.current.getBoundingClientRect()

    return {
      position: { x, y },
      properties: {
        top: rootRect.top >= top,
        bottom: y + height >= rootRect.bottom
      }
    }
  }

  const top = scrollTop <= 0
  const bottom = scrollHeight - offsetHeight - scrollTop <= 0

  return {
    position: { x: scrollLeft, y: scrollTop },
    properties: {
      top,
      bottom
    }
  }
}

const useRefs = () => {
  const rootRef = useRef<HTMLElement | null>(null)
  const targetRef = useRef<HTMLElement | null>(null)

  const setRootRef = useCallback((node: HTMLElement | null) => {
    rootRef.current = node
  }, [])

  const setTargetRef = useCallback((node: HTMLElement | null) => {
    targetRef.current = node
  }, [])

  return { rootRef, targetRef, setRefs: [setRootRef, setTargetRef] as const }
}

export type UseOverflowScrollPositionCallbackOptions =
  UseScrollPositionCallbackOptions &
    Combine<ReturnType<typeof get>['properties']>

/**
 * Tracks the container’s with overflow scroll position or, when given a ref, the scroll position of a specific child element.
 *
 * You can use this hook to:
 * - Track container scroll position.
 * - Track the scroll position of a specific element by passing the returned callback as a ref.
 * - Detect when the scroll reaches the top or bottom of the viewport.
 *
 * @param callback {(options: UseOverflowScrollPositionCallbackOptions) => void} updates delay.
 * @param options.await {number} updates delay.
 *
 * @example
 * ```ts
 * import { useOverflowScrollPosition } from '@n8tb1t/use-scroll-position'
 *
 *
 * const [setRootRef, setTargetRef] = useOverflowScrollPosition(
 *   ({ prevPos, currPos, top, bottom }) => {
 *     console.log(prevPos, currPos, top, bottom)
 *   },
 *   { await: 100 }
 * )
 * ```
 * @returns [setRootRef - should be passed to element with overflow, setTargetRef - allows to track a specific element position within document]
 */
export const useOverflowScrollPosition = scrollPositionFactory(get, useRefs)
