import { dashboardData } from '../features/client-dashboard/data.js'
import { staffDashboardData } from '../features/staff-dashboard/data.js'
import { adminPanelData } from '../features/admin-panel/data.js'

export const dashboardNavigationItems = dashboardData.navigation
export const staffDashboardNavigationItems = [
  staffDashboardData.navigation[0],
  {
    label: 'Businesses',
    path: '/staff-dashboard/assigned-businesses',
    icon: '🏢',
  },
  {
    label: 'Analytics',
    path: '/staff-dashboard/analytics',
    icon: '📊',
  },
  ...staffDashboardData.navigation.slice(1),
]
export const adminPanelNavigationItems = adminPanelData.navigation

