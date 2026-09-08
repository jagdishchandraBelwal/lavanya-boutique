export default function Footer({ setPage }) {
  const go = (id) => {
    setPage(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo">
              Lavanya
              <span>Multi Designer Store</span>
            </div>
            <p style={{ marginTop: 12 }}>
              Curated cocktail, festive, bridal and ethnic wear in Meerut.
              Visit us at Thapar Nagar or DM on Instagram.
            </p>
          </div>
          <div>
            <h4>Shop</h4>
            <ul>
              <li><button onClick={() => go('collections')}>New Arrivals</button></li>
              <li><button onClick={() => go('collections')}>Cocktail</button></li>
              <li><button onClick={() => go('collections')}>Festive</button></li>
              <li><button onClick={() => go('collections')}>Bridal</button></li>
              <li><button onClick={() => go('collections')}>Accessories</button></li>
            </ul>
          </div>
          <div>
            <h4>Store</h4>
            <ul>
              <li><button onClick={() => go('about')}>About Us</button></li>
              <li><button onClick={() => go('gallery')}>Gallery</button></li>
              <li><button onClick={() => go('contact')}>Visit Store</button></li>
              <li>
                <a href="https://www.instagram.com/lavanyatheboutiqueindia/" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Visit</h4>
            <ul>
              <li>187, Lane No. 5</li>
              <li>Thapar Nagar, Meerut</li>
              <li>Uttar Pradesh</li>
              <li style={{ marginTop: 12 }}>
                <a href="https://www.instagram.com/lavanyatheboutiqueindia/" target="_blank" rel="noreferrer">
                  @lavanyatheboutiqueindia
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Lavanya Multi Designer Store · Meerut</span>
          <span>Concept website — not affiliated</span>
        </div>
      </div>
    </footer>
  )
}
