import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', interest: 'Cocktail / Party', msg: '' })
  const [done, setDone] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    window.open('https://www.instagram.com/lavanyatheboutiqueindia/', '_blank')
    setDone(true)
  }

  return (
    <section className="section" style={{ paddingTop: 40 }}>
      <div className="container">
        <div className="section-head">
          <h2>Visit Us</h2>
          <p>187, Lane No. 5, Thapar Nagar, Meerut</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 32 }} className="contact-grid-resp">
          <div>
            <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 8, padding: 28, marginBottom: 20 }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: 16, color: 'var(--maroon)' }}>Store details</h3>
              <p style={{ marginBottom: 12 }}><strong>Address</strong><br />187, Lane Number 5, Thapar Nagar, Meerut, UP</p>
              <p style={{ marginBottom: 12 }}><strong>Instagram</strong><br />@lavanyatheboutiqueindia</p>
              <p><strong>What we offer</strong><br />Cocktail · Festive · Bridal · Ethnic · Accessories</p>
            </div>
            <a
              className="btn btn-primary"
              style={{ width: '100%', textAlign: 'center' }}
              href="https://www.google.com/maps/search/?api=1&query=187+Lane+Number+5+Thapar+Nagar+Meerut"
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>

          <div style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: 8, padding: 28 }}>
            {done ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <h3 style={{ marginBottom: 10 }}>Thank you</h3>
                <p style={{ color: 'var(--muted)' }}>Instagram opened — send them a DM to connect.</p>
                <button className="btn btn-outline" style={{ marginTop: 20 }} onClick={() => setDone(false)}>Send another</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: 20, color: 'var(--maroon)' }}>Message us</h3>
                <div style={{ display: 'grid', gap: 14 }}>
                  <input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle} />
                  <input placeholder="Phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    style={inputStyle} />
                  <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} style={inputStyle}>
                    <option>Cocktail / Party</option>
                    <option>Festive Wear</option>
                    <option>Bridal / Wedding</option>
                    <option>Ethnic / Coord</option>
                    <option>Accessories</option>
                  </select>
                  <textarea placeholder="What are you looking for?" rows={4} value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })} style={{ ...inputStyle, resize: 'vertical' }} />
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Message on Instagram</button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .contact-grid-resp { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  border: '1px solid var(--border)',
  borderRadius: 6,
  fontFamily: 'Jost, sans-serif',
  fontSize: '0.95rem',
  background: 'var(--cream)',
  outline: 'none',
}
