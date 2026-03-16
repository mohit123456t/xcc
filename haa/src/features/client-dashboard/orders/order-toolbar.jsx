export function OrderToolbar({ header, search, exportOptions }) {
  return (
    <div className="page-toolbar page-toolbar-stack">
      <div>
        <p className="page-eyebrow">Orders</p>
        <h2>{header.title}</h2>
        <p className="page-copy">{header.description}</p>
      </div>

      <div className="toolbar-cluster">
        <div className="toolbar-search-grid">
          {search.map((field) => (
            <label key={field.label} className="filter-field">
              <span>{field.label}</span>
              <input type="text" value={field.value} readOnly />
            </label>
          ))}
        </div>

        <div className="toolbar-actions">
          {exportOptions.map((option) => (
            <button key={option} type="button" className="secondary-action-button">
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
