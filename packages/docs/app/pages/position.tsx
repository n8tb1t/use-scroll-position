import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { LoremIpsum } from 'components'
import { Panel } from 'components'
import { NavLinks } from 'components/nav-links'
import { type RefObject, useCallback, useMemo, useRef, useState } from 'react'

interface ElementPosition {
  x: number
  y: number
}

const useElementPosition = () => {
  const [renderCount, triggerReRender] = useState(0)

  const throttleTimeout: RefObject<null | ReturnType<typeof setTimeout>> =
    useRef(null)

  const elementPosition = useRef<ElementPosition>({ x: 0, y: 0 })

  const viewportPosition = useRef<ElementPosition>({ x: 0, y: 0 })

  const setElementPosition = useCallback(
    (element: RefObject<ElementPosition>) => (position: ElementPosition) => {
      element.current = position

      if (throttleTimeout.current !== null) return

      // Only re-render the component every 0.3s
      throttleTimeout.current = setTimeout(() => {
        throttleTimeout.current = null
        triggerReRender((renderCount) => renderCount + 1)
      }, 300)
    },
    []
  )

  return useMemo(
    () => ({
      elementPosition: elementPosition.current,
      viewportPosition: viewportPosition.current,
      setElementPosition: setElementPosition(elementPosition),
      setViewportPosition: setElementPosition(viewportPosition),
      renderCount
    }),
    [renderCount, setElementPosition]
  )
}

export const Position = () => {
  const positionsStore = useElementPosition()

  const viewportRef = useRef<HTMLDivElement>(null)
  const redBoxRef = useRef<HTMLDivElement>(null)

  useScrollPosition(
    ({ currPos }) => {
      positionsStore.setViewportPosition(currPos)

      const viewPort = viewportRef.current

      if (viewPort) {
        viewPort.style.top = `${150 + currPos.y}px`
      }
    },
    [],
    null,
    true
  )

  // Element scroll position
  useScrollPosition(
    ({ currPos }) => positionsStore.setElementPosition(currPos),
    [],
    redBoxRef,
    false,
    0
  )

  return useMemo(
    () => (
      <div>
        <div
          ref={redBoxRef}
          className="absolute top-[400px] left-12 rounded-sm bg-red-400 p-4 text-red-950 ring-3 ring-red-600"
        >
          Red Box
        </div>
        <div
          ref={viewportRef}
          className="absolute top-[150px] left-12 grid gap-2 rounded-sm bg-gray-400 p-3 text-lg text-sm text-gray-950 ring-3 ring-gray-600"
        >
          <div className="grid">
            <span className="font-medium tracking-tight text-blue-950">
              Deferred Renders:
            </span>
            <span>{positionsStore.renderCount}</span>
          </div>
          <div>
            <span className="font-medium tracking-tight text-blue-950">
              Viewport Scroll:
            </span>
            <div className="flex gap-4">
              <span>x: {positionsStore.viewportPosition.x}</span>
              <span>y: {positionsStore.viewportPosition.y}</span>
            </div>
          </div>
          <div>
            <span className="font-medium tracking-tight text-blue-950">
              Red Box Scroll:
            </span>
            <div className="flex gap-4">
              <span> x: {positionsStore.elementPosition.x}</span>
              <span>y: {positionsStore.elementPosition.y}</span>
            </div>
          </div>
        </div>
        <Panel placement="top">
          <NavLinks variant="orange" />
        </Panel>
        <LoremIpsum />
      </div>
    ),
    [positionsStore]
  )
}
