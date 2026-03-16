import '../../../client-dashboard/styles/marketing.module.css'
import { dashboardData } from '../../data'
import { MarketingToolbar } from '../../marketing/marketing-toolbar'
import { CampaignOverview } from '../../marketing/campaign-overview'
import { CampaignList } from '../../marketing/campaign-list'
import { SocialMediaMarketing } from '../../marketing/social-media-marketing'
import { InfluencerMarketing } from '../../marketing/influencer-marketing'
import { MarketingAdsPerformance } from '../../marketing/marketing-ads-performance'
import { MarketingAnalytics } from '../../marketing/marketing-analytics'
import { ContentSection } from '../../marketing/content-section'

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
