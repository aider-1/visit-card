import heroBannerIcon from '../../banner_icon.svg'

export default function Hero({ onConsult }) {
  return (
    <section className="hero" id="top">
      <div className="hero__banner reveal">
        <div className="hero__banner-media" aria-hidden="true" />
        <img className="hero__banner-icon" src={heroBannerIcon} width="884" height="883" alt="" aria-hidden="true" />

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
