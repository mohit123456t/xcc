import '../../features/client-dashboard/styles/marketing.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../features/staff-dashboard/data'
import { StaffAnalyticsToolbar } from '../../features/staff-dashboard/analytics/staff-analytics-toolbar'
import { AnalyticsOverviewPanel } from '../../features/staff-dashboard/analytics/analytics-overview-panel'
import { AnalyticsMetricPanel } from '../../features/staff-dashboard/analytics/analytics-metric-panel'

export function StaffAnalyticsPage() {
  const page = staffDashboardData.analyticsPage

  return (
    <>
      <header className="page-header glass-panel">
        <StaffAnalyticsToolbar header={page.header} />
      </header>

      <section className="marketing-layout">
        <div className="marketing-main-column">
          <AnalyticsOverviewPanel items={page.overview} />
          <AnalyticsMetricPanel
            title="Campaign Performance"
            icon="📢"
            items={page.campaignPerformance}
          />
        </div>

        <div className="marketing-side-column">
          <AnalyticsMetricPanel
            title="Ads Results"
            icon="📣"
            items={page.adsResults}
          />
          <AnalyticsMetricPanel
            title="Social Media Growth"
            icon="📱"
            items={page.socialGrowth}
          />
        </div>
      </section>
    </>
  )
}
