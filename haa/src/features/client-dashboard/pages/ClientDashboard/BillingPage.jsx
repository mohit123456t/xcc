import '../../features/client-dashboard/styles/billing.module.css'
import { dashboardData } from '../../features/client-dashboard/data'
import { BillingToolbar } from '../../features/client-dashboard/billing/billing-toolbar'
import { CurrentPlanPanel } from '../../features/client-dashboard/billing/current-plan-panel'
import { ChangePlanPanel } from '../../features/client-dashboard/billing/change-plan-panel'
import { PaymentMethodPanel } from '../../features/client-dashboard/billing/payment-method-panel'
import { BillingHistoryTable } from '../../features/client-dashboard/billing/billing-history-table'
import { DownloadInvoicePanel } from '../../features/client-dashboard/billing/download-invoice-panel'
import { AutoPaymentPanel } from '../../features/client-dashboard/billing/auto-payment-panel'

export function BillingPage() {
  const { billing } = dashboardData

  return (
    <>
      <header className="page-header glass-panel">
        <BillingToolbar header={billing.header} />
      </header>

      <section className="billing-layout">
        <div className="billing-main-column">
          <CurrentPlanPanel items={billing.currentPlan} />
          <BillingHistoryTable history={billing.history} />
        </div>

        <div className="billing-side-column">
          <ChangePlanPanel plans={billing.plans} />
          <PaymentMethodPanel methods={billing.paymentMethods} />
          <DownloadInvoicePanel invoices={billing.invoices} />
          <AutoPaymentPanel autoPayment={billing.autoPayment} />
        </div>
      </section>
    </>
  )
}
