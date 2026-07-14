import { useEffect, useState } from 'react'
import { nav, contacts } from '../data'
import { usePhoneAction } from '../hooks/usePhoneAction'
import SocialLinks from './SocialLinks'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { phoneCopied, handlePhone } = usePhoneAction(contacts.phoneHref)

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
            size="clamp(18px, calc(17px + 1.3vw), 38px)"
            className="header__social"
          />
          <a
            className={`phone-action header__phone ${phoneCopied ? 'is-copied' : ''}`}
            href={contacts.phoneHref}
            onClick={handlePhone}
          >
            <span className="header__phone-num">{contacts.phone}</span>
            <span className="phone-action__status header__phone-hours" aria-live="polite">
              {phoneCopied ? 'Номер скопирован' : contacts.hours}
            </span>
          </a>
        </div>
      </div>
    </header>
  )
}
