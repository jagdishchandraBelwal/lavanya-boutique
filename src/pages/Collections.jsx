const items = [
  { name: 'Emerald Cocktail Set', cat: 'Cocktail', price: '₹5,499', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', badge: 'NEW' },
  { name: 'Festive Floral Coord', cat: 'Festive', price: '₹3,999', old: '₹5,499', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80', badge: 'SALE' },
  { name: 'Ivory Bridal Lehenga', cat: 'Bridal', price: '₹12,999', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80' },
  { name: 'Rose Party Gown', cat: 'Cocktail', price: '₹6,299', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80', badge: 'NEW' },
  { name: 'Pastel Ethnic Set', cat: 'Ethnic', price: '₹4,299', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80' },
  { name: 'Gold Accent Dress', cat: 'Occasion', price: '₹5,799', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80' },
  { name: 'Soft Drape Kurta', cat: 'Ethnic', price: '₹2,999', old: '₹3,999', img: 'https://images.unsplash.com/photo-1583391733981-8bcea7688642?w=600&q=80', badge: 'SALE' },
  { name: 'Midnight Evening Look', cat: 'Cocktail', price: '₹7,499', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80' },
  { name: 'Statement Earrings', cat: 'Accessories', price: '₹1,299', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
  { name: 'Festive Clutch', cat: 'Accessories', price: '₹1,899', img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80' },
  { name: 'Layered Necklace', cat: 'Accessories', price: '₹999', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80' },
  { name: 'Bridal Dupatta', cat: 'Bridal', price: '₹3,499', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80' },
]

export default function Collections({ setPage }) {
  return (
    <section className="section" style={{ paddingTop: 40 }}>
      <div className="container">
        <div className="section-head">
          <h2>Collections</h2>
          <p>Cocktail · Festive · Bridal · Ethnic · Accessories</p>
        </div>
        <div className="cat-pills">
          {['All', 'Cocktail', 'Festive', 'Bridal', 'Ethnic', 'Accessories'].map((c) => (
            <button key={c} className={`cat-pill ${c === 'All' ? 'active' : ''}`}>{c}</button>
          ))}
        </div>
        <div className="product-grid">
          {items.map((p) => (
            <div key={p.name} className="product-card">
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
          <button className="btn btn-primary" onClick={() => setPage('contact')}>Visit Store to Try</button>
        </div>
      </div>
    </section>
  )
}
