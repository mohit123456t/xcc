import '../../features/client-dashboard/styles/notifications.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../features/staff-dashboard/data'
import { StaffNotificationsToolbar } from '../../features/staff-dashboard/notifications/staff-notifications-toolbar'
import { NotificationGroupPanel } from '../../features/staff-dashboard/notifications/notification-group-panel'

export function StaffNotificationsPage() {
  const page = staffDashboardData.staffNotificationsPage

  return (
    <>
      <header className="page-header glass-panel">
        <StaffNotificationsToolbar header={page.header} />
      </header>

      <section className="dashboard-grid">
        {page.groups.map((group) => (
          <NotificationGroupPanel key={group.title} group={group} />
        ))}
      </section>
    </>
  )
}
