import '../../features/client-dashboard/styles/marketing.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../features/staff-dashboard/data'
import { StaffMarketingToolbar } from '../../features/staff-dashboard/marketing/staff-marketing-toolbar'
import { StaffMarketingOverview } from '../../features/staff-dashboard/marketing/staff-marketing-overview'
import { CreateCampaignPanel } from '../../features/staff-dashboard/marketing/create-campaign-panel'
import { StaffCampaignList } from '../../features/staff-dashboard/marketing/staff-campaign-list'
import { ContentPlanningPanel } from '../../features/staff-dashboard/marketing/content-planning-panel'
import { CampaignPerformancePanel } from '../../features/staff-dashboard/marketing/campaign-performance-panel'
import { UploadContentPanel } from '../../features/staff-dashboard/marketing/upload-content-panel'

export function StaffMarketingPage() {
  const page = staffDashboardData.marketingPage

  return (
    <>
      <header className="page-header glass-panel">
        <StaffMarketingToolbar
          header={page.header}
          buttonLabel={page.createCampaign.buttonLabel}
        />
      </header>

      <section className="marketing-layout">
        <div className="marketing-main-column">
          <StaffMarketingOverview overview={page.overview} />
          <CreateCampaignPanel config={page.createCampaign} />
          <StaffCampaignList campaigns={page.campaigns} />
        </div>

        <div className="marketing-side-column">
          <ContentPlanningPanel items={page.contentPlanning} />
          <CampaignPerformancePanel items={page.performance} />
          <UploadContentPanel uploads={page.uploads} />
        </div>
      </section>
    </>
  )
}
