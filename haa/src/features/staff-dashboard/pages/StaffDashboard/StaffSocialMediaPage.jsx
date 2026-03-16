import '../../../client-dashboard/styles/social-media.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../data'
import { StaffSocialMediaToolbar } from '../../social-media/staff-social-media-toolbar'
import { StaffSocialOverview } from '../../social-media/staff-social-overview'
import { StaffPostsPanel } from '../../social-media/staff-posts-panel'
import { SocialGrowthPanel } from '../../social-media/social-growth-panel'

export function StaffSocialMediaPage() {
  const page = staffDashboardData.socialMediaPageStaff

  return (
    <>
      <header className="page-header glass-panel">
        <StaffSocialMediaToolbar header={page.header} />
      </header>

      <section className="social-media-layout">
        <div className="social-media-main-column">
          <StaffSocialOverview items={page.overview} />
          <StaffPostsPanel items={page.posts} />
        </div>

        <div className="social-media-side-column">
          <SocialGrowthPanel items={page.growth} />
        </div>
      </section>
    </>
  )
}
