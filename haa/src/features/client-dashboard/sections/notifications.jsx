import { dashboardData } from '../data'

export function NotificationsSection() {
  const section = dashboardData.notifications

  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          {section.title} <span>{section.emoji}</span>
        </h2>
      </div>

      <div className="stats-list">
        {section.items.map((item) => (
          <div key={item.label} className="stat-row stat-row-stack">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}

NotificationsSection.displayName = 'NotificationsSection'
