import { NotificationFeedPanel } from './notification-feed-panel'

export function AdsUpdatesPanel({ items }) {
  return (
    <NotificationFeedPanel
      title="Ads Updates"
      icon="📊"
      items={items}
      accent="ads"
      wide
    />
  )
}
