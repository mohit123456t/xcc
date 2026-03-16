export function OrderFilters({ filters }) {
  return (
    <article className="dashboard-card glass-panel product-filter-card">
      <div className="card-header">
        <h2>
          Order Filters <span>🔍</span>
        </h2>
      </div>

      <div className="filter-row filter-row-wide">
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
