export function DeliveryTracking({ tracking }) {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Delivery Tracking <span>🚚</span>
        </h2>
      </div>

      <div className="stats-list">
        {tracking.map((item) => (
          <div key={item.label} className="stat-row stat-row-stack">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}
