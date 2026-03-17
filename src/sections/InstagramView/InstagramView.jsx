import './InstagramView.scss'
import { Section } from '@/layouts/Section'
import { Grid } from '@/components/Grid'

export default () => {
  return (
    <div className="instagram-view">
      <Section
        title="Check out @foodieland on Instagram"
        titleId="instagram-view"
        description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
        descriptionClassName="instagram-view__description"
        headerMode="vertical"
      >
        <Grid className="recipes__grid" columns={4}></Grid>
      </Section>
    </div>
  )
}
