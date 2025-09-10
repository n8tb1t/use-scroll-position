import { HAS_BROWSER } from '$constants'
import type { Ref } from '$types'

const zeroPosition = { x: 0, y: 0 }

const getRect = (element?: Element | null) => element?.getBoundingClientRect()

export const getScrollPosition = <
  Target extends Element,
  Root extends Element
>({
  useWindow,
  target,
  root
}: {
  root?: Ref<Root>
  target?: Ref<Target>
  useWindow?: boolean
}) => {
  if (!HAS_BROWSER) {
    return zeroPosition
  }

  if (useWindow) {
    return { x: window.scrollX, y: window.scrollY }
  }

  const rootPosition = getRect(root?.current)
  const targetPosition = getRect(target?.current || document.body)

  if (!targetPosition) {
    return zeroPosition
  }

  return rootPosition
    ? {
        x: (rootPosition.x || 0) - (targetPosition.x || 0),
        y: (rootPosition.y || 0) - (targetPosition.y || 0)
      }
    : { x: targetPosition.left, y: targetPosition.top }
}
