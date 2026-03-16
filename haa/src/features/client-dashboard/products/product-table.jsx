export function ProductTable({ products }) {
  return (
    <article className="dashboard-card glass-panel product-table-card">
      <div className="card-header">
        <h2>
          Product List <span>📋</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.sku}>
                <td>
                  <div className="product-image-chip">{product.image}</div>
                </td>
                <td>
                  <div className="product-name-cell">
                    <strong>{product.name}</strong>
                    <span>{product.sku}</span>
                  </div>
                </td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
                <td>
                  <span className={`status-badge status-${product.statusStyle}`}>
                    {product.status}
                  </span>
                </td>
                <td>
                  <div className="table-actions">
                    <button type="button">Edit</button>
                    <button type="button">Delete</button>
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
