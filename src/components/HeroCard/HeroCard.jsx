import './HeroCard.scss'
import clsx from 'clsx'
import { Icon } from '@/components/Icon'
import { Image } from 'minista'
import { AuthorCard } from '@/components/AuthorCard'
import Button from '@/components/Button'
import buttonPlayIcon from '@/assets/icons/play.svg'

export default ({
  className,
  category,
  title,
  description,
  tags,
  author,
  imgSrc,
}) => {
  return (
    <article className={clsx('hero-card', className)}>
      <div className="hero-card__body">
        <div className="hero-card__category">
          <Image src={category.imgSrc} />
          <span>{category.label}</span>
        </div>
        <h2 className="hero-card__title h1">{title}</h2>
        <div className="hero-card__description">
          <p>{description}</p>
        </div>
        <div className="hero-card__tags">
          <ul className="hero-card__tags-list">
            {tags.map(({ icon, label }) => (
              <li className="hero-card__tags-item" key={label}>
                <Icon name={icon} hasFill />
                <span className="hero-card__tags-label">{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-card__footer">
          <AuthorCard className="hero-card__author" {...author} />
          <Button className="hero-card__button">
            <span>View Recipes</span>
            <Icon name={buttonPlayIcon} hasFill />
          </Button>
        </div>
      </div>
      <Image className="hero-card__image" src={imgSrc} />
    </article>
  )
}
