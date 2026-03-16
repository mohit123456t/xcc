export function ProfileSettingsPanel({ profile }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="card-header">
        <h2>
          Profile Settings <span>👤</span>
        </h2>
      </div>

      <div className="product-form-grid">
        {profile.fields.map((field) => (
          <label key={field.label} className="product-form-field">
            <span>{field.label}</span>
            <input type="text" value={field.value} readOnly />
          </label>
        ))}
      </div>

      <div className="settings-action-row">
        <button type="button" className="primary-action-button">
          Update Profile
        </button>
      </div>
    </article>
  )
}
