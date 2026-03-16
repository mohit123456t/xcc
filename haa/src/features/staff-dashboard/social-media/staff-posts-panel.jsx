export function StaffPostsPanel({ items }) {
  return (
    <article className="dashboard-card glass-panel product-table-card dashboard-card-wide">
      <div className="card-header">
        <h2>
          Scheduled Content <span>📱</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Business</th>
              <th>Platform</th>
              <th>Schedule</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={`${item.business}-${item.title}`}>
                <td><strong>{item.title}</strong></td>
                <td>{item.business}</td>
                <td>{item.platform}</td>
                <td>{item.schedule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
