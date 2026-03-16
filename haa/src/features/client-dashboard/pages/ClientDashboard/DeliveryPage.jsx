import '../../features/client-dashboard/styles/delivery.module.css'
import { dashboardData } from '../../features/client-dashboard/data'
import { DeliveryToolbar } from '../../features/client-dashboard/delivery/delivery-toolbar'
import { DeliveryOverview } from '../../features/client-dashboard/delivery/delivery-overview'
import { ShipmentList } from '../../features/client-dashboard/delivery/shipment-list'
import { TrackingSystem } from '../../features/client-dashboard/delivery/tracking-system'
import { CourierPartnerInfo } from '../../features/client-dashboard/delivery/courier-partner-info'
import { DeliveryFilters } from '../../features/client-dashboard/delivery/delivery-filters'
import { DeliveryIssues } from '../../features/client-dashboard/delivery/delivery-issues'
import { ShipOrderPanel } from '../../features/client-dashboard/delivery/ship-order-panel'

export function DeliveryPage() {
  const { delivery } = dashboardData

  return (
    <>
      <header className="page-header glass-panel">
        <DeliveryToolbar header={delivery.header} />
      </header>

      <section className="delivery-layout">
        <div className="delivery-main-column">
          <DeliveryOverview overview={delivery.overview} />
          <ShipmentList shipments={delivery.shipments} />
          <TrackingSystem
            steps={delivery.trackingSteps}
            trackingInfo={delivery.trackingInfo}
          />
        </div>

        <div className="delivery-side-column">
          <ShipOrderPanel />
          <CourierPartnerInfo partners={delivery.courierPartners} />
          <DeliveryFilters filters={delivery.filters} />
          <DeliveryIssues issues={delivery.issues} />
        </div>
      </section>
    </>
  )
}
