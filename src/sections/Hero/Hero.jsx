import './Hero.scss'
import { HeroCard } from '@/components/HeroCard'
import { slides } from './hero.data'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 className="visually-hidden" id="hero-title">
        Spicy delicious chicken wings
      </h1>
      <div
        className="hero__slider swiper"
        data-js-slider={JSON.stringify({
          spaceBetween: 120,
          slidesPerView: 'auto',
          centeredSlides: true,
          initialSlide: 1,
          effect: 'coverflow',
        })}
      >
        <ul className="hero__slider-list swiper-wrapper">
          {slides.map(({ id, slide }) => (
            <li className="hero__slider-item swiper-slide" key={id}>
              <HeroCard className="hero__slider-card" {...slide} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
