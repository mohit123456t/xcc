export function UploadContentPanel({ uploads }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          Upload Content <span>📤</span>
        </h2>
      </div>

      <div className="stats-list">
        <div className="stat-row stat-row-stack">
          <strong>Images</strong>
          <span>{uploads.images.join(', ')}</span>
        </div>
        <div className="stat-row stat-row-stack">
          <strong>Reels</strong>
          <span>{uploads.reels.join(', ')}</span>
        </div>
        <div className="stat-row stat-row-stack">
          <strong>Captions</strong>
          <span>{uploads.captions.join(' / ')}</span>
        </div>
      </div>
    </article>
  )
}
