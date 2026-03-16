import './DashboardPage.module.css'
import { dashboardData } from '../../data'


export function DashboardPage() {
  const statsItems = [
    ...dashboardData.totalSales.items.map(i => ({...i, icon: dashboardData.totalSales.emoji})),
    ...dashboardData.totalOrders.items.map(i => ({...i, icon: dashboardData.totalOrders.emoji})),
    ...dashboardData.adsPerformance.items.map(i => ({...i, icon: dashboardData.adsPerformance.emoji})),
  ].slice(0, 6)

  const chartPoints = dashboardData.revenueData.chartData
    .map((data, index, arr) => {
      const x = (index / (arr.length - 1)) * 100;
      const y = 100 - (data.revenue / 100) * 100;
      return `${x},${y}`;
    })
    .join(' ');


  return (
    <>
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
        <div className="dashboard-card dashboard-card-wide glass-panel">
          <h3>{dashboardData.revenueData.title}</h3>
          <div className="chart-container">
            <svg className="line-chart" viewBox="0 0 100 100" preserveAspectRatio="none">
              <polyline
                fill="none"
                stroke="#4f7cff"
                strokeWidth="2"
                points={chartPoints}
              />
            </svg>
            <div className="chart-labels">
              {dashboardData.revenueData.chartData.map((data) => (
                <span key={data.month}>{data.month}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
