const products = [
  { name: 'Emerald Cocktail Set', cat: 'Cocktail', price: '₹5,499', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', badge: 'NEW' },
  { name: 'Festive Floral Coord', cat: 'Festive', price: '₹3,999', old: '₹5,499', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80', badge: 'SALE' },
  { name: 'Ivory Bridal Lehenga', cat: 'Bridal', price: '₹12,999', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80' },
  { name: 'Rose Party Gown', cat: 'Cocktail', price: '₹6,299', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80', badge: 'NEW' },
  { name: 'Pastel Ethnic Set', cat: 'Ethnic', price: '₹4,299', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80' },
  { name: 'Gold Accent Dress', cat: 'Cocktail', price: '₹5,799', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80' },
  { name: 'Soft Drape Kurta', cat: 'Ethnic', price: '₹2,999', old: '₹3,999', img: 'https://images.unsplash.com/photo-1583391733981-8bcea7688642?w=600&q=80', badge: 'SALE' },
  { name: 'Blush Bridal Set', cat: 'Bridal', price: '₹15,999', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', badge: 'NEW' },
  { name: 'Marigold Festive Set', cat: 'Festive', price: '₹4,599', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80', badge: 'NEW' },
  { name: 'Statement Earrings', cat: 'Accessories', price: '₹1,299', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
  { name: 'Red Bridal Lehenga', cat: 'Bridal', price: '₹18,999', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80', badge: 'NEW' },
  { name: 'Kundan Choker', cat: 'Accessories', price: '₹2,499', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', badge: 'NEW' },
]

export default function Home({ setPage, goCollections }) {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <p style={{ fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-dark)', marginBottom: 10, fontWeight: 500 }}>
              Multi Designer Store · Meerut
            </p>
            <h1>
              New<br /><em>Arrivals</em>
            </h1>
            <p className="tagline">
              Cocktail evenings, festive celebrations and bridal grace — curated designer wear at Thapar Nagar.
            </p>
            <div className="hero-btns">
              <button className="btn btn-primary"onClick={() => goCollections('All')}>Shop Now</button>
              <button className="btn btn-outline" onClick={() => setPage('contact')}>Visit Store</button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=900&q=80" alt="Festive collection" />
          </div>
        </div>
      </section>

      <div className="feature-strip">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {[
            { ico: '✦', t: 'Multi Designer', d: 'Curated labels' },
            { ico: '◈', t: 'Occasion Wear', d: 'Cocktail to bridal' },
            { ico: '◎', t: 'In-Store Try', d: 'Thapar Nagar' },
            { ico: '♡', t: 'Instagram First', d: 'Latest on IG' },
          ].map((f) => (
            <div key={f.t} className="feature-item">
              <div className="icon">{f.ico}</div>
              <h4>{f.t}</h4>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>New Arrivals</h2>
            <p>Shop our latest ethnic and contemporary looks</p>
          </div>

    <div className="cat-pills">
  {['All', 'Cocktail', 'Festive', 'Bridal', 'Ethnic', 'Accessories'].map((c) => (
    <button
      key={c}
      className={`cat-pill ${c === 'All' ? 'active' : ''}`}
      onClick={() => goCollections(c)}
    >
      {c}
    </button>
  ))}
</div>

          <div className="product-grid">
            {products.map((p) => (
              <div key={p.name} className="product-card" onClick={() => setPage('collections')}>
                <div className="product-img">
                  <img src={p.img} alt={p.name} loading="lazy" />
                  {p.badge && <span className="product-badge">{p.badge}</span>}
                </div>
                <div className="product-info">
                  <div className="cat">{p.cat}</div>
                  <h3>{p.name}</h3>
                  <div className="price">
                    {p.price}
                    {p.old && <s>{p.old}</s>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button className="btn btn-dark" onClick={() => setPage('collections')}>View All Collections</button>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 64px' }}>
        <div className="container">
          <div className="about-banner">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Boutique" />
            <div className="about-banner-text">
              <h2>Visit Lavanya</h2>
              <p>
                A multi-designer studio in Meerut offering cocktail dresses, festive coordinates,
                bridal ensembles and refined ethnic wear.
              </p>
              <p>
                <strong>187, Lane No. 5, Thapar Nagar, Meerut</strong>
              </p>
              <button className="btn btn-primary" style={{ marginTop: 16, alignSelf: 'flex-start' }} onClick={() => setPage('contact')}>
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
