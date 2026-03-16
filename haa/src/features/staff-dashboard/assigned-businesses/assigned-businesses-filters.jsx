export function AssignedBusinessesFilters({ options, value, onChange }) {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Filter Options <span>🧭</span>
        </h2>
      </div>

      <div className="stats-list">
        <label className="filter-field">
          <span>Plan Type</span>
          <select
            value={value.planType}
            onChange={(event) => onChange('planType', event.target.value)}
          >
            {options.planType.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="filter-field">
          <span>Category</span>
          <select
            value={value.category}
            onChange={(event) => onChange('category', event.target.value)}
          >
            {options.category.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="filter-field">
          <span>Active / Inactive</span>
          <select
            value={value.status}
            onChange={(event) => onChange('status', event.target.value)}
          >
            {options.status.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
    </article>
  )
}
