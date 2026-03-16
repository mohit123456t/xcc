export function BusinessSummaryStrip({ business }) {
  const cards = [
    { label: 'Total Products', value: business.summary.products, icon: '📦' },
    {
      label: 'Running Campaigns',
      value: business.summary.campaigns,
      icon: '📢',
    },
    { label: 'Ads Status', value: business.summary.adsStatus, icon: '🚀' },
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
