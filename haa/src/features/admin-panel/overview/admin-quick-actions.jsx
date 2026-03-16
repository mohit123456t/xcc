export function AdminQuickActions({ items }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="card-header">
        <h2>
          Quick Actions <span>⚡</span>
        </h2>
      </div>

      <div className="actions-grid">
        {items.map((item) => (
          <button key={item} type="button" className="quick-action-button">
            {item}
          </button>
        ))}
      </div>
    </article>
  )
}
