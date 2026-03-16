export function CampaignControls({ controls }) {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Campaign Controls <span>⚙️</span>
        </h2>
      </div>

      <div className="actions-grid actions-grid-single">
        {controls.map((control) => (
          <button key={control} type="button" className="quick-action-button">
            {control}
          </button>
        ))}
      </div>
    </article>
  )
}
