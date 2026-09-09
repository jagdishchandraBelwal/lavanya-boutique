import { useState } from 'react'

export default function Header({ page, setPage, category, goCollections, search, setSearch, goSearch }) {
  const [q, setQ] = useState(search || '')

  const go = (id) => setPage(id)

const isCatActive = (cat) => page === 'collections' && category === cat && !search

  const handleSearch = (e) => {
    e.preventDefault()
    const value = q.trim()
    if (value) {
      goSearch(value)
    } else {
      goCollections('All')
    }
  }

  return (
    <>
      <div className="topbar desktop-only">
        <div className="container topbar-inner">
          <span>187, Lane No. 5, Thapar Nagar, Meerut</span>
          <span>Multi Designer Store · Shipping available</span>
          <a
            href="https://www.instagram.com/lavanyatheboutiqueindia/"
            target="_blank"
            rel="noreferrer"
          >
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

    <form className="header-search desktop-only" onSubmit={handleSearch}>
  <span style={{ opacity: 0.5 }}>⌕</span>
  <input
    placeholder="Search outfits, festive, bridal..."
    value={q}
    onChange={(e) => setQ(e.target.value)}
  />
</form>

          <div className="header-icons">
            <a
              href="https://www.instagram.com/lavanyatheboutiqueindia/"
              target="_blank"
              rel="noreferrer"
              className="desktop-only"
            >
              Instagram
            </a>
            <button onClick={() => go('contact')} className="desktop-only">
              Visit Store
            </button>
            <button
              className="mobile-only"
              onClick={() => go('contact')}
              style={{ fontSize: '1.2rem' }}
            >
              📍
            </button>
          </div>
        </div>

        <nav className="cat-nav desktop-only">
          <div className="container cat-nav-inner">
            <button
              className={page === 'home' ? 'active' : ''}
              onClick={() => go('home')}
            >
              Home
            </button>

            <button onClick={() => goCollections('All')}>
              <span className="sale-badge">NEW</span>
            </button>

            <button
              className={isCatActive('Cocktail') ? 'active' : ''}
              onClick={() => goCollections('Cocktail')}
            >
              Cocktail
            </button>

            <button
              className={isCatActive('Festive') ? 'active' : ''}
              onClick={() => goCollections('Festive')}
            >
              Festive
            </button>

            <button
              className={isCatActive('Bridal') ? 'active' : ''}
              onClick={() => goCollections('Bridal')}
            >
              Bridal
            </button>

            <button
              className={isCatActive('Ethnic') ? 'active' : ''}
              onClick={() => goCollections('Ethnic')}
            >
              Ethnic
            </button>

            <button
              className={isCatActive('Accessories') ? 'active' : ''}
              onClick={() => goCollections('Accessories')}
            >
              Accessories
            </button>

            <button
              className={page === 'gallery' ? 'active' : ''}
              onClick={() => go('gallery')}
            >
              Gallery
            </button>

            <button
              className={page === 'about' ? 'active' : ''}
              onClick={() => go('about')}
            >
              About
            </button>

            <button
              className={page === 'contact' ? 'active' : ''}
              onClick={() => go('contact')}
            >
              Visit Store
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}