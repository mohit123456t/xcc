import { useState } from 'react'
import '../../features/client-dashboard/styles/notifications.module.css'
import { dashboardData } from '../../features/client-dashboard/data'
import { NotificationsToolbar } from '../../features/client-dashboard/notifications/notifications-toolbar'
import { NewOrderNotificationsPanel } from '../../features/client-dashboard/notifications/new-order-notifications-panel'
import { MarketingUpdatesPanel } from '../../features/client-dashboard/notifications/marketing-updates-panel'
import { AdsUpdatesPanel } from '../../features/client-dashboard/notifications/ads-updates-panel'
import { BillingAlertsPanel } from '../../features/client-dashboard/notifications/billing-alerts-panel'
import { DeliveryUpdatesPanel } from '../../features/client-dashboard/notifications/delivery-updates-panel'
import { SupportNotificationsPanel } from '../../features/client-dashboard/notifications/support-notifications-panel'

export function NotificationsPage() {
  const { notificationsPage } = dashboardData
  const [notifications, setNotifications] = useState(notificationsPage)

  const allGroups = [
    notifications.newOrders,
    notifications.marketing,
    notifications.ads,
    notifications.billing,
    notifications.delivery,
    notifications.support,
  ]

  const unreadCount = allGroups.flat().filter((item) => item.isUnread).length

  const handleMarkAllRead = () => {
    setNotifications((current) => ({
      ...current,
      newOrders: current.newOrders.map((item) => ({ ...item, isUnread: false })),
      marketing: current.marketing.map((item) => ({ ...item, isUnread: false })),
      ads: current.ads.map((item) => ({ ...item, isUnread: false })),
      billing: current.billing.map((item) => ({ ...item, isUnread: false })),
      delivery: current.delivery.map((item) => ({ ...item, isUnread: false })),
      support: current.support.map((item) => ({ ...item, isUnread: false })),
    }))
  }

  return (
    <>
      <header className="page-header glass-panel">
        <NotificationsToolbar
          header={notifications.header}
          unreadCount={unreadCount}
          onMarkAllRead={handleMarkAllRead}
        />
      </header>

      <section className="notifications-layout">
        <div className="notifications-main-column">
          <NewOrderNotificationsPanel items={notifications.newOrders} />
          <MarketingUpdatesPanel items={notifications.marketing} />
          <AdsUpdatesPanel items={notifications.ads} />
        </div>

        <div className="notifications-side-column">
          <BillingAlertsPanel items={notifications.billing} />
          <DeliveryUpdatesPanel items={notifications.delivery} />
          <SupportNotificationsPanel items={notifications.support} />
        </div>
      </section>
    </>
  )
}
