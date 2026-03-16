export function BillingHistoryTable({ history }) {
  return (
    <article className="dashboard-card glass-panel product-table-card">
      <div className="card-header">
        <h2>
          Billing History <span>📄</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Invoice ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Payment status</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item) => (
              <tr key={item.invoiceId}>
                <td><strong>{item.invoiceId}</strong></td>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>
                  <span className={`status-badge status-${item.statusStyle}`}>
                    {item.paymentStatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
