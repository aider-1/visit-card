import { useEffect, useRef } from 'react'
import { contacts } from '../data'
import tgIcon from '../assets/telegram.webp'
import maxIcon from '../assets/max.webp'

export default function ConsultModal({ open, onClose }) {
  const dialogRef = useRef(null)

  // Close on Escape + lock background scroll while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    // Move focus into the dialog for accessibility.
    dialogRef.current?.focus()
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  return (
    <div
      className={`modal ${open ? 'is-open' : ''}`}
      onClick={onClose}
      aria-hidden={!open}
    >
      <div
        className="modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal__glow" />
        <button className="modal__close" onClick={onClose} aria-label="Закрыть">
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <path
              d="M6 6l12 12M18 6L6 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <p className="modal__eyebrow">Свяжитесь с нами</p>
        <h3 className="modal__title" id="modal-title">
          Получить консультацию
        </h3>
        <p className="modal__text">
          Позвоните или напишите удобным способом — ответим на вопросы и подберём
          решение под ваш бизнес.
        </p>

        <a className="modal__phone" href={contacts.phoneHref}>
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path
              d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.5 11.5 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .57 3.6 1 1 0 0 1-.25 1z"
              fill="currentColor"
            />
          </svg>
          <span>
            <span className="modal__phone-num">{contacts.phone}</span>
            <span className="modal__phone-hours">{contacts.hours}</span>
          </span>
        </a>

        <div className="modal__divider">
          <span>или в мессенджерах</span>
        </div>

        <div className="modal__socials">
          <a
            className="modal__social modal__social--tg"
            href={contacts.telegram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tgIcon} alt="" aria-hidden="true" />
            <span>Telegram</span>
          </a>
          <a
            className="modal__social modal__social--max"
            href={contacts.max}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={maxIcon} alt="" aria-hidden="true" />
            <span>MAX</span>
          </a>
        </div>

        <p className="modal__addr">
          {contacts.city}, {contacts.address}
        </p>
      </div>
    </div>
  )
}
