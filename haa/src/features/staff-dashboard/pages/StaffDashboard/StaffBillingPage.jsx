import '../../../client-dashboard/styles/billing.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../data'
import { StaffBillingToolbar } from '../../billing/staff-billing-toolbar'
import { PaymentOverviewPanel } from '../../billing/payment-overview-panel'
import { PaymentHistoryPanel } from '../../billing/payment-history-panel'
import { PaymentChecksPanel } from '../../billing/payment-checks-panel'
import { InvoicesPanel } from '../../billing/invoices-panel'

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
