import '../../../client-dashboard/styles/orders.module.css'
import { dashboardData } from '../../data'
import { OrderToolbar } from '../../orders/order-toolbar'
import { OrderFilters } from '../../orders/order-filters'
import { OrdersTable } from '../../orders/orders-table'
import { OrderStatuses } from '../../orders/order-statuses'
import { PaymentStatuses } from '../../orders/payment-statuses'
import { OrderDetails } from '../../orders/order-details'
import { DeliveryTracking } from '../../orders/delivery-tracking'
import { OrderActions } from '../../orders/order-actions'

export function OrdersPage() {
  const { orders } = dashboardData

  return (
    <>
      <header className="page-header glass-panel">
        <OrderToolbar
          header={orders.header}
          search={orders.search}
          exportOptions={orders.exportOptions}
        />
      </header>

      <section className="orders-layout">
        <div className="orders-main-column">
          <OrderFilters filters={orders.filters} />
          <OrdersTable orders={orders.items} />
          <OrderDetails details={orders.details} />
        </div>

        <div className="orders-side-column">
          <OrderStatuses statuses={orders.statuses} />
          <PaymentStatuses statuses={orders.paymentStatuses} />
          <DeliveryTracking tracking={orders.tracking} />
          <OrderActions actions={orders.actions} />
        </div>
      </section>
    </>
  )
}
