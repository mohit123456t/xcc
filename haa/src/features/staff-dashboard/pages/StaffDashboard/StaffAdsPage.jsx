import '../../../client-dashboard/styles/ads.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../data'
import { StaffAdsToolbar } from '../../ads/staff-ads-toolbar'
import { StaffAdsOverview } from '../../ads/staff-ads-overview'
import { CreateAdCampaignPanel } from '../../ads/create-ad-campaign-panel'
import { StaffAdsCampaignList } from '../../ads/staff-ads-campaign-list'
import { AdsPerformancePanel } from '../../ads/ads-performance-panel'
import { AdCreativesPanel } from '../../ads/ad-creatives-panel'
import { CampaignControlsPanel } from '../../ads/campaign-controls-panel'

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
