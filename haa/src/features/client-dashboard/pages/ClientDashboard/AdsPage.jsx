import '../../features/client-dashboard/styles/ads.module.css'
import { dashboardData } from '../../features/client-dashboard/data'
import { AdsToolbar } from '../../features/client-dashboard/ads/ads-toolbar'
import { AdsOverview } from '../../features/client-dashboard/ads/ads-overview'
import { AdsCampaignList } from '../../features/client-dashboard/ads/ads-campaign-list'
import { AudienceTargeting } from '../../features/client-dashboard/ads/audience-targeting'
import { AdsPerformanceGraph } from '../../features/client-dashboard/ads/ads-performance-graph'
import { AdCreatives } from '../../features/client-dashboard/ads/ad-creatives'
import { CampaignControls } from '../../features/client-dashboard/ads/campaign-controls'
import { CreateAdCampaignForm } from '../../features/client-dashboard/ads/create-ad-campaign-form'

export function AdsPage() {
  const { ads } = dashboardData

  return (
    <>
      <header className="page-header glass-panel">
        <AdsToolbar header={ads.header} />
      </header>

      <section className="ads-layout">
        <div className="ads-main-column">
          <AdsOverview overview={ads.overview} />
          <AdsCampaignList campaigns={ads.campaigns} />
          <CreateAdCampaignForm form={ads.form} />
        </div>

        <div className="ads-side-column">
          <AudienceTargeting items={ads.targeting} />
          <AdsPerformanceGraph items={ads.graphs} />
          <AdCreatives items={ads.creatives} />
          <CampaignControls controls={ads.controls} />
        </div>
      </section>
    </>
  )
}
