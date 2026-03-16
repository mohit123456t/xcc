import '../StaffDashboard/StaffDashboardPage.module.css'
import { adminPanelData } from '../../features/admin-panel/data'
import { UsersToolbar } from '../../features/admin-panel/users/users-toolbar'
import { UsersStatStrip } from '../../features/admin-panel/users/users-stat-strip'
import { UsersTable } from '../../features/admin-panel/users/users-table'

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
