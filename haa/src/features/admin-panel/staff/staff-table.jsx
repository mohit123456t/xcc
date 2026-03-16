export function StaffTable({ rows }) {
  return (
    <article className="dashboard-card glass-panel product-table-card dashboard-card-wide">
      <div className="card-header">
        <h2>
          Staff Directory <span>🧑‍💼</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Staff Name</th>
              <th>Department</th>
              <th>Assigned Businesses</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>
                  <strong>{row.name}</strong>
                </td>
                <td>{row.department}</td>
                <td>{row.businesses}</td>
                <td>
                  <span className={`status-badge status-${row.statusStyle}`}>
                    {row.status}
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
