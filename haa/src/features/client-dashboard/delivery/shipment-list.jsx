export function ShipmentList({ shipments }) {
  return (
    <article className="dashboard-card glass-panel product-table-card">
      <div className="card-header">
        <h2>
          Shipment List <span>📋</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Product</th>
              <th>Courier Partner</th>
              <th>Tracking ID</th>
              <th>Delivery Status</th>
              <th>Estimated Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment.orderId}>
                <td><strong>{shipment.orderId}</strong></td>
                <td>{shipment.customerName}</td>
                <td>{shipment.product}</td>
                <td>{shipment.courierPartner}</td>
                <td>{shipment.trackingId}</td>
                <td>
                  <span className={`status-badge status-${shipment.statusStyle}`}>
                    {shipment.deliveryStatus}
                  </span>
                </td>
                <td>{shipment.estimatedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
