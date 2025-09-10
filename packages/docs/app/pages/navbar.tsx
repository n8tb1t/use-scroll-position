import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { LoremIpsum } from 'components'
import { Panel } from 'components'
import { NavLinks } from 'components/nav-links'
import { useMemo, useRef, useState } from 'react'

export const Navbar = () => {
  const rendersCount = useRef(0)

  const visibleRef = useRef(true)

  const [visible, setVisible] = useState(true)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y >= prevPos.y

      if (visibleRef.current !== isVisible) {
        visibleRef.current = isVisible

        setVisible(isVisible)
      }
    },
    [setVisible],
    null,
    false,
    300
  )

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
