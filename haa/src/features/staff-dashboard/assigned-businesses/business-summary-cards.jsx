export function BusinessSummaryCards({ businesses }) {
  const totalBusinesses = businesses.length
  const activeBusinesses = businesses.filter(
    (business) => business.status === 'Active',
  ).length
  const totalCampaigns = businesses.reduce(
    (sum, business) => sum + Number.parseInt(business.summary.campaigns, 10),
    0,
  )

  const cards = [
    { label: 'Assigned Businesses', value: String(totalBusinesses), icon: '🏬' },
    { label: 'Active Businesses', value: String(activeBusinesses), icon: '✅' },
    { label: 'Running Campaigns', value: String(totalCampaigns), icon: '📢' },
  ]

  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="staff-performance-grid">
        {cards.map((card) => (
          <div key={card.label} className="staff-performance-card">
            <div className="staff-performance-head">
              <span>
                {card.icon} {card.label}
              </span>
              <strong>{card.value}</strong>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
