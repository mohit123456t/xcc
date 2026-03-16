import '../../features/client-dashboard/styles/orders.module.css'
import { dashboardData } from '../../features/client-dashboard/data'
import { OrderToolbar } from '../../features/client-dashboard/orders/order-toolbar'
import { OrderFilters } from '../../features/client-dashboard/orders/order-filters'
import { OrdersTable } from '../../features/client-dashboard/orders/orders-table'
import { OrderStatuses } from '../../features/client-dashboard/orders/order-statuses'
import { PaymentStatuses } from '../../features/client-dashboard/orders/payment-statuses'
import { OrderDetails } from '../../features/client-dashboard/orders/order-details'
import { DeliveryTracking } from '../../features/client-dashboard/orders/delivery-tracking'
import { OrderActions } from '../../features/client-dashboard/orders/order-actions'

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
