import '../../../client-dashboard/styles/billing.module.css'
import { dashboardData } from '../../data'
import { BillingToolbar } from '../../billing/billing-toolbar'
import { CurrentPlanPanel } from '../../billing/current-plan-panel'
import { ChangePlanPanel } from '../../billing/change-plan-panel'
import { PaymentMethodPanel } from '../../billing/payment-method-panel'
import { BillingHistoryTable } from '../../billing/billing-history-table'
import { DownloadInvoicePanel } from '../../billing/download-invoice-panel'
import { AutoPaymentPanel } from '../../billing/auto-payment-panel'

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
