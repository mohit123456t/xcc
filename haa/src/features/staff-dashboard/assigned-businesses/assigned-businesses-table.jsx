import { useNavigate } from 'react-router-dom'

export function AssignedBusinessesTable({ businesses }) {
  const navigate = useNavigate()

  return (
    <article className="dashboard-card glass-panel product-table-card dashboard-card-wide">
      <div className="card-header">
        <h2>
          Assigned Businesses List <span>📋</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Business Name</th>
              <th>Owner Name</th>
              <th>Business Category</th>
              <th>Plan</th>
              <th>Assigned Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {businesses.map((business) => (
              <tr key={business.name}>
                <td>
                  <div className="product-name-cell">
                    <strong>{business.name}</strong>
                    <span>
                      Products {business.summary.products} • Campaigns{' '}
                      {business.summary.campaigns} • Ads {business.summary.adsStatus}
                    </span>
                  </div>
                </td>
                <td>{business.owner}</td>
                <td>{business.category}</td>
                <td>
                  <span className={`status-badge status-${business.planStyle}`}>
                    {business.plan}
                  </span>
                </td>
                <td>{business.assignedDate}</td>
                <td>
                  <span className={`status-badge status-${business.statusStyle}`}>
                    {business.status}
                  </span>
                </td>
                <td>
                  <div className="table-actions">
                    <button
                      type="button"
                      onClick={() =>
                        navigate(
                          `/staff-dashboard/assigned-businesses/${business.id}`,
                        )
                      }
                    >
                      Manage
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!businesses.length ? (
        <p className="staff-empty-state">
          No businesses matched your current search or filters.
        </p>
      ) : null}
    </article>
  )
}
