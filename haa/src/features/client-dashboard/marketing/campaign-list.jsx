export function CampaignList({ campaigns }) {
  return (
    <article className="dashboard-card glass-panel product-table-card">
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
              <th>Platform</th>
              <th>Status</th>
              <th>Budget</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.name}>
                <td><strong>{campaign.name}</strong></td>
                <td>{campaign.platform}</td>
                <td>
                  <span className={`status-badge status-${campaign.statusStyle}`}>
                    {campaign.status}
                  </span>
                </td>
                <td>{campaign.budget}</td>
                <td>{campaign.startDate}</td>
                <td>{campaign.endDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
