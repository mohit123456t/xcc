export function RunningAdsCard({ section }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          {section.title} <span>{section.emoji}</span>
        </h2>
      </div>

      <div className="staff-summary-chip">
        <span>Ad campaigns running now</span>
        <strong>{section.total}</strong>
      </div>

      <div className="staff-tag-list">
        {section.platforms.map((platform) => (
          <span key={platform} className="staff-tag">
            {platform}
          </span>
        ))}
      </div>

      <div className="stats-list">
        {section.ads.map((ad) => (
          <div key={ad} className="stat-row">
            <span>{ad}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
