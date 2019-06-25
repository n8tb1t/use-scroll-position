import { useRef, useLayoutEffect } from 'react'

const isBrowser = typeof window !== `undefined`

function getScrollPosition() {
  const position = isBrowser ? document.body.getBoundingClientRect() : null
  return isBrowser ? { x: position.left, y: position.top } : { x: 0, y: 0 }
}

export function useScrollPosition(effect, deps) {
  const position = useRef(getScrollPosition())

  useLayoutEffect(() => {
    let requestRunning = null

    function handleScroll() {
      if (isBrowser && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          const currPos = getScrollPosition()

          effect({ prevPos: position.current, currPos })

          position.current = currPos

          requestRunning = null
        })
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}

useScrollPosition.defaultProps = {
  deps: [],
}
