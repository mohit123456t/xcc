import './styles/DashboardPage.module.css'
import { dashboardData } from '../../features/client-dashboard/data'


export function DashboardPage() {
  const statsItems = [
    ...dashboardData.totalSales.items,
    ...dashboardData.totalOrders.items,
    ...dashboardData.adsPerformance.items,
  ].slice(0, 6)

  return (
    <>
      <header className="dashboard-topbar glass-panel">
        <div className="dashboard-overview-pills">
          {dashboardData.header.pills.map((pill) => (
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

      <section className="dashboard-grid" aria-label="Dashboard Overview">
<div className="dashboard-card glass-panel">
          <h3>Stats Overview</h3>
          <div className="stats-grid">
            {statsItems.map((item, index) => (
              <div key={index} className="stat-card">
                <span>{item.icon}</span>
                <div>
                  <div>{item.value}</div>
                  <div>{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dashboard-card glass-panel">
          <h3>Revenue Growth</h3>
          <div className="chart-placeholder">📈 Revenue chart</div>
        </div>
        <div className="dashboard-card glass-panel">
          <h3>Recent Activities</h3>
          <div>Recent activity list</div>
        </div>
        <div className="dashboard-card glass-panel">
          <h3>Ads Campaign</h3>
          <div>Campaign overview</div>
        </div>
        <div className="dashboard-card glass-panel">
          <h3>Notifications</h3>
          <div>{dashboardData.notifications.items[0]?.value || 'No notifications'}</div>
        </div>
      </section>
    </>
  )
}
