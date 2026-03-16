import { dashboardData } from '../data'

export function AdsPerformanceSection() {
  const section = dashboardData.adsPerformance

  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          {section.title} <span>{section.emoji}</span>
        </h2>
      </div>

      <div className="stats-list">
        {section.items.map((item) => (
          <div key={item.label} className="stat-row">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}

AdsPerformanceSection.displayName = 'AdsPerformanceSection'
