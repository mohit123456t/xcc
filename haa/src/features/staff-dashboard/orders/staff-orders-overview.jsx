export function StaffOrdersOverview({ items }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="staff-performance-grid">
        {items.map((item) => (
          <div key={item.label} className="staff-performance-card">
            <div className="staff-performance-head">
              <span>
                {item.icon} {item.label}
              </span>
              <strong>{item.value}</strong>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
