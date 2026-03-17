import './DailyRecipes.scss'
import { Section } from '@/layouts/Section'
import { Grid } from '@/components/Grid'
import { DailyRecipeCard } from '@/components/DailyRecipeCard'

export default () => {
  return (
    <Section
      title="Try this delicious recipe to make your day"
      titleClassName='daily-recipes__title'
      titleId="daily-recipes"
      description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
      descriptionClassName='daily-recipes__description'
      headerMode='justify-between'
    >
      <Grid columns={4}>
        <DailyRecipeCard />
      </Grid>
    </Section>
  )
}
