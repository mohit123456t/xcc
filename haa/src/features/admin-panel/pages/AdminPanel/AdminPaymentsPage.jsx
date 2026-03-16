import '../../../staff-dashboard/pages/StaffDashboard/StaffDashboardPage.module.css'
import { adminPanelData } from '../../data'
import { PaymentsToolbar } from '../../payments/payments-toolbar'
import { PaymentsStatStrip } from '../../payments/payments-stat-strip'
import { PaymentsTable } from '../../payments/payments-table'

export function AdminPaymentsPage() {
  const page = adminPanelData.paymentsPage

  return (
    <>
      <header className="page-header glass-panel">
        <PaymentsToolbar header={page.header} />
      </header>

      <PaymentsStatStrip items={page.overview} />
      <PaymentsTable rows={page.payments} />
    </>
  )
}
