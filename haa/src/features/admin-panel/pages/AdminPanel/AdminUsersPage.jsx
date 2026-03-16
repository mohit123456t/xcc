import '../../../staff-dashboard/pages/StaffDashboard/StaffDashboardPage.module.css'
import { adminPanelData } from '../../data'
import { UsersToolbar } from '../../users/users-toolbar'
import { UsersStatStrip } from '../../users/users-stat-strip'
import { UsersTable } from '../../users/users-table'

export function AdminUsersPage() {
  const page = adminPanelData.usersPage

  return (
    <>
      <header className="page-header glass-panel">
        <UsersToolbar header={page.header} />
      </header>

      <UsersStatStrip items={page.overview} />
      <UsersTable rows={page.users} />
    </>
  )
}
