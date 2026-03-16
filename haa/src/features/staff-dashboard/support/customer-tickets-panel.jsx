export function CustomerTicketsPanel({ tickets }) {
  return (
    <article className="dashboard-card glass-panel product-table-card">
      <div className="card-header">
        <h2>
          Customer Tickets <span>🎫</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Customer</th>
              <th>Issue</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>
                  <strong>{ticket.id}</strong>
                </td>
                <td>{ticket.from}</td>
                <td>{ticket.issue}</td>
                <td>
                  <span className={`status-badge status-${ticket.priorityStyle}`}>
                    {ticket.priority}
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
