export function ConnectionsPanel({ items }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          Connected Channels <span>🔗</span>
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
