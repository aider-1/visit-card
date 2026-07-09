import { trustPoints } from '../data'
import checkIcon from '../assets/icon-check.png'
import arrowSpiral from '../assets/arrow-spiral.png'

export default function About() {
  return (
    <section className="about" id="about">
      <p className="about__lead reveal">
        Профессиональное бухгалтерское сопровождение с опытом более 15 лет.
        Не ограничиваемся стандартным ведением учёта&nbsp;– анализируем риски,
        консультируем и предлагаем оптимальные решения
      </p>

      <div className="about__trust">
        <div className="about__trust-col">
          <img
            className="about__arrow"
            src={arrowSpiral}
            alt=""
            aria-hidden="true"
          />

          <h2 className="about__trust-title reveal">Почему нам доверяют?</h2>
          <ul className="trust-list">
            {trustPoints.map((point, i) => (
              <li
                className="trust-list__item reveal"
                key={point}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <img className="trust-list__check" src={checkIcon} alt="" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
