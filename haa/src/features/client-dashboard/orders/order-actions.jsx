export function OrderActions({ actions }) {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Refund / Cancel <span>📄</span>
        </h2>
      </div>

      <div className="actions-grid actions-grid-single">
        {actions.map((action) => (
          <button key={action} type="button" className="quick-action-button">
            {action}
          </button>
        ))}
      </div>
    </article>
  )
}
