import { useEffect, useState } from 'react'
import { nav, contacts } from '../data'
import SocialLinks from './SocialLinks'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner">
        <button
          className={`header__burger ${open ? 'is-open' : ''}`}
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${open ? 'is-open' : ''}`}>
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={(e) => handleNav(e, item.href)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header__right">
          <SocialLinks
            size="clamp(26px, calc(18px + 1.05vw), 38px)"
            className="header__social"
          />
          <a className="header__phone" href={contacts.phoneHref}>
            <span className="header__phone-num">{contacts.phone}</span>
            <span className="header__phone-hours">{contacts.hours}</span>
          </a>
        </div>
      </div>
    </header>
  )
}
