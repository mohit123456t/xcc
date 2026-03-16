export function AdminOverviewHeader({ pills }) {
  return (
    <header className="admin-panel-topbar glass-panel">
      <div className="dashboard-overview-pills">
        {pills.map((pill) => (
          <div key={pill.label} className="overview-pill">
            <div className="overview-pill-icon" aria-hidden="true">
              {pill.icon}
            </div>
            <span>{pill.label}</span>
            <strong>{pill.value}</strong>
          </div>
        ))}
      </div>
    </header>
  )
}
