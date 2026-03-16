export function SocialGrowthPanel({ items }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          Social Growth <span>📈</span>
        </h2>
      </div>

      <div className="stats-list">
        {items.map((item) => (
          <div key={item.label} className="staff-performance-card">
            <div className="staff-performance-head">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
            <div
              className="staff-performance-bar"
              role="img"
              aria-label={`${item.label} ${item.value}`}
            >
              <span style={{ width: `${item.fill}%` }} />
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
