export function SocialPostsPanel({ posts }) {
  return (
    <article className="dashboard-card glass-panel product-table-card">
      <div className="card-header">
        <h2>
          Posts / Reels List <span>🎥</span>
        </h2>
      </div>

      <div className="product-table-wrapper">
        <table className="product-table">
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Title</th>
              <th>Platform</th>
              <th>Views</th>
              <th>Likes</th>
              <th>Comments</th>
              <th>Post Date</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.title}>
                <td>
                  <div className="product-image-chip">{post.thumbnail}</div>
                </td>
                <td><strong>{post.title}</strong></td>
                <td>{post.platform}</td>
                <td>{post.views}</td>
                <td>{post.likes}</td>
                <td>{post.comments}</td>
                <td>{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  )
}
