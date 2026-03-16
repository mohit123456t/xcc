export function TrackingSystem({ steps, trackingInfo }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="card-header">
        <h2>
          Tracking System <span>🧭</span>
        </h2>
      </div>

      <div className="tracking-flow">
        {steps.map((step, index) => (
          <div key={step} className="tracking-step">
            <strong>{step}</strong>
            {index < steps.length - 1 ? <span className="tracking-arrow">↓</span> : null}
          </div>
        ))}
      </div>

      <div className="stats-list">
        {trackingInfo.map((item) => (
          <div key={item.label} className="stat-row stat-row-stack">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}
