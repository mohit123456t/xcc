import '../features/client-dashboard/styles/base.css'
import { Outlet, useLocation } from 'react-router-dom'
import { TopNavigation } from './TopNavigation'
import { getDashboardPageTitle } from '../routes'

export function DashboardLayout({
  items,
  areaLabel = 'Client Area',
  basePath = '/dashboard',
  pages,
  navigationLabel = 'Client dashboard navigation',
  brandBadge = 'C',
}) {
  const location = useLocation()
  const pageTitle = getDashboardPageTitle(location.pathname, basePath, pages)

  return (
    <main className="client-dashboard">
      <div className="dashboard-shell">
        <TopNavigation
          items={items}
          navigationLabel={navigationLabel}
          brandBadge={brandBadge}
        />

        <div className="dashboard-content">
          <header className="dashboard-mobile-header glass-panel">
            <div>
              <p className="dashboard-mobile-label">{areaLabel}</p>
              <h1>{pageTitle}</h1>
            </div>
          </header>

          <Outlet />
        </div>
      </div>
    </main>
  )
}
