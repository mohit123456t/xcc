import { Navigate, useParams } from 'react-router-dom'
import '../../features/client-dashboard/styles/marketing.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../features/staff-dashboard/data'
import { BusinessWorkPanelToolbar } from '../../features/staff-dashboard/business-work-panel/business-work-panel-toolbar'
import { BusinessProfileCard } from '../../features/staff-dashboard/business-work-panel/business-profile-card'
import { BusinessWorkstreamCard } from '../../features/staff-dashboard/business-work-panel/business-workstream-card'
import { ContentUploadsCard } from '../../features/staff-dashboard/business-work-panel/content-uploads-card'
import { BusinessSummaryStrip } from '../../features/staff-dashboard/business-work-panel/business-summary-strip'

export function StaffBusinessWorkPanelPage() {
  const { businessId } = useParams()
  const business = staffDashboardData.assignedBusinessesPage.businesses.find(
    (item) => item.id === businessId,
  )

  if (!business) {
    return <Navigate to="/staff-dashboard/assigned-businesses" replace />
  }

  return (
    <>
      <header className="page-header glass-panel">
        <BusinessWorkPanelToolbar business={business} />
      </header>

      <BusinessSummaryStrip business={business} />

      <section className="marketing-layout">
        <div className="marketing-main-column">
          <BusinessProfileCard business={business} />
          <BusinessWorkstreamCard
            title="Marketing"
            icon="📢"
            items={business.workPanel.marketing}
          />
          <BusinessWorkstreamCard
            title="Ads"
            icon="📣"
            items={business.workPanel.ads}
          />
        </div>

        <div className="marketing-side-column">
          <BusinessWorkstreamCard
            title="Social Media"
            icon="📱"
            items={business.workPanel.socialMedia}
          />
          <ContentUploadsCard items={business.workPanel.contentUploads} />
        </div>
      </section>
    </>
  )
}
