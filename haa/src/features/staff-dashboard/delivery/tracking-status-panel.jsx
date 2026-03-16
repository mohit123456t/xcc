export function TrackingStatusPanel({ items }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          Tracking Status <span>📍</span>
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
