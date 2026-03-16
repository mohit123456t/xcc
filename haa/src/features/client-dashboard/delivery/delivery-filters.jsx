export function DeliveryFilters({ filters }) {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Delivery Filters <span>🔍</span>
        </h2>
      </div>

      <div className="stats-list">
        {filters.map((filter) => (
          <div key={filter.label} className="stat-row">
            <span>{filter.label}</span>
            <strong>{filter.value}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}
