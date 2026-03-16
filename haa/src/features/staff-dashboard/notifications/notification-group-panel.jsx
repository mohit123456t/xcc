export function NotificationGroupPanel({ group }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          {group.title} <span>{group.icon}</span>
        </h2>
      </div>

      <div className="stats-list">
        {group.items.map((item) => (
          <div key={item} className="stat-row stat-row-stack">
            <strong>{group.title}</strong>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
