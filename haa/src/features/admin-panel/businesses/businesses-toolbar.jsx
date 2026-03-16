export function BusinessesToolbar({ header }) {
  return (
    <div className="page-toolbar">
      <div>
        <p className="page-eyebrow">Admin Businesses</p>
        <h2>{header.title}</h2>
        <p className="page-copy">{header.description}</p>
      </div>

      <button type="button" className="primary-action-button">
        + Approve Business
      </button>
    </div>
  )
}
