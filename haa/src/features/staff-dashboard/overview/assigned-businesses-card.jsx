export function AssignedBusinessesCard({ section }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          {section.title} <span>{section.emoji}</span>
        </h2>
      </div>

      <div className="staff-summary-chip">
        <span>Total businesses assigned</span>
        <strong>{section.total}</strong>
      </div>

      <div className="stats-list">
        {section.businesses.map((business) => (
          <div key={business} className="stat-row">
            <span>{business}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
