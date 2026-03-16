export function OrdersTable({ orders }) {
  return (
    <article className="dashboard-card glass-panel product-table-card">
      <div className="card-header">
        <h2>
          Orders List Table <span>📋</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Payment Status</th>
              <th>Order Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <strong>{order.id}</strong>
                </td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.totalPrice}</td>
                <td>
                  <span className={`status-badge status-${order.paymentStyle}`}>
                    {order.paymentStatus}
                  </span>
                </td>
                <td>
                  <span className={`status-badge status-${order.orderStyle}`}>
                    {order.orderStatus}
                  </span>
                </td>
                <td>{order.date}</td>
                <td>
                  <div className="table-actions">
                    <button type="button">View</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
