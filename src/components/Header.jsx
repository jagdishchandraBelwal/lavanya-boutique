import { useState } from 'react'

export default function Header({ page, setPage }) {
  const [q, setQ] = useState('')

  const cats = [
    { id: 'home', label: 'Home' },
    { id: 'collections', label: 'New Arrivals', badge: null },
    { id: 'collections', label: 'Cocktail', badge: null },
    { id: 'collections', label: 'Festive', badge: null },
    { id: 'collections', label: 'Bridal', badge: null },
    { id: 'collections', label: 'Ethnic', badge: null },
    { id: 'collections', label: 'Accessories', badge: null },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Visit Store' },
  ]

  const go = (id) => {
    setPage(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="topbar desktop-only">
        <div className="container topbar-inner">
          <span>187, Lane No. 5, Thapar Nagar, Meerut</span>
          <span>Multi Designer Store · Shipping available</span>
          <a href="https://www.instagram.com/lavanyatheboutiqueindia/" target="_blank" rel="noreferrer">
            @lavanyatheboutiqueindia
          </a>
        </div>
      </div>

      <header className="header">
        <div className="container header-main">
          <div className="logo" onClick={() => go('home')}>
            Lavanya
            <span>Multi Designer Store</span>
          </div>

          <div className="header-search desktop-only">
            <span style={{ opacity: 0.5 }}>⌕</span>
            <input
              placeholder="Search outfits, festive, bridal..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>

          <div className="header-icons">
            <a href="https://www.instagram.com/lavanyatheboutiqueindia/" target="_blank" rel="noreferrer" className="desktop-only">
              Instagram
            </a>
            <button onClick={() => go('contact')} className="desktop-only">
              Visit Store
            </button>
            <button className="mobile-only" onClick={() => go('contact')} style={{ fontSize: '1.2rem' }}>
              📍
            </button>
          </div>
        </div>

        <nav className="cat-nav desktop-only">
          <div className="container cat-nav-inner">
            <button className={page === 'home' ? 'active' : ''} onClick={() => go('home')}>Home</button>
            <button onClick={() => go('collections')}>
              <span className="sale-badge">NEW</span>
            </button>
            <button className={page === 'collections' ? 'active' : ''} onClick={() => go('collections')}>Cocktail</button>
            <button onClick={() => go('collections')}>Festive</button>
            <button onClick={() => go('collections')}>Bridal</button>
            <button onClick={() => go('collections')}>Ethnic</button>
            <button onClick={() => go('collections')}>Accessories</button>
            <button className={page === 'gallery' ? 'active' : ''} onClick={() => go('gallery')}>Gallery</button>
            <button className={page === 'about' ? 'active' : ''} onClick={() => go('about')}>About</button>
            <button className={page === 'contact' ? 'active' : ''} onClick={() => go('contact')}>Visit Store</button>
          </div>
        </nav>
      </header>
    </>
  )
}
