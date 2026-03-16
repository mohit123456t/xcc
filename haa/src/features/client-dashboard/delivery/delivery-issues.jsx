export function DeliveryIssues({ issues }) {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Delivery Issues <span>⚠️</span>
        </h2>
      </div>

      <div className="stats-list">
        {issues.map((issue) => (
          <div key={issue.label} className="stat-row stat-row-stack">
            <span>{issue.label}</span>
            <strong>{issue.value}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}
