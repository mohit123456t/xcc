export function OwnerQueriesPanel({ queries }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          Business Owner Queries <span>🏬</span>
        </h2>
      </div>

      <div className="stats-list">
        {queries.map((query) => (
          <div key={query.business} className="stat-row stat-row-stack">
            <strong>
              {query.business} • {query.owner}
            </strong>
            <span>{query.query}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
