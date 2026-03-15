import './HeroCard.scss'
import clsx from 'clsx'
import { Icon } from '@/components/Icon'
import { Image } from 'minista'
import { AuthorCard } from '@/components/AuthorCard'
import { Button } from '@/components/Button'
import { Tags } from '@/components/Tags'

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
        <Tags className="hero-card__tags" tags={tags} />
        <div className="hero-card__footer">
          <AuthorCard className="hero-card__author" {...author} />
          <Button className="hero-card__button">
            <span>View Recipes</span>
            <Icon name='play' hasFill />
          </Button>
        </div>
      </div>
      <Image className="hero-card__image" src={imgSrc} />
    </article>
  )
}
