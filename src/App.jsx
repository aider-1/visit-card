import { useCallback, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import ConsultModal from './components/ConsultModal'
import { useReveal } from './hooks/useReveal'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  useReveal()

  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  return (
    <>
      <Header />
      <main>
        <Hero onConsult={openModal} />
        <About />
        <Services onConsult={openModal} />
        <Contacts />
      </main>
      <Footer />
      <ConsultModal open={modalOpen} onClose={closeModal} />
    </>
  )
}
