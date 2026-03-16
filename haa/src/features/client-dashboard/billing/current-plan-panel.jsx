export function CurrentPlanPanel({ items }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="card-header">
        <h2>
          Current Plan <span>💳</span>
        </h2>
      </div>

      <div className="stats-list">
        {items.map((item) => (
          <div key={item.label} className="stat-row">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}
