export function CourierPartnerInfo({ partners }) {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Courier Partner Info <span>📦</span>
        </h2>
      </div>

      <div className="stats-list">
        {partners.map((partner) => (
          <div key={partner} className="stat-row">
            <span>{partner}</span>
            <strong>Active</strong>
          </div>
        ))}
      </div>
    </article>
  )
}
