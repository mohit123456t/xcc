export function StaffNotificationsToolbar({ header }) {
  return (
    <div className="page-toolbar">
      <div>
        <p className="page-eyebrow">Staff Notifications</p>
        <h2>{header.title}</h2>
        <p className="page-copy">{header.description}</p>
      </div>

      <button type="button" className="primary-action-button">
        + Mark Reviewed
      </button>
    </div>
  )
}
