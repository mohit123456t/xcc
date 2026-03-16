export function AdminOverviewSummary({ items }) {
  return (
    <section className="dashboard-grid" aria-label="Admin Overview">
      {items.map((item) => (
        <article key={item.label} className="dashboard-card glass-panel">
          <div className="card-header">
            <h2>
              {item.label} <span>{item.icon}</span>
            </h2>
          </div>
          <div className="staff-summary-chip">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        </article>
      ))}
    </section>
  )
}
