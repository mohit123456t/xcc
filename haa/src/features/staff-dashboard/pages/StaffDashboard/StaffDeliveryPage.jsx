import '../../../client-dashboard/styles/delivery.module.css'
import './StaffDashboardPage.module.css'
import { staffDashboardData } from '../../data'
import { StaffDeliveryToolbar } from '../../delivery/staff-delivery-toolbar'
import { OrdersReadyToShip } from '../../delivery/orders-ready-to-ship'
import { ShiprocketPanel } from '../../delivery/shiprocket-panel'
import { TrackingStatusPanel } from '../../delivery/tracking-status-panel'
import { DeliveryIssuesPanel } from '../../delivery/delivery-issues-panel'

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
