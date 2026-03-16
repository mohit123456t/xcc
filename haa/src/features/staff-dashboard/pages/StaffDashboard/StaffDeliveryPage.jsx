import '../../features/client-dashboard/styles/delivery.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../features/staff-dashboard/data'
import { StaffDeliveryToolbar } from '../../features/staff-dashboard/delivery/staff-delivery-toolbar'
import { OrdersReadyToShip } from '../../features/staff-dashboard/delivery/orders-ready-to-ship'
import { ShiprocketPanel } from '../../features/staff-dashboard/delivery/shiprocket-panel'
import { TrackingStatusPanel } from '../../features/staff-dashboard/delivery/tracking-status-panel'
import { DeliveryIssuesPanel } from '../../features/staff-dashboard/delivery/delivery-issues-panel'

export function StaffDeliveryPage() {
  const page = staffDashboardData.deliveryPage

  return (
    <>
      <header className="page-header glass-panel">
        <StaffDeliveryToolbar header={page.header} />
      </header>

      <section className="delivery-layout">
        <div className="delivery-main-column">
          <OrdersReadyToShip orders={page.ordersReadyToShip} />
        </div>

        <div className="delivery-side-column">
          <ShiprocketPanel items={page.shiprocket} />
          <TrackingStatusPanel items={page.trackingStatus} />
          <DeliveryIssuesPanel items={page.deliveryIssues} />
        </div>
      </section>
    </>
  )
}
