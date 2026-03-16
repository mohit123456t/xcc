export function ProductFilters({ filters }) {
  return (
    <article className="dashboard-card glass-panel product-filter-card">
      <div className="card-header">
        <h2>
          Search / Filter <span>🔍</span>
        </h2>
      </div>

      <div className="filter-row">
        {filters.map((filter) => (
          <label key={filter.label} className="filter-field">
            <span>{filter.label}</span>
            <input type="text" value={filter.value} readOnly />
          </label>
        ))}
      </div>
    </article>
  )
}
