import '../../../client-dashboard/styles/marketing.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../data'
import { StaffMarketingToolbar } from '../../marketing/staff-marketing-toolbar'
import { StaffMarketingOverview } from '../../marketing/staff-marketing-overview'
import { CreateCampaignPanel } from '../../marketing/create-campaign-panel'
import { StaffCampaignList } from '../../marketing/staff-campaign-list'
import { ContentPlanningPanel } from '../../marketing/content-planning-panel'
import { CampaignPerformancePanel } from '../../marketing/campaign-performance-panel'
import { UploadContentPanel } from '../../marketing/upload-content-panel'

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
