/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

const isBrowser = typeof window !== `undefined`

function getScrollPosition({ element, useWindow, boundingElement }) {
  if (!isBrowser) return { x: 0, y: 0 }
  if (useWindow) {
    return { x: window.scrollX, y: window.scrollY }
  }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()
  const containerPosition = boundingElement.current.getBoundingClientRect()

  return {
    x: (containerPosition?.x || 0) - (position?.x || 0),
    y: (containerPosition?.y || 0) - (position?.y || 0),
  }
}

export function useScrollPosition(
  effect,
  deps,
  element,
  useWindow,
  wait,
  boundingElement
) {
  const position = useRef(getScrollPosition({ useWindow, boundingElement }))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow, boundingElement })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return
    }

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    if (useWindow) {
      window.addEventListener('scroll', handleScroll)
    } else {
      boundingElement.current.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (useWindow) {
        window.removeEventListener('scroll', handleScroll)
      } else {
        boundingElement.current.removeEventListener('scroll', handleScroll)
      }

      throttleTimeout && clearTimeout(throttleTimeout)
    }
  }, deps)
}

useScrollPosition.defaultProps = {
  deps: [],
  element: false,
  useWindow: false,
  wait: null,
  boundingElement
}
