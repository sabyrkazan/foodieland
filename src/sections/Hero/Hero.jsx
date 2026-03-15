import './Hero.scss'

export default () => {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <h1 className="visually-hidden" id="hero-title">
        Spicy delicious chicken wings
      </h1>
      <div
        className="hero__slider swiper"
        data-js-slider={JSON.stringify({
          spaceBetween: 40,
          slidesPerView: 'auto',
          centeredSlides: true,
          initialSlide: 1,
          effect: 'coverflow',
        })}
      >
        <ul className="hero__slider-list swiper-wrapper">
          <li className="hero__slider-item swiper-slide">
            <article className="hero__slider-card hero-card">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              aperiam beatae consectetur distinctio, fugit harum quasi ratione
              recusandae sit voluptates.
            </article>
          </li>
        </ul>
      </div>
    </section>
  )
}
