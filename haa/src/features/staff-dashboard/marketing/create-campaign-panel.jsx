export function CreateCampaignPanel({ config }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="card-header">
        <h2>
          Create Campaign <span>🛠️</span>
        </h2>
      </div>

      <div className="product-form-grid">
        {config.fields.map((field) => (
          <label key={field.label} className="product-form-field">
            <span>{field.label}</span>
            {field.type === 'select' ? (
              <select defaultValue={field.value}>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input type={field.type} defaultValue={field.value} />
            )}
          </label>
        ))}
      </div>
    </article>
  )
}
