export function InventoryPanel({ inventory }) {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Inventory Management <span>📦</span>
        </h2>
      </div>

      <div className="stats-list">
        {inventory.map((item) => (
          <div key={item.label} className="stat-row">
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}
