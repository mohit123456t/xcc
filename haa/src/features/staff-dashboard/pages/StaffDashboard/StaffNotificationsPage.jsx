import '../../../client-dashboard/styles/notifications.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../data'
import { StaffNotificationsToolbar } from '../../notifications/staff-notifications-toolbar'
import { NotificationGroupPanel } from '../../notifications/notification-group-panel'

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
