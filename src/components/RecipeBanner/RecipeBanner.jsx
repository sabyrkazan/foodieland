import './RecipeBanner.scss'
import { Image } from 'minista'
import dishImage from '@/assets/images/recipe-banner/dish.png'

export default () => {
  return (
    <article className="recipe-banner">
      <h3 className="recipe-banner__title">Don’t forget to eat healthy food</h3>
      <Image className='recipe-banner__image' src={dishImage}/>
      <a className="recipe-banner__link" href="/">
        www.foodieland.com
      </a>
    </article>
  )
}
