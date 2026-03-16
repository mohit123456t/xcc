export function QuickActionsCard({ section }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="card-header">
        <h2>
          {section.title} <span>{section.emoji}</span>
        </h2>
      </div>

      <div className="actions-grid">
        {section.actions.map((action) => (
          <button key={action} type="button" className="quick-action-button">
            {action}
          </button>
        ))}
      </div>
    </article>
  )
}
