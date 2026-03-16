import './RecipeCard.scss'
import { Icon } from '@/components/Icon'
import { Image } from 'minista'

export default ({ imgSrc, favoriteImgSrc, title, tags }) => {
  return (
    <article className="recipe-card">
      <div className="recipe-card__image-wrapper">
        <div className="recipe-card__favorite">
          <Image src={favoriteImgSrc} />
        </div>
        <Image className="recipe-card__image" src={imgSrc} />
      </div>
      <h3 className="recipe-card__title">{title}</h3>
      <ul className="recipe-card__tags">
        {tags.map(({ icon, label }) => (
          <li className="recipe-card__tag" key={label}>
            <Icon name={icon} hasFill />
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}
