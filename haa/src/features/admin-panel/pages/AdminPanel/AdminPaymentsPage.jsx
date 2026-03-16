import '../StaffDashboard/StaffDashboardPage.module.css'
import { adminPanelData } from '../../features/admin-panel/data'
import { PaymentsToolbar } from '../../features/admin-panel/payments/payments-toolbar'
import { PaymentsStatStrip } from '../../features/admin-panel/payments/payments-stat-strip'
import { PaymentsTable } from '../../features/admin-panel/payments/payments-table'

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
