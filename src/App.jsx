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
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const goCollections = (cat = 'All') => {
    setCategory(cat)
    setSearch('') // clear search when picking a category
    setPage('collections')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goSearch = (query) => {
    setSearch(query)
    setCategory('All')
    setPage('collections')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goPage = (id) => {
    if (id === 'collections') {
      setCategory('All')
      setSearch('')
    }
    setPage(id)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const view = () => {
    switch (page) {
      case 'collections':
        return (
          <Collections
            setPage={goPage}
            category={category}
            setCategory={setCategory}
            search={search}
            setSearch={setSearch}
          />
        )
      case 'about':
        return <About />
      case 'gallery':
        return <Gallery />
      case 'contact':
        return <Contact />
      default:
        return <Home setPage={goPage} goCollections={goCollections} />
    }
  }

  return (
    <>
      <Header
        page={page}
        setPage={goPage}
        category={category}
        goCollections={goCollections}
        search={search}
        setSearch={setSearch}
        goSearch={goSearch}
      />
      <div className="page-wrap">{view()}</div>
      <Footer setPage={goPage} />
      <MobileNav page={page} setPage={goPage} />
    </>
  )
}