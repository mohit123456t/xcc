export function MyTicketsTable({ tickets }) {
  return (
    <article className="dashboard-card glass-panel product-table-card">
      <div className="card-header">
        <h2>
          My Tickets <span>📋</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td><strong>{ticket.id}</strong></td>
                <td>{ticket.subject}</td>
                <td>
                  <span className={`status-badge status-${ticket.statusStyle}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>{ticket.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
