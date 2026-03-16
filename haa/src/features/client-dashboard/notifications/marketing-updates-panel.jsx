import { NotificationFeedPanel } from './notification-feed-panel'

export function MarketingUpdatesPanel({ items }) {
  return (
    <NotificationFeedPanel
      title="Marketing Updates"
      icon="📢"
      items={items}
      accent="marketing"
      wide
    />
  )
}
