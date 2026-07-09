import heroCard from '../assets/hero-card.png'
import heroCardMobile from '../assets/banner_1440x540_mobile.svg'

export default function Hero({ onConsult }) {
  return (
    <section className="hero" id="top">
      <div className="hero__banner reveal">
        <picture className="hero__banner-media">
          <source media="(max-width: 760px)" srcSet={heroCardMobile} />
          <img className="hero__banner-img" src={heroCard} alt="" aria-hidden="true" />
        </picture>

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
