export function StaffCampaignList({ campaigns }) {
  return (
    <article className="dashboard-card glass-panel product-table-card dashboard-card-wide">
      <div className="card-header">
        <h2>
          Campaign List <span>📋</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Business Name</th>
              <th>Platform</th>
              <th>Status</th>
              <th>Start Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.name}>
                <td>
                  <strong>{campaign.name}</strong>
                </td>
                <td>{campaign.businessName}</td>
                <td>{campaign.platform}</td>
                <td>
                  <span className={`status-badge status-${campaign.statusStyle}`}>
                    {campaign.status}
                  </span>
                </td>
                <td>{campaign.startDate}</td>
                <td>
                  <div className="table-actions">
                    <button type="button">View</button>
                    <button type="button">Edit</button>
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
