import '../../../staff-dashboard/pages/StaffDashboard/StaffDashboardPage.module.css'
import { adminPanelData } from '../../data'
import { BusinessesToolbar } from '../../businesses/businesses-toolbar'
import { BusinessesStatStrip } from '../../businesses/businesses-stat-strip'
import { BusinessesTable } from '../../businesses/businesses-table'

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
