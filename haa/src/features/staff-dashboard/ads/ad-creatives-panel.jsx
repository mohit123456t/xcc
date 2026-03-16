export function AdCreativesPanel({ creatives }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          Ad Creatives <span>🎨</span>
        </h2>
      </div>

      <div className="stats-list">
        <div className="stat-row stat-row-stack">
          <strong>Ad Images</strong>
          <span>{creatives.images.join(', ')}</span>
        </div>
        <div className="stat-row stat-row-stack">
          <strong>Ad Videos</strong>
          <span>{creatives.videos.join(', ')}</span>
        </div>
        <div className="stat-row stat-row-stack">
          <strong>Ad Text</strong>
          <span>{creatives.text.join(' / ')}</span>
        </div>
      </div>
    </article>
  )
}
