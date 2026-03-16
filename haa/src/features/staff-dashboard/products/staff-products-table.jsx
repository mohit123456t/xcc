export function StaffProductsTable({ items }) {
  return (
    <article className="dashboard-card glass-panel product-table-card dashboard-card-wide">
      <div className="card-header">
        <h2>
          Business Products <span>📋</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Business</th>
              <th>Product</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={`${item.business}-${item.name}`}>
                <td>{item.business}</td>
                <td><strong>{item.name}</strong></td>
                <td>{item.category}</td>
                <td>{item.stock}</td>
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
