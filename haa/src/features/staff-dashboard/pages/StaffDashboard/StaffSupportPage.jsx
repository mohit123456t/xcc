import '../../../client-dashboard/styles/support.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../data'
import { StaffSupportToolbar } from '../../support/staff-support-toolbar'
import { StaffSupportSummary } from '../../support/staff-support-summary'
import { CustomerTicketsPanel } from '../../support/customer-tickets-panel'
import { OwnerQueriesPanel } from '../../support/owner-queries-panel'
import { ReplyDraftsPanel } from '../../support/reply-drafts-panel'

export function StaffSupportPage() {
  const page = staffDashboardData.supportPage

  return (
    <>
      <header className="page-header glass-panel">
        <StaffSupportToolbar header={page.header} />
      </header>

      <StaffSupportSummary items={page.summary} />

      <section className="support-layout">
        <div className="support-main-column">
          <CustomerTicketsPanel tickets={page.customerTickets} />
        </div>

        <div className="support-side-column">
          <OwnerQueriesPanel queries={page.ownerQueries} />
          <ReplyDraftsPanel items={page.replyDrafts} />
        </div>
      </section>
    </>
  )
}
