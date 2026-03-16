export function UsersTable({ rows }) {
  return (
    <article className="dashboard-card glass-panel product-table-card dashboard-card-wide">
      <div className="card-header">
        <h2>
          Users Directory <span>👥</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.email}>
                <td>
                  <strong>{row.name}</strong>
                </td>
                <td>{row.email}</td>
                <td>{row.role}</td>
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
