import { services } from '../data'
import iconCalculator from '../assets/icon-calculator.png'
import iconFolders from '../assets/icon-folders.png'
import iconPeople from '../assets/icon-people.png'

const icons = {
  calculator: iconCalculator,
  folders: iconFolders,
  people: iconPeople,
}

// Render a multi-line string (with \n) as text with <br/> breaks.
function MultiLine({ text }) {
  return text.split('\n').map((line, i, arr) => (
    <span key={i}>
      {line}
      {i < arr.length - 1 && <br />}
    </span>
  ))
}

export default function Services({ onConsult }) {
  return (
    <section className="services" id="services">
      <h2 className="section-title reveal">Услуги</h2>

      <div className="services__grid">
        {services.map((service, i) => (
          <article
            className="card reveal"
            key={service.icon}
            style={{ transitionDelay: `${i * 120}ms` }}
          >
            <div className="card__head">
              <span className="card__icon">
                <img src={icons[service.icon]} alt="" aria-hidden="true" />
              </span>
              <h3 className="card__title">
                <MultiLine text={service.title} />
              </h3>
            </div>

            <ul className="card__list">
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <p className="card__highlight">
              <MultiLine text={service.highlight} />
            </p>
          </article>
        ))}
      </div>

      <div className="services__cta reveal">
        <button className="btn btn--gold" onClick={onConsult}>
          Получить консультацию
        </button>
        <p className="services__note">
          *расчет стоимости услуг производится индивидуально после консультации
        </p>
      </div>
    </section>
  )
}
