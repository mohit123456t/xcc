export function CampaignControlsPanel({ controls }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          Campaign Controls <span>🎛️</span>
        </h2>
      </div>

      <div className="stats-list">
        {controls.map((control) => (
          <div key={control.label} className="stat-row stat-row-stack">
            <strong>{control.label}</strong>
            <span>{control.value}</span>
          </div>
        ))}
      </div>
    </article>
  )
}
