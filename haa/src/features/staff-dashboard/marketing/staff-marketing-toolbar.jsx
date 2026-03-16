export function StaffMarketingToolbar({ header, buttonLabel }) {
  return (
    <div className="page-toolbar">
      <div>
        <p className="page-eyebrow">Staff Marketing</p>
        <h2>{header.title}</h2>
        <p className="page-copy">{header.description}</p>
      </div>

      <button type="button" className="primary-action-button">
        + {buttonLabel}
      </button>
    </div>
  )
}
