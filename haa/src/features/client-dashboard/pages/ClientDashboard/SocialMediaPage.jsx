import '../../../client-dashboard/styles/social-media.module.css'
import { dashboardData } from '../../data'
import { SocialMediaToolbar } from '../../social-media/social-media-toolbar'
import { SocialMediaOverview } from '../../social-media/social-media-overview'
import { SocialPostsPanel } from '../../social-media/social-posts-panel'
import { SocialAnalyticsPanel } from '../../social-media/social-analytics-panel'

export function SocialMediaPage() {
  const { socialMedia } = dashboardData

  return (
    <>
      <header className="page-header glass-panel">
        <SocialMediaToolbar header={socialMedia.header} />
      </header>

      <section className="social-media-layout">
        <div className="social-media-main-column">
          <SocialMediaOverview overview={socialMedia.overview} />
          <SocialPostsPanel posts={socialMedia.posts} />
        </div>

        <div className="social-media-side-column">
          <SocialAnalyticsPanel items={socialMedia.analytics} />
        </div>
      </section>
    </>
  )
}
