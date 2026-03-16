import '../../features/client-dashboard/styles/marketing.module.css'
import { dashboardData } from '../../features/client-dashboard/data'
import { MarketingToolbar } from '../../features/client-dashboard/marketing/marketing-toolbar'
import { CampaignOverview } from '../../features/client-dashboard/marketing/campaign-overview'
import { CampaignList } from '../../features/client-dashboard/marketing/campaign-list'
import { SocialMediaMarketing } from '../../features/client-dashboard/marketing/social-media-marketing'
import { InfluencerMarketing } from '../../features/client-dashboard/marketing/influencer-marketing'
import { MarketingAdsPerformance } from '../../features/client-dashboard/marketing/marketing-ads-performance'
import { MarketingAnalytics } from '../../features/client-dashboard/marketing/marketing-analytics'
import { ContentSection } from '../../features/client-dashboard/marketing/content-section'

export function MarketingPage() {
  const { marketing } = dashboardData

  return (
    <>
      <header className="page-header glass-panel">
        <MarketingToolbar header={marketing.header} />
      </header>

      <section className="marketing-layout">
        <div className="marketing-main-column">
          <CampaignOverview overview={marketing.overview} />
          <CampaignList campaigns={marketing.campaigns} />
          <InfluencerMarketing influencers={marketing.influencers} />
        </div>

        <div className="marketing-side-column">
          <SocialMediaMarketing items={marketing.socialMedia} />
          <MarketingAdsPerformance items={marketing.adsPerformance} />
          <MarketingAnalytics items={marketing.analytics} />
          <ContentSection items={marketing.content} />
        </div>
      </section>
    </>
  )
}
