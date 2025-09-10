import type { DependencyList } from 'react'
import { useCallback, useRef } from 'react'

import { HAS_BROWSER } from '$constants'
import { useIsomorphicLayoutEffect } from '$hooks'
import type { Ref, ScrollPosition } from '$types'
import { getScrollPosition } from './get-scroll-position'

export const useScrollPositionLegacy = <
  Target extends Element,
  Root extends Element
>(
  effect: (props: { prevPos: ScrollPosition; currPos: ScrollPosition }) => void,
  deps?: DependencyList,
  target?: Ref<Target>,
  useWindow?: boolean,
  wait?: number,
  root?: Ref<Root>
): void => {
  const position = useRef({ x: 0, y: 0 })

  const throttleTimeout = useRef<ReturnType<typeof setTimeout>>(undefined)

  const callbackRef = useRef(effect)

  callbackRef.current = effect

  const setPosition = useCallback(() => {
    const currPos = getScrollPosition({ useWindow, root, target })

    callbackRef.current({ prevPos: position.current, currPos })

    position.current = currPos
  }, [useWindow, root, target])

  const callback = useCallback(() => {
    setPosition()

    throttleTimeout.current = undefined
  }, [setPosition])

  const scrollHandler = useCallback(() => {
    if (wait) {
      if (throttleTimeout.current === undefined) {
        throttleTimeout.current = setTimeout(callback, wait)
      }
    } else {
      callback()
    }
  }, [callback, wait])

  useIsomorphicLayoutEffect(() => {
    setPosition()
  }, [setPosition])

  useIsomorphicLayoutEffect(() => {
    if (!HAS_BROWSER) {
      return undefined
    }

    if (root?.current) {
      root.current.addEventListener('scroll', scrollHandler, {
        passive: true
      })
    } else {
      window.addEventListener('scroll', scrollHandler, { passive: true })
    }

    return () => {
      if (root) {
        root.current?.removeEventListener('scroll', scrollHandler)
      } else {
        window.removeEventListener('scroll', scrollHandler)
      }

      if (throttleTimeout.current) {
        clearTimeout(throttleTimeout.current)
      }
    }
  }, deps)
}
