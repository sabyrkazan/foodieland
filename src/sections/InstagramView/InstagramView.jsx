import './InstagramView.scss'
import { Section } from '@/layouts/Section'
import { Grid } from '@/components/Grid'
import { Image } from 'minista'
import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

export default () => {
  return (
    <Section
      className='instagram-view'
      title="Check out @foodieland on Instagram"
      titleId="instagram-view"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
      descriptionClassName="instagram-view__description"
      headerMode="vertical"
    >
      <div className="instagram-view__body">
        <Grid columns={4}>
          {Array.from({ length: 4 }, (_, index) => (
            <Image
              src={`@assets/images/instagram-view/${index + 1}.jpg`}
              key={index}
            />
          ))}
        </Grid>
        <Button className="instagram-view__button" href="/">
          <span>Visit Our Instagram</span>
          <Icon name="instagram" hasFill />
        </Button>
      </div>
    </Section>
  )
}
