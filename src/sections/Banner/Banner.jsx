import './Banner.scss'
import { Button } from '@/components/Button'
import { Image } from 'minista'
import bannerBackgroundImage from '@/assets/images/banner/banner-bg.png'

export default () => {
  return (
    <div className="banner">
      <div className="banner__inner container">
        <div className="banner__body">
          <h2 className="banner__title">
            Everyone can be a chef in their own kitchen
          </h2>
          <div className="banner__description">
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>
          <Button className="banner__button">Learn More</Button>
        </div>
        <Image src={bannerBackgroundImage} />
      </div>
    </div>
  )
}
