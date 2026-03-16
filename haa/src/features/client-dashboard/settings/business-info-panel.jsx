export function BusinessInfoPanel({ business }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="card-header">
        <h2>
          Business Information <span>🏢</span>
        </h2>
      </div>

      <div className="product-form-grid">
        {business.fields.map((field) => (
          <label key={field.label} className="product-form-field">
            <span>{field.label}</span>
            <input type="text" value={field.value} readOnly />
          </label>
        ))}
      </div>
    </article>
  )
}
