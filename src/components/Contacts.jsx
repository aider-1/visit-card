import { contacts } from '../data'
import diagram from '../assets/diagram.svg'
import { usePhoneAction } from '../hooks/usePhoneAction'

export default function Contacts() {
  const { phoneCopied, handlePhone } = usePhoneAction(contacts.phoneHref)

  return (
    <section className="contacts" id="contacts">
      <h2 className="section-title reveal">Контакты</h2>

      <div className="contacts__banner-shell reveal">
        <picture className="contacts__bars">
          <img src={diagram} alt="" aria-hidden="true" />
        </picture>

        <div className="contacts__banner">
          <p className="contacts__lead">По всем вопросам обращайтесь по телефону</p>

          <div className="contacts__row">
            <div className="contacts__phone-block">
              <a
                className={`phone-action contacts__phone ${phoneCopied ? 'is-copied' : ''}`}
                href={contacts.phoneHref}
                onClick={handlePhone}
              >
                {contacts.phone}
              </a>
              <span className="phone-action__status contacts__hours" aria-live="polite">
                {phoneCopied ? 'Номер скопирован' : contacts.hours}
              </span>
            </div>

            <div className="contacts__addr-block">
              <span>{contacts.city}</span>
              <span>{contacts.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
