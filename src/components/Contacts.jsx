import { contacts } from '../data'
import diagram from '../assets/diagram.svg'

export default function Contacts() {
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
              <a className="contacts__phone" href={contacts.phoneHref}>
                {contacts.phone}
              </a>
              <span className="contacts__hours">{contacts.hours}</span>
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
