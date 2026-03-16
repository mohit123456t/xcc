import '../StaffDashboard/StaffDashboardPage.module.css'
import { adminPanelData } from '../../features/admin-panel/data'
import { BusinessesToolbar } from '../../features/admin-panel/businesses/businesses-toolbar'
import { BusinessesStatStrip } from '../../features/admin-panel/businesses/businesses-stat-strip'
import { BusinessesTable } from '../../features/admin-panel/businesses/businesses-table'

export function AdminBusinessesPage() {
  const page = adminPanelData.businessesPage

  return (
    <>
      <header className="page-header glass-panel">
        <BusinessesToolbar header={page.header} />
      </header>

      <BusinessesStatStrip items={page.overview} />
      <BusinessesTable rows={page.businesses} />
    </>
  )
}
