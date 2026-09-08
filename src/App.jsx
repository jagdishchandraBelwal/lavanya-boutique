import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNav from './components/MobileNav'
import Home from './pages/Home'
import Collections from './pages/Collections'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

export default function App() {
  const [page, setPage] = useState('home')

  const view = () => {
    switch (page) {
      case 'collections': return <Collections setPage={setPage} />
      case 'about': return <About />
      case 'gallery': return <Gallery />
      case 'contact': return <Contact />
      default: return <Home setPage={setPage} />
    }
  }

  return (
    <>
      <Header page={page} setPage={setPage} />
      <div className="page-wrap">{view()}</div>
      <Footer setPage={setPage} />
      <MobileNav page={page} setPage={setPage} />
    </>
  )
}
