export function BusinessWorkPanelToolbar({ business }) {
  return (
    <div className="page-toolbar">
      <div>
        <p className="page-eyebrow">Business Work Panel</p>
        <h2>{business.workPanel.title}</h2>
        <p className="page-copy">{business.workPanel.description}</p>
      </div>

      <button type="button" className="primary-action-button">
        + Add Update
      </button>
    </div>
  )
}
