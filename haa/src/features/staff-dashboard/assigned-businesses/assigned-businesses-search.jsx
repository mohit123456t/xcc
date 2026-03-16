export function AssignedBusinessesSearch({ value, onChange }) {
  return (
    <article className="dashboard-card glass-panel product-filter-card">
      <div className="card-header">
        <h2>
          Search Businesses <span>🔎</span>
        </h2>
      </div>

      <div className="staff-search-grid">
        <label className="filter-field">
          <span>Business Name</span>
          <input
            type="text"
            value={value.businessName}
            onChange={(event) => onChange('businessName', event.target.value)}
            placeholder="Search by business name"
          />
        </label>

        <label className="filter-field">
          <span>Owner Name</span>
          <input
            type="text"
            value={value.ownerName}
            onChange={(event) => onChange('ownerName', event.target.value)}
            placeholder="Search by owner name"
          />
        </label>
      </div>
    </article>
  )
}
