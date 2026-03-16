import { staffDashboardData } from '../../data'

export function StaffDashboardPage() {
  const statsItems = staffDashboardData.overview.performanceSummary.metrics.map(m => ({
    label: m.label,
    value: `${m.value}%`,
    icon: '📊'
  }))

  const mockBusinesses = staffDashboardData.assignedBusinessesPage.businesses.slice(0,3).map(b => ({
    name: b.name,
    owner: b.owner,
    status: b.status,
    date: b.assignedDate,
    statusStyle: b.statusStyle === 'active' ? 'active' : 'warning'
  }))

  return (
    <>
      <header className="dashboard-topbar glass-panel">
        <div className="dashboard-overview-pills">
          {staffDashboardData.header.pills.map((pill) => (
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

      <section className="dashboard-grid" aria-label="Staff Dashboard Overview">
        <div className="dashboard-card glass-panel">
          <h3>Stats Overview</h3>
          <div className="stats-grid">
            {statsItems.map((item, index) => (
              <div key={index} className="stat-card">
                <span>📊</span>
                <div>
                  <div>{item.value}</div>
                  <div>{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dashboard-card glass-panel">
          <h3>Orders Growth</h3>
          <div className="chart-placeholder">📈 Orders chart</div>
        </div>
        <div className="dashboard-card glass-panel">
          <h3>Recent Activities</h3>
          <div>Recent activity list</div>
        </div>
        <div className="dashboard-card glass-panel">
          <h3>Latest Businesses</h3>
          <div>{mockBusinesses[0]?.name || 'No businesses'}</div>
        </div>
        <div className="dashboard-card glass-panel">
          <h3>Ads Campaign</h3>
          <div>Campaign overview</div>
        </div>
        <div className="dashboard-card glass-panel">
          <h3>Notifications</h3>
          <div>{staffDashboardData.overview.notifications.items[0]?.value || 'No notifications'}</div>
        </div>
      </section>
    </>
  )
}
