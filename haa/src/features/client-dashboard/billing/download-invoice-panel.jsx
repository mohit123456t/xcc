export function DownloadInvoicePanel({ invoices }) {
  return (
    <article className="dashboard-card glass-panel product-side-card">
      <div className="card-header">
        <h2>
          Download Invoice <span>📄</span>
        </h2>
      </div>

      <div className="actions-grid actions-grid-single">
        {invoices.map((invoice) => (
          <button key={invoice} type="button" className="quick-action-button">
            {invoice}
          </button>
        ))}
      </div>
    </article>
  )
}
