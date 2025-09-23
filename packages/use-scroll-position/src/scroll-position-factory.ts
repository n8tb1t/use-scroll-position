import type { RefObject } from 'react'
import { useCallback, useRef } from 'react'

import { HAS_BROWSER } from '$constants'
import { useIsomorphicLayoutEffect } from '$hooks'
import type { ScrollPosition } from '$types'

export interface UseScrollPositionCallbackOptions {
  prevPos: ScrollPosition
  currPos: ScrollPosition
}

type Ref = HTMLElement | null

export const scrollPositionFactory =
  <
    UseRefs extends () => {
      rootRef: RefObject<Ref> | RefObject<Window | null>
      targetRef: RefObject<Ref>
      setRefs?:
        | ((targetNode: Ref) => void)
        | readonly [(rootNode: Ref) => void, (targetNode: Ref) => void]
    },
    Getter extends (
      rootRef: ReturnType<UseRefs>['rootRef'],
      targetRef: ReturnType<UseRefs>['targetRef']
    ) => {
      position: { x: number; y: number }
      properties: object
    },
    Return = ReturnType<UseRefs>['setRefs']
  >(
    getter: Getter,
    useRoot: UseRefs
  ) =>
  (
    effect: (
      props: UseScrollPositionCallbackOptions & ReturnType<Getter>['properties']
    ) => void,
    options: {
      wait?: number
    } = {}
  ) => {
    const { rootRef, targetRef, setRefs } = useRoot()

    const { wait } = options

    const abortController = useRef<AbortController>(null)

    const pervPosition = useRef({ x: 0, y: 0 })

    const throttleTimeout = useRef<ReturnType<typeof setTimeout>>(undefined)

    const callbackRef = useRef(effect)

    callbackRef.current = effect

    const update = useCallback(() => {
      const { position, properties } = getter(rootRef, targetRef)

      callbackRef.current({
        prevPos: pervPosition.current,
        currPos: position,
        ...properties
      })

      pervPosition.current = position

      throttleTimeout.current = undefined
    }, [rootRef, targetRef])

    const onScroll = useCallback(() => {
      if (wait) {
        if (throttleTimeout.current === undefined) {
          throttleTimeout.current = setTimeout(update, wait)
        }
      } else {
        update()
      }
    }, [update, wait])

    const subscribe = useCallback(() => {
      abortController.current = new AbortController()

      rootRef.current?.addEventListener('scroll', onScroll, {
        passive: true,
        signal: abortController.current.signal
      })
    }, [onScroll, rootRef])

    const unsubscribe = useCallback(() => {
      abortController.current?.abort()

      clearTimeout(throttleTimeout.current)
    }, [])

    useIsomorphicLayoutEffect(() => {
      if (!HAS_BROWSER) {
        return undefined
      }

      subscribe()
      update()

      return unsubscribe
    }, [subscribe, unsubscribe])

    return setRefs as Return
  }
