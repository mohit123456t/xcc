export function AnalyticsOverviewPanel({ items }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="marketing-overview-grid">
        {items.map((item) => (
          <div key={item.label} className="overview-pill">
            <div className="overview-pill-icon" aria-hidden="true">
              {item.icon}
            </div>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}
