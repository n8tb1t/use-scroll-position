import { NavLink } from 'react-router'

import { cn } from './utils'

export const NavLinks = ({ variant }: { variant: 'orange' | 'blue' }) => (
  <div className="flex h-full">
    {[
      { caption: 'navbar', route: '/navbar' },
      { caption: 'sidebar', route: '/sidebar' },
      { caption: 'position', route: '/position' }
    ].map(({ caption, route }) => (
      <NavLink
        key={caption}
        className={({ isActive }) =>
          cn(
            "relative flex items-center self-center px-2 py-1 text-lg font-semibold tracking-wide capitalize before:absolute before:inset-0 before:mix-blend-multiply before:content-[''] hover:before:bg-gray-300",
            {
              'text-orange-950': variant === 'orange',
              'text-blue-950': variant === 'blue',
              'pointer-events-none before:bg-gray-300': isActive
            }
          )
        }
        to={route}
      >
        <span className="z-1">{caption}</span>
      </NavLink>
    ))}
  </div>
)
