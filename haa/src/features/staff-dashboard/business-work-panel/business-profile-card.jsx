export function BusinessProfileCard({ business }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          Business Profile <span>🏢</span>
        </h2>
      </div>

      <div className="stats-list">
        <div className="stat-row">
          <span>Business Name</span>
          <strong>{business.name}</strong>
        </div>
        <div className="stat-row">
          <span>Owner Name</span>
          <strong>{business.owner}</strong>
        </div>
        <div className="stat-row">
          <span>Category</span>
          <strong>{business.category}</strong>
        </div>
        <div className="stat-row">
          <span>Plan</span>
          <strong>{business.plan}</strong>
        </div>
      </div>
    </article>
  )
}
