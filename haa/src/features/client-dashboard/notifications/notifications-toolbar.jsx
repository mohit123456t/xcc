export function NotificationsToolbar({ header, unreadCount, onMarkAllRead }) {
  return (
    <div className="page-toolbar">
      <div>
        <p className="page-eyebrow">Notifications</p>
        <h2>{header.title}</h2>
        <p className="page-copy">{header.description}</p>
      </div>

      <div className="notifications-toolbar-actions">
        <div className="notifications-unread-pill">
          <span>Unread</span>
          <strong>{unreadCount}</strong>
        </div>
        <button type="button" className="secondary-action-button" onClick={onMarkAllRead}>
          Mark all as read
        </button>
      </div>
    </div>
  )
}
