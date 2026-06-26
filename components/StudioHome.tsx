export default function StudioHome() {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: "50px auto",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: 42 }}>
        👋 Welcome Pastor David
      </h1>

      <p style={{ color: "#666", marginBottom: 40 }}>
        Manage your sermons and ministry content from one place.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: 20,
        }}
      >
        <a href="/studio/structure/post;new">
          📖 New Sermon
        </a>

        <a href="/studio/structure/post;new">
          ❤️ New Devotional
        </a>

        <a href="/studio/structure/post;new">
          🎓 New Teaching
        </a>

        <a href="/studio/structure/post;new">
          📅 New Event
        </a>
      </div>
    </div>
  )
}