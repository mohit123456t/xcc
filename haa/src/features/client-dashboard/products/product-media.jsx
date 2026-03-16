export function ProductMedia({ media }) {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Product Media <span>🖼️</span>
        </h2>
      </div>

      <div className="stats-list">
        {media.map((item) => (
          <div key={item.label} className="stat-row stat-row-stack">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}
