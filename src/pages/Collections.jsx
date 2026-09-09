const items = [
  // ========== COCKTAIL (20) ==========
  { name: 'Emerald Cocktail Set', cat: 'Cocktail', price: '₹5,499', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', badge: 'NEW' },
  { name: 'Rose Party Gown', cat: 'Cocktail', price: '₹6,299', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80', badge: 'NEW' },
  { name: 'Midnight Evening Look', cat: 'Cocktail', price: '₹7,499', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80' },
  { name: 'Gold Accent Dress', cat: 'Cocktail', price: '₹5,799', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80' },
  { name: 'Black Sequin Night Dress', cat: 'Cocktail', price: '₹8,299', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80', badge: 'NEW' },
  { name: 'Champagne Slip Dress', cat: 'Cocktail', price: '₹4,999', old: '₹6,499', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', badge: 'SALE' },
  { name: 'Wine Velvet Cocktail', cat: 'Cocktail', price: '₹6,899', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80' },
  { name: 'Silver Shimmer Gown', cat: 'Cocktail', price: '₹9,499', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80', badge: 'NEW' },
  { name: 'Blush Party Midi', cat: 'Cocktail', price: '₹4,299', img: 'https://images.unsplash.com/photo-1583391733981-8bcea7688642?w=600&q=80' },
  { name: 'Navy One-Shoulder Dress', cat: 'Cocktail', price: '₹5,999', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
  { name: 'Ivory Lace Cocktail', cat: 'Cocktail', price: '₹7,199', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80' },
  { name: 'Red Carpet Gown', cat: 'Cocktail', price: '₹11,999', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80', badge: 'NEW' },
  { name: 'Pearl Beaded Evening', cat: 'Cocktail', price: '₹8,799', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80' },
  { name: 'Teal Satin Slip', cat: 'Cocktail', price: '₹4,599', old: '₹5,999', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80', badge: 'SALE' },
  { name: 'Black Tie Midi', cat: 'Cocktail', price: '₹5,299', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { name: 'Rose Gold Party Set', cat: 'Cocktail', price: '₹6,499', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80', badge: 'NEW' },
  { name: 'Emerald Off-Shoulder', cat: 'Cocktail', price: '₹7,899', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80' },
  { name: 'White Column Gown', cat: 'Cocktail', price: '₹9,299', img: 'https://images.unsplash.com/photo-1583391733981-8bcea7688642?w=600&q=80' },
  { name: 'Berry Velvet Dress', cat: 'Cocktail', price: '₹6,199', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
  { name: 'Crystal Evening Look', cat: 'Cocktail', price: '₹10,499', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80', badge: 'NEW' },

  // ========== FESTIVE (20) ==========
  { name: 'Festive Floral Coord', cat: 'Festive', price: '₹3,999', old: '₹5,499', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80', badge: 'SALE' },
  { name: 'Marigold Festive Set', cat: 'Festive', price: '₹4,599', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80', badge: 'NEW' },
  { name: 'Soft Festive Drape', cat: 'Festive', price: '₹3,299', img: 'https://images.unsplash.com/photo-1583391733981-8bcea7688642?w=600&q=80' },
  { name: 'Ruby Festive Anarkali', cat: 'Festive', price: '₹5,299', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
  { name: 'Peacock Blue Coord', cat: 'Festive', price: '₹4,199', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80', badge: 'NEW' },
  { name: 'Pastel Sharara Set', cat: 'Festive', price: '₹6,799', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80' },
  { name: 'Golden Gota Suit', cat: 'Festive', price: '₹5,999', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80', badge: 'NEW' },
  { name: 'Pink Bandhani Set', cat: 'Festive', price: '₹4,499', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { name: 'Teal Festive Kurta Set', cat: 'Festive', price: '₹3,799', old: '₹4,999', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80', badge: 'SALE' },
  { name: 'Orange Phulkari Coord', cat: 'Festive', price: '₹4,899', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80' },
  { name: 'Ivory Festive Palazzo', cat: 'Festive', price: '₹3,599', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80' },
  { name: 'Magenta Anarkali', cat: 'Festive', price: '₹6,299', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', badge: 'NEW' },
  { name: 'Green Mirror Work Set', cat: 'Festive', price: '₹5,499', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80' },
  { name: 'Yellow Diwali Coord', cat: 'Festive', price: '₹3,999', img: 'https://images.unsplash.com/photo-1583391733981-8bcea7688642?w=600&q=80' },
  { name: 'Purple Sharara', cat: 'Festive', price: '₹7,199', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80', badge: 'NEW' },
  { name: 'Coral Festive Suit', cat: 'Festive', price: '₹4,299', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80' },
  { name: 'Silver Border Anarkali', cat: 'Festive', price: '₹5,799', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { name: 'Mustard Kurta Set', cat: 'Festive', price: '₹3,499', old: '₹4,499', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80', badge: 'SALE' },
  { name: 'Royal Blue Festive', cat: 'Festive', price: '₹6,599', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80' },
  { name: 'Peach Gharara Set', cat: 'Festive', price: '₹8,299', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80', badge: 'NEW' },

  // ========== BRIDAL (20) ==========
  { name: 'Ivory Bridal Lehenga', cat: 'Bridal', price: '₹12,999', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80' },
  { name: 'Bridal Dupatta', cat: 'Bridal', price: '₹3,499', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80' },
  { name: 'Blush Bridal Set', cat: 'Bridal', price: '₹15,999', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80', badge: 'NEW' },
  { name: 'Red Bridal Lehenga', cat: 'Bridal', price: '₹18,999', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80', badge: 'NEW' },
  { name: 'Gold Embroidered Lehenga', cat: 'Bridal', price: '₹22,499', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80' },
  { name: 'Reception Gown', cat: 'Bridal', price: '₹9,999', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80' },
  { name: 'Maroon Velvet Lehenga', cat: 'Bridal', price: '₹19,999', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80', badge: 'NEW' },
  { name: 'Pink Bridal Sharara', cat: 'Bridal', price: '₹14,499', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { name: 'Heavy Zardozi Lehenga', cat: 'Bridal', price: '₹28,999', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80' },
  { name: 'Pastel Bridal Coord', cat: 'Bridal', price: '₹11,499', img: 'https://images.unsplash.com/photo-1583391733981-8bcea7688642?w=600&q=80', badge: 'NEW' },
  { name: 'Sangeet Night Lehenga', cat: 'Bridal', price: '₹16,999', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
  { name: 'Champagne Bridal Gown', cat: 'Bridal', price: '₹13,999', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80' },
  { name: 'Mehendi Green Set', cat: 'Bridal', price: '₹10,999', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80', badge: 'NEW' },
  { name: 'Wedding Red Anarkali', cat: 'Bridal', price: '₹12,499', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80' },
  { name: 'Gold Border Dupatta Set', cat: 'Bridal', price: '₹8,999', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80' },
  { name: 'Ivory Reception Look', cat: 'Bridal', price: '₹14,999', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80', badge: 'NEW' },
  { name: 'Rose Pink Lehenga', cat: 'Bridal', price: '₹17,499', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { name: 'Traditional Red Bridal', cat: 'Bridal', price: '₹24,999', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80' },
  { name: 'Minimal Bridal White', cat: 'Bridal', price: '₹11,999', img: 'https://images.unsplash.com/photo-1583391733981-8bcea7688642?w=600&q=80', badge: 'NEW' },
  { name: 'Embroidered Bridal Cape', cat: 'Bridal', price: '₹9,499', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },

  // ========== ETHNIC (20) ==========
  { name: 'Pastel Ethnic Set', cat: 'Ethnic', price: '₹4,299', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80' },
  { name: 'Soft Drape Kurta', cat: 'Ethnic', price: '₹2,999', old: '₹3,999', img: 'https://images.unsplash.com/photo-1583391733981-8bcea7688642?w=600&q=80', badge: 'SALE' },
  { name: 'Printed Ethnic Coord', cat: 'Ethnic', price: '₹3,799', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80' },
  { name: 'Cotton Kurta Palazzo', cat: 'Ethnic', price: '₹2,499', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80', badge: 'NEW' },
  { name: 'Handblock Print Set', cat: 'Ethnic', price: '₹3,599', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { name: 'Linen Everyday Kurta', cat: 'Ethnic', price: '₹2,199', old: '₹2,999', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80', badge: 'SALE' },
  { name: 'Indigo Dye Coord', cat: 'Ethnic', price: '₹3,299', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80', badge: 'NEW' },
  { name: 'White Chikankari Kurta', cat: 'Ethnic', price: '₹3,999', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
  { name: 'Beige Linen Set', cat: 'Ethnic', price: '₹2,799', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80' },
  { name: 'Floral Print Palazzo', cat: 'Ethnic', price: '₹3,499', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80' },
  { name: 'Olive Green Kurta', cat: 'Ethnic', price: '₹2,599', img: 'https://images.unsplash.com/photo-1583391733981-8bcea7688642?w=600&q=80', badge: 'NEW' },
  { name: 'Ajrakh Print Set', cat: 'Ethnic', price: '₹4,199', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80' },
  { name: 'Soft Pink Coord', cat: 'Ethnic', price: '₹3,199', old: '₹4,199', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80', badge: 'SALE' },
  { name: 'Navy Ethnic Suit', cat: 'Ethnic', price: '₹3,899', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { name: 'Yellow Summer Kurta', cat: 'Ethnic', price: '₹2,399', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80', badge: 'NEW' },
  { name: 'Grey Everyday Set', cat: 'Ethnic', price: '₹2,899', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80' },
  { name: 'Rust Orange Coord', cat: 'Ethnic', price: '₹3,699', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80' },
  { name: 'Mint Green Kurta Set', cat: 'Ethnic', price: '₹3,099', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80' },
  { name: 'Black Ethnic Coord', cat: 'Ethnic', price: '₹3,999', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80', badge: 'NEW' },
  { name: 'Cream Embroidered Set', cat: 'Ethnic', price: '₹4,599', img: 'https://images.unsplash.com/photo-1583391733981-8bcea7688642?w=600&q=80' },

  // ========== ACCESSORIES (20) ==========
  { name: 'Statement Earrings', cat: 'Accessories', price: '₹1,299', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
  { name: 'Festive Clutch', cat: 'Accessories', price: '₹1,899', img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80' },
  { name: 'Layered Necklace', cat: 'Accessories', price: '₹999', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80' },
  { name: 'Kundan Choker', cat: 'Accessories', price: '₹2,499', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', badge: 'NEW' },
  { name: 'Potli Bag', cat: 'Accessories', price: '₹1,599', img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80' },
  { name: 'Pearl Drop Earrings', cat: 'Accessories', price: '₹899', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80', badge: 'SALE' },
  { name: 'Gold Bangle Set', cat: 'Accessories', price: '₹1,799', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', badge: 'NEW' },
  { name: 'Embellished Clutch', cat: 'Accessories', price: '₹2,299', img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80' },
  { name: 'Jhumka Earrings', cat: 'Accessories', price: '₹1,199', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
  { name: 'Temple Jewellery Set', cat: 'Accessories', price: '₹3,499', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80', badge: 'NEW' },
  { name: 'Silk Potli', cat: 'Accessories', price: '₹1,399', img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80' },
  { name: 'Chandbali Earrings', cat: 'Accessories', price: '₹1,599', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
  { name: 'Matha Patti', cat: 'Accessories', price: '₹2,199', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80' },
  { name: 'Beaded Necklace', cat: 'Accessories', price: '₹1,099', old: '₹1,499', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80', badge: 'SALE' },
  { name: 'Bridal Maang Tikka', cat: 'Accessories', price: '₹1,899', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', badge: 'NEW' },
  { name: 'Mirror Work Clutch', cat: 'Accessories', price: '₹1,799', img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80' },
  { name: 'Oxidised Ring Set', cat: 'Accessories', price: '₹699', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80' },
  { name: 'Pearl Choker', cat: 'Accessories', price: '₹1,499', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80' },
  { name: 'Festive Bangle Stack', cat: 'Accessories', price: '₹1,299', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80', badge: 'NEW' },
  { name: 'Embroidered Box Clutch', cat: 'Accessories', price: '₹2,099', img: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80' },
]

const categories = ['All', 'Cocktail', 'Festive', 'Bridal', 'Ethnic', 'Accessories']

export default function Collections({ setPage, category = 'All', setCategory }) {
  const active = category || 'All'
  const filtered =
    active === 'All' ? items : items.filter((p) => p.cat === active)

  return (
    <section className="section" style={{ paddingTop: 40 }}>
      <div className="container">
        <div className="section-head">
          <h2>{active === 'All' ? 'Collections' : active}</h2>
          <p>
            {active === 'All'
              ? `${items.length} curated pieces · Cocktail · Festive · Bridal · Ethnic · Accessories`
              : `${filtered.length} piece${filtered.length !== 1 ? 's' : ''} in ${active}`}
          </p>
        </div>

        <div className="cat-pills">
          {categories.map((c) => (
            <button
              key={c}
              className={`cat-pill ${active === c ? 'active' : ''}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'var(--muted)', padding: '40px 0' }}>
            No pieces in this category yet. Visit the store for the full collection.
          </p>
        ) : (
          <div className="product-grid">
            {filtered.map((p) => (
              <div key={p.name + p.cat} className="product-card">
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
        )}

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <p style={{ color: 'var(--muted)', marginBottom: 16, fontSize: '0.95rem' }}>
            Prices are indicative. Visit the store or DM on Instagram for size, fabric & availability.
          </p>
          <button className="btn btn-primary" onClick={() => setPage('contact')}>
            Visit Store to Try
          </button>
        </div>
      </div>
    </section>
  )
}