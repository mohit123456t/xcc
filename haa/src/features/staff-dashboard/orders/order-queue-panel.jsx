export function OrderQueuePanel({ items }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          Order Task Queue <span>📌</span>
        </h2>
      </div>

      <div className="stats-list">
        {items.map((item) => (
          <div key={item} className="stat-row">
            <span>{item}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
