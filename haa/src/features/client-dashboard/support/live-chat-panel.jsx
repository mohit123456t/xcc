export function LiveChatPanel({ options }) {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Live Chat <span>💬</span>
        </h2>
      </div>

      <div className="actions-grid actions-grid-single">
        {options.map((option) => (
          <button key={option} type="button" className="quick-action-button">
            {option}
          </button>
        ))}
      </div>
    </article>
  )
}
