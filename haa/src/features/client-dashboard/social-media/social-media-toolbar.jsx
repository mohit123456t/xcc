export function SocialMediaToolbar({ header }) {
  return (
    <div className="page-toolbar">
      <div>
        <p className="page-eyebrow">Social Media</p>
        <h2>{header.title}</h2>
        <p className="page-copy">{header.description}</p>
      </div>
    </div>
  )
}
