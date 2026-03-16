export function LogoutPanel() {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Logout Option <span>🚪</span>
        </h2>
      </div>

      <button type="button" className="primary-action-button settings-logout-button">
        Logout
      </button>
    </article>
  )
}
