import '../../features/client-dashboard/styles/social-media.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../features/staff-dashboard/data'
import { StaffSocialMediaToolbar } from '../../features/staff-dashboard/social-media/staff-social-media-toolbar'
import { StaffSocialOverview } from '../../features/staff-dashboard/social-media/staff-social-overview'
import { StaffPostsPanel } from '../../features/staff-dashboard/social-media/staff-posts-panel'
import { SocialGrowthPanel } from '../../features/staff-dashboard/social-media/social-growth-panel'

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
