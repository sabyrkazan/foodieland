import './DailyRecipeCard.scss'
import { Image } from 'minista'
import { Tags } from '@/components/Tags'

export default ({ imgSrc, favoriteImgSrc, title, tags }) => {
  return (
    <article className="daily-recipe-card">
      <div className="daily-recipe-card__image-wrapper">
        <div className="daily-recipe-card__favorite">
          <Image src={favoriteImgSrc} />
        </div>
        <Image className="daily-recipe-card__image" src={imgSrc} />
      </div>
      <h3 className="daily-recipe-card__title h4">{title}</h3>
      <Tags className="daily-recipe-card__tags" items={tags} />
    </article>
  )
}
