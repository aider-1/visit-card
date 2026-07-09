import heroCard from '../assets/hero-card.png'
import heroBannerBackground from '../../banner_background.svg'
import heroBannerIcon from '../../banner_icon.svg'

export default function Hero({ onConsult }) {
  return (
    <section className="hero" id="top">
      <div className="hero__banner reveal">
        <picture className="hero__banner-media">
          <source media="(max-width: 759px)" srcSet={heroBannerBackground} />
          <img className="hero__banner-img" src={heroCard} alt="" aria-hidden="true" />
        </picture>
        <img className="hero__banner-icon" src={heroBannerIcon} alt="" aria-hidden="true" />

        <div className="hero__content">
          <h1 className="hero__title">
            Бухгалтерское обслуживание
            <br />
            для ИП и ООО
          </h1>
          <ul className="hero__subs">
            <li>Финансовое планирование и бизнес-расчеты</li>
            <li>Комплексный учет</li>
            <li>Сопровождение бизнеса</li>
          </ul>
          <button className="btn btn--gold hero__cta" onClick={onConsult}>
            Получить консультацию
          </button>
        </div>
      </div>
    </section>
  )
}
