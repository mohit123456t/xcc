import { NotificationFeedPanel } from './notification-feed-panel'

export function DeliveryUpdatesPanel({ items }) {
  return (
    <NotificationFeedPanel
      title="Delivery Updates"
      icon="🚚"
      items={items}
      accent="delivery"
    />
  )
}
