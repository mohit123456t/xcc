export function OrderDetails({ details }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="card-header">
        <h2>
          Order Details Page <span>🧾</span>
        </h2>
      </div>

      <div className="detail-grid">
        <div className="stat-row stat-row-stack">
          <span>Customer name</span>
          <strong>{details.customerName}</strong>
        </div>
        <div className="stat-row stat-row-stack">
          <span>Phone number</span>
          <strong>{details.phoneNumber}</strong>
        </div>
        <div className="stat-row stat-row-stack">
          <span>Address</span>
          <strong>{details.address}</strong>
        </div>
        <div className="stat-row stat-row-stack">
          <span>Product details</span>
          <strong>{details.productDetails}</strong>
        </div>
        <div className="stat-row stat-row-stack">
          <span>Price breakdown</span>
          <strong>{details.priceBreakdown}</strong>
        </div>
        <div className="stat-row stat-row-stack">
          <span>Payment method</span>
          <strong>{details.paymentMethod}</strong>
        </div>
      </div>
    </article>
  )
}
