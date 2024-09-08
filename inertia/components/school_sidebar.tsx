import { Link } from '@inertiajs/react'
import {
  LayoutDashboardIcon,
  PlayIcon,
  SchoolIcon,
  SettingsIcon,
  UsersIcon,
} from 'lucide-react'
import { useState } from 'react'

const navItems = [
  {
    routeName: 'myschool',
    label: 'Dashboard',
    icon: <LayoutDashboardIcon />,
  },
  {
    routeName: 'students',
    label: 'Students',
    icon: <UsersIcon />,
  },
  {
    routeName: 'users',
    label: 'Users',
    icon: <UsersIcon />,
  },
  {
    routeName: 'roles',
    label: 'Roles',
    icon: <PlayIcon />,
  },
  {
    routeName: 'classes',
    label: 'Classes',
    icon: <SchoolIcon />,
  },
  {
    routeName: 'settings',
    label: 'Settings',
    icon: <SettingsIcon />,
  },
]

export function SchoolSidebar() {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)

  //   const playlists = usePage().props.playlists

  return (
    <div className="py-12">
      <div className="py-4 space-y-4">
        <div className="px-3 py-2">
          {/* <h2 className="px-4 mb-2 text-lg font-semibold tracking-tight">Discover</h2> */}
          <div className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.routeName}
                href={item.routeName}
                className="flex items-center gap-4 px-3 py-2 transition-colors rounded-lg hover:bg-muted text-foreground"
              >
                {item.icon}
                <span className={isSidebarExpanded ? 'block' : 'sr-only'}>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
