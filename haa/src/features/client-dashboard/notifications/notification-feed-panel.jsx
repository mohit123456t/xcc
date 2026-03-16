export function NotificationFeedPanel({
  title,
  icon,
  items,
  accent,
  wide = false,
}) {
  return (
    <article
      className={`dashboard-card glass-panel${wide ? ' dashboard-card-wide' : ' product-side-card'}`}
    >
      <div className="card-header">
        <h2>
          {title} <span>{icon}</span>
        </h2>
      </div>

      <div className="notification-feed">
        {items.map((item) => (
          <div
            key={item.id}
            className={`notification-item${item.isUnread ? ' is-unread' : ''}`}
          >
            <div className="notification-item-top">
              <span className={`notification-badge notification-badge-${accent}`}>
                {item.isUnread ? 'Unread' : 'Read'}
              </span>
              <span className="notification-time">{item.time}</span>
            </div>
            <p>{item.message}</p>
          </div>
        ))}
      </div>
    </article>
  )
}
