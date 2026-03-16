import '../../features/client-dashboard/styles/settings.module.css'
import { dashboardData } from '../../features/client-dashboard/data'
import { SettingsToolbar } from '../../features/client-dashboard/settings/settings-toolbar'
import { ProfileSettingsPanel } from '../../features/client-dashboard/settings/profile-settings-panel'
import { BusinessInfoPanel } from '../../features/client-dashboard/settings/business-info-panel'
import { SecurityPanel } from '../../features/client-dashboard/settings/security-panel'
import { NotificationSettingsPanel } from '../../features/client-dashboard/settings/notification-settings-panel'
import { PaymentBankPanel } from '../../features/client-dashboard/settings/payment-bank-panel'
import { SocialConnectionsPanel } from '../../features/client-dashboard/settings/social-connections-panel'
import { LogoutPanel } from '../../features/client-dashboard/settings/logout-panel'

export function SettingsPage() {
  const { settings } = dashboardData

  return (
    <>
      <header className="page-header glass-panel">
        <SettingsToolbar header={settings.header} />
      </header>

      <section className="settings-layout">
        <div className="settings-main-column">
          <ProfileSettingsPanel profile={settings.profile} />
          <BusinessInfoPanel business={settings.business} />
          <PaymentBankPanel payout={settings.payout} />
        </div>

        <div className="settings-side-column">
          <SecurityPanel actions={settings.security} />
          <NotificationSettingsPanel items={settings.notifications} />
          <SocialConnectionsPanel connections={settings.socialConnections} />
          <LogoutPanel />
        </div>
      </section>
    </>
  )
}
