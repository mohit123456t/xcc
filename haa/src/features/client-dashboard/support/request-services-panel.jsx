export function RequestServicesPanel({ services }) {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Request Services <span>🛎️</span>
        </h2>
      </div>

      <div className="actions-grid actions-grid-single">
        {services.map((service) => (
          <button key={service} type="button" className="quick-action-button">
            {service}
          </button>
        ))}
      </div>
    </article>
  )
}
