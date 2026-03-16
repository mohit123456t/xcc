import React, { createElement } from 'react'
import { Navigate } from 'react-router-dom'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { 
  dashboardPages, 
  staffDashboardPages, 
  adminPanelPages 
} from './pages.js'
import { 
  dashboardNavigationItems,
  staffDashboardNavigationItems,
  adminPanelNavigationItems 
} from './navigation.js'

export const appRoutes = [
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/dashboard',
    element: (
      <DashboardLayout
        items={dashboardNavigationItems}
        areaLabel="Client Area"
        basePath="/dashboard"
        pages={dashboardPages}
        navigationLabel="Client dashboard navigation"
        brandBadge="C"
      />
    ),
    children: dashboardPages.map((page) => ({
      index: page.path === '',
      path: page.path || undefined,
      element: page.component ? createElement(page.component) : null,
    })),
  },
  {
    path: '/staff-dashboard',
    element: (
      <DashboardLayout
        items={staffDashboardNavigationItems}
        areaLabel="Staff Area"
        basePath="/staff-dashboard"
        pages={staffDashboardPages}
        navigationLabel="Staff dashboard navigation"
        brandBadge="S"
      />
    ),
    children: staffDashboardPages.map((page) => ({
      index: page.path === '',
      path: page.path || undefined,
      element: page.component ? createElement(page.component) : null,
    })),
  },
  {
    path: '/admin-panel',
    element: (
      <DashboardLayout
        items={adminPanelNavigationItems}
        areaLabel="Admin Area"
        basePath="/admin-panel"
        pages={adminPanelPages}
        navigationLabel="Admin panel navigation"
        brandBadge="A"
      />
    ),
    children: adminPanelPages.map((page) => ({
      index: page.path === '',
      path: page.path || undefined,
      element: page.component ? createElement(page.component) : null,
    })),
  },
  {
    path: '*',
    element: <Navigate to="/dashboard" replace />,
  },
]

