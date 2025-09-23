import { useBodyScrollPosition } from '@n8tb1t/use-scroll-position'
import { useMemo, useRef, useState } from 'react'

import { LoremIpsum, NavLinks, Panel } from '$components'

export const Navbar = () => {
  const rendersCount = useRef(0)

  const [visible, setVisible] = useState(true)

  useBodyScrollPosition(({ prevPos, currPos, top, bottom }) => {
    setVisible(top || (!bottom && currPos.y >= prevPos.y))
  })

  return useMemo(
    () => (
      <div>
        <Panel visible={visible} placement="top">
          <NavLinks variant="orange" />
        </Panel>
        <LoremIpsum />
        <Panel className="items-center" placement="bottom">
          <div className="flex gap-1 bg-orange-400 p-2 text-sm text-white">
            Renders count:
            <span className="text-gray-800">{++rendersCount.current}</span>
          </div>
        </Panel>
      </div>
    ),
    [visible]
  )
}
