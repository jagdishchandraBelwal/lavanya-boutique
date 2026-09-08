import { useEffect } from 'react'

export default function Gallery() {
  useEffect(() => {
    const id = 'sk-lavanya-ig'
    if (document.getElementById(id)) return
    const s = document.createElement('script')
    s.id = id
    s.src = 'https://widgets.sociablekit.com/instagram-feed/widget.js'
    s.defer = true
    document.body.appendChild(s)
  }, [])

  return (
    <section className="section" style={{ paddingTop: 40 }}>
      <div className="container">
        <div className="section-head">
          <h2>Gallery</h2>
          <p>Latest from @lavanyatheboutiqueindia</p>
        </div>

        <div style={{
          background: 'var(--white)',
          borderRadius: 8,
          padding: 24,
          border: '1px solid var(--border)',
          minHeight: 280,
          marginBottom: 40,
        }}>
          {/* Replace data-embed-id with your SociableKIT ID for lavanyatheboutiqueindia */}
          <div className="sk-instagram-feed" data-embed-id="25711851"></div>
          <p style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '0.9rem', marginTop: 16 }}>
            Connect SociableKIT embed for @lavanyatheboutiqueindia to show live posts here.
          </p>
        </div>

        <div className="product-grid">
          {[
            'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80',
            'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80',
            'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=600&q=80',
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80',
            'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80',
            'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80',
            'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
          ].map((src, i) => (
            <div key={i} className="product-card">
              <div className="product-img">
                <img src={src} alt={`Look ${i + 1}`} loading="lazy" />
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <a
            className="btn btn-outline"
            href="https://www.instagram.com/lavanyatheboutiqueindia/"
            target="_blank"
            rel="noreferrer"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
