export function FaqSection({ faq }) {
  return (
    <article className="dashboard-card glass-panel dashboard-card-wide">
      <div className="card-header">
        <h2>
          FAQ Section <span>❓</span>
        </h2>
      </div>

      <div className="stats-list">
        {faq.map((item) => (
          <div key={item.question} className="stat-row stat-row-stack">
            <span>{item.question}</span>
            <strong>{item.answer}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}
