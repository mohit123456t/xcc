export function AddProductForm({ form }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="card-header">
        <h2>
          Add Product Form <span>➕</span>
        </h2>
      </div>

      <div className="product-form-grid">
        {form.fields.map((field) => (
          <label
            key={field.label}
            className={`product-form-field${field.large ? ' is-large' : ''}`}
          >
            <span>{field.label}</span>
            {field.type === 'textarea' ? (
              <textarea value={field.value} readOnly rows="4" />
            ) : (
              <input type="text" value={field.value} readOnly />
            )}
          </label>
        ))}
      </div>
    </article>
  )
}
