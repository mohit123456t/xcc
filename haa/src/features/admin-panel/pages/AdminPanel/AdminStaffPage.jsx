import '../StaffDashboard/StaffDashboardPage.module.css'
import { adminPanelData } from '../../features/admin-panel/data'
import { StaffToolbar } from '../../features/admin-panel/staff/staff-toolbar'
import { StaffStatStrip } from '../../features/admin-panel/staff/staff-stat-strip'
import { StaffTable } from '../../features/admin-panel/staff/staff-table'

export function AdminStaffPage() {
  const page = adminPanelData.staffPage

  return (
    <>
      <header className="page-header glass-panel">
        <StaffToolbar header={page.header} />
      </header>

      <StaffStatStrip items={page.overview} />
      <StaffTable rows={page.staff} />
    </>
  )
}
