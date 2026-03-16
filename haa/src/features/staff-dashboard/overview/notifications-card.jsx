export function NotificationsCard({ section }) {
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
            <strong>{item.label}</strong>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
