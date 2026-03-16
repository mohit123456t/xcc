import '../../features/client-dashboard/styles/billing.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../features/staff-dashboard/data'
import { StaffBillingToolbar } from '../../features/staff-dashboard/billing/staff-billing-toolbar'
import { PaymentOverviewPanel } from '../../features/staff-dashboard/billing/payment-overview-panel'
import { PaymentHistoryPanel } from '../../features/staff-dashboard/billing/payment-history-panel'
import { PaymentChecksPanel } from '../../features/staff-dashboard/billing/payment-checks-panel'
import { InvoicesPanel } from '../../features/staff-dashboard/billing/invoices-panel'

export function StaffBillingPage() {
  const page = staffDashboardData.billingPage

  return (
    <>
      <header className="page-header glass-panel">
        <StaffBillingToolbar header={page.header} />
      </header>

      <section className="billing-layout">
        <div className="billing-main-column">
          <PaymentOverviewPanel items={page.overview} />
          <PaymentHistoryPanel items={page.paymentHistory} />
        </div>

        <div className="billing-side-column">
          <PaymentChecksPanel items={page.paymentChecks} />
          <InvoicesPanel items={page.invoices} />
        </div>
      </section>
    </>
  )
}
