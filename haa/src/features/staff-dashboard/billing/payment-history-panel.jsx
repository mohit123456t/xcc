export function PaymentHistoryPanel({ items }) {
  return (
    <article className="dashboard-card glass-panel product-table-card dashboard-card-wide">
      <div className="card-header">
        <h2>
          Payment History <span>💳</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Business</th>
              <th>Invoice</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.invoice}>
                <td>{item.business}</td>
                <td>
                  <strong>{item.invoice}</strong>
                </td>
                <td>{item.amount}</td>
                <td>
                  <span className={`status-badge status-${item.statusStyle}`}>
                    {item.status}
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
