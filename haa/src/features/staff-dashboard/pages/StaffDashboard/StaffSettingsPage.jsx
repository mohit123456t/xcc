import '../../features/client-dashboard/styles/settings.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../features/staff-dashboard/data'
import { StaffSettingsToolbar } from '../../features/staff-dashboard/settings/staff-settings-toolbar'
import { SettingsInfoPanel } from '../../features/staff-dashboard/settings/settings-info-panel'
import { ConnectionsPanel } from '../../features/staff-dashboard/settings/connections-panel'

export function StaffSettingsPage() {
  const page = staffDashboardData.settingsPage

  return (
    <>
      <header className="page-header glass-panel">
        <StaffSettingsToolbar header={page.header} />
      </header>

      <section className="settings-layout">
        <div className="settings-main-column">
          <SettingsInfoPanel title="Profile" icon="👤" items={page.profile} />
          <SettingsInfoPanel title="Security" icon="🔐" items={page.security} />
        </div>

        <div className="settings-side-column">
          <SettingsInfoPanel
            title="Notifications"
            icon="🔔"
            items={page.notifications}
          />
          <ConnectionsPanel items={page.connections} />
        </div>
      </section>
    </>
  )
}
