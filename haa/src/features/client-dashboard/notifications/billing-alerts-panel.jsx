import { NotificationFeedPanel } from './notification-feed-panel'

export function BillingAlertsPanel({ items }) {
  return (
    <NotificationFeedPanel
      title="Payment / Billing Alerts"
      icon="💳"
      items={items}
      accent="billing"
    />
  )
}
