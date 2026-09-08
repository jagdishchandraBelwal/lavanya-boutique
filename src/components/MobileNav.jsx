export default function MobileNav({ page, setPage }) {
  const items = [
    { id: 'home', label: 'Home', ico: '⌂' },
    { id: 'collections', label: 'Shop', ico: '◈' },
    { id: 'gallery', label: 'Gallery', ico: '▢' },
    { id: 'about', label: 'About', ico: '◎' },
    { id: 'contact', label: 'Visit', ico: '📍' },
  ]

  return (
    <div className="mobile-bottom-nav">
      <div className="mobile-bottom-nav-inner">
        {items.map((item) => (
          <button
            key={item.id}
            className={page === item.id ? 'active' : ''}
            onClick={() => {
              setPage(item.id)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            <span className="ico">{item.ico}</span>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  )
}
