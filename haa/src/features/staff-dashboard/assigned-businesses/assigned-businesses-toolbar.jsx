export function AssignedBusinessesToolbar({ header }) {
  return (
    <div className="page-toolbar">
      <div>
        <p className="page-eyebrow">Staff Workspace</p>
        <h2>{header.title}</h2>
        <p className="page-copy">{header.description}</p>
      </div>

      <button type="button" className="primary-action-button">
        + Add Business Note
      </button>
    </div>
  )
}
