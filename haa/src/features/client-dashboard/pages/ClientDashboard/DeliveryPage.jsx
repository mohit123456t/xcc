import '../../../client-dashboard/styles/delivery.module.css'
import { dashboardData } from '../../data'
import { DeliveryToolbar } from '../../delivery/delivery-toolbar'
import { DeliveryOverview } from '../../delivery/delivery-overview'
import { ShipmentList } from '../../delivery/shipment-list'
import { TrackingSystem } from '../../delivery/tracking-system'
import { CourierPartnerInfo } from '../../delivery/courier-partner-info'
import { DeliveryFilters } from '../../delivery/delivery-filters'
import { DeliveryIssues } from '../../delivery/delivery-issues'
import { ShipOrderPanel } from '../../delivery/ship-order-panel'

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
