export function StaffSettingsToolbar({ header }) {
  return (
    <div className="page-toolbar">
      <div>
        <p className="page-eyebrow">Staff Settings</p>
        <h2>{header.title}</h2>
        <p className="page-copy">{header.description}</p>
      </div>

      <button type="button" className="primary-action-button">
        + Update Preferences
      </button>
    </div>
  )
}
