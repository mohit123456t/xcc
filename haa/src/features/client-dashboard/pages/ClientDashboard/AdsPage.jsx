import '../../../client-dashboard/styles/ads.module.css'
import { dashboardData } from '../../data'
import { AdsToolbar } from '../../ads/ads-toolbar'
import { AdsOverview } from '../../ads/ads-overview'
import { AdsCampaignList } from '../../ads/ads-campaign-list'
import { AudienceTargeting } from '../../ads/audience-targeting'
import { AdsPerformanceGraph } from '../../ads/ads-performance-graph'
import { AdCreatives } from '../../ads/ad-creatives'
import { CampaignControls } from '../../ads/campaign-controls'
import { CreateAdCampaignForm } from '../../ads/create-ad-campaign-form'

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
