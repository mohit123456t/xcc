import { NotificationFeedPanel } from './notification-feed-panel'

export function NewOrderNotificationsPanel({ items }) {
  return (
    <NotificationFeedPanel
      title="New Order Notifications"
      icon="📦"
      items={items}
      accent="orders"
      wide
    />
  )
}
