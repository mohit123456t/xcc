export function InfluencerMarketing({ influencers }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          Influencer Marketing <span>🤝</span>
        </h2>
      </div>

      <div className="stats-list">
        {influencers.map((item) => (
          <div key={item.name} className="stat-row stat-row-stack">
            <span>{item.name} • {item.platform}</span>
            <strong>{item.status}</strong>
            <span>{item.results}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
