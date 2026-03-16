export function ChangePlanPanel({ plans }) {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Upgrade / Change Plan <span>⬆️</span>
        </h2>
      </div>

      <div className="actions-grid actions-grid-single">
        {plans.map((plan) => (
          <button key={plan} type="button" className="quick-action-button">
            {plan}
          </button>
        ))}
        <button type="button" className="primary-action-button">
          Upgrade Plan
        </button>
      </div>
    </article>
  )
}
