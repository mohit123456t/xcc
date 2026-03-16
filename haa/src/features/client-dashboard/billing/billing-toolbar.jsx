export function BillingToolbar({ header }) {
  return (
    <div className="page-toolbar">
      <div>
        <p className="page-eyebrow">Billing</p>
        <h2>{header.title}</h2>
        <p className="page-copy">{header.description}</p>
      </div>
    </div>
  )
}
