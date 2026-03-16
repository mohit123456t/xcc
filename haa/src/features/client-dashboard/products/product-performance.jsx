export function ProductPerformance({ performance }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          Product Performance <span>📊</span>
        </h2>
      </div>

      <div className="stats-list">
        {performance.map((item) => (
          <div key={item.label} className="stat-row stat-row-stack">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}
