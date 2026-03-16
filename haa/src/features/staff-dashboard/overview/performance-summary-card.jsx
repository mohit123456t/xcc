export function PerformanceSummaryCard({ section }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="card-header">
        <h2>
          {section.title} <span>{section.emoji}</span>
        </h2>
      </div>

      <div className="staff-performance-grid">
        {section.metrics.map((metric) => (
          <div key={metric.label} className="staff-performance-card">
            <div className="staff-performance-head">
              <span>{metric.label}</span>
              <strong>{metric.value}</strong>
            </div>
            <div
              className="staff-performance-bar"
              role="img"
              aria-label={`${metric.label} ${metric.value}`}
            >
              <span style={{ width: `${metric.fill}%` }} />
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}
