export function ActiveCampaignsCard({ section }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          {section.title} <span>{section.emoji}</span>
        </h2>
      </div>

      <div className="staff-summary-chip">
        <span>Currently running campaigns</span>
        <strong>{section.total}</strong>
      </div>

      <div className="stats-list">
        {section.campaigns.map((campaign) => (
          <div key={campaign.name} className="stat-row stat-row-stack">
            <strong>{campaign.name}</strong>
            <span>{campaign.business}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
