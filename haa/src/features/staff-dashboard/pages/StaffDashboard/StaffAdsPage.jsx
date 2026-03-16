import '../../features/client-dashboard/styles/ads.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../features/staff-dashboard/data'
import { StaffAdsToolbar } from '../../features/staff-dashboard/ads/staff-ads-toolbar'
import { StaffAdsOverview } from '../../features/staff-dashboard/ads/staff-ads-overview'
import { CreateAdCampaignPanel } from '../../features/staff-dashboard/ads/create-ad-campaign-panel'
import { StaffAdsCampaignList } from '../../features/staff-dashboard/ads/staff-ads-campaign-list'
import { AdsPerformancePanel } from '../../features/staff-dashboard/ads/ads-performance-panel'
import { AdCreativesPanel } from '../../features/staff-dashboard/ads/ad-creatives-panel'
import { CampaignControlsPanel } from '../../features/staff-dashboard/ads/campaign-controls-panel'

export function StaffAdsPage() {
  const page = staffDashboardData.adsPage

  return (
    <>
      <header className="page-header glass-panel">
        <StaffAdsToolbar
          header={page.header}
          buttonLabel={page.createAdCampaign.buttonLabel}
        />
      </header>

      <section className="ads-layout">
        <div className="ads-main-column">
          <StaffAdsOverview overview={page.overview} />
          <CreateAdCampaignPanel config={page.createAdCampaign} />
          <StaffAdsCampaignList campaigns={page.campaigns} />
        </div>

        <div className="ads-side-column">
          <AdsPerformancePanel items={page.performance} />
          <AdCreativesPanel creatives={page.creatives} />
          <CampaignControlsPanel controls={page.controls} />
        </div>
      </section>
    </>
  )
}
