export function DeliveryOverview({ overview }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="card-header">
        <h2>
          Delivery Overview <span>🚚</span>
        </h2>
      </div>

      <div className="marketing-overview-grid">
        {overview.map((item) => (
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
