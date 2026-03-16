export function AdsCampaignList({ campaigns }) {
  return (
    <article className="dashboard-card glass-panel product-table-card">
      <div className="card-header">
        <h2>
          Ads Campaign List <span>📋</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Platform</th>
              <th>Budget</th>
              <th>Status</th>
              <th>Clicks</th>
              <th>Conversions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign.name}>
                <td><strong>{campaign.name}</strong></td>
                <td>{campaign.platform}</td>
                <td>{campaign.budget}</td>
                <td>
                  <span className={`status-badge status-${campaign.statusStyle}`}>
                    {campaign.status}
                  </span>
                </td>
                <td>{campaign.clicks}</td>
                <td>{campaign.conversions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
