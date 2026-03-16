import './RecipeCard.scss'
import { Image } from 'minista'
import { Tags } from '@/components/Tags'

export default ({ imgSrc, favoriteImgSrc, title, tags }) => {
  return (
    <article className="recipe-card">
      <div className="recipe-card__image-wrapper">
        <div className="recipe-card__favorite">
          <Image src={favoriteImgSrc} />
        </div>
        <Image className="recipe-card__image" src={imgSrc} />
      </div>
      <h3 className="recipe-card__title h4">{title}</h3>
      <Tags className="recipe-card__tags" items={tags} />
    </article>
  )
}
