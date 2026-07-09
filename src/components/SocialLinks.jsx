import { contacts } from '../data'
import tgIcon from '../assets/telegram.webp'
import maxIcon from '../assets/max.webp'

// Reusable Telegram + MAX icon links. `size` controls icon diameter (px).
export default function SocialLinks({ size = 34, className = '' }) {
  return (
    <div className={`social ${className}`} style={{ '--icon-size': `${size}px` }}>
      <a
        className="social__link"
        href={contacts.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в Telegram"
      >
        <img src={tgIcon} alt="Telegram" />
      </a>
      <a
        className="social__link"
        href={contacts.max}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в MAX"
      >
        <img src={maxIcon} alt="MAX" />
      </a>
    </div>
  )
}
