export function SocialConnectionsPanel({ connections }) {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Social Media Connections <span>🔗</span>
        </h2>
      </div>

      <div className="actions-grid actions-grid-single">
        {connections.map((connection) => (
          <button key={connection} type="button" className="quick-action-button">
            {connection}
          </button>
        ))}
      </div>
    </article>
  )
}
