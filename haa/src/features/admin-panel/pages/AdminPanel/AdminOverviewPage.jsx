import { adminPanelData } from '../../data'
import { AdminOverviewHeader } from '../../overview/admin-overview-header.jsx'
import { AdminOverviewSummary } from '../../overview/admin-overview-summary.jsx'
import { AdminQuickActions } from '../../overview/admin-quick-actions.jsx'

export function AdminOverviewPage() {
  const page = adminPanelData.overviewPage

  return (
    <>
      <AdminOverviewHeader pills={page.header.pills} />
      <AdminOverviewSummary items={page.summary} />
      <AdminQuickActions items={page.actions} />
    </>
  )
}
