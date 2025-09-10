import type { PropsWithChildren } from 'react'

import { cn } from './utils'

const base = cn([
  'gap justify-left fixed inset-x-0 flex transition-all duration-200'
])

const placementMap = {
  left: cn(
    'justify-left w-fit border-r-4 border-indigo-800 bg-blue-300 pt-12 [writing-mode:vertical-lr]'
  ),
  right: cn(
    'justify-left right-0 w-10 bg-blue-300 pt-4 [writing-mode:vertical-lr]'
  ),
  top: cn('justify-left h-fit border-b-4 border-amber-800 bg-orange-300 pl-12'),
  bottom: cn(
    'bottom-0 h-fit justify-center border-t-4 border-amber-800 bg-orange-300'
  )
}

const slideDirectionMap = {
  left: '-translate-x-full',
  right: 'translate-x-full',
  top: '-translate-y-full',
  bottom: 'translate-y-full'
}

export const Panel = ({
  visible = true,
  placement,
  className,
  children
}: PropsWithChildren<{
  className?: string
  visible?: boolean
  placement: 'left' | 'right' | 'top' | 'bottom'
}>) => (
  <nav
    className={cn(className, base, placementMap[placement], {
      'visible transform-none ease-in': visible,
      [`invisible ease-out ${slideDirectionMap[placement]}`]: !visible
    })}
  >
    {children}
  </nav>
)
