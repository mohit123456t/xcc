export function BusinessSummaryList({ businesses }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="card-header">
        <h2>
          Business Summary <span>📊</span>
        </h2>
      </div>

      <div className="staff-business-summary-grid">
        {businesses.map((business) => (
          <div key={business.name} className="staff-performance-card">
            <div className="staff-performance-head">
              <span>{business.name}</span>
              <strong>{business.status}</strong>
            </div>

            <div className="stats-list">
              <div className="stat-row">
                <span>Total Products</span>
                <strong>{business.summary.products}</strong>
              </div>
              <div className="stat-row">
                <span>Running Campaigns</span>
                <strong>{business.summary.campaigns}</strong>
              </div>
              <div className="stat-row">
                <span>Ads Status</span>
                <strong>{business.summary.adsStatus}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
