export function ContentPlanningPanel({ items }) {
  return (
    <article className="dashboard-card glass-panel">
      <div className="card-header">
        <h2>
          Content Planning <span>🗓️</span>
        </h2>
      </div>

      <div className="stats-list">
        {items.map((item) => (
          <div key={`${item.title}-${item.postDate}`} className="stat-row stat-row-stack">
            <strong>
              {item.type}: {item.title}
            </strong>
            <span>
              Post Date {item.postDate} • Platform {item.platform}
            </span>
          </div>
        ))}
      </div>
    </article>
  )
}
