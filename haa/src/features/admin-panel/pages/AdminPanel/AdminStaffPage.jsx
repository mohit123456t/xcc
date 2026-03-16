import '../../../staff-dashboard/pages/StaffDashboard/StaffDashboardPage.module.css'
import { adminPanelData } from '../../data'
import { StaffToolbar } from '../../staff/staff-toolbar'
import { StaffStatStrip } from '../../staff/staff-stat-strip'
import { StaffTable } from '../../staff/staff-table'

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
