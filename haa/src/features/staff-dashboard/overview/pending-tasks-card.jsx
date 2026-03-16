export function PendingTasksCard({ section }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          {section.title} <span>{section.emoji}</span>
        </h2>
      </div>

      <div className="stats-list">
        {section.items.map((task) => (
          <div key={task} className="stat-row">
            <span>{task}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
