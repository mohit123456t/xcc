import { adminPanelData } from '../../features/admin-panel/data'
import { AdminOverviewHeader } from '../../features/admin-panel/overview/admin-overview-header.jsx'
import { AdminOverviewSummary } from '../../features/admin-panel/overview/admin-overview-summary.jsx'
import { AdminQuickActions } from '../../features/admin-panel/overview/admin-quick-actions.jsx'

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
