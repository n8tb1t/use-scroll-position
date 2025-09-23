import {
  useOverflowScrollPosition,
  type UseOverflowScrollPositionCallbackOptions
} from '@n8tb1t/use-scroll-position'
import { useMemo, useState } from 'react'

import { cn, LoremIpsum } from '$components'

export const UseOverflowPosition = () => {
  const [redBoxPosition, setRedBoxPosition] =
    useState<UseOverflowScrollPositionCallbackOptions>()

  const [setRootRef, setRedBoxRef] =
    useOverflowScrollPosition(setRedBoxPosition)

  return useMemo(
    () => (
      <div ref={setRootRef} className="h-dvh overflow-auto">
        <LoremIpsum length={1} />
        <div
          ref={setRedBoxRef}
          className={cn(
            'top-[250px] isolate ml-12 flex w-fit gap-2 rounded-sm bg-orange-400 p-4 text-orange-950 ring-3 ring-orange-600 ring-inset',
            {
              'bg-green-400 text-green-950 ring-green-600': redBoxPosition?.top,
              'bg-red-400 text-red-950 ring-red-600': redBoxPosition?.bottom
            }
          )}
        >
          <span>X:{redBoxPosition?.currPos?.x}</span>
          <span>Y:{redBoxPosition?.currPos?.y}</span>
        </div>
        <LoremIpsum length={2} />
      </div>
    ),
    [redBoxPosition, setRedBoxRef, setRootRef]
  )
}
