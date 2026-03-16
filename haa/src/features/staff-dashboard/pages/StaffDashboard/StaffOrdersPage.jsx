import '../../../client-dashboard/styles/orders.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../data'
import { StaffOrdersToolbar } from '../../orders/staff-orders-toolbar'
import { StaffOrdersOverview } from '../../orders/staff-orders-overview'
import { StaffOrdersTable } from '../../orders/staff-orders-table'
import { OrderQueuePanel } from '../../orders/order-queue-panel'

export function StaffOrdersPage() {
  const page = staffDashboardData.ordersPage

  return (
    <>
      <header className="page-header glass-panel">
        <StaffOrdersToolbar header={page.header} />
      </header>

      <section className="orders-layout">
        <div className="orders-main-column">
          <StaffOrdersOverview items={page.overview} />
          <StaffOrdersTable items={page.orders} />
        </div>

        <div className="orders-side-column">
          <OrderQueuePanel items={page.queue} />
        </div>
      </section>
    </>
  )
}
