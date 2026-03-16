import '../../styles/settings.module.css'
import { dashboardData } from '../../data'
import { SettingsToolbar } from '../../settings/settings-toolbar'
import { ProfileSettingsPanel } from '../../settings/profile-settings-panel'
import { BusinessInfoPanel } from '../../settings/business-info-panel'
import { SecurityPanel } from '../../settings/security-panel'
import { NotificationSettingsPanel } from '../../settings/notification-settings-panel'
import { PaymentBankPanel } from '../../settings/payment-bank-panel'
import { SocialConnectionsPanel } from '../../settings/social-connections-panel'
import { LogoutPanel } from '../../settings/logout-panel'

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
