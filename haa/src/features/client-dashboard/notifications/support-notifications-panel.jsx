import { NotificationFeedPanel } from './notification-feed-panel'

export function SupportNotificationsPanel({ items }) {
  return (
    <NotificationFeedPanel
      title="Support Notifications"
      icon="🤝"
      items={items}
      accent="support"
    />
  )
}
